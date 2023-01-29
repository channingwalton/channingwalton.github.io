---
title: "Software Quality - Syntactics"
date: 2009-05-11 00:00:00 +0000
permalink: /posts/2009-05-11/software-quality-syntactics
description: "Some thoughts about software quality inspired by the Vignelli Canon"
categories:
  - software
tags:
  - programming
  - quality
---

> “If you have built castles in the air, your work need not be lost; that is where they should be. Now put foundations under them”. Henry David Thoreau

This third article about Software quality is concerned with _syntactics_, by which I mean the syntax of collaborating components and systems, and the people that use them.

Syntactic components form the foundation of a software system and comprises many things from infrastructure components such as messaging systems and databases, to system metaphors and the languages upon which systems are build.

> The consistency of a design is provided by the appropriate relationship of the various syntactical elements of the project. Syntactic consistency is of paramount importance in graphic design as it is in all human endeavors. - Vignelli

For any system, whether it is a graphic design, a town or a complex software system, to sit well in the mind of the beholder, its components and their relationships to each other must be congruent. Nothing ever stands in isolation; everything is part of a greater system. It is just as jarring to the mind when software systems are syntactically inconsistent as it would be to hear the Westminster Boys Choir perform _Highway to Hell_.

Why does all this matter? For a graphic design or a town layout it matters a great deal that the component parts sit well together for aesthetic reasons or so that people can [live comfortably](http://www.amazon.co.uk/Timeless-Building-Center-Environmental-Structure/dp/0195024028/) together and thrive. I don’t think it is necessary to argue that point further. But what of software? Well of course it matters just as much!

## Software Developers

Software developers are masters of abstraction and quite literally build castles in the air, albeit that those castles live in their minds. When working with software a developer starts to feel at home in much the same way as one feels at home in a well designed physical space. They see parts of the system as places they visit and some of those places can be far less pleasant to visit than others. Some software is significantly more comfortable to inhabit than others.

Those castles in the air should be as pleasant to inhabit as the towns we aspire to live in. Part of what determines the habitability of code is its syntax. (I remind the reader again that I am not talking about the syntax of the implementation language although that is something worthy of consideration.) If the syntax doesn’t make sense then the castle will be dark, damp and generally unpleasant.

This idea is not a flight of fancy, it has real business benefit. If developers have to hold a confusing multidimensional labyrinth in their minds then mistakes will be made, bugs will be introduced into the system and customers will be unhappy.  A consistent syntax is a vital part of ensuring that the castle in the sky is habitable.

## Systems

The level at which systems collaborate is a rich source of confusion, bugs and general unhappiness. It is extremely common to find inconsistent syntax between systems which developers need to cope with on a daily basis even when the syntactic elements of each system are locally consistent. The cost of the extra work required to support these inconsistencies should not be underestimated. I would estimate that in banking systems it can be as much as a half of the total development effort and where most bugs lie.

The resulting confusion can be disastrous as the [Mars Climate Orbiter proves](http://en.wikipedia.org/wiki/Mars_Climate_Orbiter). It was destroyed when it reached the wrong height as a result of two collaborating systems using different units of measurement.

## People

Ultimately, an organisation’s suite of in-house software is used by people. Just as software developers need to keep multiple sets of syntactic elements in their minds, so too will the users that work with the software albeit to a lesser extent.

The resulting confusion, unnecessary work and mistakes when those systems are syntactically inconsistent costs the business money, and sometimes embarrassment, when mistakes are made or work takes longer than it should.

## Responsibility

It is ultimately the job of the CTO to ensure that systems built in-house are seen as components in a complex system that are syntactically consistent, amongst many other things that I will cover in this series of articles.

But everyone involved in building software systems must ensure that this kind of inconsistency is not allowed to happen. Users should not accept inconsistent or badly behaved systems, management should not allow it, and developers should not build them.
