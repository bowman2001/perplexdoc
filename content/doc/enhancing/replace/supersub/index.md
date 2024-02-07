---
authors: [Georg Makowski]
date: "2021-03-23T22:21:23+01:00"
description: Tiny characters above or below the baseline
menu:
  doc:
    name: Super- & Subscripts
    parent: replace
    pre: superscript
title: Super-, Subscripts and Fractions
linktitle: Super- & Subscripts
resources:
  - name: featured
    src: artturi-jalli-gYrYa37fAKI-unsplash.jpg
    params:
      alt: Blackboard with Einsteins most famous formula
weight: 420
categories: [Markdown]
tags: [replacement]
---

For occasional vertically shifted characters, these replacement codes are sufficient.
{.p-first} <!--more-->

For complex mathematical or chemical formulas, [LaTeX notation][latex] is probably the better choice.

## Syntax

```md {.left-in}
x{‍_4} x{‍^4} {‍^3}&frasl;{‍_4}
```

The HTML entity `&frasl;` corresponds to a fraction line.

## Layout

x{_4} x{^4} X{_4} X{^4}   x{_3} x{^3} X{_3} X{^3}&emsp;{^3}&frasl;{_4} 

Compare the theme styling to the one the Plex fonts provide as special Unicode numbers:

x₄ x⁴   X₄ X⁴ x₃ x³   X₃ X³&emsp;³&frasl;₄

These glyphs are very small and the subscripts are not placed consistently. Therefore, I recommend replacements that also work for other characters like alphabetical indices and the 1{^st}, 2{^nd}, 3{^rd}, 4{^th},…

### Chemical Formula

Ethanol with the structural formula C{_2}H{_5}OH is better known as _the_ alcohol.

### Mathematical Formula

Simple formulas like E = mc{^2} or functions like f(x) = 3x{^2} + 5x{^5}.

### Fractions

Every fraction like {^232}⁄{_747} may be included using super- and subscripts with a fraction line (entity `&frasl;`) in between them.

[latex]: /doc/plugin/latex
