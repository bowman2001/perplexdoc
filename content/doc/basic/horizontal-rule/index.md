---
title: Horizontal Rule
linktitle: Rule
description: Strong separation of page segments
subtitle: false
date: '2021-03-25T10:39:36+01:00'
weight: 140
authors:
- Georg Makowski
categories:
- Markdown
tags:
- Block
menu:
  doc:
    name: Horizontal Rule
    parent: basic
    pre: horizontal_rule
resources:
- name: featured
  src: miti-WmmcTOe3vqA-unsplash.jpg
  params:
    alt: Straight condensation trail behind an airplane
---

Sometimes the separation of page segments by space is not clear enough. Then we can add this layout element as an explicit visual separation.
{.p-first} <!--more-->

## Syntax

```md {.left-in}
*** or ---
```

The horizontal rule is depicted by three asterisks or three hyphens at the beginning of a line. We may separate the characters by one space: `* * *` or `- - -` or indent them by up to three spaces. No other characters are allowed to follow on the same line.

## Layout

{{% pangram 4 %}}
{.placeholder data-pagefind-ignore="all"}  

- - -

{{% pangram 4 %}}
{.placeholder data-pagefind-ignore="all"}

We can also emphasize a hero quote with surrounding rules:

- - - 
> {{% pangram 5 %}}
> --- Z. Bubblebrox
{.blockquote-hero data-pagefind-ignore="all"}
- - -