---
authors: [Georg Makowski]
title: Position
description: Shrink & Move small Markdown blocks to the left or the right
subtitle: false
date: 2023-11-04T12:37:11+02:00
menu:
  doc:
    name: Position
    parent: attribute
    pre: format_image_left
resources:
  - name: featured
    src: sigmund-_dJCBtdUu74-unsplash.jpg
    params:
      alt: wireframe
categories: [markdown]
tags: [attribute]
weight: 331
---

When the content of a block fits nicely into a single column we can shrink & move it to the left or the right.
{.p-first}
<!--more-->

## Syntax

The attributes for the left side are called `.left`, `.left-in-half`, and `.left-in`. The attributes for the right side follow the same scheme.

`.left`
: moves the column to the left in case the margin is available.

`.left-in-half`
: places the column with one half in the margin and with the other one in the text block.

`.left-in`
: places the column always inside the text block.
{.dl-loose}

## Layout

In addition to the position class attributes the following examples include the class attributes for text-aligning `.ta-right` and `.ta-left`.

### `.left`
> {{% pangram 3 %}}
> --- Z. Bubblebrox
{data-pagefind-ignore="all" .left .ta-right}

{{% pangram 11 %}}
{.placeholder data-pagefind-ignore="all"}

### `.left-in-half`
> {{% pangram 3 %}}
> --- Z. Bubblebrox
{data-pagefind-ignore="all" .left-in-half .ta-right}

{{% pangram 11 %}}
{.placeholder data-pagefind-ignore="all"}

### `.left-in`
> {{% pangram 3 %}}
> --- Z. Bubblebrox
{data-pagefind-ignore="all" .left-in .ta-right}

{{% pangram 11 %}}
{.placeholder data-pagefind-ignore="all"}

### `.right`
> {{% pangram 3 %}}
> --- Z. Bubblebrox
{data-pagefind-ignore="all" .right .ta-left}

{{% pangram 11 %}}
{.placeholder data-pagefind-ignore="all"}

### `.right-in-half`
> {{% pangram 3 %}}
> --- Z. Bubblebrox
{data-pagefind-ignore="all" .right-in-half .ta-left}

{{% pangram 11 %}}
{.placeholder data-pagefind-ignore="all"}

### `.right-in`
> {{% pangram 3 %}}
> --- Z. Bubblebrox
{data-pagefind-ignore="all" .right-in .ta-left}

{{% pangram 11 %}}
{.placeholder data-pagefind-ignore="all"}
