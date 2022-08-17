---
title: Inline and Block Elements
description: Two fundamental layout types
subtitle: false
date: 2022-08-17T20:50:13+02:00
weight: 1
featImg: 
categories: [Markdown]
tags: [Block, Inline, Image]
draft: false
---

Inline elements are placed on the same line until its filled by their content. Block elements always completely fill a line and may include additional vertical space.
{.p-first} <!--more-->

Inline and block layout are the two basic modes of HTML layout, which are inherited by the elements of Markdown.

Inline elements may be embedded in text and may contain other inline elements --- like [emphasis]({{< relref "emphasis">}}) for example. Inline elements can’t include block elements.

Block elements always fill up the available width and may contain other block elements or inline elements. An example for the latter is a paragraph, which always fills at least one line, but may include an arbitrary amount of text and inline elements.

One Markdown element is creating some confusion, because its an inline element while we intuitively think of it as a block element: That’s the [image element]({{< relref "image" >}}).
