---
author: Georg Makowski
title: Two basic layout types
description: Inline & Block
subtitle: false
date: 2022-08-17T20:50:13+02:00
weight: 1
resources:
  - src: valery-sysoev-p9OkL4yW3C8-unsplash.jpg
    name: featured
    params: 
      alt: HTML code on a computer screen
categories: [Markdown]
tags: [Block, Inline, Image]
series: [Images]
draft: true
---

HTML generated from Markdown contains the standard layout modes for HTML tags: **inline & block**.
{.p-first} <!--more-->

The distinction between those two in Markdown is relatively simple. Every block is surrounded by at least one blank line at the top and the bottom or visually separated by other means. Everything written on the same or the directly following line therefore gets included in such a block. List items are blocks themselves and nested elements may also be blocks. The innermost elements of blocks are inline.

We don’t need to think about layout modes most of the time and use them intuitively correct. One problematic element is the main reason to recall the distinction:  

Inline elements
: behave like characters and may be embedded in text. They are placed on the same line as long as there is any horizontal space left --- and then the line wraps and so on. They may contain other inline elements --- like **a piece of `code` in emphasis** for example. Inline elements shouldn’t include block elements, but they always need to be embedded in block elements.
{.dl-loose}

{{< mnote up=12 >}}
It’s common practice to place an anchor-tag `<a>` around block elements to generate a linked page elements in HTML. But then, its display mode is explicitly changed into one with vertical spacing. This is impossible in Markdown.
{{< /mnote >}}

Block elements
: always completely fill the available width and may include additional vertical space. Block elements may contain other block elements or inline elements. A common example for the latter is a paragraph block, which fills at least one line, but may include an arbitrary amount of inline elements and text.
{.dl-loose}

The Markdown [image element](/doc/basic/image) is creating some confusion, because its an inline element. Because many images appear visually as blocks, we falsely tend to infer they should be block elements. But a Markdown image is always inline and embedded in an enclosing block. When its placed stand-alone on a separated line, its not only an image but enclosed in a paragraph block of its own.

To generate a stand-alone image resulting in semantically correct HTML, we need the [{$figure} shortcode](/doc/shortcode/figure). And we can easily add CSS-styles to resize or move the resulting figure --- even beside the main text column.
