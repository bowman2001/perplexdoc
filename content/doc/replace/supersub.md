---
date: "2021-03-23T22:21:23+01:00"
description: Tiny glyphs above or below the baseline
menu:
  doc:
    name: Super- and Subscripts
    parent: replace
    pre: superscript
title: Super- and Subscripts
weight: 10
---

When you need only a few super- or subscripts in your text, the replacement codes are there for you. When you want to include complex mathematical or chemical formulas you are certainly better off with [LaTeX][latex].

## Syntax

Replacement codes are surrounded by the curly braces `{` and `}` and begin with `^` for super- and `_` for subscripts. 

## Layout

x{_4}&ensp;x{^4}&emsp;X{_4}&ensp;X{^4} &emsp; x{_3}&ensp;x{^3}&emsp;X{_3}&ensp;X{^3} g{_5}

Compare the _Perplex_ styling to the one *Plex* fonts provide — unfortunately only for numbers. We can use them as *Unicode* glyphs:

x₄&ensp;x⁴ &emsp; X₄&ensp;X⁴&emsp;x₃&ensp;x³ &emsp; X₃&ensp;X³

This styling may be a good choice under special circumstances, the following examples include the _Perplex_ styling.

### Chemical Formula

Ethanol, the alcohol with the structural formula C{_2}H{_5}OH is better known as _the_ alcohol.

### Mathematical Formula

A simple function f(x) = 3x{^2} + 5x{^5} is looking good.

### Fractions

Every fraction with small numbers like {^2}&frasl;{_3} or big ones like {^23}&frasl;{_747} may be included using super- and subscripts with a fraction line (entity `&frasl;`) in between them. 


[latex]: {{< relref "latex" >}}
