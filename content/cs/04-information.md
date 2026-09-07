---
title: Information
subtitle: What a bit actually measures, why every file has a floor it cannot be compressed past, and why a message can be sent perfectly through a channel that corrupts it.
part: I · Foundations
---

## Recap

Chapter 3 treated bits as containers. This chapter asks the harder question: how much information is actually in a message, as opposed to how many bits it happens to be written with? The answer, worked out in one paper in 1948, underpins every compressed file, every error-correcting code, every modem, and a surprising amount of machine learning.

## Surprise is the measurable thing

In 1948 Claude Shannon, at Bell Labs, was trying to say precisely how much a telephone line could carry. His starting move was to throw away meaning. Information, for engineering purposes, is not about what a message says; it is about how much it narrows down the possibilities. A message that tells you something you already knew carries no information. A message you could not have predicted carries a lot.[^1]

That makes information measurable, because "how surprising" is just "how improbable." If an event has probability $p$, its surprise is $\log_2(1/p)$ bits. A coin flip you cannot predict has $p = 1/2$ and carries $\log_2 2 = 1$ bit. A message announcing which of 256 equally likely things happened carries 8 bits, which is exactly the byte of chapter 3. And an event certain to happen, $p = 1$, carries $\log_2 1 = 0$ bits: no news.

:::math Entropy
The average surprise of a source is its **entropy**:

$$H = -\sum_{i} p_i \log_2 p_i$$

$H$ is the entropy in bits per symbol. The sum runs over every symbol $i$ the source can emit. $p_i$ is that symbol's probability. $\log_2$ is the logarithm base two, which asks "two to what power gives this number." The minus sign is there because probabilities are less than one, so their logarithms are negative, and we want a positive answer.

A fair coin: two outcomes at $p = 0.5$, so $H = -(0.5 \log_2 0.5 + 0.5 \log_2 0.5) = 1$ bit per flip. A coin that lands heads 90 percent of the time: $H \approx 0.47$ bits. A two-headed coin: $H = 0$. The more predictable the source, the less each symbol tells you.
:::

English text would carry about 4.75 bits per character if all 27 symbols including the space were equally likely, and carries about 4.1 once the actual letter frequencies are counted, and Shannon's own experiments, in which people guessed the next letter of a text, put the true figure at roughly 0.6 to 1.3 bits per character once grammar, spelling, and sense are taken into account.[^2] That gap between 8 bits stored per character and about 1 bit of actual content is why text compresses so well.

## The floor, and the two ways to hit it

Shannon's **source coding theorem** says that a source of entropy $H$ cannot be encoded, on average, in fewer than $H$ bits per symbol without losing information, and that you can get arbitrarily close to $H$. Compression is the business of getting close.

**Lossless** compression reconstructs the original exactly. Two families do nearly all the work.

*Give common things short codes.* In 1952 David Huffman, a student who took the problem as a class assignment instead of sitting the final exam, found the optimal way to assign variable-length codes: build a tree by repeatedly joining the two least likely symbols, and read the codes off the branches.[^3] In English text "e" gets a short code and "z" a long one. Huffman coding is inside JPEG, MP3, and the ZIP file.

*Point back at what you have already seen.* In 1977 Jacob Ziv and Abraham Lempel published a method that replaces a repeated stretch of data with a reference saying "go back 214 bytes and copy 9 bytes."[^4] Every general-purpose compressor since is a descendant: DEFLATE, in ZIP and PNG, is Lempel–Ziv plus Huffman; Zstandard and Brotli, which serve most compressed web traffic today, are the same idea with better modelling and faster decoding.

**Lossy** compression throws away what a person will not notice, and buys far more. JPEG splits an image into 8×8 blocks, converts each into a sum of spatial patterns using a cosine transform, and then stores the fine-detail patterns coarsely, because human vision is much less sensitive to them. MP3 and its successors use **psychoacoustics**: a loud tone hides quieter ones nearby in frequency for a few milliseconds, so the hidden ones need not be sent. Modern video codecs add the biggest win of all, which is to send only the differences between frames. The result is that a two-hour film, about 1.3 terabytes raw at ordinary high definition, streams comfortably in a few gigabytes.

:::key
Compression is prediction. Anything you can predict, you do not need to send. That is why a compressor and a language model are two views of the same object: a model that assigns probabilities to what comes next can be turned directly into a compressor, and the better the model, the smaller the file. It is also why compressing an already-compressed file gains nothing, and why no program can compress every input, since there are more possible files of a given size than there are shorter files to map them to.
:::

## The other theorem: perfect through imperfect

The second half of Shannon's 1948 paper is the more startling one. Every real channel corrupts what it carries: a wire picks up noise, a radio link fades, a memory cell flips a bit from a passing cosmic ray. Before Shannon, the assumption was that you could reduce errors only by slowing down or shouting louder, and never eliminate them.

Shannon proved that each channel has a **capacity**, a rate in bits per second, and that below that rate you can transmit with an error rate as close to zero as you like, while above it you cannot.

:::math Channel capacity
For a channel with bandwidth $B$ and signal-to-noise ratio $S/N$:

$$C = B \log_2\!\left(1 + \frac{S}{N}\right)$$

$C$ is capacity in bits per second. $B$ is the bandwidth in hertz, the width of the band of frequencies available. $S$ is the average signal power and $N$ the average noise power, both in watts, so $S/N$ is a plain ratio. The logarithm means that doubling your transmit power buys only about one extra bit per hertz, while doubling the bandwidth doubles the capacity: bandwidth is worth far more than power. This one formula shapes the design of every radio system, including the one in your phone.
:::

The proof was not constructive. Shannon showed that good codes exist without saying how to build one, and finding codes that approach the limit took fifty years. Richard Hamming, frustrated that the Bell Labs relay machine would find an error on a weekend run and simply stop, produced the first practical error-*correcting* code in 1950: add three check bits to four data bits, and any single flipped bit can not only be detected but identified and repaired.[^5] Reed–Solomon codes (1960) can repair whole burst errors and are why a scratched CD still plays, why a QR code works with a logo pasted over it, and why Voyager's pictures of Neptune arrived intact from 4.4 billion kilometres. Turbo codes (1993) and rediscovered low-density parity-check codes (Gallager, 1962) finally came within a fraction of a decibel of the Shannon limit and are in Wi-Fi, 4G, and 5G; polar codes (2009) are in 5G control channels.[^6]

:::people Claude Shannon
Shannon (1916–2001) published the paper that created information theory at 32, having already, at 21, connected Boolean algebra to switching circuits (chapter 2). He then largely stopped. He built a mechanical mouse that solved a maze, a machine whose only function was to switch itself off, a chess-playing program, a rocket-powered pogo stick, and a juggling robot, and he rode a unicycle down the corridors at Bell Labs. He also worked out, with his wife Betty and Ed Thorp, the first wearable computer, built to beat roulette. He regarded the applications of his theory to fields outside engineering with visible impatience, and in 1956 published a one-page editorial asking people to stop calling everything information theory.[^9]
:::

## Sampling: how a wave becomes numbers

To store sound or any other continuous signal you must measure it at intervals. How often is enough? The **Nyquist–Shannon sampling theorem** answers exactly: to reconstruct a signal containing no frequency above $f$, you must sample at more than $2f$ times per second, and at that rate the reconstruction is perfect, not approximate.[^7] Human hearing tops out near 20 kHz, so compact discs sample at 44.1 kHz, comfortably above the required 40. Sample too slowly and high frequencies do not simply vanish; they masquerade as low ones, an artefact called **aliasing**, which is the same effect that makes wagon wheels appear to spin backwards on film.

## The limit of the idea

Shannon's entropy is about a *source*: it needs probabilities. A different question is how much information is in one particular object. Andrey Kolmogorov's answer, from 1965, is the length of the shortest program that outputs it. A string of a million zeros has tiny **Kolmogorov complexity**, because a short program prints it; a string of a million random coin flips has complexity about a million bits, because nothing shorter than the string itself describes it. The definition is elegant, matches intuition about randomness, and is uncomputable: no program can calculate it in general, for reasons that are exactly chapter 6's.[^8]

## What we still do not know

Whether practical codes can close the last fraction of a decibel to capacity on the hardest channel models. How to define information in quantum systems fully, where a qubit can carry no more than one classical bit out of it and yet entanglement enables things classical channels cannot do (chapter 21). And how far the compression-equals-prediction identity goes: the strongest text compressors are now neural models, and the ranking of compressors has become a ranking of models of language.

## Summary

- Information is surprise; a symbol of probability $p$ carries $\log_2(1/p)$ bits, and a source's average is its entropy $H$.
- No lossless compressor can beat $H$ bits per symbol on average, and no compressor can shrink every input; compression works by prediction.
- Huffman coding gives optimal per-symbol codes; Lempel–Ziv references earlier repeats; together they are ZIP, PNG, and the web's compressed traffic.
- Lossy formats discard what perception cannot register, which is worth roughly a hundredfold on video.
- Every channel has a capacity $C = B \log_2(1 + S/N)$; below it, arbitrarily reliable transmission is possible, and modern codes come within a fraction of a decibel of it.
- Sampling above twice the highest frequency reconstructs a signal exactly; sampling below it turns high frequencies into false low ones.

[^1]: Shannon, C. E. (1948). "A Mathematical Theory of Communication." *Bell System Technical Journal*, 27(3), 379–423 and 27(4), 623–656. [doi:10.1002/j.1538-7305.1948.tb01338.x](https://doi.org/10.1002/j.1538-7305.1948.tb01338.x). Free copy: [people.math.harvard.edu](https://people.math.harvard.edu/~ctm/home/text/others/shannon/entropy/entropy.pdf)
[^2]: Shannon, C. E. (1951). "Prediction and Entropy of Printed English." *Bell System Technical Journal*, 30(1), 50–64. [doi:10.1002/j.1538-7305.1951.tb01366.x](https://doi.org/10.1002/j.1538-7305.1951.tb01366.x)
[^3]: Huffman, D. A. (1952). "A Method for the Construction of Minimum-Redundancy Codes." *Proceedings of the IRE*, 40(9), 1098–1101. [doi:10.1109/JRPROC.1952.273898](https://doi.org/10.1109/JRPROC.1952.273898)
[^4]: Ziv, J., Lempel, A. (1977). "A Universal Algorithm for Sequential Data Compression." *IEEE Transactions on Information Theory*, 23(3), 337–343. [doi:10.1109/TIT.1977.1055714](https://doi.org/10.1109/TIT.1977.1055714). Deutsch, P. (1996). *RFC 1951: DEFLATE Compressed Data Format Specification*. [doi:10.17487/RFC1951](https://doi.org/10.17487/RFC1951)
[^5]: Hamming, R. W. (1950). "Error Detecting and Error Correcting Codes." *Bell System Technical Journal*, 29(2), 147–160. [doi:10.1002/j.1538-7305.1950.tb00463.x](https://doi.org/10.1002/j.1538-7305.1950.tb00463.x)
[^6]: Reed, I. S., Solomon, G. (1960). "Polynomial Codes Over Certain Finite Fields." *Journal of the SIAM*, 8(2), 300–304. [doi:10.1137/0108018](https://doi.org/10.1137/0108018). Berrou, C., Glavieux, A., Thitimajshima, P. (1993). "Near Shannon limit error-correcting coding and decoding: Turbo-codes." *IEEE ICC '93*, 1064–1070. [doi:10.1109/ICC.1993.397441](https://doi.org/10.1109/ICC.1993.397441). Gallager, R. G. (1962). "Low-density parity-check codes." *IRE Transactions on Information Theory*, 8(1), 21–28. [doi:10.1109/TIT.1962.1057683](https://doi.org/10.1109/TIT.1962.1057683). Arıkan, E. (2009). "Channel Polarization." *IEEE Transactions on Information Theory*, 55(7), 3051–3073. [doi:10.1109/TIT.2009.2021379](https://doi.org/10.1109/TIT.2009.2021379)
[^7]: Shannon, C. E. (1949). "Communication in the Presence of Noise." *Proceedings of the IRE*, 37(1), 10–21. [doi:10.1109/JRPROC.1949.232969](https://doi.org/10.1109/JRPROC.1949.232969). Nyquist, H. (1928). "Certain Topics in Telegraph Transmission Theory." *Transactions of the AIEE*, 47(2), 617–644. [doi:10.1109/T-AIEE.1928.5055024](https://doi.org/10.1109/T-AIEE.1928.5055024)
[^9]: Shannon, C. E. (1956). "The Bandwagon." *IRE Transactions on Information Theory*, 2(1), 3. [doi:10.1109/TIT.1956.1056774](https://doi.org/10.1109/TIT.1956.1056774). Soni, J., Goodman, R. (2017). *A Mind at Play: How Claude Shannon Invented the Information Age*. New York: Simon & Schuster.
[^8]: Kolmogorov, A. N. (1965). "Three approaches to the quantitative definition of information." *Problems of Information Transmission*, 1(1), 1–7. Li, M., Vitányi, P. (2019). *An Introduction to Kolmogorov Complexity and Its Applications*, 4th ed. Cham: Springer. [doi:10.1007/978-3-030-11298-1](https://doi.org/10.1007/978-3-030-11298-1)
