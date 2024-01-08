---
authors: [Georg Makowski]
title: Embedded image (float)
linktitle: Embedded
description: Layout for the inline image element
subtitle: false
date: 2023-03-23T10:10:51+01:00
menu:
  doc:
    name: Embedded
    parent: image
    pre: format_image_left
resources:
categories: [markdown]
tags: [embedded, image]
series: [images]
weight: 310
---

Layout options of enhanced embedded images.
{.p-first}
<!--more-->

For a description of the Markdown syntax see [basic image](https://perplex.desider.at/doc/basic/image) and [enhanced image](https://perplex.desider.at/doc/enhancing/image/syntax). The [visual demo](https://perplex.desider.at/blog/image/embed) in the blog includes precalculated sets of raster images.


## At the beginning

### Small width (default)

![](small-left) {{% pangram 15 %}}
{.placeholder data-pagefind-ignore="all"}

![](small-right) {{% pangram 15 %}}
{.placeholder data-pagefind-ignore="all"}

### Tiny width

![](tiny-left) {{% pangram 15 %}}
{.placeholder data-pagefind-ignore="all"}

![](tiny-right) {{% pangram 13 %}}
{.placeholder data-pagefind-ignore="all"}

### Micro width

![](micro) {{% pangram 9 %}}
{.placeholder data-pagefind-ignore="all"} 

![](micro?ph=right) {{% pangram 9 %}}
{.placeholder data-pagefind-ignore="all"}

## In the middle of a text block

Images with the default small width need some additional spacing when they are placed in the middle of a text block:

{{% pangram 4 %}} ![](small-left?pv=middle) {{% pangram 6 %}}
{.placeholder data-pagefind-ignore="all"}

{{% pangram 8 %}}
{.placeholder data-pagefind-ignore="all"}

{{% pangram 4 %}} ![](small-right?pv=middle) {{% pangram 6 %}}
{.placeholder data-pagefind-ignore="all"}

{{% pangram 8 %}}
{.placeholder data-pagefind-ignore="all"}

## In lists

Embedded images always scale to a fixed percentage of the containing text width.

### Micro width

1. ![](micro) {{% pangram 4 %}}

   1. ![](micro?posh=right) {{% pangram 4 %}}

   2. ![](micro) {{% pangram 4 %}}

2. {{% pangram 2 %}} ![](micro?posh=right) {{% pangram 3 %}}
{.placeholder data-pagefind-ignore="all"}

### Tiny width

1. ![](tiny-left.yaml) {{% pangram 12 %}}

   1. ![](tiny-right) {{% pangram 11 %}}

   2. ![](tiny-left) {{% pangram 7 %}}

2. {{% pangram 4 %}} ![](tiny-right?posv=middle) {{% pangram 15 %}}
{.placeholder data-pagefind-ignore="all"}

### Variable text width

Because stand-alone images do not fit in lists or other structured text blocks, we need embedded ones to fill up the full width of the containing text block.

#### Normal list

1. {{% pangram 2 %}} ![](textvar)

2. {{% pangram 2 %}} ![](textvar)
{.placeholder data-pagefind-ignore="all"}

#### Columned list

1. {{% pangram 1 %}} ![](textvar)

2. {{% pangram 1 %}} ![](textvar)
{.col2 .placeholder data-pagefind-ignore="all"}

#### Loose definition list

First term
: {{% pangram 3 %}} ![](textvar)

Second term
: {{% pangram 3 %}} ![](textvar)
{.dl-loose .placeholder data-pagefind-ignore="all"}

