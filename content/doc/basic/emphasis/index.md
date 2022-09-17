---
author: Georg Makowski
date: "2021-03-23T21:46:33+01:00"
description: Accentuate pieces of text
menu:
  doc:
    name: Emphasis
    parent: basic
    pre: format_italic
title: Emphasis
weight: 116
categories: [Markdown]
tags: [Inline, Emphasis]
resources:
- name: featured
  src: brett-jordan-vyPVtz5p8D4-unsplash.jpg
  params:
    hint: text
    ratio: 1.5
---

We have _light emphasis_ or **strong emphasis** to accentuate a segment of the text. We can **_nest_** both types.
{.p-first} <!--more-->

## Light emphasis

Surrounding a word with an asterisk `*` or underscore `_` produces light emphasis:

- `*asterisk*` is displayed *asterisk*.

- `_underscore_`  leads to _underscore_.

Light emphasis is styled with an _italic_ version of the text font. Italics in the body copy don't attract attention at first glance, but get noticed while reading the lines.

## Strong emphasis

Surrounding a word with two asterisks or underscores produces __strong emphasis__:

- `**asterisks**` is displayed  **asterisks**.

- `__underscores__` lead to __underscores__.

Strong emphasis is styled with a **bold** version of the normal text font. This way the emphasis stands out. A good choice for distinctively structured text like a documentation, because we recognize the heavier weight immediately while scanning a page.

## Nested emphasis

If you prefer the asterisk `*` for emphasizing, the underscores come in handy when typing a nested emphasis. Both parts are much easier to distinguish then. To mix both types of emphasis you could type:

- `_one and  **two**_` for _one and  **two**_.
- `**one and _two_**` for **one and _two_**.
- `_one and *two*_` for _one and *two*_.

The nesting possibilities of the *CommonMark specification* are endless, but only a few combinations are meaningful in practice.

## Which formatting characters are the best choice?

At first sight CommonMark treats the asterisk `*` and the underscore `_` as equally appropriate options to mark either light or strong emphasis. But the Markdown concept suggests — at least to me — to use underscores for light emphasis, because they have a smaller footprint in the Markdown. The asterisks are thicker and suit the strong emphasis.

I haven’t checked the specification for this argument, but the asterisks are the only possible option in CommonMark to strongly emphasize characters inside of words. We sometimes want to emphasize the first letter of some words to mark their abbreviation for example:

`**H**yper-**T**ext **M**arkup **L**anguage`&emsp;for&emsp;**H**yper-**T**ext **M**arkup **L**anguage is working fine.

When we try this with underscores `__H__yper-__T__ext __M__arkup __L__anguage`, it only gets ugly: __H__yper-__T__ext __M__arkup __L__anguage.

## Emphasis with sans-serif fonts

Sans-serif fonts usually don’t have a distinctive italic style, even if their font includes an italic specimen. They look like a slightly tilted version of the regular font, which is a little irritating. When you already know, that your layout will use such an italic, you should prefer bold emphasis.
