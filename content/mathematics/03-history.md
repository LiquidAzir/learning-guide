---
title: From Counting to Calculus
subtitle: Four thousand years in one chapter. Who invented zero, why the Greeks demanded proof, how algebra got its name, and what happened in the seventeenth century that changed everything.
part: I · Foundations
---

## Recap

Chapter 2 laid out the number system as a finished thing. It was not finished; it was built, slowly, by people solving practical problems and then asking why their methods worked. This chapter tells that story up to the invention of calculus around 1680. Later developments appear in the chapters that use them, and chapter 16 picks up the thread from 1800.

## Before writing: counting

People counted before they wrote. Tally marks on bones go back at least 20,000 years, and the first written symbols, in Mesopotamia around 3000 BCE, were records of goods: so many sheep, so many jars of oil.[^1] Mathematics began as bookkeeping, and for most of history that is what most of it was.

The Babylonians, by about 1800 BCE, had something more. Their clay tablets show a positional number system in **base 60** (which survives in our minutes, seconds, and 360 degrees), tables of squares and reciprocals, and worked solutions to problems we would now call quadratic equations, stated in words as recipes: "take half of the length, square it, add the area…"[^2] One famous tablet, Plimpton 322, lists fifteen pairs of numbers that are the short side and diagonal of right triangles with whole-number sides, more than a thousand years before Pythagoras, though it was probably a teacher's problem list built from pairs of reciprocals rather than a study of triangles. What the Babylonians did not have was proof or general statement. Each problem was solved by a procedure; nobody wrote down *why* the procedure worked or claimed it worked for every case.

Egypt's Rhind Papyrus (about 1550 BCE) shows a similar practical mathematics: how to divide loaves among workers, find the area of a field, or compute the slope of a pyramid, all using fractions written as sums of unit fractions like $\tfrac{1}{2} + \tfrac{1}{4}$, since Egyptian notation had no other kind.[^3]

## Greece: the invention of proof

Something different happened in Greece between about 600 and 300 BCE. Thales of Miletus is credited, in later accounts, with the first geometric proofs, arguments that a statement *must* be true rather than demonstrations that it happened to be. The Pythagoreans made number the center of a philosophy and then discovered, according to legend to their dismay, that the diagonal of a square cannot be measured by any fraction of its side: $\sqrt{2}$ is irrational.[^4] That discovery mattered because it showed that intuition could be wrong and that only proof could be trusted.

Euclid's *Elements*, written in Alexandria around 300 BCE, organized everything known into a single structure: a handful of definitions and five **axioms** (statements accepted without proof, such as "a straight line can be drawn between any two points"), from which 465 propositions were derived one after another, each using only what came before.[^5] It was the most successful textbook in history, in use for over two thousand years, and it fixed the idea of what mathematics *is*: not a collection of facts but a structure of consequences. Every proof in this guide is a descendant of Euclid's method.

:::story Archimedes and the sand
Archimedes of Syracuse (about 287–212 BCE) was the greatest mathematician of antiquity and would be on any all-time list. He found the area of a circle and the volume of a sphere by a method that anticipates calculus, slicing shapes into ever-thinner pieces and squeezing the answer between upper and lower bounds; he computed $\pi$ to lie between $3\tfrac{10}{71}$ and $3\tfrac{1}{7}$; he worked out the laws of levers and buoyancy; and in *The Sand Reckoner* he invented a notation for numbers large enough to count the grains of sand that would fill the universe, which required inventing the idea of powers of powers.[^6] He asked that a sphere inscribed in a cylinder be carved on his tomb, because he had proved their volumes stand in the ratio 2:3. He was killed by a Roman soldier during the sack of Syracuse, reportedly while drawing in the sand.
:::

Greek mathematics was almost entirely geometric. Numbers were lengths, products were areas, and the Greeks had no symbolic algebra and no convenient way to write numbers. That is one reason the next great advances came from elsewhere.

## India: zero and the numerals we use

Our numerals, 0 through 9, are Indian. A positional decimal system was in use in India by the sixth century CE, and the decisive step, treating zero not as a blank but as a number you could calculate with, appears in Brahmagupta's work of 628 CE, which gives rules for adding, subtracting, and multiplying with zero and with negative numbers ("a debt minus zero is a debt; the product of two debts is a fortune").[^7] He also gave the general solution of the quadratic equation in words, and a formula for the area of a cyclic quadrilateral (a four-sided figure whose corners all lie on one circle) that Europe would not see for a thousand years.

Indian mathematicians also developed trigonometry as we know it. The **sine** function (chapter 5) is Indian; the word comes from a mistranslation, through Arabic, of the Sanskrit *jya*, meaning "bowstring."[^8] And in Kerala in the fourteenth century, Madhava found infinite series for $\pi$, sine, and cosine, results usually credited to Newton, Leibniz, and Gregory three centuries later.[^9]

## The Islamic world: algebra

From the eighth century the intellectual center moved to Baghdad, where Greek and Indian works were translated and extended. Muhammad ibn Musa al-Khwarizmi wrote, around 820, a book whose title contained the word *al-jabr*, "restoration," meaning the moving of a subtracted term to the other side of an equation. The book became **algebra**; a Latin version of his name became **algorithm**.[^10] Al-Khwarizmi classified equations by type and gave a solution procedure for each, with geometric justification, all in words: no symbols yet. Omar Khayyam, better known in the West as a poet, classified cubic equations and solved them geometrically around 1070. Al-Kashi, in Samarkand around 1420, computed $\pi$ to sixteen decimal places, a record that stood for nearly two centuries.[^11]

The Indian numerals traveled with this scholarship. Leonardo of Pisa, called Fibonacci, learned them from Arab merchants in North Africa and introduced them to Europe in his *Liber Abaci* of 1202, opening with the sentence that the nine Indian figures together with the sign 0 could write any number.[^12] Merchants adopted them for bookkeeping over the objections of some city governments, which banned the new numerals as too easy to forge. Fibonacci's book also contains, as a minor exercise about rabbits, the sequence 1, 1, 2, 3, 5, 8, 13, … that now bears his name.

## China

Chinese mathematics developed largely independently and arrived at many of the same results. The *Nine Chapters on the Mathematical Art*, compiled by the first century CE, solves systems of linear equations by a method identical to what is now called Gaussian elimination (chapter 11), uses negative numbers freely, and computes square and cube roots.[^13] Chinese mathematicians had the triangle of binomial coefficients (Jia Xian, eleventh century) six hundred years before Pascal, and the "Chinese remainder theorem" of chapter 13 is Chinese in fact as well as name. Because this work did not reach Europe until much later, it shaped the tradition this guide inherits less than its quality deserved.

## Renaissance Europe: symbols and the cubic

Two things happened in sixteenth-century Europe that turned mathematics into the subject we recognize.

First, the cubic equation was solved. Al-Khwarizmi had solved quadratics; nobody had found a general method for equations with an $x^3$. Around 1515 Scipione del Ferro found one and kept it secret; Niccolò Tartaglia rediscovered it in 1535 and confided it to Gerolamo Cardano under oath; Cardano, learning that del Ferro had it first, considered the oath void and published it in his *Ars Magna* of 1545, together with his student Ferrari's solution of the quartic, the equation with an $x^4$.[^14] The feud was bitter, and the mathematics was strange: the formula sometimes required taking the square root of a negative number partway through, even when the final answer was an ordinary real number. Rafael Bombelli worked out the rules for these "imaginary" quantities in 1572, and chapter 4 explains why they turned out to be indispensable.

Second, mathematics became symbolic. Until the late 1500s equations were written in sentences. François Viète introduced letters for unknowns and for known quantities in 1591, and within a generation René Descartes had fixed the conventions still in use: $x, y, z$ for unknowns, $a, b, c$ for constants, and the superscript for powers.[^15] Symbolic algebra let you see the *shape* of a problem, manipulate it mechanically, and state general results in a line. It is hard to overstate how much this accelerated everything after it.

## The seventeenth century

Then, in about eighty years, most of the rest of this guide was invented.

**Logarithms.** John Napier published tables in 1614 that turned multiplication into addition; Henry Briggs's base-10 tables of 1617 and 1624 gave them the clean form, $\log(ab) = \log a + \log b$, used ever since (chapter 4).[^16] For the next 350 years, until the electronic calculator, they were how every scientist, navigator, and engineer multiplied large numbers.

**Coordinates.** Descartes's *La Géométrie* of 1637 (with Fermat independently) joined algebra to geometry: a curve could now be an equation, and an equation a curve.[^15] Every graph you have ever read uses his idea (chapter 6).

**Probability.** In 1654 a gambler asked Blaise Pascal how to divide the stakes of an interrupted game fairly. Pascal's correspondence with Pierre de Fermat about the problem founded probability theory (chapter 9).[^17]

**Calculus.** Isaac Newton, in 1665–66, and Gottfried Wilhelm Leibniz, in 1675–76, independently discovered the method for computing rates of change and accumulated totals, and, crucially, that the two are inverses of each other.[^18] Newton used it to derive planetary motion from gravity; Leibniz gave it the notation, $\frac{dy}{dx}$ and $\int$, still in use. Their followers fought a nationalistic priority dispute for decades. Chapters 7 and 8 present what they found.

:::key
Each of these inventions answered a practical question: dividing loaves, keeping accounts, navigating ships, settling bets, predicting planets. The abstraction came after, when people asked why the methods worked and found that the answer applied far beyond the original question. That pattern, from problem to procedure to proof to generality, is how mathematics has always grown, and it is the order this guide follows in each chapter.
:::

## What came next

By 1700 mathematicians had the tools; the eighteenth century, above all Leonhard Euler, worked out what they could do, producing much of the notation and most of the formulas in the chapters ahead. The nineteenth century asked what the tools *rested on* and got uncomfortable answers: that geometry need not be Euclid's (chapter 5), that infinity comes in different sizes, and that calculus needed foundations it had gone 150 years without. The twentieth century proved that some questions cannot be answered by any method (chapter 12), built the computer out of that proof (chapter 15), and turned probability and statistics into the language of every science (chapters 9 and 10). Chapter 16 picks up that story and carries it to the present.

## Summary

- Mathematics began as bookkeeping. Babylon and Egypt solved practical problems by recipe, without proof or general statement.
- Greece invented proof: Euclid's *Elements* derived everything from a few axioms, fixing the model of mathematics for two millennia. Archimedes anticipated calculus.
- India gave us zero as a number, the decimal numerals, negative-number rules, and the sine.
- The Islamic world created algebra (al-Khwarizmi, about 820) and carried Indian numerals to Europe via Fibonacci (1202). China independently reached many of the same results.
- Renaissance Europe solved the cubic, met imaginary numbers, and made mathematics symbolic (Viète, Descartes).
- In the seventeenth century, logarithms, coordinates, probability, and calculus were all invented, each to answer a practical question.

[^1]: Ifrah, G. (2000). *The Universal History of Numbers: From Prehistory to the Invention of the Computer*. New York: Wiley. Chapters 1–2 and 8 on tallies and Sumerian accounting.
[^2]: Robson, E. (2008). *Mathematics in Ancient Iraq: A Social History*. Princeton University Press. On Plimpton 322: Robson, E. (2001). "Neither Sherlock Holmes nor Babylon: A Reassessment of Plimpton 322." *Historia Mathematica*, 28(3), 167–206. [doi:10.1006/hmat.2001.2317](https://doi.org/10.1006/hmat.2001.2317)
[^3]: Imhausen, A. (2016). *Mathematics in Ancient Egypt: A Contextual History*. Princeton University Press. The Rhind Mathematical Papyrus is British Museum EA 10057–10058. [britishmuseum.org](https://www.britishmuseum.org/collection/object/Y_EA10057)
[^4]: Boyer, C. B., Merzbach, U. C. (2011). *A History of Mathematics*, 3rd ed. Hoboken: Wiley. Chapters 4–5 on Thales, Pythagoras, and incommensurability.
[^5]: Euclid. *Elements*. Edited with commentary by D. E. Joyce, Clark University, from Heath's translation. [mathcs.clarku.edu/~djoyce/elements](https://mathcs.clarku.edu/~djoyce/elements/elements.html)
[^6]: Heath, T. L., ed. (1897). *The Works of Archimedes*. Cambridge University Press. [archive.org](https://archive.org/details/worksofarchimede00arch). Netz, R., Noel, W. (2007). *The Archimedes Codex*. New York: Da Capo.
[^7]: Plofker, K. (2009). *Mathematics in India*. Princeton University Press. Chapter 5 on Brahmagupta's *Brāhmasphuṭasiddhānta* (628 CE) and its rules for zero and negatives.
[^8]: Katz, V. J. (2009). *A History of Mathematics: An Introduction*, 3rd ed. Boston: Addison-Wesley. Chapter 8 on Indian trigonometry and the etymology of "sine."
[^9]: Joseph, G. G. (2011). *The Crest of the Peacock: Non-European Roots of Mathematics*, 3rd ed. Princeton University Press. Chapter 10 on the Kerala school and Madhava's series.
[^10]: Rashed, R. (2009). *Al-Khwārizmī: The Beginnings of Algebra*. London: Saqi. The *Kitāb al-jabr wa-l-muqābala*, c. 820 CE. English translation: Rosen, F. (1831). *The Algebra of Mohammed ben Musa*. London: Oriental Translation Fund. [archive.org](https://archive.org/details/algebraofmohamme00khuwuoft)
[^11]: Berggren, J. L. (2016). *Episodes in the Mathematics of Medieval Islam*, 2nd ed. New York: Springer. [doi:10.1007/978-1-4939-3780-6](https://doi.org/10.1007/978-1-4939-3780-6)
[^12]: Sigler, L. E., trans. (2002). *Fibonacci's Liber Abaci: A Translation into Modern English of Leonardo Pisano's Book of Calculation*. New York: Springer. [doi:10.1007/978-1-4613-0079-3](https://doi.org/10.1007/978-1-4613-0079-3)
[^13]: Shen, K., Crossley, J. N., Lun, A. W.-C., trans. (1999). *The Nine Chapters on the Mathematical Art: Companion and Commentary*. Oxford University Press.
[^14]: Cardano, G. (1545). *Ars Magna, or The Rules of Algebra*. Translated by T. R. Witmer (1968). Cambridge, MA: MIT Press. Reprinted by Dover, 1993. The dispute with Tartaglia is documented in Cardano's own preface and chapter 11.
[^15]: Descartes, R. (1637). *La Géométrie*. Translated by D. E. Smith and M. L. Latham (1925) as *The Geometry of René Descartes*. Chicago: Open Court; reprinted by Dover, 1954. [archive.org](https://archive.org/details/geometryofrenede0000davi). On Viète: Katz (2009), chapter 12.
[^16]: Napier, J. (1614). *Mirifici Logarithmorum Canonis Descriptio*. Edinburgh. English translation by E. Wright (1616). The companion *Constructio* (1619), translated by W. R. Macdonald (1889): [archive.org](https://archive.org/details/constructionofwo00napiuoft). Briggs, H. (1624). *Arithmetica Logarithmica*. London.
[^17]: Devlin, K. (2008). *The Unfinished Game: Pascal, Fermat, and the Seventeenth-Century Letter that Made the World Modern*. New York: Basic Books.
[^18]: Newton's method of fluxions was developed 1665–66 and circulated in manuscript; Leibniz published first: Leibniz, G. W. (1684). "Nova methodus pro maximis et minimis." *Acta Eruditorum*, 467–473. For the dispute: Hall, A. R. (1980). *Philosophers at War: The Quarrel between Newton and Leibniz*. Cambridge University Press.
