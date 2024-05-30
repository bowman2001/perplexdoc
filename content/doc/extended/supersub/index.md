---
title: Super-, Subscripts, and Fractions
linktitle: Super- & Subscripts
description: Tiny characters above or below the baseline
date: '2021-03-23T22:21:23+01:00'
weight: 285
authors:
- Georg Makowski
categories:
- Markdown
tags:
- replacement
menu:
  doc:
    name: Super- & Subscripts
    parent: extended
    pre: superscript
resources:
- name: featured
  src: artturi-jalli-gYrYa37fAKI-unsplash.jpg
  params:
    alt: Blackboard with Einstein's most famous formula
---

There is an extra markup in Hugo for vertically shifted characters in normal text.
{.p-first} <!--more-->

For complex mathematical or chemical formulas, [LaTeX notation][latex] is probably the better choice.

## Syntax

```md {.left-in}
x~4~ x‍^4^ ^3^&frasl;~4~
```

The HTML entity `&frasl;` corresponds to a fraction line.

## Layout

x~4~ x^4^ X~4~ X^4^   x~3~ x^3^ X~3~ X^3^&emsp;^3^&frasl;~4~

Compare the theme styling to the one the Plex fonts provide as special Unicode numbers:

x₄ x⁴   X₄ X⁴ x₃ x³   X₃ X³&emsp;³&frasl;₄

These glyphs are very small and the subscripts are not placed consistently. Therefore, I recommend using markup that also works for other characters like alphabetical indices and the 1^st^, 2^nd^, 3^rd^, 4^th^,…

### Chemical Formula

Ethanol with the structural formula C~2~H~5~OH is better known as drinking alcohol.

### Mathematical Formula

Simple formulas like E = mc^2^ or functions like f(x) = 3x^2^ + 5x^5^.

### Fractions

Every fraction like ^232^⁄~747~ may be included using super- and subscripts with a fraction line (entity `&frasl;`) in between them.

[latex]: /doc/plugin/latex
