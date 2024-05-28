---
title: Inline
description: Change a Markdown content block into an inline-block
subtitle: false
date: 2023-10-25 02:54:23+02:00
weight: 345
authors:
- Georg Makowski
categories:
- Markdown
tags:
- inline
menu:
  doc:
    name: Inline
    parent: attribute
    pre: padding
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

See the [Marginal note ](/doc/enhancing/shortcode/mnote) for an example, where this attribute allows placing the note easily beside the preceding text block.

This attribute may have unintended side effects. You better check all versions of your layout if you are not already familiar with them.
{.box-warn}