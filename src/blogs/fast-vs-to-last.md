---
slug: 'build-it-fast-or-build-it-to-last'
date: '2022-09-30'
title: 'Build it fast or Build it to last'
publish: '2022-10-02'
tags: 'planning, architecture'
summary: 'When building software we often have to chose between building it fast or building it to last.  Both have their place.  In this blog post we explore when to chose to build fast and when to chose to build it to last.'
---

I had a few moments to reflect this morning and wanted to share a thought that came to mind. This thought has its genesis in a number of conversations, situations and decisions that my teams at work have been faced with recently. Examples of these include compliance and vulnerability management, large application platform migrations, and application architecture and UI refresh planning for critical systems.

The thought is that there are, abstractly speaking, two approaches to building software:

-  Build it quickly

   -  Get to market quicker and capture the market (Twitter, Facebook)
   -  Rapidly learn from iteration

-  Build it to last

   -  Take the time to ensure quality (Commercial Airplanes, Apple)
   -  Consider the long tail of costs/benefits
   -  Think through the problems and learn from controlled evaluation and experimentation

Both strategies are valuable for different reasons. The question is when to employ each?

-  Build it quickly when:

   -  You are in competition to win market share
   -  You are unsure if the idea will stick (market fit/validation)
   -  You are fully aware of the trade-offs and make them explicitly

      -  Real understanding that technical debt will be paid down after market fit/traction but before implosion from that debt

   -  Iteration is the fastest path to success and the downsides of failure are within a known tolerance range

-  Build it to last when:

   -  Winning the market or market strategy is highly dependent on quality
   -  Building a critical system that others depend on
   -  Failure is highly expensive (costs, lives, reputation, etc)
   -  Expectation that the product will last/exist for a long duration (5+ years)

The right answer is often an informed mixture of the two. For example:

-  Build it quickly:

   -  How should this feature operate? → Know your customer, create a few hypotheses based on data/knowledge and run quick experiments to validate your hypothesis

-  Build it to last:

   -  Application architecture, Security → these are costly items to revamp or to patch in afterwards. Companies/products that fail to understand this often fail even if they find product market fit due to constant crashes and security breaches that lead to loss of customer confidence
