---
author: Georg Makowski
date: "2021-03-23T22:21:23+01:00"
description: Tiny glyphs above or below the baseline
menu:
  doc:
    name: Super- and Subscripts
    parent: replace
    pre: superscript
title: Super- and Subscripts
weight: 420
categories: [Theme]
tags: [Replacements]
---

When you need only a few super- or subscripts in your text, the replacement codes are there for you.
{.p-first} <!--more-->

Should you plan to include complex mathematical or chemical formulas you are probably better off with [LaTeX notation][latex].

## Syntax

Replacement codes are surrounded by the curly braces `{` and `}` and begin with `^` for super- and `_` for subscripts.

## Layout

x{_4} x{^4} X{_4} X{^4}   x{_3} x{^3} X{_3} X{^3}

Compare the Perplex styling to the one the Plex fonts provide directly — unfortunately only for numbers. We can use them as Unicode glyphs:

x₄ x⁴   X₄ X⁴ x₃ x³   X₃ X³

The numbers are very small and the subscripts are not on the same line (this may be due to a missing CSS configuration parameter). Therefor, the following examples demonstrate the theme replacements.

### Chemical Formula

Ethanol, the alcohol with the structural formula C{_2}H{_5}OH is better known as _the_ alcohol.

### Mathematical Formula

A simple function f(x) = 3x{^2} + 5x{^5} is looking good.

### Fractions

Every fraction with small numbers like {^2}⁄{_3} or big ones like {^23}⁄{_747} may be included using super- and subscripts with a fraction line (entity `&frasl;`) in between them.

[latex]: {{< relref "latex" >}}
