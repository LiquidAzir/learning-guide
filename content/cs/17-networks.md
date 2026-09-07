---
title: Networks and the Internet
subtitle: How a message is chopped into pieces, addressed, lost, resent, and reassembled; why the design that won was the one that promised least; and the parts that still run on trust.
part: IV · Systems in the World
---

## Recap

Chapter 1 opened with a tap on a link. This chapter is that paragraph in full. The internet is the largest machine ever built, it has no central control, and its core design is fifty years old and was not expected to last.

## Packets, not circuits

The telephone network worked by **circuit switching**: to make a call, a physical path was reserved end to end for its duration, whether or not anyone was speaking. It is simple, it guarantees capacity, and it wastes almost all of it, because conversation is bursty.

In the early 1960s Paul Baran in the United States and Donald Davies in Britain independently proposed the alternative. Chop the message into small **packets**, each carrying its destination address, and let each one find its own way through a mesh of switches, sharing every link with everyone else's packets. Baran's motivation was survivability: a mesh with no central exchange keeps working when parts are destroyed. Davies's was efficiency, and he supplied the word "packet."[^1]

Packet switching wastes nothing and guarantees nothing. Packets can be lost, duplicated, delayed, or delivered out of order. Everything else in this chapter follows from cleaning up after that decision, and the decision was correct: the network became cheap, general, and indifferent to what it carried.

## Layers

The design's second idea is to stack independent layers, each using the one below and knowing nothing about the one above.

{{fig:packet-stack|Encapsulation. Your data is wrapped by each layer in turn, like envelopes inside envelopes: the application's bytes get a transport header saying which program they belong to, then an internet header saying which machine, then a link header saying which next device on this physical hop. Each router opens only the outer envelopes it needs. The percentages show typical overhead for a full-size packet.}}

| Layer | Job | Examples | Unit |
|---|---|---|---|
| Application | what the bytes mean | HTTP, DNS, SSH, SMTP | message |
| Transport | which program, and reliability | TCP, UDP, QUIC | segment |
| Internet | which machine, globally | IP | packet |
| Link | the next hop on this wire | Ethernet, Wi-Fi, 5G | frame |

The payoff is substitution. Wi-Fi, fibre, and satellite links were invented long after IP and required no change to it; HTTP knows nothing about which of them is carrying it. This is why the internet survived the near-total replacement of its hardware and applications while keeping its middle intact — and why that middle is now the hardest part to change.

## IP: deliberately unreliable

The **Internet Protocol** does one thing: given a packet with a destination address, make a best effort to move it one hop closer. It does not promise delivery, order, or integrity of the contents. If a router's queue is full, it drops the packet and says nothing.

Routers forward by **longest prefix match** against a table of address ranges. The design is often called the "hourglass": many applications above, many link technologies below, and exactly one protocol in the middle that everything must speak.

**Addresses** were the design's one clear underestimate. IPv4 gives 32 bits, about 4.3 billion addresses, which seemed generous in 1981 and ran out in the 2010s. Two things happened. **Network address translation** lets a whole household or company share one public address, which works and quietly broke the assumption that any machine can talk to any other, making peer-to-peer applications an exercise in hole-punching. And **IPv6** provides 128 bits, which is $3.4 \times 10^{38}$ addresses, enough to assign trillions to every square millimetre of the planet. Standardized in 1998, it took a very long time: native IPv6 access to Google's services passed 50 percent of users for the first time in late March 2026, eighteen years after measurement began.[^2] Nothing illustrates the cost of changing an installed base better.

## TCP: putting it back together

**TCP** turns the unreliable packet service into an ordered, reliable byte stream. It numbers the bytes, acknowledges what arrives, retransmits what is not acknowledged in time, and reassembles in order. A connection opens with a three-way handshake, which costs one round trip before any data moves — a fixed tax that matters enormously on long links, where a round trip across an ocean is about 150 milliseconds (chapter 8).

Its subtler job is **congestion control**, and the story behind it is instructive. In October 1986 the link between Lawrence Berkeley Laboratory and Berkeley, 400 metres apart, collapsed from 32 kilobits per second to 40 bits per second: a thousandfold. Everyone was retransmitting into a network already saturated with retransmissions, so the harder the senders tried, the less got through. Van Jacobson's diagnosis and fix, published in 1988, is still the shape of what runs today: each sender maintains a window of how much unacknowledged data it will allow in flight, grows it slowly while things go well, and halves it the moment a loss appears.[^3]

:::math Additive increase, multiplicative decrease
Let $w$ be the congestion window in packets.

$$\text{each round trip without loss:}\quad w \leftarrow w + 1$$
$$\text{on detecting loss:}\quad w \leftarrow w / 2$$

Slow growth, fast retreat. The asymmetry is what makes it stable and, remarkably, fair: independent senders sharing a link converge towards equal shares without any coordination or any component that knows the link's capacity. It is one of the most successful pieces of decentralized control ever deployed, and it is four lines of arithmetic.

The assumption underneath is that loss means congestion. On wireless links, where loss often means interference, it misfires, which is why newer controllers such as BBR model the path's bandwidth and delay directly instead of waiting for loss.
:::

**UDP** is the other transport: packets in, packets out, no reliability, no ordering, no congestion control. It exists for applications that would rather handle their own losses, such as live audio and video, where a retransmitted packet arrives too late to be worth having.

## QUIC, and why the middle stopped moving

By the 2010s TCP had a structural problem. A single lost packet stalls *everything* behind it in the stream, even data for other requests that has already arrived — **head-of-line blocking** — which is bad for a web page fetching two hundred resources at once. Fixing it required changing TCP, and TCP could not be changed: the network had filled with **middleboxes** — firewalls, network address translators, traffic shapers — that inspect TCP headers and drop anything unfamiliar. The protocol had **ossified**.

The escape was to build a new transport *on top of UDP*, where middleboxes see only an opaque payload. **QUIC**, standardized in 2021 and carrying HTTP/3, provides independent streams so one loss stalls only its own stream, encrypts almost everything including most of its own control information so middleboxes cannot ossify it in turn, sets up a connection with encryption in a single round trip, and lives in application code so it can be updated at the speed of a browser release rather than an operating-system upgrade.[^4]

Its adoption is a good example of why measurement matters: depending on whether you count sites advertising support, requests observed at a large content network, or page loads sampled from browsers, HTTP/3's share in 2026 is variously reported between about 20 and 40 percent. All the numbers are correct; they measure different things.

## Names

You typed a name, not an address. The **Domain Name System** is a distributed database, delegated in a hierarchy: the root servers know who runs `.com`, that registry knows who runs `example.com`, and that name server knows the address. Answers are cached everywhere with a time-to-live, which is why the system serves trillions of queries a day from a modest infrastructure, and why a change takes hours to be seen everywhere.[^5]

DNS is also the internet's most reliable single point of failure. A very large share of major outages are DNS problems — a bad configuration push, an expired record, a caching layer that failed — and because everything depends on names, a DNS failure looks like a total failure of services that are themselves running perfectly.

## The part that still runs on trust

Between the tens of thousands of independent networks that make up the internet, routing is done by **BGP**, in which each network announces which address ranges it can reach and its neighbours believe it.

That belief is the whole security model, and it has been abused. In February 2008 Pakistan Telecom, ordered to block YouTube domestically, announced a more specific route for YouTube's addresses; the announcement leaked to its upstream provider and propagated globally, and YouTube disappeared from the internet for about two hours. In April 2018 an attacker hijacked routes to Amazon's DNS service and used the position to steal cryptocurrency. Neither required a software vulnerability; both were simply false statements that other networks accepted.

The fix, **RPKI** with route origin validation, cryptographically signs which network is entitled to announce which addresses. Adoption is now substantial and majority coverage of announced address space has been reached, but it is voluntary, incremental, and validates only the origin rather than the whole path.[^6]

## What we still argue about

Whether the transport layer belongs in the kernel at all, now that QUIC has shown what moving it into applications buys. Whether encrypting the whole transport, which is what made QUIC evolvable, costs operators diagnostic ability they legitimately need. Whether inter-domain routing can be secured path-wise without a central authority nobody wants. And how much of the internet's remaining fragility comes from concentration: a handful of content networks, cloud providers, and resolvers now sit in front of most traffic, so their failures are everyone's.

## Summary

- Packet switching shares every link and promises nothing; layering lets each layer be replaced without the others noticing.
- IP makes a best effort to move a packet one hop closer and may silently drop it; addresses ran out, giving us network address translation and, eventually, IPv6, which passed 50 percent of Google's users in March 2026.
- TCP adds ordering and reliability at the cost of a round-trip handshake, and prevents collapse by additive-increase, multiplicative-decrease congestion control introduced after the 1986 collapse.
- Head-of-line blocking and middlebox ossification drove QUIC, which rebuilds the transport over UDP, encrypts its own control data, and lives in applications so it can keep changing.
- DNS turns names into addresses through a cached hierarchy and is the most common single cause of large outages.
- Routing between networks runs on believed announcements; hijacks have taken down major services, and cryptographic origin validation is now widely but not universally deployed.

[^1]: Baran, P. (1964). *On Distributed Communications*. Santa Monica: RAND Corporation, RM-3420-PR. [rand.org](https://www.rand.org/pubs/research_memoranda/RM3420.html). Davies, D. W. (1966). *Proposal for a Digital Communication Network*. National Physical Laboratory. Cerf, V., Kahn, R. (1974). "A Protocol for Packet Network Intercommunication." *IEEE Transactions on Communications*, 22(5), 637–648. [doi:10.1109/TCOM.1974.1092259](https://doi.org/10.1109/TCOM.1974.1092259)
[^2]: Google, "IPv6 Adoption" statistics, native IPv6 share of users. [google.com/intl/en/ipv6/statistics.html](https://www.google.com/intl/en/ipv6/statistics.html). Huston, G. (2026). "Google hits 50% IPv6." *APNIC Blog*, 28 April. [blog.apnic.net](https://blog.apnic.net/2026/04/28/google-hits-50-ipv6/). Postel, J. (1981). *RFC 791: Internet Protocol*. [doi:10.17487/RFC0791](https://doi.org/10.17487/RFC0791)
[^3]: Jacobson, V. (1988). "Congestion Avoidance and Control." *ACM SIGCOMM Computer Communication Review*, 18(4), 314–329. [doi:10.1145/52325.52356](https://doi.org/10.1145/52325.52356). Cardwell, N. et al. (2016). "BBR: Congestion-Based Congestion Control." *ACM Queue*, 14(5). [doi:10.1145/3012426.3022184](https://doi.org/10.1145/3012426.3022184)
[^4]: Iyengar, J., Thomson, M. (eds.) (2021). *RFC 9000: QUIC: A UDP-Based Multiplexed and Secure Transport*. [doi:10.17487/RFC9000](https://doi.org/10.17487/RFC9000). Langley, A. et al. (2017). "The QUIC Transport Protocol: Design and Internet-Scale Deployment." *SIGCOMM '17*, 183–196. [doi:10.1145/3098822.3098842](https://doi.org/10.1145/3098822.3098842). Adoption figures differ by method; compare W3Techs (sites advertising support), Cloudflare Radar (requests seen), and HTTP Archive (page loads).
[^5]: Mockapetris, P. (1987). *RFC 1034: Domain Names — Concepts and Facilities* and *RFC 1035: Domain Names — Implementation and Specification*. [doi:10.17487/RFC1034](https://doi.org/10.17487/RFC1034)
[^6]: RIPE NCC (2008). "YouTube Hijacking: A RIPE NCC RIS case study." [ripe.net](https://www.ripe.net/publications/news/youtube-hijacking-a-ripe-ncc-ris-case-study/). Lepinski, M., Kent, S. (2012). *RFC 6480: An Infrastructure to Support Secure Internet Routing*. [doi:10.17487/RFC6480](https://doi.org/10.17487/RFC6480). Current validation coverage: NIST RPKI Monitor. [rpki-monitor.antd.nist.gov](https://rpki-monitor.antd.nist.gov/)
