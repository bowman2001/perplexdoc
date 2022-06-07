---
author: Georg Makowski
date: "2021-03-24T13:17:56+01:00"
description: A break inside a paragraph
featImg: annie-spratt-askpr0s66Rg-unsplash.jpg
menu:
  doc:
    name: Line Break
    parent: basic
    pre: drag_handle
subtitle: false
title: Line Break
weight: 111
---

Sometimes we like to begin a new line without starting a whole new text block. To place such a **hard line break** gets complicated, when **hard line wraps** limit the line length in our file.
{.p-first} <!--more-->

## Syntax

There are two ways to place _intentional_ hard line breaks, which depend on the way we handle _hard line wraps_.

CommonMark
: allows _hard wraps_ — a.&hairsp;k.&hairsp;a. _hard line breaks_ — to limit the line length in _Markdown_ files. They are treated just like spaces. Therefore, _CommonMark_ needs a special syntax element for an _intentional_ line break.

GitHub
: instead, treats hard line breaks simply as such. In this case we probably need to use _soft wraps_ in our editor to limit the line length, which may be a good habit anyway. (See also: [Writing Markdown][hwl])
{.dl-loose}

### The CommonMark way

_Hugo’s_ standard configuration is fully _CommonMark_-compliant, the parameter `hardWraps` is set to `false` by default. There are two ways now, to place an intentional line break:

Two spaces
: before the end of a line.

One backslash
: directly after the text and before the end of the line.
{.dl-loose}

Both options are unfortunately error-prone. _Spaces_ before the end of the line are usually invisible in text editors and get easily deleted by accident. The _backslash_ is visible, but if there is additional space between the backslash and the invisible newline character, the `\` is treated literally and shown on the resulting web page.

### The GitHub way

To follow _GitHub’s_ way, we need to set `hardWraps` to `true`, as in the [configuration for this project][hw]. The syntax becomes intuitive:

Hard line breaks
: break the lines hard.
{.dl-loose}

### What now?

When you have to strictly adhere to the _CommonMark specification_ the best option from my point of view is still, to forgo hard wraps in your files and use the _CommonMark_-breaks. This way is compatible with _CommonMark_ **and** the _GitHub_ specification.

When you are allowed to deviate from _CommonMark_ in regard to this one element, I strongly recommend the _GitHub_ way. (See also: [Writing Markdown][hwl])

## Layout

_Hugo_ still recognizes the _CommonMark_-breaks, when `hardWraps` is set to `true`.

### Line Break {.h-p}

Far, far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.
Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean. A small river named Duden flows by their place and supplies it with the necessary regelialia.
{.blind}

### Two spaces {.h-p}
Far, far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.
Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean. A small river named Duden flows by their place and supplies it with the necessary regelialia.
{.blind}

### Backslash {.h-p}
Far, far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.\
Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean. A small river named Duden flows by their place and supplies it with the necessary regelialia.
{.blind}

[hw]: {{< relref "markup#24" >}}

[hwl]: {{< relref "writing#wrap" >}}
