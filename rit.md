---
title: Ritronome
author_profile: true
layout: single
---

This is an experimental metronome that can change tempo.

You can use it to practice changing tempo in that particularly difficult piece of music you're learning. For example, you can practice changing from 90 bpm to 60 bpm over a couple of bars, and back to tempo again.

## Format

    Any text is ignored so you can write notes.
    
    The first number must be the number of beats per bar:
    4

    Then set the number of bars at a some tempo:
    2 60
    So thats two bars at 60 BPM

    To change tempo instantly write the next bars and their tempo:
    2 120

    If you want to slow down (or speed up)
    over a number of bars then write the
    number of bars and the start and end tempo:
    2 60-40

## Enter your own tempo description below
{% include_relative assets/ritronome/rit.html %}

Remember to save your work by copying it to a text file if you want to come back to it later.