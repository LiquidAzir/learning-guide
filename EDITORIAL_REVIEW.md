# Learning Guide: editorial recommendations

Review date: September 7, 2026. Repository revision: `10b8509`.

Implementation note: the recommendations below describe the original review state. The editorial pass is recorded in [EDITORIAL_IMPLEMENTATION.md](EDITORIAL_IMPLEMENTATION.md); line numbers in this original report predate those edits.

The guide has a strong voice: conversational, intellectually ambitious, and often good at showing why an idea matters. Its main weakness is compression. It sometimes introduces too many ideas before readers can use the first one, and its punchiest sentences occasionally make claims broader than the surrounding explanation supports. Preserve the stories, examples, and real mathematics; give readers more room to understand them.

## Scope

I read the instructional prose in all 179 chapters across eight subjects, including introductions, subtitles, callouts, worked examples, summaries, people lists, and glossaries; the titles and summaries of all 399 research entries; subject descriptions; figure labels; and the app's visible copy. The collection is approximately 361,000 words by the build's count. I also checked the writing guidance in the README and used automated searches to compare repeated claims and identify dense passages.

This is an editorial review, not an independent fact-check of every scientific or historical claim. Bibliographic details and linked source documents were not exhaustively audited. The contradictions identified below can be seen within the repository itself; where choosing a replacement number requires checking a source, I recommend that check rather than assuming one version is correct.

I have assumed a primary audience of curious adults without specialist training. No instructional text has been changed.

## 1. Fix contradictions before polishing sentences

The short version of an explanation must retain the conditions that make the longer version true. Review each chapter's subtitle, callouts, summary, and corresponding glossary entry together.

| Location | What needs attention | Recommended change |
|---|---|---|
| [Chemistry: electrons, summary](<C:/Development/Learning Guide/content/chemistry/05-electrons.md:94>) | Says shell capacities of 2, 8, 18, 32 “are the row lengths of the periodic table.” The body at line 43 explicitly gives different row lengths and explains the distinction. | “Each orbital holds at most two electrons. Shell capacities and the order in which subshells fill together explain the periodic table's structure.” |
| [Physics: particles, callout](<C:/Development/Learning Guide/content/physics/11-particles.md:60>) | Describes vacuum fluctuations as something a particle “borrows” from during tunneling. [The quantum chapter](<C:/Development/Learning Guide/content/physics/09-quantum.md:93>) explicitly rejects that explanation. | Remove the borrowing clause and keep both chapters consistent with the wavefunction explanation. |
| [AI: opening](<C:/Development/Learning Guide/content/ai/01-start-here.md:11>) | “Everything else emerged” presents the assistant as the product of next-word prediction alone. Chapters 16 and 17 explain additional training that shapes assistant behavior. | Introduce that distinction immediately: “Predicting text built a foundation; further training helped turn the model into an assistant.” |
| [Mathematics: can optimization](<C:/Development/Learning Guide/content/mathematics/07-calculus-change.md:59>) | The final height is correct, but the displayed intermediate substitution evaluates to about 0.465, not 8.603. A learner following the steps will get stuck. | From `r³ = 250/π`, write `h = 500/(πr²) = 2r³/r² = 2r ≈ 8.60 cm`. |
| [Mathematics: geometry table](<C:/Development/Learning Guide/content/mathematics/05-geometry.md:108>) | The paragraph beginning “Every periodic phenomenon” is appended as an extra table cell. Its explanation is absent from the compiled `dist/data.json`; this was checked directly. | Put the paragraph after a blank line below the table, then verify the rendered chapter. |
| [Biology: lungs](<C:/Development/Learning Guide/content/biology/12-body.md:21>) | The explanation gives a lung surface area of about 130 m²; the summary at line 75 gives 70 m² without explaining a different measurement. | Check the intended estimate against the cited source, explain any relevant measurement conditions, and use it consistently in the body, summary, and glossary. |
| [AI: clustering](<C:/Development/Learning Guide/content/ai/07-unsupervised.md:13>) | Says nobody tells a clustering algorithm how many groups there are, immediately before instructing the reader to choose that number for k-means. | “Clustering groups similar examples without supplied class labels. Some methods, including k-means, require you to choose the number of groups.” |
| [CS: De Morgan's laws](<C:/Development/Learning Guide/content/cs/07-logic.md:35>) | The opposite of “over 18 and a resident” is given as “under 18 or not a resident.” This omits people who are exactly 18. | “18 or younger, or not a resident.” Use age 18 as a short check that the reader can try. |
| [History: Iron Age subtitle](<C:/Development/Learning Guide/content/history/05-ancient-iron-empires.md:3>) | Credits Babylon with building the library; the chapter places Ashurbanipal's library in Assyrian Nineveh at line 15. | Give Assyria the library and Babylon its rebuilding or astronomical records. |
| [History: European expansion summary](<C:/Development/Learning Guide/content/history/18-europe-expansion.md:65>) | Attributes the estimated 90% population loss to smallpox alone. The body at line 21 names several diseases alongside war, enslavement, and famine. | “Diseases, warfare, enslavement, and famine together caused catastrophic population losses over the following century.” Retain the estimate only with its scope and uncertainty. |
| [History: Mongols](<C:/Development/Learning Guide/content/history/30-east-asia-mongols.md:65>) | The summary says “Japan alone escaped,” while line 25 also describes failed invasions of Vietnam and Java. | Describe Japan's successful defense directly and remove “alone.” |

These examples justify a dedicated consistency pass. Shared subjects—protein folding, entropy, probability, cryptography, and historical discoveries—also need consistent explanations across guides. Another clear update mismatch is [East Asia's population section](<C:/Development/Learning Guide/content/history/37-east-asia-today.md:19>): its opening says two societies are shrinking, while the summary at line 61 says all three are.

## 2. Make the promises smaller and more useful

Many subtitles work hard to convince readers that a chapter contains everything. Specific learning outcomes would be more inviting and more credible.

| Current wording | Suggested direction |
|---|---|
| [Physics toolkit](<C:/Development/Learning Guide/content/physics/02-toolkit.md:3>): “Read this once and every later equation will make sense.” | “The mathematical tools used throughout this guide, with examples you can return to as needed.” |
| [AI transformer](<C:/Development/Learning Guide/content/ai/15-transformers.md:3>): “The 2017 paper that every modern AI system is built on.” | “The architecture behind many modern language models: how attention works and why it scales well.” |
| [AI alignment](<C:/Development/Learning Guide/content/ai/17-alignment.md:3>): “A pretrained model is fluent and useless.” | “Fluent text is only the beginning. How further training shapes a model into an assistant.” The body itself describes users getting value from base models. |
| [Mathematics introduction](<C:/Development/Learning Guide/content/mathematics/01-start-here.md:92>): “mathematics worked once sticks for years.” | “Work through the examples yourself, then return to them later to check what you remember.” |
| [Home page](<C:/Development/Learning Guide/src/app.js:312>): “Whole subjects, explained properly.” | “Understand the ideas behind the world around you.” Follow with a concrete description of the available guides. |
| [AI usage](<C:/Development/Learning Guide/content/ai/18-using-llms.md:3>): promises asking so the model does not make things up. | “How to ask useful questions, reduce errors, and check the answers.” This matches the limitations the chapter explains. |

Search for absolute language during editing, but assess it in context rather than deleting it mechanically. An automated count of chapter bodies, excluding source definitions and front matter, found 902 occurrences of “every,” 130 of “nobody,” and 144 of “the whole.” Some belong in precise mathematical statements; others create unnecessary promises or sweeping historical judgments.

Also soften explanations of the reader's own difficulties. [The mathematics introduction](<C:/Development/Learning Guide/content/mathematics/01-start-here.md:29>) attributes most difficulty to earlier gaps and timed arithmetic. Encouragement does not need that diagnosis. “If fractions or negative numbers feel shaky, chapter 2 offers a refresher” is useful without presuming why someone struggles.

## 3. Give each chapter one main question

The strongest passages start with something readers want to explain. The physics experiments, the history introduction's body in the ice, and chemistry's unknown compound all provide a reason to keep reading.

Many subsequent chapters instead begin with a recap of chapter numbers and a list of topics. Keep the recap short and subordinate to a question. For example, [chemical analysis](<C:/Development/Learning Guide/content/chemistry/15-analysis.md:54>) already contains an excellent organizing case that could move to the opening:

> A chemist extracts an unfamiliar substance from a sea sponge. What is it? One test helps establish its molecular formula. Others reveal groups of atoms and how they are connected. Each result narrows the possibilities. This chapter follows those clues.

Return to that same sample when introducing each instrument. Readers then learn a sequence of decisions instead of a catalog of techniques.

The [computer-science opener](<C:/Development/Learning Guide/content/cs/01-start-here.md:11>) has an equally good premise, but the explanation packs nearly the entire network and rendering process into one paragraph. It also moves from clicking a link into searching an enormous document index. Choose one action and follow it consistently. A shorter opening could be:

> You tap a link. Your phone finds the website's address and opens a secure connection. The page travels back in packets. Your browser reassembles it, works out where the text and images belong, and draws the screen. This guide opens up those steps and the ideas behind them.

Bring the timings, encryption details, and hardware back when their chapters explain them.

## 4. Reduce concept density without flattening the subject

A definition in parentheses is not always enough preparation to use an idea. The physics toolkit moves through units, calculus, logarithms, waves, complex numbers, fields, and symmetry. Mathematics' linear-algebra chapter moves from vectors into eigenvectors and applications very quickly. These are good reference overviews, but demanding first lessons.

Use a consistent sequence:

1. A concrete question or example.
2. A plain-language explanation of the mechanism.
3. The relevant equation, with symbols and units.
4. A worked example using that equation.
5. A short question the reader answers.
6. Optional derivation or extension.

Label optional mathematics with its prerequisite and purpose, such as “Optional derivation: uses derivatives.” Let readers follow the conceptual argument without implying that skipping an advanced box means failing the course.

Several paragraphs need structural editing rather than fewer adjectives. An automated scan found a 287-word paragraph on public debt in [economics](<C:/Development/Learning Guide/content/economics/12-cycles.md:63>) and a 314-word paragraph on AI research performance in [mathematics](<C:/Development/Learning Guide/content/mathematics/16-frontier.md:71>). Split passages like these at changes of job: result, explanation, limitation, implication. Length alone is not a defect, but asking one paragraph to do all four makes reading harder.

History has the same problem in another form. [Japan's unification](<C:/Development/Learning Guide/content/history/31-east-asia-ming.md:33>) puts imported guns, Christianity, three leaders, domestic reform, and the invasion of Korea into one paragraph. Give the three leaders separate short paragraphs, each with the question “What changed under this person?” Keep a small chronological reference alongside the explanation. That is easier to follow than a parade of names interrupted by dates.

In [the database chapter](<C:/Development/Learning Guide/content/cs/16-databases.md:25>), precede the SQL example with an English statement of what it asks, then show a tiny input and output table. The guide says it is not a programming course; readers still need enough support to understand why the code is there.

Use diagrams where a reader must hold a process or spatial relationship in mind: electron filling order, respiration, attention, network layers, and simultaneous historical events. Each figure should answer a specific question in its caption. Review the words inside existing figures as carefully as the chapter text: the [random-forest diagram](<C:/Development/Learning Guide/content/ai/figures/decision-tree.svg>) says the vote beats every individual tree, an unnecessary guarantee. “Combining varied trees can improve prediction” conveys the idea without promising a result for every case.

## 5. Turn more explanations into something readers can do

The mathematics procedures and worked examples are a strength. Extend them into retrieval and prediction rather than adding more summary text.

Across all 179 Markdown files, there are only 11 explicit `:::try` boxes. There are other exercises and worked procedures, so this is not a count of every learning activity; it does show that the dedicated question format is used sparingly.

Add one or two questions to each core chapter, with answers and reasoning available afterward:

- Chemistry: Which reactant runs out first, and what remains?
- AI: How can a classifier score 99% accuracy while missing every example of the rare class?
- Economics: Who is likely to bear more of a tax when one side has fewer alternatives?
- History: Which part of this account is directly supported by the source, and which part is inference?
- Computer science: What changes if a connection fails halfway through a transaction?

Ask for a prediction before the worked example reveals the answer. Keep questions low stakes and connected to the chapter's central idea.

Existing activities also need checking against the lesson. [The computation chapter](<C:/Development/Learning Guide/content/cs/05-computation.md:77>) asks readers to design a finite-state turnstile that lets “the third person through free,” then suggests an unbounded counting limitation. Counting to three requires only finitely many states; even repeating a reward for every third person can use a finite cycle. Use bounded or cyclic counting as the successful finite-state example, then contrast it with matching arbitrarily nested parentheses, which the chapter already discusses.

Likewise, [the AI training example](<C:/Development/Learning Guide/content/ai/20-building.md:42>) reports test-set accuracy after every epoch, while earlier chapters tell readers to reserve the test set for the end. Make the example demonstrate that habit: monitor validation accuracy during training and report test accuracy once afterward.

## 6. Give repeated sections different jobs

Recaps help orientation; summaries help recall; formula sheets help lookup. Preserve those distinctions.

[AI classification](<C:/Development/Learning Guide/content/ai/05-classification.md:97>) has adjacent “things to know” and summary sections that repeat much of the same material. Similar duplication appears in mathematics. Where this happens, use one section for the three main ideas and another for decisions, formulas, or a test of understanding. History's date boxes already have a distinct reference purpose and should not be merged automatically.

Treat “The People” and glossaries as reference destinations, with links from the relevant explanation. Biographical entries are most interesting when they explain the problem someone faced, the contribution, and its consequences; repeated prize dates can stay in the reference layer.

Some glossary rows combine several terms and several definitions. Split these into individually searchable entries, linked to the explanation. For example, [history's ten dynasties](<C:/Development/Learning Guide/content/history/40-glossary.md:345>) are followed by ten date ranges that the reader has to pair up mentally. A two-column table or one entry per dynasty would be easier to use. Keep definitions in the same order as their terms when grouping them is useful.

## 7. Make the research section easier to enter and clearer about evidence

Some entries use accessible headlines already; others lead with technical paper titles. For the latter, add a plain-language headline while preserving the exact title in the source details. For example, [the first CS research entry](<C:/Development/Learning Guide/content/cs/research.json:7>) could lead with “A new shortest-path algorithm challenges a long-standing limit,” followed by the original paper title.

Give every summary the same three jobs: what was found, why it matters, and what remains uncertain. Put technical details after that core explanation.

The evidence labels need correction. [The app](<C:/Development/Learning Guide/src/app.js:230>) defines “Confirmed” as agreement by independent groups. The [CS data](<C:/Development/Learning Guide/content/cs/research.json:3>) includes officially announced results, while [history](<C:/Development/Learning Guide/content/history/research.json:3>) uses peer review as its definition. Those are different standards.

Separate publication or source status—preprint, peer-reviewed paper, official announcement—from evidence status such as independently replicated or disputed, where applicable. Use “Source checked” for the date a page was checked. Avoid presenting that date as verification of the underlying conclusion. These labels should tell readers what was checked and what the evidence supports.

## 8. Apply subject-specific edits

| Subject | Preserve | Focus the next edit on |
|---|---|---|
| Physics | Experiments that reveal why an old explanation stopped working. | Consistent analogies and summaries; more gradual preparation for the toolkit. |
| Chemistry | Familiar substances, worked reaction calculations, and the detective story of analysis. | Shell-versus-period distinctions; shorter introductions to dense biochemical processes. |
| Mathematics | Practical calculations, explicit steps, and plausibility checks. | Correct intermediate algebra; time to practice; fewer promises of effortless or permanent understanding. |
| Economics | Opportunity cost, “compared to what?”, and the attention to who gains and loses. | Put assumptions next to conclusions. Replace loaded framing such as “what happens when you interfere” in the markets introduction with “how taxes, price controls, and other policies change outcomes.” |
| AI | The path from statistical models to language models and the focus on evaluation. | Remove universals that conflict with the guide's own range of methods; distinguish pretraining, post-training, and deployed systems consistently. |
| History | Concrete scenes and explicit discussion of sources and interpretation. | More breathing room around names and dates; less inevitable-sounding storytelling. Replace [“The Rest of the Ancient World”](<C:/Development/Learning Guide/content/history/11-ancient-americas-africa.md:2>) with a descriptive title such as “Ancient Americas, Africa, and the Peoples Beyond Rome.” Its contents include northern Europe and the steppe as well as the Americas and Africa. |
| Biology | Mechanisms, scale comparisons, and questions for interpreting a study. | Distinguish prediction, observation, and explanation, especially in the protein-folding passages. Check that headlines and summaries retain the main text's uncertainty. |
| Computer science | The connection between abstract ideas and everyday systems. | Follow one example consistently; lighten the dense opener and avoid presenting useful rules of thumb as exceptionless rules. |

History particularly needs a pass for the distance between the narrator's voice and a historical actor's beliefs. In [the oracle-bone example](<C:/Development/Learning Guide/content/history/26-east-asia-origins.md:21>), “It was not; it was a girl” follows a question about whether childbirth was lucky. Attribute the judgment explicitly: “The record treats the birth of a girl as an unlucky outcome.” Readers should immediately know whose values they are hearing.

Keep the wit, but check whether it explains the stakes. [The Reformation subtitle](<C:/Development/Learning Guide/content/history/17-europe-renaissance-reformation.md:3>) reduces the conflict to “the meaning of bread.” A more informative version is: “How disputes over salvation and religious authority divided churches, strengthened rulers, and helped drive a century of conflict.” The existing stories of Menocchio, the cathedral builders, and the Berlin border crossing are engaging because the people face concrete choices; more chapters could use that kind of interest.

For disputed interpretations, move attribution into the first statement of the claim. [The Axial Age chapter](<C:/Development/Learning Guide/content/history/12-ancient-ideas.md:3>) announces a worldwide shift as settled before discussing the framework and its uncertainty. Open instead with the comparison: “Why did new ethical and philosophical traditions emerge across several regions between roughly 800 and 200 BCE? Historians debate both the pattern and its causes.” The reader can then evaluate the argument rather than first having to unlearn a slogan.

## Recommended order of work

First fix the contradictions, broken table, incorrect algebra, and evidence labels. Then revise introductions, subtitles, summaries, and glossary entries together. Pilot the slower explanation-and-practice structure in one chapter per subject before applying it across the collection.

A manageable first editing batch would be chemistry's electron chapter, mathematics' calculus chapter, biology's body chapter, AI's clustering chapter, CS's logic chapter, and history's expansion chapter. Each has a concrete issue above and can demonstrate the review method. Follow with an editorial search for repeated quantities, mismatched chapter references, and claims containing “all,” “every,” “only,” or “nobody”; resolve each in context.

Use a short style sheet: define new terms before relying on them; qualify claims where the qualification changes the lesson; introduce quantities with context; choose consistent spelling and notation; attach dates to changing facts; and make each chapter's main question visible at the start.

Finally, ask several intended readers to try a chapter and explain its central idea in their own words. Note where they stop, what they misinterpret, and whether they can answer the final question. That will tell you more about understandability than a reading-level score alone.
