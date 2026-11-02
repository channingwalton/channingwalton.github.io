---
title: "Why Good Engineering in the Age of AI Matters More Than Ever"
description: "Unless your codebase is clean, well‑tested, and well‑architected, AI doesn't remove your technical debt — it amplifies it."
date: 2026-03-04 00:00:00 +0000
permalink: /posts/2026-03-04/good-engineering-ai
categories:
  - AI
  - programming
tags:
  - AI
  - software-engineering
  - quality
  - tdd
---

> There is a dangerous idea that we shouldn't care what AI generated code looks like. Treat it as a black box.
> The reality is that unless your codebase is clean, well‑tested, and well‑architected, AI doesn't remove your technical debt — it amplifies it.

There is a seductive idea circulating in technology circles: AI will soon write all our code. Humans won't need to read it, review it, or understand it. It will be a black box — generated on demand, deployed, replaced. Who needs clean architecture when the machine writes everything fresh each time? Who needs SOLID principles when no human eye will ever read the code?

It is both compelling and dangerously wrong. Recent surveys of large language models (LLMs) in software engineering show that while they can accelerate development, they also introduce new forms of technical debt and fragility that directly affect how systems evolve over time.[1](https://arxiv.org/abs/2601.20879v1)

***

## The Black Box Fallacy

The black box argument assumes that because code is AI‑generated, the quality of that code is irrelevant. What matters is only the observable behaviour: does it work? But software systems are not isolated functions. They are living structures that grow, interact, fail, and require change. A working system today is a system that will need modification tomorrow — to fix a bug, adapt to new requirements, integrate with another service, or scale under load.

A recent survey of 87 studies on LLMs in software engineering distinguishes between short‑term "it works" utility and long‑term evolvability, noting that LLM‑generated code can be hard to analyse, test, and maintain if quality is treated as an afterthought. The same survey highlights that hallucinated logic, brittle outputs and unstable performance become a maintainability problem, not just a correctness problem.[1](https://arxiv.org/abs/2601.20879v1)

The moment change is required, the internal structure of the code matters enormously. And if an AI is making that change — reading existing code to understand context, extending a module, refactoring a class — it faces exactly the same challenges a human developer does. Perhaps more so.

***

## AI as the Most Demanding Reader

Here is the crucial insight that the black box believers miss: AI is not a replacement for readable, well‑structured code. It is, in fact, the most demanding consumer of it.

Overviews of LLMs in software engineering report that current models are most effective at tasks like code summarisation, explanation, and small‑scale refactoring when the underlying code is modular, idiomatic, and well‑named. They work by matching patterns they have seen before; feed them opaque naming, tangled dependencies, and ad‑hoc coupling, and their performance degrades sharply.[2](https://nzjohng.github.io/publications/papers/tosem2024_5.pdf) [1](https://arxiv.org/abs/2601.20879v1)

When an AI coding assistant is asked to extend a system, it must parse and comprehend what is already there. A tangle of implicit dependencies, poorly named functions, and ad‑hoc coupling does not become clearer to an AI than to a human — it becomes less clear. LLM surveys explicitly note that performance drops in complex, weakly structured codebases and specialised domains where abstractions are unclear or inconsistent.[1](https://arxiv.org/abs/2601.20879v1)

Good naming matters because the AI uses names to infer intent. Clear separation of concerns matters because the AI needs to locate the right place to make a change without cascading side effects. Meaningful abstractions matter because the AI reasons at the level of those abstractions, not at the level of raw bytes. Every principle that makes code readable for humans makes it more tractable for AI.

Empirical work on LLM‑assisted refactoring shows this directly: when models are guided by human‑defined refactoring rules and backed by tests, they can improve maintainability. When they operate on poorly structured code without guidance, they readily introduce new smells and issues.[3](https://link.springer.com/chapter/10.1007/978-3-032-12089-2_10)

***

## Architecture Does Not Disappear

The black box argument tends to focus on the micro level: individual functions, small modules. Even granting the most optimistic assumptions about AI code generation, this ignores the macro. Architectural decisions — how systems are decomposed, where boundaries are drawn, how data flows — are not code‑generation problems. They are design problems. They require judgement about trade‑offs, understanding of domain constraints, and reasoning about futures that have not yet arrived.

Surveys of LLMs in software engineering emphasise that models can assist with producing code snippets, design suggestions, and even architectural sketches, but they do not replace human architectural judgement. They are most useful when there is an existing, coherent architecture: clear bounded contexts, explicit interfaces, and well‑documented responsibilities.[2](https://nzjohng.github.io/publications/papers/tosem2024_5.pdf)

A system designed without coherent architecture will present an AI with incoherence when it attempts to work within that system. Good architecture creates the seams along which AI assistance can be effective. Bad architecture creates friction that no amount of generation capability can eliminate. The AI does not transcend the structure of the system — it operates within it.

***

## The Return of What We Already Knew

The practices that AI‑assisted development is quietly forcing back into relevance are not new. Extreme Programming advocated for short feedback loops, continuous integration, test‑driven development, simple design, and relentless refactoring. So did clean code, domain‑driven design, and the functional programming community's insistence on referential transparency and explicit effects.

Empirical studies of test‑driven development (TDD) repeatedly find that TDD leads to higher test coverage, earlier defect detection, and more modular, loosely coupled designs — properties that directly support long‑term maintainability. These ideas were always correct. They were also always inconvenient. They required investment up front, and faith that the discipline would pay dividends later, even when the immediate benefit was invisible.[4](https://sciup.org/evaluating-the-impact-of-test-driven-development-on-software-quality-enhancement-15019349) [5](https://papers.ssrn.com/sol3/papers.cfm?abstract_id=5034145)

Empirical analyses and literature reviews of TDD consistently conclude that it improves reliability and maintainability, but also stress that benefits compound over time rather than appearing immediately. In an AI‑assisted workflow, those compounding benefits become visible much sooner: a rich, reliable test suite becomes the safety net that allows aggressive, automated refactoring; a clean design becomes the map the AI uses to navigate change.[4](https://sciup.org/evaluating-the-impact-of-test-driven-development-on-software-quality-enhancement-15019349) [5](https://papers.ssrn.com/sol3/papers.cfm?abstract_id=5034145)

An AI working in a well‑tested codebase with high coverage can refactor confidently, guided by the safety net of tests that catch regressions. The same AI working in an untested codebase is flying blind, generating changes it cannot verify. Recent work on LLM‑assisted development makes exactly this point: test suites and CI pipelines are not just "best practices", but prerequisites for safe use of automated changes.[3](https://link.springer.com/chapter/10.1007/978-3-032-12089-2_10) [2](https://nzjohng.github.io/publications/papers/tosem2024_5.pdf)

***

## The Stakes Are Higher Now

In the age of human‑only development, a poorly structured codebase slowed things down. It made developers grumpy, increased bug rates, and frustrated product teams. But the damage was bounded. Human developers would refuse to extend a system indefinitely when it became unmaintainable. They would push back, raise concerns, escalate.

An AI will not refuse. An AI asked to extend a badly designed system will extend it — confidently, fluently, and at scale. The mess will grow faster than it ever could with human hands.

We are already seeing glimpses of this. An empirical study of AI‑generated build code across multiple ecosystems identified hundreds of new maintainability and security smells introduced by AI agents, with a majority of AI‑authored pull requests approved and merged with minimal human intervention.[6](https://www.arxiv.org/abs/2601.16839) Large‑scale industry analyses of AI‑assisted coding similarly report increased churn and reduced reuse in AI‑heavy repositories — a pattern consistent with technical debt accumulating more quickly. [7](https://www.gitclear.com/coding_on_copilot_data_shows_ais_downward_pressure_on_code_quality)

Without the foundation of good practice, AI amplifies dysfunction just as readily as it amplifies capability. A 2026 survey on LLMs and software evolvability is blunt on this point: LLMs can improve analysis, tests, and productivity, but also pose severe threats to long‑term maintainability if used without appropriate safeguards and engineering discipline.[1](https://arxiv.org/abs/2601.20879v1)

Good engineering practice was never just about aesthetics or professional pride. It was always about making systems that could be understood, changed, and trusted. AI does not change that goal.

The code still has to make sense. More than ever, it has to make sense to the machine.

***

### Further reading

1. [*A Survey on Large Language Model Impact on Software Evolvability and Maintainability: the Good, the Bad, the Ugly, and the Remedy*](https://arxiv.org/abs/2601.20879v1) (2026)
2. [*Large Language Models for Software Engineering*](https://nzjohng.github.io/publications/papers/tosem2024_5.pdf) (2024)
3. [*Enhancing Software Maintainability Through LLM‑Assisted Code Refactoring*](https://link.springer.com/chapter/10.1007/978-3-032-12089-2_10) (2025)
4. [*Evaluating the Impact of Test‑Driven Development on Software Quality Enhancement*](https://sciup.org/evaluating-the-impact-of-test-driven-development-on-software-quality-enhancement-15019349) (2024)
5. [*The Role of Test‑Driven Development in Enhancing Software Reliability and Maintainability*](https://papers.ssrn.com/sol3/papers.cfm?abstract_id=5034145) (2023)
6. [*An Empirical Study of AI‑Generated Build Code Quality*](https://www.arxiv.org/abs/2601.16839) (2026)
7. [Coding on Copilot: Data Shows AI's Downward Pressure on Code Quality](https://www.gitclear.com/coding_on_copilot_data_shows_ais_downward_pressure_on_code_quality) — GitClear
