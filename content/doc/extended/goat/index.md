---
title: GoAT
description: Go ASCII Tool
subtitle: false
date: 2022-03-03 09:44:13+01:00
weight: 290
categories:
- Markdown
tags:
- Diagram
menu:
  doc:
    name: Goat
    parent: extended
    pre: schema
author:
- Georg Makowski
toc: false
---

GoAT renders ASCII diagrams as SVG and is a Golang implementation of Markdeep’s ASCII renderer.
{.p-first} <!--more-->

GoAt is not directly an extension of the Markdown renderer, but a special code block format within Hugo.

[Markdeep](http://casual-effects.com/markdeep/) provides the documentation to create ASCII diagrams for GoAT. We need to surround them with a [fenced code block](/doc/basic/code#code-block) and the language identifier `goat` like this:

```md
```goat
                     _________
.---------.         /        /        .-------.
|  Write  +---+--->/  Edit  +---+--->|  Share  |
'---------'   ^   /________/    |     '-------'
              |                 |
               '---------------'
```

Then, the ASCII-diagram gets rendered into a nice SVG diagram:

```goat
                     _________
.---------.         /        /        .-------.
|  Write  +---+--->/  Edit  +---+--->|  Share  |
'---------'   ^   /________/    |     '-------'
              |                 |
               '---------------'
```

These diagrams are always displayed with the full text width, there is currently no way to change their layout as for other diagrams in this theme.
