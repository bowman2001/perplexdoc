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
draft: false
---

Inline elements are placed on the same line as long as there is any horizontal space left. Block elements always completely fill the available width and may include additional vertical space.
{.p-first} <!--more-->

Inline and block display are the two basic modes of HTML layout, which are inherited by Markdown.

Inline elements behave like text and may be embedded in text. They may contain other inline elements --- like **a piece of `code` in emphasis** for example. Inline elements can’t include block elements, but they always need to be embedded in block elements.

Block elements may contain other block elements or inline elements. An example for the latter is a paragraph, which always fills at least one line, but may include an arbitrary amount of inline elements and text.

The Markdown [image element]({{< relref "image" >}}) is creating some confusion, because its an inline element. Many images appear visually as blocks and we falsely tend to infer, that they are also block elements. But a Markdown image is always embedded in an enclosing paragraph. If its placed stand-alone --- on a single line without surrounding text --- its not only an image, but also a text block.

To generate a stand-alone image with the correct HTML syntax, we need the [{$figure} shortcode]({{< relref "figure">}}). The distinction between stand-alone and embedded images also brings a lot of benefits, when we use a theme like Perplex. We can move and resize a {$figure} and its optional caption as we like with a few class parameters.
