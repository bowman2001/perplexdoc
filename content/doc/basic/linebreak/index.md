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

Sometimes we like to begin a new line without starting a whole new text block. To place such a hard line break gets complicated, when **hard line wraps** limit the line length inside our Markdown files.
{.p-first} <!--more-->

## Syntax

There are two ways to place intentional hard line breaks, which depend on the way we handle hard line wraps.

CommonMark
: allows **hard wraps** — a.&hairsp;k.&hairsp;a. hard line breaks — to limit the line length. They are treated just like spaces. Therefore, CommonMark needs a special syntax element for an intentional line break.

GitHub
: instead, treats hard line breaks simply as such. In this case we probably need to use **soft wraps** in our editor to limit the line length, which may be a good habit anyway. (See also: [Writing Markdown][hwl])
{.dl-loose}

### The CommonMark way

Hugo’s standard configuration is fully CommonMark-compliant, the parameter `hardWraps` is set to `false` by default. There are two ways now, to place an intentional line break:

Two spaces
: before the end of a line.

One backslash `\`
: directly after the text and before the end of the line.
{.dl-loose}

Both options are unfortunately error-prone. Spaces before the end of the line are usually invisible in text editors and get easily deleted by accident. The backslash is visible, but if there is additional space between the backslash and the invisible newline character, the `\` is treated literally and shown on the resulting web page.

### The GitHub way

To follow GitHub’s way, we need to set `hardWraps` to `true`, as in the [configuration for this project][hw]. The syntax becomes intuitive:

Hard line breaks
: break lines hard.
{.dl-loose}

### What now?

When you have to strictly adhere to the CommonMark specification the best option from my point of view is still, to forgo hard wraps and use CommonMark-breaks. This way is compatible with CommonMark **and** GitHub.

When you are allowed to deviate from CommonMark in regard to this one element, I strongly recommend the GitHub way. (See also: [Writing Markdown][hwl])

## Layout

Hugo still recognizes the CommonMark-breaks, when `hardWraps` is set to `true`.

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
