---
title:  "Evergreen Software Documentation"
description: "Software Documentation is hard to do, tedious to maintain, unsatisfactory, and always wrong."
date:   2021-02-20 21:30:30 +0000
permalink: /posts/2020-02-20/EvergreenSoftwareDevelopment
categories:
  - software
  - documentation
tags:
  - zettelkasten
  - software
  - documentation
---

Software Documentation is hard to do, tedious to maintain, unsatisfactory, and always wrong.

The problem is that the information is both a [heterarchy](https://en.wikipedia.org/wiki/Heterarchy) and kind of a [hermeneutic circle](https://en.wikipedia.org/wiki/Hermeneutic_circle), which is why managing that knowledge with traditional tools — Word, Powerpoint, Readme's — is so hard. Various document management systems are available but they don't suit everyone, particular software developers, and just raise barriers to people getting their thoughts down.

The result is that documentation just isn't done, or at best a few documents are produced from different points of view for different audiences — APIs for developers, powerpoint for management, etc., but nothing really captures everything or provides any means of discovery, learning, or synthesis of new ideas.

But perhaps we can improve on this by drawing on the experience of knowledge management and in particular from systems like [Andy Matuschak's](https://andymatuschak.org) [Evergreen Notes](https://notes.andymatuschak.org/Evergreen_notes), [Linking Your Thinking](https://publish.obsidian.md/lyt-kit/_Start+Here) and [Niklas Luhman's](https://en.wikipedia.org/wiki/Niklas_Luhmann) [Zettelkasten](https://zettelkasten.de/posts/overview/) system.

## What was that?

A quick aside — the [Linking Your Thinking](https://publish.obsidian.md/lyt-kit/_Start+Here) website looks interesting, you might be wondering what that was. It was published from [Obsidian.md](https://obsidian.md), a tool that enables everything I'm about to discuss, but from a personal point of view. Documents are written in markdown, linked simply like a wiki, with tags, and importantly, automatic discovery of missing links, and an [amazing graph](https://pbs.twimg.com/media/EjHkSkuXYAM3o9_?format=jpg&name=large) of all your notes.

Back to the point …

## Evergreen Notes

Andy Matuschak describes his notes in detail on his [website](https://notes.andymatuschak.org/Evergreen_notes), which is itself an example of evergreen notes. The summary is:

- [Evergreen notes should be atomic](https://notes.andymatuschak.org/z4Rrmh17vMBbauEGnFPTZSK3UmdsGExLRfZz1)
- [Evergreen notes should be concept-oriented](https://notes.andymatuschak.org/z6bci25mVUBNFdVWSrQNKr6u7AZ1jFzfTVbMF)
- [Evergreen notes should be densely linked](https://notes.andymatuschak.org/z2HUE4ABbQjUNjrNemvkTCsLa1LPDRuwh1tXC)
- [Write about what you read](https://notes.andymatuschak.org/zg3fYweZpbHeBTpcYke5mF4ZfrJutYcQEtFo)
- [Use a reading inbox to capture possibly-useful references](https://notes.andymatuschak.org/z3N113rxPFreW9xUkLkUFomr2LUqfXbdCo3M)

## Organisation: an Inbox and Permanent Notes

There are two main places for notes: the inbox and permanent notes.

The inbox is important, it allows you to throw ideas into it as they cross your mind, freeing you to return to it later. The *whole* point is to minimise the impedance to writing.

Moving notes from the inbox to the permanent *evergreen forest* of notes can be done at leisure, and its where the fun is — add ideas to existing notes, create new ones, link notes, etc.

But don't forget the simple rules, particularly that notes should be atomic. If they start getting too big, break them up and link them.

Evergreen notes live in a flat structure, not directories, because we want to keep things simple, but having a densely linked set of atomic notes in a flat structure isn't enough.

We need a way to navigate the forest …

## Maps of Content

[Linking Your Thinking](https://publish.obsidian.md/lyt-kit/_Start+Here) introduces the idea of *Maps of Content* (MOCs) to solve the problem of becoming lost in the forest. I suggest you [read](https://publish.obsidian.md/lyt-kit/MOCs+Overview) their site about MOCs as there is no point reproducing that here.

**TLDR;** MOCs are notes that collate other notes by linking to them, possibly with a narrative, but they are more than just a table of content. Tables of content are rigid, but MOCs link to notes and add their own spin, they sit above the forest of notes, forming a second layer of abstraction and can be notes themselves.

For personal knowledge management systems MOCs might just be simple collections of links to notes, but for software documentation they could be used as a means of a progressively summarising the detailed notes for different purposes: architecture, design overview, etc., — *MOCs all the way up*.

I find the idea of MOCs very liberating as it unburdens you from having to think about a conventional document structure in which information has to reside, locked away in one place.

Notes are free, MOCs independently provide structure.

## Evergreen Software Documentation

The proposition is to use evergreen notes and LYT's MOCs to document software systems and everything related to them.

**Easy to write:** The fundamental atomic notes are easy to write because they are small, focussed, and enable people to write what they are thinking without forcing them to think about which document(s) their important thought should live in — which stops everyone from writing anything — if they can find it!

**Write documents with ease:** Something that has been discovered by researchers and writers using these techniques is that *when you have a richly interconnected set of notes, writing becomes very easy*. You never have to start writing from a blank page as there is a wealth of information to collate from in the form of your notes. The first draft is already written!

It has been said the problem now is having *too much* to write about rather than too little.

**External documents:** External documents managed in other systems is inevitable. I suggest that any external document has a proxy note so that it can be referenced easily.

**Evergreen:** Notes are easy to keep up to date, as they are small, discrete, focussed, searchable, plaintext, and easy to modify.

**Discoverable:** Tools can assist in finding relationships between notes. For example, when a document's name appears in another document but not actually linked a tool such as [Obsidian's Unlinked Mentions](https://publish.obsidian.md/help/How+to/Working+with+backlinks) can see that and suggest adding a link.

Surprising ideas can emerge as relationships between notes emerge.

**For everyone:** A wiki could form the basis of this system so that everyone can contribute, but a better idea might be to simply put the notes in a git repository and use Obisidian to work with them. That may be a bit technical for non-techies, but dealing with merging isn't difficult for plain text, and there are [plugins](https://github.com/denolehov/obsidian-git) for Obsidian to automatically sync with a git repo.

**Scary:** To some, abandoning preconceived notions of structure is scary and so they might resist, preferring to continue with their own system. But I suspect the advantages will outweigh any concerns pretty quickly.

**Tool Support:** It is necessary to use something like a Wiki or Obisidian to facilitate discovery and navigation. If the notes are in a shared repository then anyone can check them out and use Obisidian to work with the Notes as all it needs is a folder of markdown documents.

**The forest is where you think:** Having a searchable, interconnected system of notes forms a second brain and a place to help you think and discover new information or ideas, a critical result of Luhman's Zettelkasten and the reason he gave for his enormous productivity (70 books, 400 articles). With the complexity of software it would be fascinating to see what emerges. (See [Luhman on thinking with slip boxes](http://luhmann.surge.sh/communicating-with-slip-boxes).)

**Its all about the maps:** MOCs are where notes are brought together to form a narrative for a particular audience, drawing on external documents if necessary, but try to keep information in the notes. The MOCs themselves are just notes and can easily be linked to from another MOC or note.

## Johnny Decimal

If having absolutely no structure for your permanent notes sounds a bit crazy, you could consider using the [Johnny Decimal](https://johnnydecimal.com) system.

**TLDR;** arrange content in at most ten folders called *areas*, with at most ten sub-folders called *categories*, which is enough for anything mainly because people can't cope well beyond that.

Each area and category is prefixed with a two digit number, and notes are placed in categories prefixed by their category number followed by an incrementing number:

    10-19 Finance
        11 Tax Returns
        12 Payroll
            12.01 Staff bank details
            12.02 Payroll Spreadsheet
            …
        …
    20-29 Administration
        21 Company
        22 Contracts
        …

The idea is that people will get used to the numbers pretty quickly and so have a shorthand to refer to things.

I don't like the numbering part of this idea as it seems to be adding something that isn't really needed, but I thought I'd put it out there, someone might find it useful.

## Final Thoughts

There is a great deal that software people could learn about managing complex systems of information from other disciplines. We are very good at creating complexity, just not very good at managing it.

Reducing the impedance to writing documentation in the first place is critical! Just knowing there is a simple place to put ideas or information greatly increases the ease with which people can write.

Evergreen notes is a simple concept, which is very important as we don't want complexity to get in the way of us writing. Keep the notes focussed on a single idea, link and tag them.

MOCs enable us to navigate the notes, they are maps offering a way of representing the notes in different ways, from different points of view, flexibly and independent of the notes themselves. Contrast this with a more traditional document approach where information is locked into a single view and has to be copied when its needed again.

Using a system like this for software would be an interesting experiment, I don't think anyone has tried doing this kind of thing collectively but I'd be happy to learn others have had this idea before me — I'd be astonised if someone hadn't already.

## Interesting Stuff

- [Evergreen Notes](https://notes.andymatuschak.org/Evergreen_notes)
- [Linking Your Thinking](https://publish.obsidian.md/lyt-kit/_Start+Here)
- [Zettelkasten Overview](https://zettelkasten.de/posts/overview/)
- [Luhman on thinking with slip boxes](http://luhmann.surge.sh/communicating-with-slip-boxes)
- Sönke Ahrens's [How to take Smart Notes](https://smile.amazon.co.uk/How-Take-Smart-Notes-Nonfiction/dp/1542866502/) and his [video](https://www.youtube.com/watch?v=nPOI4f7yCag)
- [Creating the Brainforest](https://www.youtube.com/watch?v=dddIzjZ_WUo)

---
