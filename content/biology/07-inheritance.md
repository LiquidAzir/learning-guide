---
title: Inheritance
subtitle: Why you resemble your parents but are not either of them. Mendel's rules, what they leave out, how sex shuffles the deck, and what a genetic test can and cannot tell you.
part: III · Inheritance and Evolution
---

## Recap

Chapter 6 explained what a gene is and how it is read. This chapter is about how genes travel between generations: the rules Mendel found, the machinery that produces them, and the reasons most traits do not follow them simply. It is the chapter that makes sense of family resemblance, genetic disease, and the results of a consumer DNA test.

## Mendel's rules

Gregor Mendel chose peas because they had traits that came in two clear versions: tall or short, round or wrinkled seeds, yellow or green, purple or white flowers. He bred pure lines, crossed them, and counted thousands of offspring, which nobody had done before. The results:

Cross a tall pure line with a short one and every offspring is tall. Cross those offspring with each other and one quarter of the next generation is short. The shortness did not vanish and reappear; it was carried unchanged and hidden. From this Mendel concluded that each plant carries two copies of a factor for each trait, one from each parent; that the copies can be different versions (now called **alleles**); that one version can be **dominant**, masking the other, **recessive**, one; and that the two copies separate when gametes (pollen and eggs) are made, so each gamete carries one at random.[^1] Modern terms: an organism with two identical alleles is **homozygous**, with two different ones **heterozygous**; its combination of alleles is its **genotype** and the resulting trait its **phenotype**.

Two laws follow. **Segregation**: the two alleles of a gene separate into different gametes, so each parent passes one at random. **Independent assortment**: alleles of different genes are dealt independently, so eye color does not travel with height. The second law is only true for genes on different chromosomes, or far apart on the same one; genes close together on a chromosome are inherited together (**linkage**), which Morgan's flies revealed and which is what made gene mapping possible.

:::howto Working out the odds
The tool is a square with the parents' possible gametes on the sides.

*Example: two carriers of cystic fibrosis.* Cystic fibrosis is recessive: you need two broken copies of the CFTR gene to have the disease. Both parents are heterozygous, one working allele (F) and one broken (f), so each is a healthy carrier. Each parent's gametes are half F and half f.

|  | **F** (from father) | **f** (from father) |
|---|---|---|
| **F** (from mother) | FF, unaffected | Ff, carrier |
| **f** (from mother) | Ff, carrier | ff, affected |

The four boxes are equally likely, so each child has a 1 in 4 chance of being affected, 1 in 2 of being a healthy carrier, and 1 in 4 of carrying neither broken copy. Two thirds of the unaffected children are carriers.

Three things people get wrong. **Each pregnancy is independent**: three unaffected children do not make the fourth more likely to be affected; the odds are 1 in 4 every time. **Dominant does not mean common or strong**: it means it shows when only one copy is present. Huntington's disease is dominant and rare; brown eyes are dominant and common; the sickle-cell allele is neither, since one copy protects against malaria and two cause disease. And **recessive diseases run in families that look unaffected**, which is why they often appear without warning and why they are more common where cousins marry.
:::

## The machinery: meiosis

Mendel's laws are the visible result of a physical process. Body cells have two copies of every chromosome, one from each parent (46 in humans, as 23 pairs). Gametes must have one copy each, so that a sperm and an egg together make a full set. The halving is done by **meiosis**, a special double division that makes four cells from one, each with half the chromosomes.[^2]

Two features of meiosis produce the variation that inheritance depends on. **Independent assortment**: when the 23 pairs line up and are pulled apart, each pair separates independently, so a gamete gets a random mix of your mother's and father's chromosomes, one of 2^23, about 8.4 million, possible combinations. And **crossing over**: early in meiosis, paired chromosomes lie against each other and swap matching segments, so each chromosome passed on is a mosaic of both grandparents' versions, with one to two crossovers per chromosome per generation. Between them, no two gametes from the same person are alike, and, once the positions of the crossovers are counted, the number of genetically distinct children two people could have is effectively unlimited.

This is the leading account of what sex is for, in the evolutionary sense: not reproduction, which bacteria manage without it, but recombination, the reshuffling of variants into new combinations so that a population can respond to change and can purge harmful mutations. A rival view holds that meiotic recombination began as a way of repairing damaged DNA and that variation was a by-product. Why sex is worth its cost, which is large (you pass on only half your genes, and you must find a mate), is one of evolutionary biology's classic open problems, with answers involving parasites, harmful mutations, and changing environments, and no single winner.[^3]

## Sex chromosomes, and why some diseases skip the women

In humans, 22 of the 23 pairs are matched; the last pair is XX in females and XY in males. The Y is small, carrying fewer than 80 protein-coding genes that encode only about 27 distinct proteins, and its key gene, SRY, switches on the development of testes. The old textbook line that female is the "default" is wrong: ovarian development is its own active program that both builds an ovary and suppresses the testis pathway, and either program can fail. Because males have only one X, a broken recessive allele on the X has no backup, so **X-linked** conditions, red-green color blindness, hemophilia, Duchenne muscular dystrophy, appear far more often in males, are passed from carrier mothers to sons, and cannot be passed from father to son at all. The pattern in the royal houses of Europe, where hemophilia followed Queen Victoria's daughters into the families they married, was the first widely traced human pedigree.[^4]

Two other inheritance routes bypass the chromosomes' usual rules. **Mitochondrial DNA** comes only from the mother, since sperm contribute essentially no mitochondria, so mitochondrial diseases pass down the female line to all children of an affected woman. And **imprinted** genes are marked, epigenetically, according to which parent they came from, so that only one copy is active; when the active copy is missing, the result depends on which parent it came from, as in the two very different syndromes (Prader-Willi and Angelman) caused by losses in the same stretch of chromosome 15.[^5]

## Why most traits are not Mendelian

Mendel picked traits governed by single genes with two clear versions, and he was lucky that peas have them. Most traits are not like that.

**Many genes.** Height is influenced by thousands of genetic variants, each contributing a fraction of a centimeter, plus nutrition and health; the result is a smooth bell curve rather than tall-or-short. Traits like this are **polygenic**, and they include nearly everything anyone cares about: weight, blood pressure, disease risks, intelligence test scores, personality measures.

**Incomplete dominance and codominance.** Cross a red snapdragon with a white one and get pink; a person with one sickle allele has both normal and sickle hemoglobin. Neither allele masks the other.

**One gene, many effects.** The sickle-cell mutation changes red cell shape, causes pain crises, damages organs, and protects against malaria. This is **pleiotropy**, and it is the rule rather than the exception, which is why gene-editing a "disease gene" can have consequences nobody predicted.

**Environment.** A gene's effect often depends on conditions. Phenylketonuria, a recessive disease, causes severe brain damage on a normal diet and almost none on a low-phenylalanine diet, which is why newborns are screened for it. Height in a population rises with nutrition even though it is highly heritable.

:::key
Heritability is the most misunderstood number in biology. It is the fraction of the *variation* in a trait, *within a particular population and environment*, that is associated with genetic variation. It says nothing about how much of an individual's trait is caused by genes. Height is about 80 percent heritable, and a malnourished child of tall parents will be short. If everyone had identical genes, heritability would be zero and genes would still build the trait. If everyone had an identical environment, heritability would approach 100 percent and the environment would still matter. Any sentence of the form "trait X is 60 percent genetic" is a misstatement of a heritability estimate.[^6]
:::

## What genetic testing can tell you

Three kinds of test are now sold or offered, and they differ enormously in what they mean.

**Single-gene tests** for conditions where one gene does most of the work: cystic fibrosis, Huntington's, the BRCA1 and BRCA2 variants that raise breast and ovarian cancer risk sharply, sickle cell. These are informative, actionable, and worth genetic counseling; a BRCA1 variant raises lifetime breast cancer risk from about 13 percent to somewhere between 55 and 72 percent (the largest prospective study puts it at 72 percent by age 80), and women who carry one make real decisions on the basis of it.[^7]

**Polygenic scores** add up thousands of small-effect variants to give a risk estimate for a common disease or trait. They are real but weak: the best of them explain a modest fraction of variation, they shift risk by a few percentage points for most people, and they work substantially worse in populations other than the mostly European ones they were trained on, which is a serious equity problem and an active research area. Companies selling polygenic predictions of a child's future traits are overselling far past the evidence.[^8]

**Ancestry tests** compare your variants to reference panels and report percentages. They are estimates of similarity to present-day sampled populations, not membership in ancient ones, and the percentages change when the reference panels are updated, which is why a person's reported ancestry can shift between companies and between years. The relative-matching function is the most reliable part, and it has upended families by revealing misattributed parentage and by identifying criminals through distant relatives' data.[^9]

:::story Mendel's numbers
Mendel's ratios are suspiciously good. Ronald Fisher, the statistician who did much to found population genetics, analyzed the published data in 1936 and found that they fit the predicted ratios more closely than chance should allow: the probability of getting agreement that good is very small. The explanations offered since include unconscious bias in classifying ambiguous seeds, discarding of aberrant plants as contaminated, an assistant tidying the counts, Mendel reporting the runs that came out best, and errors in Fisher's own statistical model.[^10] Nobody thinks Mendel invented his results, because the laws are correct and have been confirmed a million times. But the founding data set of genetics is too clean, and the episode is the standard teaching example of a real, uncomfortable, and unresolved question about a hero of science.
:::

## Summary

- Mendel found that traits pass as discrete paired factors that segregate into gametes and assort independently; alleles can be dominant or recessive, and carriers of recessive disease alleles are unaffected.
- A cross between two carriers gives a 1 in 4 chance of an affected child in every pregnancy, independently each time.
- Meiosis halves the chromosome number and, through independent assortment and crossing over, makes every gamete unique; this recombination is what sex is for.
- Males' single X makes X-linked recessive conditions far more common in them; mitochondrial DNA passes only from mothers, and imprinted genes act differently depending on the parent of origin.
- Most traits are polygenic and environment-sensitive; heritability describes variation in a population, not the causes in an individual; single-gene tests are informative, polygenic scores weak, and ancestry percentages are estimates of similarity to sampled reference groups.

[^1]: Mendel (1866). Bateson, W. (1909). *Mendel's Principles of Heredity*. Cambridge University Press. Griffiths, A. J. F. et al. (2020). *Introduction to Genetic Analysis*, 12th ed. New York: Macmillan, chapters 2–3.
[^2]: Alberts et al. (2022), chapter 17. Zickler, D., Kleckner, N. (2015). "Recombination, Pairing, and Synapsis of Homologs during Meiosis." *Cold Spring Harbor Perspectives in Biology*, 7(6), a016626. [doi:10.1101/cshperspect.a016626](https://doi.org/10.1101/cshperspect.a016626). Halldorsson, B. V. et al. (2019). "Characterizing mutagenic effects of recombination through a sequence-level genetic map." *Science*, 363(6425). [doi:10.1126/science.aau1043](https://doi.org/10.1126/science.aau1043)
[^3]: Otto, S. P. (2009). "The Evolutionary Enigma of Sex." *The American Naturalist*, 174(S1), S1–S14. [doi:10.1086/599084](https://doi.org/10.1086/599084). Hamilton, W. D., Axelrod, R., Tanese, R. (1990). "Sexual reproduction as an adaptation to resist parasites." *PNAS*, 87(9), 3566–3573. [doi:10.1073/pnas.87.9.3566](https://doi.org/10.1073/pnas.87.9.3566)
[^4]: Sinclair, A. H. et al. (1990). "A gene from the human sex-determining region encodes a protein with homology to a conserved DNA-binding motif." *Nature*, 346, 240–244. [doi:10.1038/346240a0](https://doi.org/10.1038/346240a0). Rogaev, E. I. et al. (2009). "Genotype Analysis Identifies the Cause of the 'Royal Disease'." *Science*, 326(5954), 817. [doi:10.1126/science.1180660](https://doi.org/10.1126/science.1180660). Skaletsky, H. et al. (2003). "The male-specific region of the human Y chromosome is a mosaic of discrete sequence classes." *Nature*, 423, 825–837. [doi:10.1038/nature01722](https://doi.org/10.1038/nature01722)
[^5]: Giles, R. E. et al. (1980). "Maternal inheritance of human mitochondrial DNA." *PNAS*, 77(11), 6715–6719. [doi:10.1073/pnas.77.11.6715](https://doi.org/10.1073/pnas.77.11.6715). Ferguson-Smith, A. C. (2011). "Genomic imprinting: the emergence of an epigenetic paradigm." *Nature Reviews Genetics*, 12, 565–575. [doi:10.1038/nrg3032](https://doi.org/10.1038/nrg3032)
[^6]: Visscher, P. M., Hill, W. G., Wray, N. R. (2008). "Heritability in the genomics era: concepts and misconceptions." *Nature Reviews Genetics*, 9, 255–266. [doi:10.1038/nrg2322](https://doi.org/10.1038/nrg2322). Yengo, L. et al. (2022). "A saturated map of common genetic variants associated with human height." *Nature*, 610, 704–712. [doi:10.1038/s41586-022-05275-y](https://doi.org/10.1038/s41586-022-05275-y). NIH, "Phenylketonuria," MedlinePlus Genetics. [medlineplus.gov](https://medlineplus.gov/genetics/condition/phenylketonuria/)
[^7]: Kuchenbaecker, K. B. et al. (2017). "Risks of Breast, Ovarian, and Contralateral Breast Cancer for BRCA1 and BRCA2 Mutation Carriers." *JAMA*, 317(23), 2402–2416. [doi:10.1001/jama.2017.7112](https://doi.org/10.1001/jama.2017.7112). American Cancer Society, lifetime breast cancer risk. [cancer.org](https://www.cancer.org/cancer/types/breast-cancer/about/how-common-is-breast-cancer.html)
[^8]: Torkamani, A., Wineinger, N. E., Topol, E. J. (2018). "The personal and clinical utility of polygenic risk scores." *Nature Reviews Genetics*, 19, 581–590. [doi:10.1038/s41576-018-0018-x](https://doi.org/10.1038/s41576-018-0018-x). Martin, A. R. et al. (2019). "Clinical use of current polygenic risk scores may exacerbate health disparities." *Nature Genetics*, 51, 584–591. [doi:10.1038/s41588-019-0379-x](https://doi.org/10.1038/s41588-019-0379-x). Turley, P. et al. (2021). "Problems with Using Polygenic Scores to Select Embryos." *NEJM*, 385, 78–86. [doi:10.1056/NEJMsr2105065](https://doi.org/10.1056/NEJMsr2105065)
[^9]: Mathieson, I., Scally, A. (2020). "What is ancestry?" *PLoS Genetics*, 16(3), e1008624. [doi:10.1371/journal.pgen.1008624](https://doi.org/10.1371/journal.pgen.1008624). Erlich, Y. et al. (2018). "Identity inference of genomic data using long-range familial searches." *Science*, 362(6415), 690–694. [doi:10.1126/science.aau4832](https://doi.org/10.1126/science.aau4832)
[^10]: Fisher, R. A. (1936). "Has Mendel's work been rediscovered?" *Annals of Science*, 1(2), 115–137. [doi:10.1080/00033793600200111](https://doi.org/10.1080/00033793600200111). Franklin, A. et al. (2008). *Ending the Mendel-Fisher Controversy*. University of Pittsburgh Press. Radick, G. (2015). "Beyond the 'Mendel-Fisher controversy'." *Science*, 350(6257), 159–160. [doi:10.1126/science.aab3846](https://doi.org/10.1126/science.aab3846)
