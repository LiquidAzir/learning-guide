---
title: Cryptography and Security
subtitle: How two strangers agree on a secret in public, why the hard part is never the mathematics, and what a quantum computer would and would not break.
part: IV · Systems in the World
---

## Recap

Chapter 17 built a network in which every packet passes through machines belonging to strangers. This chapter is about how anything private or trustworthy happens on top of that, and about why systems with unbreakable cryptography are broken every day.

## The first rule

Security is never a property of a thing. It is a property of a thing *against an adversary with stated powers*. "Is this secure?" is not a question until you say who the attacker is, what they can see, what they can change, and what they are trying to achieve.

The second rule is **Kerckhoffs's principle**, from 1883: a system must remain secure even if everything about it except the key is public. Secret algorithms have been reverse-engineered and broken repeatedly, and the ones still trusted are those published, attacked for years, and left standing. Anyone selling proprietary encryption is selling the thing the field abandoned over a century ago.

## Symmetric encryption: one shared key

A **block cipher** transforms a fixed-size block of bits using a key, reversibly. **AES**, standardized in 2001 after an open international competition, works on 128-bit blocks with keys of 128, 192, or 256 bits, and after twenty-five years of attack there is no practical break. Brute force against a 128-bit key means $2^{128}$ trials — about $3.4 \times 10^{38}$ — which no amount of hardware or time makes feasible; key length is the part of cryptography that is genuinely settled.

The cipher alone is not enough. A **mode** says how to encrypt more than one block, and the choice matters more than people expect: encrypting each block independently means identical plaintext blocks produce identical ciphertext blocks, so an encrypted image still shows its outlines. Modern practice is **authenticated encryption**, which produces ciphertext plus a tag proving it was not modified, because an attacker who can flip bits in transit can do far more damage than one who can merely read.

## Hashes

A **cryptographic hash** maps any input to a fixed-size value — 256 bits for SHA-256 — such that it is infeasible to find an input producing a given output, or two inputs with the same output. Hashes underpin signatures, integrity checks, version control, and blockchains.

They are also where cryptography visibly ages. MD5 was broken for collisions in 2004; SHA-1 was theoretically broken in 2005 and demonstrably broken in 2017, when researchers produced two different PDF files with the same SHA-1 hash at a cost of about 6,500 processor-years and 100 GPU-years, purchased at ordinary cloud prices.[^1] Both are still found in production systems.

**Passwords** need the opposite property from ordinary hashing: slowness. A fast hash lets an attacker with a stolen database try billions of guesses per second, so password hashing uses deliberately expensive functions — bcrypt, scrypt, or Argon2 — tuned to take a fraction of a second and to require substantial memory, which defeats specialized hardware. Storing passwords with a plain fast hash, or worse in plain text, remains a common finding in breach reports.

## Public key: the idea that changed everything

Until the 1970s, encryption required the two parties to have already shared a key, which is a chicken-and-egg problem at internet scale. In 1976 Whitfield Diffie and Martin Hellman published a method by which two parties who have never met can agree on a shared secret over a channel that everyone can hear.[^2]

:::math How two strangers agree on a secret
Both sides publicly agree on a large prime $p$ and a number $g$.

Alice picks a secret $a$ and sends $A = g^a \bmod p$. Bob picks a secret $b$ and sends $B = g^b \bmod p$. Here $\bmod p$ means "the remainder after dividing by $p$", which keeps the numbers bounded and, crucially, destroys the ordering information that would make the problem easy.

Alice computes $B^a \bmod p$; Bob computes $A^b \bmod p$. Both equal

$$g^{ab} \bmod p$$

so they now share a secret. An eavesdropper has $p$, $g$, $g^a$, and $g^b$, and to get $g^{ab}$ must recover $a$ or $b$ — the **discrete logarithm problem**, for which no efficient classical algorithm is known.

RSA, published two years later, uses the related asymmetry of factoring: multiplying two 1,024-bit primes is instant, and recovering them from the product is not. Its operations are $c = m^e \bmod n$ to encrypt and $m = c^d \bmod n$ to decrypt, where $n$ is the product of the two primes, $e$ and $d$ are chosen so that the two operations undo each other, $m$ is the message as a number, and $c$ the ciphertext.[^3]

Both rest on problems assumed hard, not proved hard. If P = NP (chapter 14), or if someone finds a fast factoring algorithm, they fall.
:::

Elliptic-curve cryptography does the same thing over a different mathematical structure and needs far shorter keys for equivalent strength — 256 bits against RSA's 3,072 — which is why it now dominates.

:::history Invented twice, in secret first
Public-key cryptography was discovered at GCHQ, the British signals agency, before it was discovered in the open. James Ellis proposed the concept in 1970, Clifford Cocks worked out what is essentially RSA in 1973, and Malcolm Williamson found the key-exchange method in 1974. All of it was classified, none was patented, and the work was declassified only in December 1997, by which time the academic rediscoverers had built an industry on it. Ellis died a month before the announcement.
:::

## Putting it together: what happens when you connect

Public-key operations are slow, so they are used only to establish a session: key agreement fixes a shared secret, and everything after is symmetric. That is TLS, the protocol behind the padlock. Version 1.3, from 2018, dropped every legacy option that had produced an attack, cut the handshake to one round trip, and made forward secrecy mandatory, so that recording today's traffic and stealing the server's key tomorrow does not decrypt it.[^4]

The remaining question is who you are talking to, and the answer is **certificates**: a signed statement from an authority that a public key belongs to a name. Your browser trusts a few hundred such authorities, and any of them can vouch for any name — a structural weakness that has been exploited. The mitigations are **Certificate Transparency**, public append-only logs of every certificate issued so that a bogus one is publicly visible, and automated free issuance, which took HTTPS from a minority of web traffic in 2015 to the overwhelming majority today.

## Where systems actually break

Almost never in the cipher. In order of real-world damage:

**Memory-unsafe code.** Roughly 70 percent of serious vulnerabilities at large vendors, for two decades (chapter 10).

**People.** Phishing and pretexting bypass every cryptographic guarantee by persuading someone to hand over access. Most large breaches begin here.

**The supply chain.** In March 2024 a backdoor was found in **xz-utils**, a compression library present on most Linux systems. An attacker had spent roughly two years contributing genuinely useful code under a persona, gained maintainer trust, and then hid a payload in binary test fixtures that, during the build, inserted a hook letting the holder of a private key run commands via SSH on any affected machine. It was caught before reaching most stable systems by an engineer investigating why SSH logins were taking half a second longer than expected.[^5] The lesson is uncomfortable: a critical dependency was maintained by one unpaid volunteer, and the attack succeeded on the social layer, not the technical one.

**Configuration.** Publicly readable storage buckets, default credentials, and permissive access rules cause more exposure than cryptographic flaws.

**Side channels.** Cryptography can be correct and still leak through time, power draw, electromagnetic emissions, or the caches of chapter 8. A comparison that returns early on the first wrong byte tells an attacker how many bytes were right, which is why cryptographic code compares in constant time.[^6]

**Randomness.** Keys are only as unguessable as the random numbers that made them. In 2008 a Debian maintainer removed a line that was upsetting a memory-checking tool and inadvertently reduced OpenSSL's key generation to about 32,768 possible outcomes; every key generated on affected systems for two years was trivially findable.

## The quantum question

Peter Shor showed in 1994 that a sufficiently large quantum computer could factor integers and compute discrete logarithms in polynomial time (chapter 21). That breaks RSA, Diffie–Hellman, and elliptic curves — every public-key system in wide use. Symmetric ciphers and hashes are far less affected: the best quantum attack roughly halves the effective key length, so AES-256 remains comfortable.

No such machine exists, and the estimates for what one would need keep moving. A 2025 analysis brought the requirement for factoring a 2,048-bit RSA key down to fewer than a million noisy qubits running for under a week, a twentyfold reduction on the same author's 2019 estimate; the largest machines today have a few hundred to a few thousand physical qubits.[^7]

Two things follow. First, the threat is dated by **harvest now, decrypt later**: an adversary can record encrypted traffic today and decrypt it whenever a machine arrives, so anything that must stay secret for a decade is already at risk. Second, migration has started in earnest. NIST published the first post-quantum standards in August 2024 — ML-KEM for key agreement, ML-DSA and SLH-DSA for signatures — and added HQC in March 2025 as a backup built on different mathematics, in case lattices turn out to have a weakness. Deployment has been faster than most transitions in this field: more than half of the human web traffic passing through one large content network now uses a hybrid post-quantum key agreement, which combines a classical and a post-quantum method so that breaking either alone is not enough.[^8]

:::people The 2025 Turing Award
In March 2026 the ACM gave the Turing Award to Charles Bennett and Gilles Brassard, for founding quantum information science. Their 1984 protocol, universally called BB84, does something no classical method can: it detects eavesdropping. Because measuring a quantum state disturbs it, a listener necessarily leaves traces in the statistics, so two parties can establish a key and *verify* that nobody was listening. Its security rests on physics rather than on assumed-hard problems — although the hardware implementing it is as attackable as any other, and practical quantum key distribution needs special links, which has kept it a niche technology while the mathematics of chapter 21 became the main event.[^9]
:::

## What we still argue about

Whether the post-quantum standards are themselves safe, since lattice cryptography is younger than RSA and less attacked; hence the deliberate hedging with HQC and hybrid modes. Whether the certificate-authority system can be replaced rather than patched. Whether governments' repeated demands for exceptional access to encrypted messages can be met without creating a vulnerability for everyone, which the technical community has consistently said they cannot. And how to fund the maintenance of critical open-source dependencies, since xz showed what the current arrangement is worth.

## Summary

- Security is defined only against a stated adversary; Kerckhoffs's principle says only the key may be secret.
- AES with a 128-bit key is beyond brute force; the mode of operation and authentication matter as much as the cipher.
- Hashes age visibly: MD5 and SHA-1 are broken for collisions, and passwords need deliberately slow, memory-hard hashing.
- Diffie–Hellman lets strangers agree on a secret in public; RSA and elliptic curves rest on problems assumed, not proved, to be hard, and public-key cryptography was discovered secretly at GCHQ years earlier.
- Real breaches come from memory-unsafe code, people, supply chains, misconfiguration, side channels, and bad randomness — almost never from the mathematics.
- A large quantum computer would break all deployed public-key cryptography and only dent symmetric ciphers; standards exist, migration is underway, and "harvest now, decrypt later" makes it urgent for long-lived secrets.

[^1]: Stevens, M. et al. (2017). "The First Collision for Full SHA-1." *CRYPTO 2017*, 570–596. [doi:10.1007/978-3-319-63688-7_19](https://doi.org/10.1007/978-3-319-63688-7_19). Wang, X., Yu, H. (2005). "How to Break MD5 and Other Hash Functions." *EUROCRYPT 2005*, 19–35. [doi:10.1007/11426639_2](https://doi.org/10.1007/11426639_2)
[^2]: Diffie, W., Hellman, M. (1976). "New Directions in Cryptography." *IEEE Transactions on Information Theory*, 22(6), 644–654. [doi:10.1109/TIT.1976.1055638](https://doi.org/10.1109/TIT.1976.1055638)
[^3]: Rivest, R. L., Shamir, A., Adleman, L. (1978). "A Method for Obtaining Digital Signatures and Public-Key Cryptosystems." *Communications of the ACM*, 21(2), 120–126. [doi:10.1145/359340.359342](https://doi.org/10.1145/359340.359342). On the GCHQ work: Ellis, J. H. (1987, released 1997). *The Story of Non-Secret Encryption*. [gchq.gov.uk](https://www.gchq.gov.uk/information/history-of-public-key-cryptography)
[^4]: Rescorla, E. (2018). *RFC 8446: The Transport Layer Security (TLS) Protocol Version 1.3*. [doi:10.17487/RFC8446](https://doi.org/10.17487/RFC8446). Laurie, B. (2014). "Certificate Transparency." *Communications of the ACM*, 57(10), 40–46. [doi:10.1145/2659897](https://doi.org/10.1145/2659897)
[^5]: CVE-2024-3094, reported by Andres Freund to the oss-security list on 29 March 2024. [openwall.com](https://www.openwall.com/lists/oss-security/2024/03/29/4). Analysis: Akamai Security Research (2024), "XZ Utils Backdoor — Everything You Need to Know." [akamai.com](https://www.akamai.com/blog/security-research/critical-linux-backdoor-xz-utils-discovered-what-to-know)
[^6]: Kocher, P. C. (1996). "Timing Attacks on Implementations of Diffie-Hellman, RSA, DSS, and Other Systems." *CRYPTO '96*, 104–113. [doi:10.1007/3-540-68697-5_9](https://doi.org/10.1007/3-540-68697-5_9). The Debian OpenSSL flaw is CVE-2008-0166.
[^7]: Shor, P. W. (1997). "Polynomial-Time Algorithms for Prime Factorization and Discrete Logarithms on a Quantum Computer." *SIAM Journal on Computing*, 26(5), 1484–1509. [doi:10.1137/S0097539795293172](https://doi.org/10.1137/S0097539795293172). Gidney, C. (2025). "How to factor 2048 bit RSA integers with less than a million noisy qubits." [arXiv:2505.15917](https://arxiv.org/abs/2505.15917)
[^8]: NIST (2024). *FIPS 203 (ML-KEM)*, *FIPS 204 (ML-DSA)*, *FIPS 205 (SLH-DSA)*. [doi:10.6028/NIST.FIPS.203](https://doi.org/10.6028/NIST.FIPS.203). NIST (2025). "NIST Selects HQC as Fifth Algorithm for Post-Quantum Encryption," 11 March. [nist.gov](https://www.nist.gov/news-events/news/2025/03/nist-selects-hqc-fifth-algorithm-post-quantum-encryption). Cloudflare (2025–2026), "State of the post-quantum Internet." [blog.cloudflare.com/pq-2025](https://blog.cloudflare.com/pq-2025/) and live measurement at [radar.cloudflare.com/post-quantum](https://radar.cloudflare.com/post-quantum)
[^9]: Bennett, C. H., Brassard, G. (1984). "Quantum cryptography: Public key distribution and coin tossing." *Proceedings of the IEEE International Conference on Computers, Systems and Signal Processing*, 175–179; reprinted in *Theoretical Computer Science*, 560 (2014), 7–11. [doi:10.1016/j.tcs.2014.05.025](https://doi.org/10.1016/j.tcs.2014.05.025). ACM (2026). "Charles H. Bennett and Gilles Brassard receive the 2025 ACM A.M. Turing Award," 18 March. [acm.org](https://www.acm.org/media-center/2026/march/turing-award-2025)
