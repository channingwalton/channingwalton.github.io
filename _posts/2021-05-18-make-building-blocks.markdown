---
layout: post
title:  "Make Building Blocks"
date:   2021-05-18 10:00:00 +0000
categories:
  - software
---

How do we write software that is simple, extensible, composeable? This is a very difficult question to answer.

Good software has *Quality Without a Name*, a phrase coined by Christopher Alexander in his book
*The Timeless Way of Building*, a quality that is hard to create and describe but we all know it when we see it.

The best we can do is to find heuristics which help us produce simple, beautiful software, and here
I discuss what I believe to be the most fundamental step which is so often not done.

## Axioms

1. A well designed system is built from well designed components built from smaller well designed components built from well designed elements such as functions, data types, objects, etc. The paradigm – functional programming, object orientation, etc., really doesn't matter, they all offer the means to write well designed systems.
2. Well designed components, compose well.
3. For composition to be possible, composeable elements must exist.
4. For a thing to be quickly and easily understood by a human, it must be comprised of a small number of elements, six at most for the average mind. With experience we are able to chunk information and hold more information, but we are still limited to six chunks.

## Decomposition

### New Code

[Programming by wishful thinking](https://mitpress.mit.edu/sites/default/files/sicp/full-text/sicp/book/node28.html)
is a good technique to produce code that is made from lots of small parts, from the classic book,
[SICP](https://mitpress.mit.edu/sites/default/files/sicp/full-text/book/book.html) by Harold Abelson and Gerald Sussman.

Instead of writing code in a depth first traversal, which is error prone, stressful, and frustrating,
write code assuming the functions you need already exist. This means that you are only having to
think at one level of abstraction, since anything you need at a lower level *already exists*, in the future.

Also, you're likely to write code that resembles a description of the algorithm:

```python
def makeTea
    hotWater = getHotWater
    pot = getPot
    tea = getTea 
    pot.with(water).with(tea)
end
```

### Existing Code

The most fundamental step to satisfy the axioms is simply to *extract*. The parts of methods,
functions, procedures, expressions, and so on, should be extracted out until those functions
are [tiny](https://twitter.com/deusaquilus/status/1394011278843199491?s=20) – one
expression or one control structure in a function or method.

Larger scale structures such as classes, packages, or modules, are not of concern yet, all
that matters is the work of pulling the code apart at the lowest level until everything is
laid out before you, like pieces of lego.

## Composition

The result of both the approaches described will be many small functions around the
places they were extracted from, which may not be very useful in general,
but there are important consequences.

First, people reading the code will have an easier time understanding those smaller functions.
Of course, readers still need to understand the whole program, but they will
find it a lot easier to do that if the program is composed of small parts.

Second, having lots of small functions enables the programmer to stand back and
form a bigger picture. They might notice duplication, or groups of functions
that relate to each other, or remember other functions in other places that look
the same. They're now able to start building structures at a higher level of
abstraction. Without those small functions they could not do that.

## Thoughts

This seems too simple, but it is a prerequisite to being able to understand what
the code is built *of*. The programmer still needs to make good choices about
how to compose those functions, but at least they have the possibility to do it
now. Without decomposed functions, there can be no composition.
