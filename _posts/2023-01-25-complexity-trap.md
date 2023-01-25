---
title:       "Complexity Trap"
description: "An observation of how complexity can creep up on you"
date:        2023-01-25 00:00:00 +0000
permalink:   /posts/2023-01-25/Complexity
categories:
  - software
  - analysis
  - design
tags:
  - software
  - analysis
  - design
---

There comes a point in complex domains where only developers have anything close to a complete understanding of the system behaviour. If you're lucky.

I've worked on projects in finance and media that had reasonably complex behaviour. They start from basic requirements such as a simple, linear, workflow for bank workers to open accounts for new clients.

Then, in response to reasonable changes over time, things become complex. For example, the banker might need to ask the client questions so the application form is returned.

Later, the process needs to support multiple account holders so each account holder must complete an application form whilst the lead applicant completes more general details. All the forms must be collated and processed by the back office.

Then, automated identity checks are added to the process. They are asynchronous, taking minutes, so each relevant part of the application process for each account opener needs to be managed before the whole set of applications is sent for back office processing.

When the back office process involves multiple teams, with the potential for parts of applications to move between teams, things become even more complex.

That project had about 30 different stakeholder groups across the bank interested in different aspects of the system. *The only group that had the whole picture was the development team*. Analysts, managers, back office users, and other groups were unable to understand the whole system even though, collectively, they'd asked for all of it. And thats ok.

> Development is the crucible in which everything converges

## Was it wrong?

At every step in its evolution the system had features added for good reasons and it worked as intended. Everyone was happy because it automated a complex system that had been intensely manual. Accounts that took months to open were now opened in hours.

But, there was an uncomfortable accretion of complexity that didn't exist with the manual process because it wasn't feasible to manually do the things the system was doing.

Whilst the process was now rigorous and everything *could* be explained, users were nevertheless confused as they were seeing a small part of a much larger process.

It is difficult to know when complexity crosses the line where people, particularly non-devs, can comprehend everything. As developers we are able to look at code, technical docs, and tests, to help us. If users are not provided with similar tooling, which they won't necessarily ask for, they will ask questions that developers will need to spend time answering which is not efficient for anyone.

We should be sensitive to increasing complexity and explore solutions to reduce it. That can be difficult with large systems built from complex requirements arising from the needs of many stakeholders, each of which may not fully appreciate the problems they're creating for people who work directly with the system.

In our banking system, we ended up providing tools to help users see where applications were in the workflow and why, which was very helpful.
