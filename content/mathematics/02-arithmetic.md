---
title: Numbers and Arithmetic
subtitle: Fractions, decimals, percentages, negatives, powers, and roots. The foundation everything else stands on, rebuilt properly, with the calculations you will actually use.
part: I · Foundations
---

## Recap

Chapter 1 promised to close the early gaps. This is where. Nothing here is advanced, but almost every difficulty people have with later mathematics traces back to something on this page, usually fractions, negatives, or percentages. Read it even if you think you know it; the *why* behind the rules is what makes them stick.

## The kinds of numbers

Numbers were invented in stages, each time because the previous kind could not answer a question.

The **natural numbers** 1, 2, 3, … count things. Add **zero**, which took humanity until about the seventh century CE to treat as a number rather than a placeholder (chapter 3), and you have the **whole numbers**. Ask "what is 3 minus 5?" and you need the **negative numbers**; the **integers** are …, −2, −1, 0, 1, 2, …. Ask "what is 3 divided by 5?" and you need the **fractions**, or **rational numbers**: any number that can be written as one integer over another. Ask "what is the diagonal of a unit square?" and you find, as the Greeks did to their horror, that the answer, $\sqrt{2}$, cannot be written as any fraction at all: it is **irrational**, and its decimal never ends or repeats.[^1] Rationals and irrationals together are the **real numbers**, every point on the number line. (One more extension, the imaginary numbers, waits until chapter 4.)

:::key
Every extension of the number system was resisted, and every one was accepted because it made problems solvable that were unsolvable before. Negative numbers were called "absurd" by European mathematicians into the 1600s; they are now how every bank account works.[^2] When a mathematical idea seems unnatural, the right question is not "is this real?" but "what does it let me do?"
:::

## Place value and decimals

Our numerals are **positional**: the symbol 7 means seven, seventy, or seven hundred depending on where it sits, and each place is worth ten times the one to its right. This system, with zero as a placeholder, came from India by way of the Arab world and reached Europe around 1200 (chapter 3). It is why long multiplication works and why Roman numerals were abandoned.

A **decimal** extends place value to the right of the point: 0.1 is one tenth, 0.01 one hundredth. So 3.25 is three, plus two tenths, plus five hundredths. Every fraction is a decimal (divide the top by the bottom), and every decimal that ends or repeats is a fraction. The decimal 0.333… is exactly 1/3; the decimal 0.999… is exactly 1, which surprises people until they notice it is three times 0.333….

:::howto Rounding, and when to do it
1. Decide how many decimal places or **significant figures** (digits that carry information, counting from the first non-zero digit) you need. A measurement is only as good as its least precise input: if one ingredient is measured to the nearest gram, an answer to a hundredth of a gram is fiction.
2. Look at the first digit you are dropping. If it is 5 or more, round the last kept digit up; otherwise leave it.
3. Round *at the end* of a calculation, not at each step. Rounding early compounds the error.

*Example.* 2.4567 to two decimal places: the digit being dropped is 6, so round up: 2.46. To two significant figures: 2.5. And 0.004567 to two significant figures is 0.0046, because leading zeros do not count.
:::

## Fractions

A fraction is a division waiting to happen: 3/4 means 3 divided by 4, and it also means three of the pieces you get when something is cut into four. The top is the **numerator** (how many pieces), the bottom the **denominator** (how big the pieces are). That second reading is the key to everything: you cannot add pieces of different sizes until you cut them into the same size.

:::howto Adding and subtracting fractions
1. If the denominators are the same, add the numerators and keep the denominator: $\tfrac{2}{7} + \tfrac{3}{7} = \tfrac{5}{7}$.
2. If not, find a **common denominator**: a number both denominators divide into. The product of the two always works; the smallest one that works (the **least common multiple**) keeps numbers small.
3. Convert each fraction by multiplying top and bottom by the same number, which does not change its value, since you are multiplying by 1.
4. Add the numerators. Simplify if possible by dividing top and bottom by any common factor.

*Example.* $\tfrac{1}{4} + \tfrac{1}{6}$. Both 4 and 6 divide 12. Then $\tfrac{1}{4} = \tfrac{3}{12}$ and $\tfrac{1}{6} = \tfrac{2}{12}$, so the sum is $\tfrac{5}{12}$.
:::

:::howto Multiplying and dividing fractions
1. **Multiply**: multiply the tops, multiply the bottoms. $\tfrac{2}{3} \times \tfrac{4}{5} = \tfrac{8}{15}$. Cancel common factors first to keep numbers small: in $\tfrac{3}{4} \times \tfrac{8}{9}$, the 3 and 9 reduce to 1 and 3, the 4 and 8 to 1 and 2, giving $\tfrac{2}{3}$.
2. **Divide**: flip the second fraction and multiply. $\tfrac{2}{3} \div \tfrac{4}{5} = \tfrac{2}{3} \times \tfrac{5}{4} = \tfrac{10}{12} = \tfrac{5}{6}$. Why: dividing by 4/5 asks how many four-fifths fit into something, and there are 5/4 of them in every whole.
3. **Compare** two fractions by cross-multiplying: $\tfrac{a}{b}$ is bigger than $\tfrac{c}{d}$ exactly when $ad > bc$ (for positive numbers). Is 3/7 bigger than 4/9? Compare $3 \times 9 = 27$ with $4 \times 7 = 28$. It is not; 4/9 is larger.
:::

:::warning
"Of" means multiply. Half *of* a third is $\tfrac{1}{2} \times \tfrac{1}{3} = \tfrac{1}{6}$. And multiplying by a fraction less than 1 makes things smaller, dividing by one makes things bigger, which is the opposite of what whole numbers trained you to expect. Half of 10 is 5; 10 divided by a half is 20.
:::

## Negative numbers

A negative number is a debt, a temperature below freezing, a step to the left. The rules follow from wanting arithmetic to keep working.

Adding a negative is subtracting: $5 + (-3) = 2$. Subtracting a negative is adding: $5 - (-3) = 8$, because removing a debt is a gain. Multiplying a positive by a negative gives a negative: three debts of 4 is a debt of 12. And multiplying two negatives gives a positive: $(-3) \times (-4) = 12$. That last rule is the one people find arbitrary. It is not. If $(-3) \times 4 = -12$, and multiplying by $-4$ should be the opposite of multiplying by $4$, then $(-3) \times (-4)$ must be the opposite of $-12$. The rule is forced by consistency, and every alternative breaks something.[^3]

## The order of operations

An expression like $2 + 3 \times 4$ is ambiguous unless everyone agrees on the order. The agreement is: **parentheses** first, then **exponents**, then **multiplication and division** (left to right, as equals), then **addition and subtraction** (left to right, as equals). So $2 + 3 \times 4 = 14$, not 20. Remember it as PEMDAS or BODMAS; remember more importantly that multiplication and division are *tied*, as are addition and subtraction. Viral puzzles like "8 ÷ 2(2+2)" exploit the fact that the rule is a convention with a grey area around implied multiplication (read strictly left to right it is 16; treating $2(2+2)$ as one unit gives 1); a mathematician would simply add parentheses and refuse to play.[^4] One trap is not a convention but a fact: $(-3)^2 = 9$, while $-3^2 = -9$, because the exponent applies before the minus sign.

## Percentages

**Percent** means "per hundred": 15% is 15/100, or 0.15. Every percentage problem is a multiplication in disguise, and the skill is knowing which number is the whole.

:::howto Percentages, the three questions
1. **What is p% of a number?** Multiply by $p/100$. 15% of \$80 is $0.15 \times 80 = 12$. Mental shortcut: 10% is a shift of the decimal point (8), 5% is half of that (4), add them (12).
2. **What percent is A of B?** Divide and multiply by 100: $A/B \times 100$. If 30 of 120 students passed, that is $30/120 = 0.25 = 25\%$.
3. **A number changed from A to B; what was the percent change?** Divide the change by the *original*: $(B - A)/A \times 100$. A rent rising from \$1,200 to \$1,380 rose by $180/1200 = 15\%$.

*To increase a number by p%*, multiply by $(1 + p/100)$: a \$50 item with 8% tax costs $50 \times 1.08 = \$54$. *To decrease*, multiply by $(1 - p/100)$: 30% off \$50 is $50 \times 0.7 = \$35$. *To reverse a percent increase*, divide by the same factor, do not subtract the percent: if \$54 includes 8% tax, the pre-tax price is $54 / 1.08 = 50$, not $54 \times 0.92 = 49.68$.
:::

:::warning
Two traps account for most percentage errors. First, percentages do not add across changes: a 50% rise followed by a 50% fall leaves you at 75% of where you started ($1.5 \times 0.5 = 0.75$), not back at 100%. Second, **percentage points** are not percentages. If a tax rate rises from 20% to 25%, it rose by 5 percentage points but by 25 percent ($5/20$). News reports confuse these constantly, and the confusion is often deliberate.
:::

## Ratios and proportion

A **ratio** compares two quantities: a recipe with 2 cups of flour to 3 of water has a flour-to-water ratio of 2:3. Ratios scale: to keep the taste, multiply both parts by the same number. Two quantities are **proportional** if their ratio is constant, which is the case behind most everyday scaling problems.

:::howto Scaling with proportions
1. Write the known ratio as a fraction and set it equal to the unknown one.
2. Cross-multiply and solve.

*Example.* A recipe for 4 people needs 300 g of rice. For 6 people: $\tfrac{300}{4} = \tfrac{x}{6}$, so $x = 300 \times 6 / 4 = 450$ g. Equivalently, find the amount for one person (75 g) and multiply. Unit conversions are the same operation: 5 miles at 1.609 km per mile is $5 \times 1.609 \approx 8.05$ km. Chapter 14 has a conversion table.
:::

A **rate** is a ratio of two different kinds of thing: kilometers per hour, dollars per kilogram, calories per serving. A **unit rate** puts a 1 in the denominator, which is what makes two offers comparable: \$3.20 for 500 g is 64 cents per 100 g. One trap deserves its own warning. Rates do not average the way ordinary numbers do. Drive 60 km at 30 km/h and return at 60 km/h and your average speed is not 45: the trip out takes 2 hours and the return 1 hour, so 120 km in 3 hours is 40 km/h. To average rates, go back to the totals they came from. The same logic gives the **weighted average**: if 30 students average 70 and 10 students average 90, the class average is not 80 but $(30 \times 70 + 10 \times 90)/40 = 75$, each group counting in proportion to its size.

:::know
Fractions, decimals, and percents are three notations for one thing, and the common ones are worth knowing cold:
$\tfrac{1}{2} = 0.5 = 50\%$; $\tfrac{1}{3} \approx 0.333 = 33.3\%$; $\tfrac{1}{4} = 0.25 = 25\%$; $\tfrac{1}{5} = 0.2 = 20\%$; $\tfrac{1}{8} = 0.125 = 12.5\%$; $\tfrac{2}{3} \approx 0.667 = 66.7\%$; $\tfrac{3}{4} = 0.75 = 75\%$; $\tfrac{3}{8} = 0.375 = 37.5\%$. A **mixed number** like $2\tfrac{1}{2}$ is $2 + \tfrac{1}{2} = \tfrac{5}{2}$; convert to a single fraction before multiplying or dividing.
:::

## Powers and roots

A **power**, or **exponent**, is repeated multiplication: $2^3 = 2 \times 2 \times 2 = 8$. The 2 is the **base**, the 3 the exponent. Powers of ten are the backbone of **scientific notation**: 3,000,000 is $3 \times 10^6$, and 0.00002 is $2 \times 10^{-5}$, where a negative exponent means "divide by that many tens." Scientists use this because it makes the *size* of a number visible at a glance and because multiplying powers of ten is just adding the exponents, which is the single most useful rule in this chapter and gets its own box in chapter 4.

A **root** undoes a power. The **square root** of 9 is 3, because $3^2 = 9$; written $\sqrt{9} = 3$. The cube root of 8 is 2. Roots are also fractional powers: $\sqrt{x} = x^{1/2}$, which is why the exponent rules (chapter 4) cover them too.

:::howto Estimating a square root in your head
1. Find the nearest perfect squares on either side. For $\sqrt{50}$: $7^2 = 49$ and $8^2 = 64$.
2. The answer is a bit above the lower root. The excess (50 − 49 = 1) divided by twice the lower root ($2 \times 7 = 14$) gives the correction: $1/14 \approx 0.07$.
3. So $\sqrt{50} \approx 7.07$. (Actual: 7.0711.) This is Newton's method (chapter 15) done once, and it is how calculators do it too.
:::

## Mental arithmetic that works

A few techniques cover most real situations. **Break numbers apart**: $47 \times 6 = (40 \times 6) + (7 \times 6) = 240 + 42 = 282$. **Round and correct**: $398 + 275 = 400 + 275 - 2 = 673$. **Multiply by 5 by halving and shifting**: $86 \times 5 = 860 / 2 = 430$. **Divide by 5 by doubling and shifting**: $135 / 5 = 270 / 10 = 27$. **Divide by 4 by halving twice**, and by 25 by multiplying by 4 and shifting two places. **Test divisibility**: a number is divisible by 3 (or 9) if its digits sum to a multiple of 3 (or 9), by 4 if its last two digits are, by 6 if it is even and divisible by 3. **Use the difference of squares** for numbers straddling a round one: $19 \times 21 = 20^2 - 1 = 399$ (the algebra is in chapter 4). And above all, **estimate first**: before any calculation, decide roughly what the answer should be, so a slipped decimal point cannot fool you. Chapter 15 makes estimation a discipline.

:::formulas
| Rule | Formula |
|---|---|
| Add fractions | $\dfrac{a}{b} + \dfrac{c}{d} = \dfrac{ad + bc}{bd}$ |
| Multiply fractions | $\dfrac{a}{b} \times \dfrac{c}{d} = \dfrac{ac}{bd}$ |
| Divide fractions | $\dfrac{a}{b} \div \dfrac{c}{d} = \dfrac{a}{b} \times \dfrac{d}{c}$ |
| p percent of x | $\dfrac{p}{100} \times x$ |
| Percent change | $\dfrac{\text{new} - \text{old}}{\text{old}} \times 100$ |
| Increase by p% | multiply by $1 + \dfrac{p}{100}$ |
| Scientific notation | $a \times 10^n$, with $1 \le a < 10$ |
| Roots as powers | $\sqrt[n]{x} = x^{1/n}$ |
:::

:::know
- Multiplying by a number between 0 and 1 makes things smaller; dividing by one makes things bigger.
- A percent change is always relative to the *starting* value. Up 50% then down 50% is down 25% overall.
- Percentage points measure a difference between two percentages; percent measures a relative change.
- Zero divided by any nonzero number is zero; anything divided by zero, including zero itself, is undefined, not infinity.
- Rates do not average like numbers: go back to the totals. Weighted averages count each group in proportion to its size.
- $0.999\ldots = 1$ exactly. Two names for one number.
- Round once, at the end, to the precision your least precise input deserves.
:::

## Summary

- Numbers grew in stages, each extension solving problems the old kind could not: zero, negatives, fractions, irrationals, reals.
- Fractions add only over a common denominator; multiply straight across; divide by flipping.
- Negative-times-negative is positive because consistency demands it.
- Percentages are multiplications; identify the whole, and never add percent changes.
- Powers are repeated multiplication, roots undo them, and scientific notation makes size visible.
- Estimate before you calculate.

[^1]: Boyer, C. B., Merzbach, U. C. (2011). *A History of Mathematics*, 3rd ed. Hoboken: Wiley. Chapter 4 on the Pythagoreans and incommensurability.
[^2]: Katz, V. J. (2009). *A History of Mathematics: An Introduction*, 3rd ed. Boston: Addison-Wesley. Chapter 12 on the reception of negative numbers in Renaissance Europe. Cardano called them "fictitious" in the *Ars Magna* (1545).
[^3]: OpenStax (2020). *Prealgebra 2e*. Chapter 3, "Integers." [openstax.org](https://openstax.org/books/prealgebra-2e/pages/3-introduction)
[^4]: Strogatz, S. (2019). "The Math Equation That Tried to Stump the Internet." *The New York Times*, 2 August 2019. [nytimes.com](https://www.nytimes.com/2019/08/02/science/math-equation-pedmas-bemdas-bedmas.html)
