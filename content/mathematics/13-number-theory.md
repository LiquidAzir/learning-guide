---
title: Number Theory and Cryptography
subtitle: Primes, remainders, and the "useless" mathematics that now protects every password, payment, and message you send.
part: IV · Structure
---

## Recap

Chapter 2 built the number system; this chapter studies the whole numbers themselves, which turn out to be far stranger than they look. **Number theory** was for two thousand years the purest of pure mathematics, prized precisely because it had no applications; Gauss called it the queen of mathematics, and Hardy in 1940 boasted that no one had found a warlike use for it.[^1] Within forty years of Hardy's remark it had become the foundation of internet security. This chapter explains the ideas and how they came to guard your bank account.

## Divisibility and primes

One whole number **divides** another if it goes in with no remainder: 6 divides 42. A **prime** is a number greater than 1 whose only divisors are 1 and itself: 2, 3, 5, 7, 11, 13, …. Every other number is **composite** and can be broken into primes: $42 = 2 \times 3 \times 7$. The **fundamental theorem of arithmetic** says this factorization is *unique*: there is exactly one way to write any number as a product of primes, up to order.[^2] Primes are the atoms of arithmetic, and that uniqueness is the reason they matter.

Euclid proved there are infinitely many (chapter 12). How they are distributed is a different matter. They thin out, slowly and irregularly: there are 25 primes below 100, 168 below 1,000, 78,498 below a million. Gauss, as a teenager, guessed from tables that the number of primes below $N$ is about $N/\ln N$, and this **prime number theorem** was proved in 1896.[^3] Yet no formula generates them, and their local behavior looks random: 1,000,003 is prime and 1,000,001 is not, and there is no way to know without checking. Whether there are infinitely many **twin primes**, pairs like 11 and 13 differing by 2, is unknown, though in 2013 Yitang Zhang, an unknown lecturer, proved that infinitely many pairs differ by at most 70 million, a bound since reduced to 246.[^4] The largest known prime, found in 2024, has 41 million digits (Latest Research).

:::howto Testing whether a number is prime by hand
1. If it is even, or ends in 5 or 0, it is not prime (unless it is 2 or 5).
2. Add its digits: if the sum is divisible by 3, so is the number.
3. Otherwise, try dividing by each prime up to its square root. You need go no further: if $n = ab$ with both factors larger than $\sqrt n$, then $ab > n$, a contradiction.

*Example.* Is 221 prime? Not even, does not end in 5, digits sum to 5. $\sqrt{221} \approx 14.9$, so test 7, 11, 13: $221 / 7 = 31.6$, $221/11 = 20.1$, $221/13 = 17$. So $221 = 13 \times 17$; not prime. For 223: 7, 11, 13 all fail, so 223 is prime.
:::

## The greatest common divisor

The **greatest common divisor** (gcd) of two numbers is the largest number dividing both: $\gcd(12, 18) = 6$. It is what you use to reduce a fraction to lowest terms ($12/18 = 2/3$). Euclid's algorithm for finding it, from Book VII of the *Elements*, is the oldest algorithm still in use and a model of efficiency.[^5]

:::howto Euclid's algorithm
1. Divide the larger number by the smaller; note the remainder.
2. Replace the larger with the smaller and the smaller with the remainder.
3. Repeat until the remainder is 0. The last nonzero remainder is the gcd.

*Example.* $\gcd(1071, 462)$: $1071 = 2 \times 462 + 147$; $462 = 3 \times 147 + 21$; $147 = 7 \times 21 + 0$. The gcd is 21. Three steps, where testing every divisor would take hundreds. The **least common multiple**, needed for adding fractions (chapter 2), is $ab/\gcd(a, b)$: $\text{lcm}(12, 18) = 216/6 = 36$.
:::

## Clock arithmetic

Here is the idea that turned number theory practical. On a clock, 9 + 5 is 2: you keep only the remainder after dividing by 12. **Modular arithmetic** does this with any number: two numbers are **congruent modulo $n$** if they leave the same remainder when divided by $n$. Write $17 \equiv 5 \pmod{12}$. Days of the week are arithmetic mod 7; angles are arithmetic mod 360; and the last digit of a number is the number mod 10.

Modular arithmetic respects addition and multiplication: you can reduce at any stage and get the same answer. To find the last digit of $7^{100}$, work mod 10: $7^1 = 7$, $7^2 = 49 \equiv 9$, $7^3 \equiv 63 \equiv 3$, $7^4 \equiv 21 \equiv 1$, and then the pattern repeats every 4. Since $100 = 4 \times 25$, $7^{100} \equiv 1$: it ends in 1. Gauss systematized all this in the *Disquisitiones Arithmeticae* of 1801, written at 21.[^6]

:::howto Finding the day of the week, and checking a number
1. **Day of the week in $n$ days**: number the days Sunday = 0 through Saturday = 6, add $n$ to today's number, and reduce mod 7. Today is Wednesday (3); in 100 days, $3 + 100 = 103 \equiv 5 \pmod 7$: Friday.
2. **Casting out nines**: a number is congruent mod 9 to the sum of its digits. To check $358 \times 47 = 16{,}826$: digit sums give $16 \to 7$, $11 \to 2$, product $14 \to 5$; the answer's digits sum to $23 \to 5$. Consistent. (This catches most errors, not all.)
3. **Check digits**: the last digit of a credit card number, ISBN, or barcode is computed from the others by a modular formula, so a single mistyped digit is detected. Credit cards use the **Luhn algorithm**: starting with the digit to the left of the last one, double every second digit moving left, add all the digits (treating a doubled 14 as 1 + 4), and the total must be divisible by 10.[^7]
:::

Two theorems about modular arithmetic power modern cryptography. **Fermat's little theorem** (1640): if $p$ is prime and $a$ is not a multiple of $p$, then $a^{p-1} \equiv 1 \pmod p$. Euler generalized it in 1763 to composite moduli using his **totient function** $\varphi(n)$, which counts the numbers below $n$ sharing no factor with it; for $n = pq$ a product of two primes, $\varphi(n) = (p-1)(q-1)$.[^8] The **Chinese remainder theorem**, from Sunzi's manual of the third to fifth century, says that knowing a number's remainders modulo several numbers with no common factors pins it down uniquely modulo their product.[^9]

## Cryptography

A **cipher** turns a message into gibberish that only the intended reader can reverse. For most of history this required both parties to share a secret key in advance, which is fine for generals and impossible for the internet, where you must send your card number to a shop you have never dealt with. The problem seemed insoluble until 1976, when Whitfield Diffie and Martin Hellman proposed **public-key cryptography**: a lock anyone can close but only the owner can open.[^10]

The first practical system, **RSA**, was published by Rivest, Shamir, and Adleman in 1977, and it is number theory from top to bottom.[^11] (The British intelligence agency GCHQ had found the same ideas in 1973 and kept them secret until 1997.)[^12]

:::math How RSA works
1. Choose two large primes $p$ and $q$ (today, each about 300 digits). Compute $n = pq$ and $\varphi(n) = (p-1)(q-1)$.
2. Choose a public exponent $e$ with no factor in common with $\varphi(n)$; 65537 is standard. Compute the private exponent $d$ such that $ed \equiv 1 \pmod{\varphi(n)}$, using Euclid's algorithm run backward.
3. **Publish** $n$ and $e$. Keep $d$, $p$, and $q$ secret.
4. To send a message $m$ (a number smaller than $n$), anyone computes $c = m^e \bmod n$ and sends $c$.
5. To read it, the owner computes $c^d \bmod n$, which equals $m$ by Euler's theorem: $m^{ed} = m^{1 + k\varphi(n)} \equiv m \pmod n$.

The security rests on one fact: multiplying $p$ and $q$ is instant, but recovering them from $n$, **factoring**, has no known fast method. To find $d$ from $e$ you need $\varphi(n)$, and to find $\varphi(n)$ you need $p$ and $q$. A 600-digit $n$ would take every computer on Earth longer than the age of the universe to factor by known methods; the record for a general number, set in 2020, is 250 digits, using thousands of processor-years.[^13]

*Example, with toy numbers.* $p = 61$, $q = 53$, $n = 3233$, $\varphi = 60 \times 52 = 3120$. Take $e = 17$; then $d = 2753$ (since $17 \times 2753 = 46801 = 15 \times 3120 + 1$). Message $m = 65$: ciphertext $c = 65^{17} \bmod 3233 = 2790$. Decryption: $2790^{2753} \bmod 3233 = 65$. Computing $65^{17}$ mod 3233 is done by repeated squaring and reducing, never handling a number bigger than $3233^2$.
:::

Every padlock icon in a browser, every secure message, every software update's signature, and every cryptocurrency transaction rests on this or on its cousin, **elliptic curve cryptography**, which uses the arithmetic of points on a curve $y^2 = x^3 + ax + b$ modulo a prime and gets the same security with far shorter keys.[^14] Hardy's useless subject now moves several trillion dollars a day.

:::frontier
Peter Shor showed in 1994 that a sufficiently large **quantum computer** could factor numbers and break elliptic curves efficiently.[^15] No such machine exists yet; the largest number factored by a genuine quantum algorithm remains tiny. But data encrypted today can be stored and decrypted later, so the transition has begun: in 2024 the US standards body published the first **post-quantum** encryption standards, based mostly on problems about lattices (grids of points in high dimensions) that neither classical nor quantum computers are known to solve efficiently, and browsers and messaging apps began deploying them in 2024 and 2025.[^16] Whether the lattice problems are truly hard is, like factoring, a conjecture: cryptography always rests on a problem nobody has solved yet.
:::

## The famous problems

Number theory is where the most celebrated problems live, because its questions are easy to state and brutally hard to answer.

**Fermat's Last Theorem.** In 1637 Pierre de Fermat wrote in a margin that $a^n + b^n = c^n$ has no whole-number solutions for $n > 2$, and that he had "a truly marvelous proof" the margin was too small to contain. For 358 years nobody could find one. Andrew Wiles, after seven years of secret work, announced a proof in 1993, found a gap, repaired it with Richard Taylor, and published in 1995; the proof runs to over a hundred pages and uses machinery Fermat could not have imagined.[^17] It works by proving a much larger statement, the modularity of elliptic curves, part of the Langlands program whose geometric version was proved in 2024 (Latest Research).

**The Riemann Hypothesis.** Bernhard Riemann observed in 1859 that the distribution of primes is controlled by the **zeros** of a certain function, the zeta function, and conjectured that they all lie on a single line in the complex plane.[^18] If true, the primes are as regular as they could possibly be; a vast amount of number theory is proved conditionally on it. Ten trillion zeros have been checked and all lie on the line. It is unproved, and it carries a million-dollar prize.

**Goldbach's conjecture** (1742): every even number above 2 is the sum of two primes. Checked to $4 \times 10^{18}$; unproved. **The Collatz problem**: start with any number; if even, halve it; if odd, triple it and add 1; repeat. Does it always reach 1? Checked to $10^{20}$; unproved, and Erdős said mathematics was not ready for it.[^19]

:::formulas
| Idea | Formula |
|---|---|
| Prime number theorem | primes below $N \approx \dfrac{N}{\ln N}$ |
| lcm from gcd | $\text{lcm}(a,b) = \dfrac{ab}{\gcd(a,b)}$ |
| Congruence | $a \equiv b \pmod n$ iff $n$ divides $a - b$ |
| Fermat's little theorem | $a^{p-1} \equiv 1 \pmod p$ for prime $p$, $p \nmid a$ |
| Euler's theorem | $a^{\varphi(n)} \equiv 1 \pmod n$ when $\gcd(a,n) = 1$; $\varphi(pq) = (p-1)(q-1)$ |
| RSA | public $(n, e)$; encrypt $c = m^e \bmod n$; decrypt $m = c^d \bmod n$ with $ed \equiv 1 \pmod{\varphi(n)}$ |
:::

:::know
- Every whole number factors uniquely into primes; primes thin out like $1/\ln N$ but have no formula.
- To test primality by hand, divide by primes up to the square root.
- Euclid's algorithm finds the gcd in a handful of steps and reduces fractions.
- Modular arithmetic is clock arithmetic; it gives weekday calculations, check digits, and the last digits of huge powers.
- RSA: multiplying two primes is easy, factoring their product is not. That gap is the internet's security.
- Quantum computers would close the gap; post-quantum standards exist and are being deployed.
:::

## Summary

- Primes are the atoms of arithmetic, infinitely many, uniquely composing every number, distributed with statistical regularity and local unpredictability.
- Euclid's algorithm computes the gcd efficiently; modular arithmetic reduces problems to remainders and yields Fermat's and Euler's theorems.
- Public-key cryptography (Diffie–Hellman 1976, RSA 1977) turned those theorems into the security of the internet, resting on the difficulty of factoring; elliptic curves do the same with shorter keys.
- Quantum computers threaten both, and post-quantum standards based on lattices were published in 2024.
- Fermat's Last Theorem fell in 1995; the Riemann Hypothesis, Goldbach, and Collatz remain open.

[^1]: Hardy, G. H. (1940). *A Mathematician's Apology*. Cambridge University Press. §28: "No one has yet discovered any warlike purpose to be served by the theory of numbers or relativity."
[^2]: Euclid, *Elements*, Book VII, Proposition 30, and Book IX, Proposition 14. The modern statement and proof: Gauss, C. F. (1801). *Disquisitiones Arithmeticae*, Article 16. Translated by A. A. Clarke (1966), Yale University Press.
[^3]: Hadamard, J. (1896). "Sur la distribution des zéros de la fonction ζ(s) et ses conséquences arithmétiques." *Bulletin de la Société Mathématique de France*, 24, 199–220. de la Vallée Poussin, C. (1896). "Recherches analytiques sur la théorie des nombres premiers." *Annales de la Société Scientifique de Bruxelles*, 20, 183–256. Gauss's early conjecture: letter to Encke, 24 December 1849.
[^4]: Zhang, Y. (2014). "Bounded gaps between primes." *Annals of Mathematics*, 179(3), 1121–1174. [doi:10.4007/annals.2014.179.3.7](https://doi.org/10.4007/annals.2014.179.3.7). Polymath, D. H. J. (2014). "Variants of the Selberg sieve, and bounded intervals containing many primes." *Research in the Mathematical Sciences*, 1, 12. [doi:10.1186/s40687-014-0012-7](https://doi.org/10.1186/s40687-014-0012-7)
[^5]: Euclid, *Elements*, Book VII, Propositions 1–2. Edited by D. E. Joyce, Clark University. [mathcs.clarku.edu](https://mathcs.clarku.edu/~djoyce/elements/bookVII/propVII2.html). Knuth, D. E. (1997). *The Art of Computer Programming, Volume 2*, 3rd ed., §4.5.2, calls it "the oldest nontrivial algorithm that has survived to the present day."
[^6]: Gauss, C. F. (1801). *Disquisitiones Arithmeticae*. Leipzig: Fleischer. Section I introduces congruences. Translated by A. A. Clarke (1966), Yale University Press.
[^7]: Luhn, H. P. (1960). *Computer for Verifying Numbers*. U.S. Patent 2,950,048. [patents.google.com](https://patents.google.com/patent/US2950048A/en). ISO/IEC 7812-1:2017, *Identification cards: Identification of issuers*, Annex B.
[^8]: Fermat's letter to Frénicle de Bessy, 18 October 1640. Euler, L. (1763). "Theoremata arithmetica nova methodo demonstrata." *Novi Commentarii Academiae Scientiarum Petropolitanae*, 8, 74–104 (E271). [scholarlycommons.pacific.edu](https://scholarlycommons.pacific.edu/euler-works/271/)
[^9]: Sunzi, *Sunzi Suanjing* (Master Sun's Mathematical Manual), 3rd–5th century CE, Problem 26. In Lam, L. Y., Ang, T. S. (2004). *Fleeting Footsteps: Tracing the Conception of Arithmetic and Algebra in Ancient China*, rev. ed. Singapore: World Scientific.
[^10]: Diffie, W., Hellman, M. (1976). "New Directions in Cryptography." *IEEE Transactions on Information Theory*, 22(6), 644–654. [doi:10.1109/TIT.1976.1055638](https://doi.org/10.1109/TIT.1976.1055638)
[^11]: Rivest, R. L., Shamir, A., Adleman, L. (1978). "A Method for Obtaining Digital Signatures and Public-Key Cryptosystems." *Communications of the ACM*, 21(2), 120–126. [doi:10.1145/359340.359342](https://doi.org/10.1145/359340.359342)
[^12]: Ellis, J. H. (1970). "The Possibility of Secure Non-Secret Digital Encryption." Cocks, C. C. (1973). "A Note on Non-Secret Encryption." Both CESG reports, declassified December 1997. Singh, S. (1999). *The Code Book*. London: Fourth Estate, chapter 6.
[^13]: Boudot, F., Gaudry, P., Guillevic, A., Heninger, N., Thomé, E., Zimmermann, P. (2020). "Comparing the Difficulty of Factorization and Discrete Logarithm: A 240-Digit Experiment." In *Advances in Cryptology – CRYPTO 2020*, LNCS 12171, 62–91. [doi:10.1007/978-3-030-56880-1_3](https://doi.org/10.1007/978-3-030-56880-1_3). The 250-digit RSA-250 was factored by the same team in February 2020.
[^14]: Koblitz, N. (1987). "Elliptic curve cryptosystems." *Mathematics of Computation*, 48(177), 203–209. [doi:10.1090/S0025-5718-1987-0866109-5](https://doi.org/10.1090/S0025-5718-1987-0866109-5). Miller, V. S. (1986). "Use of Elliptic Curves in Cryptography." In *Advances in Cryptology – CRYPTO '85*, LNCS 218, 417–426. [doi:10.1007/3-540-39799-X_31](https://doi.org/10.1007/3-540-39799-X_31)
[^15]: Shor, P. W. (1997). "Polynomial-Time Algorithms for Prime Factorization and Discrete Logarithms on a Quantum Computer." *SIAM Journal on Computing*, 26(5), 1484–1509. [doi:10.1137/S0097539795293172](https://doi.org/10.1137/S0097539795293172)
[^16]: National Institute of Standards and Technology (2024). FIPS 203 (ML-KEM), FIPS 204 (ML-DSA), FIPS 205 (SLH-DSA), 13 August 2024. [csrc.nist.gov](https://csrc.nist.gov/News/2024/postquantum-cryptography-fips-approved)
[^17]: Wiles, A. (1995). "Modular elliptic curves and Fermat's Last Theorem." *Annals of Mathematics*, 141(3), 443–551. [doi:10.2307/2118559](https://doi.org/10.2307/2118559). Taylor, R., Wiles, A. (1995). "Ring-theoretic properties of certain Hecke algebras." *Annals of Mathematics*, 141(3), 553–572. [doi:10.2307/2118560](https://doi.org/10.2307/2118560). Singh, S. (1997). *Fermat's Enigma*. New York: Walker.
[^18]: Riemann, B. (1859). "Ueber die Anzahl der Primzahlen unter einer gegebenen Grösse." *Monatsberichte der Berliner Akademie*, November 1859. English translation at [claymath.org](https://www.claymath.org/collections/riemanns-1859-manuscript/). Derbyshire, J. (2003). *Prime Obsession*. Washington: Joseph Henry Press.
[^19]: Lagarias, J. C., ed. (2010). *The Ultimate Challenge: The 3x+1 Problem*. Providence: American Mathematical Society. Oliveira e Silva, T., Herzog, S., Pardi, S. (2014). "Empirical verification of the even Goldbach conjecture and computation of prime gaps up to $4 \cdot 10^{18}$." *Mathematics of Computation*, 83(288), 2033–2060. [doi:10.1090/S0025-5718-2013-02787-1](https://doi.org/10.1090/S0025-5718-2013-02787-1)
