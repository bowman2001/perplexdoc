---
title: Inline and Block Elements
description: Two fundamental layout types
subtitle: false
date: 2022-08-17T20:50:13+02:00
weight: 1
resources:
  - src: valery-sysoev-p9OkL4yW3C8-unsplash.jpg
    name: featured
categories: [Markdown]
tags: [Block, Inline, Image]
series: [Images]
---

Inline and block display are the two basic modes of HTML layout Markdown inherits.
{.p-first} <!--more-->

Inline elements behave like text and may be embedded in text. They are placed on the same line as long as there is any horizontal space left --- then the line wraps. They may contain other inline elements --- like **a piece of `code` in emphasis** for example. Inline elements can’t include block elements, but they always need to be embedded in block elements.

Block elements always completely fill the available width and may include additional vertical space. Block elements may contain other block elements or inline elements. An example for the latter is a paragraph, which always fills at least one line, but may include an arbitrary amount of inline elements and text.

The Markdown [image element](/doc/basic/image) is creating some confusion, because its an inline element. Many images appear visually as blocks and we falsely tend to infer they are also block elements. But a Markdown image is always inline and embedded in an enclosing block. If its placed stand-alone --- on a single line without surrounding text --- its not only an image, but enclosed in a paragraph block of its own.

To generate a stand-alone image resulting in semantically better HTML syntax, we need the [{$figure} shortcode](/doc/shortcode/figure). The distinction between stand-alone and embedded images has a further big benefit with Perplex. We can place a {$figure} and its optional caption outside of the the main text column.
