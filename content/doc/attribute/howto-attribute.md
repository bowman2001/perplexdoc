---
author: Georg Makowski
date: "2021-12-19T13:27:29+01:00"
description: Inject attributes into rendered HTML elements
menu:
  doc:
    name: Howto
    identifier: howtoattribute
    parent: attribute
    pre: help_outline
subtitle: false
title: How to use attributes?
weight: 20
---

Hugo’s attributes are HTML attributes, which get injected into _Markdown_ text.
{.p-lead} <!--more-->

Attributes are available for all kinds of _blocks_, for _headings_ and for _fenced code blocks_. We can allow them for blocks and headings in the configuration section for the goldmark parser, where the parameter `title` relates to all heading levels. They are by default disabled for blocks and enabled for headings. For this project they are [all enabled]({{< relref "markup#19" >}}).

## Syntax

Attributes are enclosed in curly braces `{ }` and one pair of braces takes all attributes separated by a space.

### Placement
The place, where to attach an attribute, depends on the kind of element:

Block element
: The attributes need to be placed **on the next line** directly after the element. If the element is indented, we need to indent them accordingly.

Heading
: Again, we can place them on the next line, but it's also possible to let them follow on **the same line**.

Fenced code block
: We need to place them after the **first fence** and the language indicator — like `` ```md {.left}``
{.dl-loose}

### Different kinds of attributes

Class attributes
: They usually style an element and refer to a CSS class. We can use the long form following the HTML syntax --- like `class="name"`. The short alternative is the CSS syntax: `.name`.  

Identification attributes
: They usually serve as anchors and need to be unique. Again we can use the long form `id="identifier"` or short `#identifier`.

Other
: all other HTML attributes may be injected with their usual long syntax. Personally I’ve found the `lang`-attribute to be very useful. We can place it after a block with a different content language to let the hyphenation engine do its work properly.
{.dl-loose}

## Layout
Most _Perplex_ attributes style a specific element and the layout is shown on their pages. Some are of general use and follow on the next pages.
