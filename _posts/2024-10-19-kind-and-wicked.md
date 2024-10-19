---
title: "Kind and Wicked"
description: "Dealing with kind and wicked learning environments in software"
date: 2024-10-19 00:00:00 +0000
permalink: /posts/2024-10-19/kind-and-wicked
categories:
  - programming
  - learning
tags:
  - programming
  - learning
---

The psychologist Robin Hogarth introduced the concept of "kind" and "wicked" learning environments to explain why experience doesn't always lead to improved performance.

Kind learning environments are those where the rules are clear and feedback is immediate and accurate, such as board games. Wicked learning environments are the opposite with unclear rules, delayed or uncertain feedback, and is common in real-world, complex systems involving human beings. A kind environment doesn't mean an easy environment, just that the means of establishing progress and measuring mastery are clear.

Computer Science is a kind environment: the syntax of programming languages is well-defined, errors are immediately highlighted by compilers or interpreters, and feedback is clear and precise. Many algorithms such as sorting or searching are also kind problems with clear objectives and outcomes. Computer scientists can verify the correctness of algorithms mathematically, or through test cases, receiving straightforward feedback that guides learning and improvement.

As software developers, we make our environments kinder with tools and techniques, although sometimes we make it a lot worse but that is a different story. An example is unit testing, which helps to create a kinder environment by setting clear expectations for each unit of code and provides fast, immediate, and accurate feedback about the code under test.

However, designing large-scale systems is very often a wicked environment in more ways than one. Goals and requirements are unclear, frequently change, and are full of contradictions as many interested groups bring their particular needs and perspectives to the system. The work of engineers and analysts is to gather that mess of requirements, ideas, constraints, and produce something coherent in a continuously deliverable way, that is capable of evolving and growing with changing needs: *Building the plane while flying*.

The trick, the art, is to turn those wicked problems into a stream of coherent, kind problems that can be built and delivered thousands of times over many years, delivering value, without being crushed under the weight of previous mistakes *that will be made*.

To my mind, this is a central difference between (computer) science and (software) engineering - an argument for another day perhaps.

In many projects I've worked on, when I finally sit down to write code there is a sense of relief that finally I can do something concrete that has a clear direction and outcome. But that only happens when sufficient analysis and planning has been done well, when all the wicked problems have been tamed and a set of kind problems has been left. If developers sit down to code without that sense of clarity, they should stop and reconsider what they're about to do.

Bringing this back to learning, the problem with these wicked projects is that they are wicked learning environments too. After years of working in software it often feels as though you have learned a huge amount and nothing at all, or at least nothing that can be distilled and taught succinctly. It is also easy to confuse the depth of learning achieved on the kind side of programming with having any depth of understanding of the wicked side.

Conferences, books, blogs, and videos, are full of great, important, and necessary, material that largely address kind problems: testing, programming techniques, new languages and paradigms. But we very rarely hear solutions to the really difficult, wicked problems, which is understandable because its almost impossible to quantify or distil those problems to something generally applicable.

In one of the first software projects I worked on there were a couple of older developers on the team that I found frustrating at times because they seemed ponderous when I wanted to get to the code because *I knew the way forward*.

I quickly learned that when one of them went quiet, frowned, and said, "Hang on a minute youngster", ripping the keyboard from under my fingers, I should stop and listen. What they said involved gut instincts and feelings that weren't concrete, they struggled to pinpoint exactly what was bothering them, but *there be dragons here* and they were invariably right. They saw problems and eventually solutions I couldn't yet.

Often, what they were seeing were analogies with other systems in totally unrelated domains that they had worked on, and had *simpler solutions* to the ones we were blundering in to.

Experience really matters in the wicked world, but, as Hogarth found, not always. However, it is all we have!

If you have read this far and are hoping for a punchline, a brilliant solution to tackling these wicked problems … sorry, I don't have one because … well, see above.

But I can say the following:

Look out for the wicked problems, you'll know them by the behaviours they produce: analysis paralysis, confusion, arguments, people shifting uncomfortably in their seats and warning of dragons, developers bringing up lots of issues.

When all is said and done, the place where ideas become reality is in the building of a thing where problems materialise. Dismiss or diminish these issues as technical concerns at your peril, and even if they were technical issues that is still a business issue.

Look out for teams and people that seem to consistently deliver and learn from them, I call them <a href="/posts/2015-09-15/what#silent-running">silent runners</a>. They're the ones drowning in a sea of green at the bottom of your RAG reports, and people often say, "Oh, their problems are simple" … really?

Finally, the real question we need to ask ourselves as an industry is how can we learn from the wicked environment we find ourselves in, and teach what we can to the next generation of engineers?

