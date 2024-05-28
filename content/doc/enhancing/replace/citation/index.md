---
title: Referencing the work of others
linktitle: Citation Source
description: Mark external sources
date: '2021-08-26T20:15:12+02:00'
weight: 440
authors:
- Georg Makowski
categories:
- Markdown
tags:
- replacement
menu:
  doc:
    name: Citation Source
    parent: replace
    pre: format_quote
resources:
- src: gatien-bataille-ngu1d-CPbB4-unsplash.jpg
  name: featured
  params:
    alt: 'A sign on a tree cites Martin Luther King in French: “Croyez en vos rêves
      et ils se réaliseront peut-être. Croyez en vous et ils se réaliseron sûrement.”'
---

This replacement code wraps the HTML `<cite>` tag around the marked content.
{.p-first}
<!--more-->

The `<cite>` tag has changed its purpose over time. In the past, it has been used to mark the name of authors. Today it marks creative works like books, magazines, newspapers, poems, paintings, songs, movies, etc…&hairsp;. For online sources, we may combine the citation with a link.

## Syntax

```md {.left-in}
{‍=Name of work} 
```

The first curly brace is followed by an equation sign.

## Layout

{=Name of work}
{.layout-box}
