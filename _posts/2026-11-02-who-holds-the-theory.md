---
title: "Who Holds the Theory"
description: "Choosing how to use AI for a change is itself a theory-dependent decision, and only someone who holds the theory of the system can make it."
date: 2026-11-02 00:00:00 +0000
permalink: /posts/2026-11-02/who-holds-the-theory
categories:
  - AI
  - programming
tags:
  - AI
  - software-engineering
  - theory-building
  - learning
---

Much of the public conversation about AI in software development has settled into two camps. One says AI will soon write all our code and humans will only need to say what they want. The other says AI-generated code is a liability and serious engineers should leave it alone. Both camps treat AI use as a single switch, turned on or off for a whole team or a whole codebase.

I think the switch is the wrong picture. The question that matters is different for every change: who needs to hold the theory of this change, and for how long?

Consider a request to let a customer hold two subscriptions at once. To someone new to the system, or to an agent, the change appears small: remove a uniqueness check and adjust a test. To someone who holds the theory of the system, that check is where the system says what a customer is. Billing, notifications and cancellation all assume one subscription per customer. Removing the check makes the new behaviour work while invisibly breaking the model the rest of the code relies on. Whether the change appears trivial depends on who is looking at it.

Only someone who already holds the theory can tell which changes need it.

## Programming as theory building

In 1985 Peter Naur published a short paper called *Programming as Theory Building*.[^naur] His claim was that the primary product of programming is not the code. It is the theory held in the programmers' minds. The code and its documentation are secondary, and lossy.

By theory, Naur meant the knowledge needed not only to do something well but to explain it, justify it, and answer questions about it. A programmer who holds the theory of a system can say how the world maps onto the code, why each part is the way it is, and whether a new demand resembles something the system already handles. That last ability is what makes modification possible.

Naur drew a stark conclusion. A program is alive while a team holding its theory remains in control of it. It dies when that team dissolves. A dead program still runs and still produces useful results. What is lost is the ability to answer demands for modification intelligently. Naur argued that reviving a program from its text and documentation is not merely expensive but impossible.

This gives a practical test. Put a modification request to the team without the agent, and see whether anyone can explain why the code is as it is.

Agent-heavy development makes a new kind of dead program possible. Nobody has to leave. The team is still there, but the theory was never built. The program is a ghost-ship.

## Can't the agent hold the theory?

The obvious objection is that the test is rigged. An agent can explain why the code is as it is, fluently and at any time. It can justify decisions and answer questions about the system. Why exclude it?

Because the agent's explanations come from the text. Each session, it rebuilds its account of the system from the code, the documentation and whatever memory files it has been given. That is exactly the revival from text that Naur says cannot recover the theory. Where the code departs from what was intended, the agent's rationale will be fluent and wrong, and nothing in the text will show it. The question is not whether someone can produce an explanation. It is whether anyone can tell if an explanation is right, and only someone who holds the theory can. Excluding the agent is the point of the test: it asks whether the theory exists anywhere outside the text.

Two further properties separate holding a theory from producing explanations. The first is continuity. Naur's theory is held over time by people, and a new programmer acquires it only by working in close contact with those who already hold it. A model has no continuity between sessions. Context windows and memory files are documentation, and Naur's argument about documentation applies to them unchanged. The second is answerability. Holding a theory means being committed to it. Someone who holds the theory will refuse or reshape a request that conflicts with it: "no, we can't just add a column". A model will argue as readily for a design as against it, and comply.

Underneath all three is missing information. Much of a system's theory was never written down: conversations, judgements, the reasons an option was rejected. Storey calls this intent debt.[^storey] An agent cannot read what was never written. There are layers of theory around the codebase: the organisation, customers, future plans, processes, etc. All of it is missing information.

This claim can be tested. If agents' explanations reliably matched the original authors' intent on decisions that were never recorded, the argument would weaken. I do not expect that, but it is the observation that would change my mind.

## Two kinds of decision

Not every decision in a change needs the theory. I find it useful to distinguish two kinds.

A *theory-dependent* decision is one that cannot be made well without the theory. The central case is a decision that fixes how some part of the world maps onto the structure of the system. Deciding that a customer has exactly one subscription is theory-dependent. So is deciding where a consistency guarantee lives, or which concept owns a rule. Other theory-dependent decisions change nothing in the mapping but still need it. Judging whether a proposed change touches the mapping at all is one of these.

A *theory-neutral* decision conforms an implementation to a mapping already decided, and can be made well without knowing why the mapping is as it is. Writing the JSON codec for a type whose shape is agreed is theory-neutral.

Theory-dependent decisions must be made, or at least genuinely understood, by the people who will carry the system forward. Theory-neutral work is where delegation is cheap. Many changes contain both kinds, and the proportion varies from change to change.

## Seven ways to use AI

Seen through this lens, the ways people use AI in software differ in one important respect: where the theory ends up.

**Unassisted.** The human writes everything and builds all of the theory. This fits learning, and work where the theory is the product.

**Reader.** No code is generated. The AI helps a human understand code that already exists, during onboarding or when digging through a legacy system. This is now routine practice. The question for theory building is whether the human ends up holding a theory or only a series of answers. Naur says a theory cannot be revived from text. This mode tests how far AI can partly revive one. But given that the human will put knowledge of the system into context with theory of the wider organisation, perhaps theory building is possible.

**Critic.** The human writes the code and the AI reviews it or argues with it. The human makes every decision and keeps all of the theory.

**Pairing.** The human and the AI work in small steps, as in pair programming. In each step one party commits a written constraint, such as a test, a type signature or a design note, and the other elaborates it. The elaboration is then checked against the constraint. At every step the human's theory must produce something that can be wrong: a test, a prediction, a choice with a reason, or an explanation. The theory is built as the work proceeds. I have published a skill that makes an agent pair this way and it works well.[^skill]

**Spec-first.** The human writes a careful specification and the AI generates the implementation. The author holds *a* theory, usually more of it than the spec records. It is mostly the world side of the mapping: what the system should do, not how that lands in the structure of the code. A spec that fixes types and module boundaries reaches further into the code side than one that describes behaviour, but neither gives its author a developer's theory of the system. The AI receives only the spec, and a spec, like code, is a lossy expression of the theory. The implementation will contain theory-dependent decisions the spec does not settle, and the AI makes them without the theory. The question is which of those decisions slip below the spec without anyone noticing.

**Supervised agent.** The agent writes the code and the human reviews the diffs. This is the default the industry is converging on. Reviewing a diff is not the same as building a theory. The reviewer learns what changed without necessarily learning why the system needed it to change that way. In my opinion, this is a terrible place to be.

**Vibe coding.** There is no spec and almost no review. This is legitimate when the code will never be modified: a spike, a throwaway script, a one-off data job. Even then, someone has to hold the world side of the theory: what the program is for, and how to tell whether its output is right. What nobody needs is the code side. A program nobody will change needs no theory of how it works, but it still needs someone who knows what it should do.

| Mode             | Who makes theory-dependent decisions | Where the theory ends up                                                  | Fits when                                            |
| ---------------- | ------------------------------------ | ------------------------------------------------------------------------- | ---------------------------------------------------- |
| Unassisted       | Human                                | Human                                                                     | Learning; the theory is the product                  |
| Reader           | Human                                | Human, if used for conceptual inquiry; otherwise only a series of answers | Onboarding; legacy code                              |
| Critic           | Human                                | Human                                                                     | Human-written work that benefits from challenge      |
| Pairing          | Human, in small steps                | Human, built as the work proceeds                                         | Theory-dependent work on long-lived code             |
| Spec-first       | Human, in the spec; AI, below it     | Author, the world side; nobody, the code side below the spec              | The layer below the spec is theory-neutral           |
| Supervised agent | Agent, reviewed by a human           | Human, the world side; largely nobody, the code side                      | Theory-neutral work the reviewer already understands |
| Vibe coding      | Agent                                | Human, the world side; nobody, the code side                              | Code that will never be modified                     |

The modes can also be sequenced. Spike-and-stabilise is Vibe coding followed by Pairing: the AI produces a throwaway prototype, and the human and the AI then write the real thing with the prototype as a reference. The theory is built in the rewrite.

## Choosing a mode is a theory-dependent decision

The obvious conclusion is that teams should pick the right mode for each change: pair on the hard parts, vibe code the trivial ones. That is roughly right, but insufficient.

Only someone who already holds the theory can judge whether a change is trivial. The subscription change looks like a one-line edit to anyone who does not know what the uniqueness check means. A modification made without a grasp of the theory can be entirely correct in behaviour and still be inconsistent with the theory. It becomes an unintegrated patch on the main structure. Enough of those and the original structure is still visible but no longer effective.

Any problem viewed from a sufficient distance looks small. Developers are often accused of overthinking changes that analysts and managers see as simple. The developer is usually seeing the code side of the theory: how a rule in the world lands in the structure of the system. An analyst may know perfectly well that a customer can hold two subscriptions. Only a developer knows that the code supporting billing, notifications and cancellation assumes one. Whether a change is trivial is a question about that side of the mapping, so the people who hold it are the right judges of triviality. They are not the sole judges of whether the change is right. That depends on the world side of the theory. The analyst holds that side in detail, and the developer less so.

Choosing a mode is itself a theory-dependent decision, and only someone who holds the theory can make it safely. Two consequences follow.

First, the same mode is safe for one developer and dangerous for another. An engineer who has held a system's theory for years can hand a change to an agent, because they can see that it is theory-neutral. A developer in their first month cannot see that, however careful they are.

Second, someone new to a codebase cannot reliably choose their own mode. They cannot see the code side of the theory, so they cannot see what a change touches. Care does not help, because what is missing is knowledge, not care. Confidence makes it worse, which is the pattern I described in [AI is a Dunning–Kruger Amplifier]({% post_url 2025-10-26-ai-dunning-kruger %}).

This argument cuts against both camps. The camp that wants AI to write everything has to say who holds the theory, and how modification requests will be answered in three years. The camp that rejects AI has to say why theory-neutral work needs a human typing it.

## Choosing well

Three variables seem to me to decide the mode for a change.

- **Dependence.** Does the change contain theory-dependent decisions?
- **Lifetime.** How long will the code live, and how often will it be modified?
- **Answerability.** Who will have to answer modification requests about this code later?

Dependence and lifetime together give a rough map. Changes that contain theory-dependent decisions in long-lived code call for Unassisted or Pairing, or for Spec-first when the spec settles every one of those decisions. Theory-neutral changes in long-lived code can go to Spec-first or a Supervised agent, provided someone who holds the theory has confirmed that they really are theory-neutral. Code with a short life can be vibe coded whatever it contains, because nobody will need the code side of its theory.

Answerability decides whose theory matters. If a team will carry the system forward, the theory has to land in that team. It is not enough for it to land in one person, and it cannot land in a transcript.

Within one project the mode changes from change to change. A team might pair on the domain model, take a Spec-first approach to an API client generated from a schema they already understand, and vibe code a throwaway script they will delete next week.

## Sorted

In practice, this means the people who hold the theory sort the work. Each piece of work becomes a visible item, on a board or another information radiator, and its mode is a deliberate decision recorded on the item: an agent working to an agreed pattern, a person pairing with an agent, or a person working alone. Sorting decides where a change starts, not where it ends up. An agent given a theory-neutral change may find a theory-dependent decision on the way, so it should stop and say so rather than make it.

## What the evidence says

There is little direct evidence on theory building with AI. There is a lot of evidence on learning, and learning is a foundation of theory building. Conditions that impair learning are very likely to impair theory building. Conditions that preserve learning do not guarantee it.

The mechanisms of learning are among the best-attested results in cognitive psychology. People retain what they generate better than what they read: the generation effect.[^slamecka] Retrieving something from memory builds retention more than restudying it: the testing effect.[^roediger] Effort during learning improves long-term retention, even when it feels slower: desirable difficulties.[^bjork]

The Supervised agent and Vibe coding modes remove generation and retrieval. The developer reads instead of producing. Pairing puts them back. Predicting what a change will do before seeing it, choosing between alternatives and saying why, and explaining a change back are the kinds of activity this research shows to work.

Controlled studies of learning with AI show the mechanism holding. In a randomised trial of developers learning an unfamiliar Python library, Shen and Tamkin found that the group using AI scored markedly lower on a comprehension test, with no significant gain in speed. Participants who used the AI to ask conceptual questions kept their scores.[^shen] In two preregistered experiments, Lehmann and colleagues found no overall effect of LLMs on learning. In exploratory analyses, substituting an LLM for learning activities reduced understanding of each topic, while using it to complement learning, for example by asking for explanations, improved understanding.[^lehmann] In a study of novice programmers aged 10 to 17, Kazemitabaar and colleagues found that access to Codex did not harm the learners' ability to modify code or their retention a week later, though delegating whole tasks in a single prompt trended negative.[^kazem] Outside programming, Bastani and colleagues found that high-school students given unrestricted access to GPT-4 for mathematics practice did worse on later exams, and that a tutor version with guardrails largely removed the harm.[^bastani]

The pattern is consistent. Substitution harms understanding. Inquiry and complementary use preserve it.

This evidence has limits. Learning studies measure the acquisition of knowledge that already exists, such as a syllabus or a library's API. Theory building constructs a new model of one particular system, which nobody else holds and which has no answer key. Learning studies measure retention over days or weeks. A theory is held for years. And Naur's notion of theory includes the ability to justify and argue, which no learning study measures. No controlled study I know of tests agent-heavy workflows, theory held by a team, or retention over months and years by a whole team.

The strongest counterweight is a preregistered experiment by Borg and colleagues.[^borg] Developers added a feature to a Java web application with or without an AI assistant. Other developers, randomly assigned, then extended those solutions without AI. The study found no loss of maintainability. On its face, that suggests developers without the theory can modify code perfectly well.

I don't doubt the result, but the study tested something much smaller than what I'm talking about. The application was a recipe-search app of about 2,000 lines, and each task was a filter feature designed to take two to four hours. Naur's claim concerns systems whose theory takes weeks or months to acquire. I have worked on systems where an experienced newcomer's sensible solution was wrong because they did not yet know the wider system. In both conditions the maintainers lacked the theory, so the study cannot show whether someone who held it would have done better. It also tests a single modification, whereas the decay Naur describes accumulates over many. The authors themselves name cognitive debt as a risk for future work. What the study does show fits what I argued in [Why Good Engineering in the Age of AI Matters More Than Ever]({% post_url 2026-03-04-good-engineering-ai %}): code quality matters, and AI assistance need not harm it.

Speed is a separate question. A randomised trial by METR found that experienced open-source developers were 19% slower with AI tools on repositories they knew well, while believing they had been faster.[^metr] That says nothing about understanding, but it weakens the assumption that delegation always buys time.

My own anecdotal evidence is pairing with an agent using the skill mentioned above. I stay engaged, I direct the design, and at the end I can explain how the system works in detail. The agent did all of the typing. That is a single self-reported observation, not a finding.

## Drift

The risk across a project is not any single mode. It is drift. Delegation is faster in the moment, so each change is pulled one step towards the Supervised agent and Vibe coding modes. A team that pairs on most things can become a Supervised agent team without ever deciding to. I have no measurement of how fast this happens. I expect it to be gradual and largely unnoticed.

XP made its disciplines part of how the work was done, so they didn't depend on each person remembering them. A harness can do some of this for Pairing. It can refuse to touch production code until a failing test exists, and it can stop after each change and ask the developer what they expect the next one to do. It cannot make the developer think: an approval can become a reflex and a prediction can be a guess. What it can do is make skipping the thinking something you notice yourself doing, not something that happens by default.

Recording the mode on each work item does the same for the team as a whole. Drift becomes something you can count: how many items went to an agent this month, and how many of those turned out to contain theory-dependent decisions. That would also give the measurement I said I lack.

## The question to ask

The question is not whether to use AI. It is who must hold the theory of this change, and for how long. For a throwaway script, nobody needs the code side, and an agent can write it. For the rule that defines what a customer is, the answer is the team that will be asked to change it next year, and they need to have built that theory themselves. And only someone who already holds that theory can answer the question.

---

## References

[^naur]: Naur, P. (1985). Programming as Theory Building. *Microprocessing and Microprogramming* 15(5), 253–261. Reprinted in Cockburn, A. *Agile Software Development*, Appendix B. <https://pages.cs.wisc.edu/~remzi/Naur.pdf>

[^storey]: Storey, M.-A. (2026). From Technical Debt to Cognitive and Intent Debt: Rethinking Software Health in the Age of AI. <https://arxiv.org/abs/2603.22106>

[^skill]: Pair programming skill. <https://github.com/channingwalton/skills/tree/main/skills/pair-programming>

[^slamecka]: Slamecka, N. J. and Graf, P. (1978). The generation effect: Delineation of a phenomenon. *Journal of Experimental Psychology: Human Learning and Memory* 4(6), 592–604.

[^roediger]: Roediger, H. L. and Karpicke, J. D. (2006). Test-enhanced learning: Taking memory tests improves long-term retention. *Psychological Science* 17(3), 249–255.

[^bjork]: Bjork, R. A. (1994). Memory and metamemory considerations in the training of human beings. In Metcalfe, J. and Shimamura, A. (eds), *Metacognition: Knowing about Knowing*. MIT Press.

[^shen]: Shen, J. H. and Tamkin, A. (2026). How AI Impacts Skill Formation. <https://arxiv.org/abs/2601.20245>

[^lehmann]: Lehmann, M., Cornelius, P. B. and Sting, F. J. (2024). AI Meets the Classroom: When Do Large Language Models Harm Learning? <https://arxiv.org/abs/2409.09047>

[^kazem]: Kazemitabaar, M. et al. (2023). Studying the Effect of AI Code Generators on Supporting Novice Learners in Introductory Programming. <https://arxiv.org/abs/2302.07427>. Also Kazemitabaar, M. et al. (2023). How Novices Use LLM-Based Code Generators to Solve CS1 Coding Tasks in a Self-Paced Learning Environment. <https://arxiv.org/abs/2309.14049>

[^bastani]: Bastani, H. et al. (2025). Generative AI without guardrails can harm learning: Evidence from high school mathematics. *PNAS* 122(26), e2422633122. <https://doi.org/10.1073/pnas.2422633122>

[^borg]: Borg, M. et al. (2025). Echoes of AI: Investigating the Downstream Effects of AI Assistants on Software Maintainability. <https://arxiv.org/abs/2507.00788>

[^metr]: Becker, J., Rush, N., Barnes, E. and Rein, D. (2025). Measuring the Impact of Early-2025 AI on Experienced Open-Source Developer Productivity. METR. <https://arxiv.org/abs/2507.09089>
