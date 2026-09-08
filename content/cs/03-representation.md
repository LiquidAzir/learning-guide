---
title: Bits, and What They Stand For
subtitle: Why everything is numbers, how numbers are stored, why 0.1 plus 0.2 is not 0.3, and how a hundred and seventy thousand characters fit into eight-bit bytes.
part: I · Foundations
---

## How do bits become numbers, text, and pictures?

Chapter 2 ended with the stored-program idea: instructions and data live in the same memory, in the same form. This chapter is about what that form is. Nothing here is difficult, and getting it wrong has killed people.

## The only thing a computer stores

A **bit** is a thing that can be in one of two states. It has no other properties. In a processor it is a voltage that is high or low; in memory a capacitor that is charged or not; on a disk a patch of magnetic material pointing one way or the other; in a fiber a pulse of light present or absent. The physics changes every few years and the abstraction does not, which is the reason the abstraction is worth having.

A **byte** is eight bits, and therefore has $2^8 = 256$ possible states. Eight was not inevitable; early machines used six, seven, or nine, and the eight-bit byte won with the IBM System/360 in 1964 and has not been seriously challenged since.

Everything else is a convention about what a group of bits means. The same eight bits, 01000001, are the number 65, the letter "A", a dark grey, and a machine instruction, depending only on what the program looking at them has agreed to believe. There is no tag in the memory saying which. This is the deepest fact in the chapter: **bits carry no meaning of their own**, and every bug in this chapter is a case of two pieces of code disagreeing about the convention.

## Counting in twos

In our usual notation, the digits of a number are multiplied by powers of ten. In binary they are multiplied by powers of two.

:::math Reading a binary number
$$n = \sum_{i=0}^{k-1} b_i \cdot 2^i$$

$n$ is the value. $k$ is how many bits there are. $b_i$ is the bit in position $i$, counting from the right starting at zero, and each is 0 or 1. $2^i$ is two raised to that position. The Greek capital sigma, $\sum$, means "add up all of these," running $i$ from 0 to $k-1$.

So 1101 is $1 \cdot 8 + 1 \cdot 4 + 0 \cdot 2 + 1 \cdot 1 = 13$. With $k$ bits you can represent $2^k$ different values, from 0 to $2^k - 1$.
:::

Because long strings of ones and zeros are unreadable, people write them in **hexadecimal**, base sixteen, with the digits 0–9 then A–F standing for 10–15. One hex digit is exactly four bits, so a byte is exactly two hex digits, which is why colors on the web look like `#1B2030` and why memory addresses look the way they do.

| Bits | Values | A familiar limit |
|---|---|---|
| 8 | 256 | One byte; one channel of colour |
| 16 | 65,536 | The original Unicode; the number of ports on a machine |
| 32 | ~4.29 billion | IPv4 addresses; the old file-size ceiling |
| 64 | ~$1.8 \times 10^{19}$ | Modern memory addresses; enough for anything physical |

## Negative numbers, and the trap in them

The standard trick for negatives is **two's complement**: the leftmost bit carries a negative weight. In eight bits, instead of representing 0 to 255, you represent −128 to 127, because that top bit means −128 rather than +128. The reason this scheme won is that addition circuitry does not need to know: adding the bit patterns for −5 and +7 gives the pattern for +2 with no special case, so one adder serves both.

The trap is that the range is finite. With wrapping arithmetic, adding 1 to the largest signed 8-bit value, 127, produces −128. Other rules apply in some languages: overflow can raise an error, and signed integer overflow in C and C++ is undefined behavior. This is **integer overflow**, and it is not a rare edge case; it is the direct cause of some of the most expensive failures in engineering history. On 4 June 1996 the first Ariane 5 rocket destroyed itself 37 seconds after launch because a 64-bit floating-point value for horizontal velocity was converted into a 16-bit signed integer that could hold only up to 32,767. The Ariane 5 flew faster than the Ariane 4 the code was written for, the value did not fit, the exception was unhandled, the backup computer had already failed the same way half a second earlier, and the rocket and its four satellites, about $370 million, were lost.[^1]

A slower version of the same problem is waiting: many systems count time as seconds since 1 January 1970 in a signed 32-bit integer, which overflows on 19 January 2038. Most modern systems have moved to 64 bits; embedded devices in long-lived equipment are the worry.

## Fractions, and why 0.1 + 0.2 ≠ 0.3

Real numbers are stored in **floating point**, which is scientific notation in binary: a sign, a fraction, and an exponent that says where to put the point. The universal standard is IEEE 754, first issued in 1985, and a double-precision number takes 64 bits: 1 for the sign, 11 for the exponent, and 52 for the fraction.[^2]

:::math What a double-precision number means
$$x = (-1)^{s} \times 1.f \times 2^{\,e-1023}$$

$s$ is the sign bit, 0 for positive and 1 for negative, so $(-1)^s$ is $+1$ or $-1$. $f$ is the 52-bit fraction, and the leading "1." is not stored because for normal numbers it is always there. $e$ is the 11-bit exponent read as a plain positive number, and 1023 is subtracted from it so that the exponent can be negative; this offset is called the **bias**.

The result: about 15 to 17 significant decimal digits, and a range from roughly $10^{-308}$ to $10^{308}$.
:::

Now the famous surprise. In binary, one tenth is a repeating fraction, exactly as one third is in decimal: 0.0001100110011… forever. Cut it off at 52 bits and you have stored not 0.1 but something a hair away from it. Add the stored 0.1 to the stored 0.2 and you get 0.30000000000000004, and a test for exact equality with 0.3 fails. Nothing is broken; the numbers were never 0.1 and 0.2. The practical rules that follow are worth memorizing: never test floating-point values for exact equality, never use them for money (use integer counts of the smallest unit), and be careful adding a very small number to a very large one, because the small one can vanish entirely.

:::warning What this has cost
On 25 February 1991 an American Patriot missile battery in Dhahran failed to intercept an incoming Scud, which struck a barracks and killed 28 soldiers. The battery's clock counted tenths of a second and multiplied by a 24-bit approximation to 0.1. The tiny error grew with uptime; after about 100 hours continuously running, the accumulated drift was about a third of a second, which at the Scud's speed put the predicted position nearly 700 metres out, outside the range gate the radar searched. A corrected version of the software arrived the following day.[^3]
:::

## Text

The first widely used convention was **ASCII** (1963): 7 bits, 128 codes, enough for unaccented English, the digits, punctuation, and a set of control codes left over from teleprinters, which is why a new line is still made of characters called "carriage return" and "line feed." Everyone else in the world got a different incompatible extension of the eighth bit, so a document written in Warsaw arrived in Athens as garbage.

**Unicode**, begun in 1987 and first published in 1991, gave every character in every script one number, called a **code point**. Version 18.0, released on 1 September 2026, defines 172,808 characters, including historic scripts, mathematical symbols, and about 3,800 emoji.[^4] Code points are written like U+0041 for "A".

The encoding that won is **UTF-8**, designed by Ken Thompson and Rob Pike in 1992, reportedly on a diner placemat in New Jersey. It stores a code point in one to four bytes: the ASCII range takes one byte and is bit-for-bit identical to old ASCII, so every English document ever written was already valid UTF-8, and the high bits of each byte say how many bytes the character occupies, so a program can find character boundaries from anywhere in the middle of a file. That combination of backward compatibility and self-synchronization is why it took over; it is now used by about 99 percent of web pages.[^5]

One consequence surprises people. A "character" as a user sees it may be several code points: an emoji of a family can be five people joined by invisible connector characters, and an accented letter can be a letter plus a combining accent. So the length of a piece of text has at least three different correct answers, in bytes, in code points, and in what Unicode calls **grapheme clusters**, which is what a person would call letters. Bugs live in the gap.

## Everything else

**Images** are grids of pixels, each usually three bytes: one for red, one for green, one for blue, giving 16.7 million colours, plus sometimes a fourth for transparency. A 12-megapixel photo is therefore about 36 megabytes raw, and about 3 as a JPEG, which is chapter 4's subject.

**Sound** is a pressure wave sampled many times a second. Compact disc audio takes 44,100 samples per second at 16 bits each, in two channels: 1.4 million bits per second. The sampling rate is not arbitrary; chapter 4 explains why it must be at least twice the highest frequency you want to keep.

**Instructions** are numbers too. On a common processor the bits 0100 1000 1000 1001 mean "copy this register into that one." Chapter 8 opens that up.

:::key
A computer stores only bits, and meaning is entirely a matter of convention between the code that writes and the code that reads. Integers wrap around at a fixed width; floating-point numbers are approximations that cannot represent most decimal fractions exactly; text is a layered agreement in which a character is not the same thing as a byte. Almost every "impossible" bug in this area is two components disagreeing about which convention is in force.
:::

## What we still argue about

Whether decimal floating point, which represents 0.1 exactly and is in the IEEE standard, should be more widely used; it is slower, and finance mostly uses scaled integers instead. Whether the units are a mess: a "kilobyte" is 1,000 bytes to a disk manufacturer and 1,024 to most operating systems, which is why a "2 TB" drive shows as 1.82 TB. The standards body introduced **kibibyte** for 1,024 in 1999, and almost nobody says it. And whether allowing more than one byte sequence to render as the same visible text was worth the security holes it opened, since attackers use look-alike characters to forge domain names.

:::try Put the idea to work
An 8-bit signed two's-complement value holds 127. You add 1. Is −128 guaranteed in every programming language?

:::answer Show the reasoning
No. That is the result under wrapping arithmetic, but a language may trap overflow, define a different numeric representation, or leave signed overflow undefined. The bit pattern explains one representation; the language's rules determine what the program is allowed to do with it.
:::
:::

## Summary

- A bit is a two-state thing; a byte is eight of them; nothing in memory records what a group of bits is supposed to mean.
- With $k$ bits you get $2^k$ values; negatives use two's complement so one adder handles both signs, and overflow behavior depends on the language and type: it may wrap, raise an error, or be undefined.
- Integer overflow destroyed Ariane 501 in 1996 and will bite 32-bit timekeeping in 2038.
- Floating point stores a sign, a fraction, and a biased exponent; most decimal fractions are not representable, so never compare for exact equality and never store money in it.
- Accumulated floating-point drift in a Patriot battery's clock contributed to 28 deaths in 1991.
- Text is Unicode code points, almost always encoded as UTF-8, whose backward compatibility with ASCII won it the web; bytes, code points, and visible characters are three different counts.

[^1]: Lions, J. L. (1996). *ARIANE 5: Flight 501 Failure — Report by the Inquiry Board*. Paris: ESA/CNES. [esamultimedia.esa.int](https://esamultimedia.esa.int/docs/esa-x-1819eng.pdf). Le Lann, G. (1997). "An analysis of the Ariane 5 flight 501 failure — a system engineering perspective." *Proceedings of the IEEE International Conference on Engineering of Computer-Based Systems*, 339–346. [doi:10.1109/ECBS.1997.581900](https://doi.org/10.1109/ECBS.1997.581900)
[^2]: IEEE Std 754-2019, *IEEE Standard for Floating-Point Arithmetic*. [doi:10.1109/IEEESTD.2019.8766229](https://doi.org/10.1109/IEEESTD.2019.8766229). Goldberg, D. (1991). "What Every Computer Scientist Should Know About Floating-Point Arithmetic." *ACM Computing Surveys*, 23(1), 5–48. [doi:10.1145/103162.103163](https://doi.org/10.1145/103162.103163)
[^3]: US General Accounting Office (1992). *Patriot Missile Defense: Software Problem Led to System Failure at Dhahran, Saudi Arabia*. GAO/IMTEC-92-26. [gao.gov](https://www.gao.gov/products/imtec-92-26)
[^4]: The Unicode Consortium (2026). *The Unicode Standard, Version 18.0.0*. [unicode.org](https://www.unicode.org/versions/Unicode18.0.0/). Character and emoji counts from the version's own release notes and emoji charts.
[^5]: Pike, R., Thompson, K. (1993). "Hello World or Καλημέρα κόσμε or こんにちは 世界." *Proceedings of the Winter 1993 USENIX Conference*. [doc.cat-v.org](https://doc.cat-v.org/plan_9/4th_edition/papers/utf). Yergeau, F. (2003). *RFC 3629: UTF-8, a transformation format of ISO 10646*. [doi:10.17487/RFC3629](https://doi.org/10.17487/RFC3629). Usage share: W3Techs, "Usage statistics of character encodings for websites." [w3techs.com](https://w3techs.com/technologies/overview/character_encoding)
