---
title: "TDD from a Control Theory POV"
date: 2009-05-11 00:00:00 +0000
permalink: /posts/2009-05-11/tdd
description: ""
categories: 
  - agile
tags:
  - programming
  - agile
  - tdd
---

This is another way of looking at how Test Driven Development (TDD) helps to build better software.

Before becoming a developer I was an academic at University College London, where I helped build the world’s first [High-Performance Heterodyne Optical Injection Phase-Lock Loop Using Wide Linewidth Semiconductor Lasers](/assets/pdfs/highperf98_walton.pdf).

Lasers oscillate at high frequencies (it is light after all), and so the delay of a few hundred picoseconds around the feedback loop is significant and can result in the system becoming unstable.

Any system with feedback can become unstable if the delay around the loop is significant.

In software development there are a lot of feedback loops:

- syntax checking
- compilation
- type checking
- unit testing
- integration testing
- deployment
- bug reports
- etc.

Most software developers attempt to ensure that their software passes syntax checking and perhaps a compiler. Some don’t, but that's a different article.

If feedback takes days or weeks to arrive the codebase will have moved on significantly, making fixes more difficult as new code has already been built on top of the broken code.
The bug fixes themselves can introduce more new defects, resulting in increasingly painful fix phases.

Many overlapping loops like this are chaotic, particularly with large teams working on the same codebase.

This chaotic process results in developers working in a state of crisis leaving no time for refactoring, reflection about improving the codebase, or writing tests. It’s very demoralising as the deterioration in the codebase is inevitable.

The end result is a brittle, sprawling mess of a system that is now difficult to test and repair without heroic effort and buy-in from stakeholders who just want the next feature.

That story ends predictably …

TDD is the fastest feedback loop after syntax checking and compilation, it happens before code is pushed to the repo and minimises the chances of bugs surviving into production.

As new code is developed for new features, the existing suite of tests protect the developer against breaking existing code. It also helps the developer realise when a requirement
has not been thought through as breaking tests can also highlight something that hadn't been thought of when developing a new feauture.

TDD helps in a number of other ways:
- it helps you to think about _what_ your code will do before you think about _how_ it will do it
- it provides a safety net for all those refactorings you _will_ need to do
- it tells you that the code you _thought_ you wrote is what you _actually_ wrote

In summary, long delays in any system introduces instability.
The instant feedback obtained by TDD is a stabilising mechanism because the feedback is fast, ensuring that what is written is correct and that you haven’t broken anything else.

