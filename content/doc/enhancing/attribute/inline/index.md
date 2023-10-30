---
authors: [Georg Makowski]
title: Inline
description: "Change a Markdown content block into an inline-block"
subtitle: false
date: 2023-10-25T02:54:23+02:00 
menu:
  doc:
    name: Inline
    parent: attribute
    pre: padding
categories: [Markdown]
tags: [inline]
weight: 345
---

We can change the default layout behaviour of a Markdown block from a full-width layout block to an inline block, in case we want to place another element besides this block.
{.p-first}
<!--more-->

## Syntax

```md
Text block of any kind …
{.inline}
```

## Layout

The attribute can change the order of surrounding layout elements but does not affect the style.

See [Marginal note ](/doc/enhancing/shortcode/mnote).