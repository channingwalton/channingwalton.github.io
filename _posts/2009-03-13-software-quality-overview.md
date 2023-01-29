---
title: "Software Quality - Overview"
date: 2009-10-13 00:00:00 +0000
permalink: /posts/2009-10-13/software-quality-overview
description: ""
categories: 
  - quality
  - software
tags:
  - programming
---


Walk into a room of software developers and invariably the conversation will turn to the dreadful quality of code in their workplace or the industry.

Developers will speak passionately about such details as Test Driven Development, loose coupling, inversion of control. Or how much better things would be if they could use languages like Ruby/Scala/Clojure/Lisp/Haskell (if they talk about Haskell then hire them).

But the production of high quality software is much deeper than simply following a set of rules such as _write small methods_. So what does Quality mean and how does it apply to software?

This blog was inspired by the <a href="/assets/pdfs/Vignelli-Canon.pdf">Vignelli Canon</a> that describes basic principles for young designers. Those principles are also applicable to software and will help illuminate the path to Software quality.

But we should take care. Quality is profoundly rooted in how we regard the world physically, intellectually and emotionally. It is the sum of many things combining to form a greater whole. Its _emotional_ aspect ultimately renders attempts to formulate laws or rules to guarantee Quality futile. Whilst craftsmen are guided by intellectual and physical principles or rules of thumb, above all they are guided by an aesthetic sense developed over a lifetime of experience. Quality is deeply felt and so whilst laws and rules are essential, they are only a prerequisite to Quality, not a guarantee of a high Quality outcome.

Most people recognise Quality when they see it even if the subject is beyond their understanding. They might not even like the object in question, they might find it not to their taste, but nevertheless recognise that the object in question is of high quality, crafted by people who truly care about what they do. There are many examples of modern art I would not want hanging on my wall, but I appreciate its quality and the care that went in to producing it.

Another interesting aspect of Quality is that an object can be regarded to be _of high Quality_ even if it is flawed. Quality is not about perfect execution. A computer may play music perfectly, but no one wants to listen to it. Sometimes, imperfection is what we value or irrelevant. None of this is surprising since Quality is emergent, and flaws, within limits, are part of the total.

## And so software…

I carried out a little experiment recently. I asked my wife (not a programmer) to look at some samples of code and asked her to guess which were better. In seconds she picked the higher quality samples, in my opinion, correctly. I did not give her any guidance at all so why she picked the better code samples is interesting. Maybe she is a master programmer and never knew it? But, I did cheat a little by picking very good quality code and very poor quality code. She obviously couldn’t tell me why she chose the samples she did other than to say that they just seemed better. The lower quality code looked like a mess.

Whether this experiment is particularly valid or not is debatable but it does illustrate something that programmers do. When they see some code for the first time they thumb through it, metaphorically speaking. At first they don’t spend much time trying to figure out how it works, they just want to get a _sense_ of the codebase. Their first impressions are made very quickly and quite often are found to be correct after time working with the code.

An experienced programmer is looking for many things whilst thumbing through the codebase:

- Semantics
- Syntactics
- Pragmatics
- Discipline
- Appropriateness
- Ambiguity
- Design is One
- Visual Power
- Intellectual Elegance
- Timelessness
- Responsibility
- Equity

Conveniently, these also correspond to the section of Vignelli’s Canon. I’ll be tackling each in turn where they apply to software.

## An aside

Software is very, very difficult to produce well and takes [years of practice](https://web.archive.org/web/20101023112746/http://norvig.com/21-days.html "Norvig's 21 Days") and active learning for a programmer to produce high quality software. (I use the word _produce_ quite deliberately here for clarity; physically _writing_ software is easy, conceiving an elegant design and executing its coherent realisation is difficult.) A young developer might well look at software written by an old master and easily understand the code in the small but find some aspects of the code difficult to grasp. This is to be expected because as a developer learns more, the range and depth of techniques available to them may enable levels of abstraction too difficult for inexperienced developers to grasp.

Many developers I respect greatly as software craftsmen have learnt the power of languages like Lisp and Haskell. These are elegant languages enabling a great deal of expression and creativity. But they require a deeper knowledge and experience to apply them well than languages like Java. They can also be difficult for beginners to grasp even at the most basic level. This is common in many crafts where the tools and techniques of master craftsmen are too difficult or dangerous for novices to use: the reeds of wind instruments, the live katana of Iaido masters, or free climbing.