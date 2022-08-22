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

Inline elements are placed on the same line until its filled and let the browser decide, when to wrap the lines. Block elements always completely fill a line and may include additional vertical space.
{.p-first} <!--more-->

Inline and block display are the two basic modes of HTML layout, which are inherited by Markdown.

Inline elements behave like text and may be embedded in text. They may contain other inline elements --- like [**`code` in emphasis with a link**]({{< relref "emphasis">}}) for example. Inline elements can’t include block elements, but they always need to be embedded in block elements.

Block elements always fill up the available width and may contain other block elements or inline elements. An example for the latter is a paragraph, which always fills at least one line, but may include an arbitrary amount of text and inline elements.

One Markdown element is creating some confusion, because its an inline element while we intuitively think of it as a block element: That’s the [image element]({{< relref "image" >}}).
