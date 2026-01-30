---
title: "Why AI always needs a human in the loop"
description: "AI tools excel in kind domains with clear rules and fast feedback, but struggle in wicked domains with ambiguous requirements. Human generalists remain essential for problem framing."
date: 2026-01-30 00:00:00 +0000
permalink: /posts/2026-01-30/ai-human-in-the-loop
categories:
  - Software
  - AI
tags:
  - AI
  - Kind-and-Wicked
  - Software-Engineering
---

Most of the current AI tooling – LLMs, code assistants, copilots, "agents" – are astonishing at pattern-rich, feedback-dense work, but surprisingly naive everywhere else. They look like polymath geniuses when you give them well-posed, tightly constrained tasks with a clear success criterion. But put them into a real product strategy, ambiguous business requirements, socio-technical systems – and their confidence massively exceeds their competence.

David Epstein in his book Range, describes Kind and Wicked domains, his core claim being that in wicked domains, people with broad, cross-domain experience develop meta-skills that make them better at solving novel, messy problems than narrow specialists who typically focus on kind domains with very clear rules or constraints, like chess.

## Kind environments: where AI shines

It's tempting to describe LLMs as "generalists" because they can talk about pretty much anything, in any tone, with believable fluency. But under the hood, they're closer to hyper-specialised chess prodigies. They are optimised to continue patterns that have been richly reinforced in training, not to reason from first principles in unfamiliar terrain.

When you give them a kind problem, they shine. Kind problems look like this:

- The goal is clear: "Make these tests pass", "Rewrite this idiomatically", "Summarise this paper".
- The constraints are explicit: input and output formats, APIs, performance budgets.
- Feedback is immediate and accurate: the code compiles or it doesn't; the tests are green or red; the SQL query returns the right rows or it fails.

In other words, you can wrap the task in a little pocket universe with crisp rules and fast feedback. That's exactly what chess and golf look like for human learning. Rules never change; the board or the course is stable; the scoring function is brutally clear. In that setting, repetition and refinement dominate. The more patterns you've seen, the better you get.

AI tools are already comfortable in these pockets. They're extremely good at:

- Local code transformations with tests in place.
- Boilerplate architecture where the patterns are standard and "industry best practice".
- Producing plausible alternatives when the scoring function is easy to automate (benchmark performance, static analysis, formal specs, etc.).

If you live entirely inside these kind bubbles, AI looks like magic. Which is exactly why so many people have concluded that AI is magic.

## Wicked environments: where the plot falls apart

Unfortunately, most of the work that actually matters isn't kind.

A wicked environment is one where:

- The problem is underspecified or contested ("What should this product be?" rather than "What should this function do?").
- Feedback is slow, noisy, or confounded (did signups drop because of the UX change, the new pricing, the competitor's launch, or the economy?).
- Stakeholders and constraints are in tension (regulation, culture, politics, incentives).

Software is full of this. "Should we rewrite the legacy system?" is a wicked question. "What architecture should we choose?" is wicked. Even apparently simple questions like "Should we make this API public?" live in a tangle of future evolution, governance, organisational competence, and business model.

In these environments, simply being very good at extrapolating patterns from the past is dangerous. You're optimising on a landscape you don't fully understand. The data you're learning from often encodes failures, local optima, and context-specific compromises. The patterns that "worked" weren't necessarily good ideas; they were just the ones that didn't visibly explode.

LLMs don't know any of this. They don't know which patterns were successes, which were accidents, and which were disasters. They don't know which parts of the context have shifted. They don't know that the people who wrote that confidently-worded microservices manifesto never survived the maintenance phase.

So in wicked domains, you get a very particular kind of failure: beautifully articulated nonsense that faithfully reproduces the average of past nonsense.

## Humans as environment shapers, not just prompt writers

This is where Epstein's generalist comes back into the picture, you know, human beings.

The valuable human in the loop is not just the person who writes better prompts. It's the person who can look at a messy, wicked problem and reshape it into a set of kind problems. They don't ask the AI "What should my company strategy be?" and hope for wisdom. They do the slow, cognitively expensive job of:

- Clarifying goals, trade-offs, and constraints.
- Identifying which parts of the problem can be made kind – i.e. made explicit, testable, and instrumented.
- Designing representations, interfaces, and feedback loops that allow an AI to be useful without pretending it's omniscient.

In other words, they do the thing generalists are good at: reframing.

Consider a realistic software scenario:

The wicked question is "Should we re-platform this monolith to services, and if so how?" There is no right answer in the abstract. It depends on your team, your domain, your operational maturity, your regulatory constraints, your time horizon. No amount of GitHub-trained pattern-matching will know those things.

But that wicked question can be decomposed into a series of kind(-ish) questions:

- "Given this codebase, identify bounded contexts and candidate seams."
- "Generate draft ADRs for three plausible target architectures, given these explicit constraints."
- "For this specific module, suggest a migration plan to a separate service, with tests that ensure behaviour parity."

Each of those is still non-trivial, but they're recognisably closer to the kind end of the spectrum. You can write definitions of done. You can build automated checks. You can look at outputs and say, "This is obviously wrong" without having to wait two years for production metrics.

The human's job is to connect the wicked outer loop to the kind inner loops. Set direction and constraints in the messy space; let the AI churn through options and implementation details in the tidy space.

## The risk: mistaking fluency for judgement

The danger, and we're already seeing it in the wild, is when organisations invert that relationship.

They treat AI as if it possessed judgement in the wicked domain ("What's our strategy?", "How should we reorganise?", "Which features should we build?") and relegate humans to the implementation details that are actually kinder ("Just do what the AI spec says"). You end up with a system where the least capable agent is responsible for the hardest part of the work.

This is the Dunning–Kruger effect with a GPU budget: the system with the least understanding expresses the most confidence, and everyone else is subtly nudged to defer to it.

[AI is a Dunning-Kruger Amplifier](/posts/20250-10-26/ai-dunning-kruger).

Generalist humans have seen enough domains to recognise when the problem itself is wrong, when a metric is misaligned, when a "best practice" is cargo cult, when an analogy doesn't really hold. They know when not to trust the pattern.

## Generalist humans, specialist machines

So where does that leave us?

AI systems are, and will probably remain for a while, extraordinarily powerful narrow specialists in the sense that matters here: they are tuned to excel in artificially kind micro-environments we create for them. If we bring them unfiltered wickedness, we're going to get confident gibberish. If we bring them carefully designed kind problems, we can offload a huge amount of tedious cognitive labour.

The productive pattern is:

- Generalist humans own problem finding and framing.
- Generalist humans decide what to measure and how to get feedback.
- Generalist humans carve out kind, checkable tasks.
- Specialist machines execute those tasks at scale and speed.

If we get that division wrong, we'll spend the next few years doing what over-specialised experts do in Epstein's stories: getting better and better at winning the wrong game.

If we get it right, we end up with something more interesting: human generalists using AI not as an oracle, but as a force multiplier for their own meta-skills – turning wicked problems into a shape that machines can help with, without ever forgetting that the wickedness is still there, waiting outside the sandbox.
