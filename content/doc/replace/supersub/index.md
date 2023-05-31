---
authors: [Georg Makowski]
date: "2021-03-23T22:21:23+01:00"
description: Tiny characters above or below the baseline
menu:
  doc:
    name: Super- and Subscripts
    parent: replace
    pre: superscript
title: Super-, Subscripts and Fractions
resources:
  - name: featured
    src: artturi-jalli-gYrYa37fAKI-unsplash.jpg
    params:
      alt: Blackboard with Einsteins most famous formula
weight: 420
categories: [Markdown]
tags: [replacement]
---

When you need a few shifted tiny characters in your Markdown, these replacement codes are there for you.
{.p-first} <!--more-->

Should you plan to include complex mathematical or chemical formulas you are probably better off with [LaTeX notation][latex].

## Syntax

```md {.left}
x{‍_4} x{‍^4}  {‍^3}&frasl;{‍_4}
```

The additional HTML entity `&frasl;` places a fraction line.

## Layout

I’m showing are a few more examples for comparison: 

x{_4} x{^4} X{_4} X{^4}   x{_3} x{^3} X{_3} X{^3}&emsp;{^3}&frasl;{_4}

Compare the Perplex styling to the one the Plex fonts provide directly — unfortunately only for numbers. We can use them as Unicode characters:

x₄ x⁴   X₄ X⁴ x₃ x³   X₃ X³&emsp;³&frasl;₄

The numbers are very small and the subscripts are not on the same line (this may be due to a missing CSS configuration parameter). Therefore, the following examples demonstrate the theme replacements.

### Chemical Formula

Ethanol, the alcohol with the structural formula C{_2}H{_5}OH is better known as _the_ alcohol.

### Mathematical Formula

Simple formulas like E = mc{^2} or functions like f(x) = 3x{^2} + 5x{^5}.

### Fractions

Every fraction like {^232}⁄{_747} may be included using super- and subscripts with a fraction line (entity `&frasl;`) in between them.

[latex]: /doc/plugin/latex
