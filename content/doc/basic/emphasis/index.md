---
author: Georg Makowski
date: "2021-03-23T21:46:33+01:00"
description: Accentuate pieces of text
featImg: brett-jordan-vyPVtz5p8D4-unsplash.jpg
menu:
  doc:
    name: Emphasis
    parent: basic
    pre: format_italic
subtitle: true
title: Emphasis
weight: 15
---

We have _light emphasis_ or **strong emphasis** to accentuate a segment of the text. We can **_nest_** both types.
<!--more-->

## Light emphasis

Surrounding a word with an asterisk `*` or underscore `_` produces *light emphasis*:

- `*asterisk*`  is displayed *asterisk*.

- `_underscore_`  leads to _underscore_.

Light emphasis is styled with an _italic_ version of the text font. Italics in the body copy don't attract attention at first glance, but get noticed while reading the lines.

## Strong emphasis

Surrounding a word with two asterisks or underscores produces __strong emphasis__:

- `**asterisks**` is displayed  **asterisks**.

- `__underscores__` lead to __underscores__.

Strong emphasis is styled with a **bold** version of the normal text font. This way the emphasis stands out. A good choice for distinctively structured text like a documentation, because we recognize the heavier weight immediately while _scanning_ the pages.

## Nested emphasis

If you prefer the asterisk `*` for emphasizing, the underscores come in handy when typing a nested emphasis. Both parts are much easier to distinguish then. To mix both types of emphasis you could type:

- `_one and  **two**_` for _one and  **two**_.
- `**one and _two_**` for **one and _two_**.
- `_one and *two*_` for _one and *two*_.

The nesting possibilities of the *Commonmark specification* are endless, but only a few combinations are meaningful in practice.

## Which formatting characters are the best choice?

At first sight _Commonmark_ treats the asterisk `*` and the underscore `_` as equally appropriate options to mark either light or strong emphasis. But the _Markdown_ concept seems to suggest — at least to me — to use underscores for light emphasis, because they have a smaller footprint in the _Markdown_. The asterisks are thicker and suit the strong emphasis.

I haven’t checked the specification for their argument, but the asterisks are the only possible option in _Commonmark_ to strongly emphasize characters inside a word. When we want to emphasize an abbreviation for example:

`**H**-**T**ext **M**arkup **L**anguage`&emsp;for&emsp;**H**yper-**T**ext **M**arkup **L**anguage is working fine -- not with underscores:

__H__yper-__T__ext __M__arkup __L__anguage.
