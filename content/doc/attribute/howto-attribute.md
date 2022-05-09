---
author: Georg Makowski
date: "2021-12-19T13:27:29+01:00"
description: Inject attributes into rendered HTML elements
menu:
  doc:
    name: Howto
    identifier: howtoattribute
    parent: attributes
    pre: help_outline
subtitle: false
title: How to use attributes?
weight: 310
---

Hugo’s attributes are in the end HTML attributes, which get injected from the _Markdown_ file into the resulting page.
{.p-lead} <!--more-->

Attributes are available for all kinds of _blocks_, for _headings_ and for _fenced code blocks_. We can allow them for blocks and headings in the configuration section for the _Goldmark_ parser, where the parameter `title` relates to all heading levels. They are by default disabled for blocks and enabled for headings. They are [all enabled]({{< relref "markup#19" >}}) for this documentation.

## Syntax

Attributes are enclosed in curly braces `{ }` and one pair of braces takes the set of all necessary attributes separated by a space.

### Placement
Depending on the kind of element, attribute sets are attached differently:

Block element
: attribute sets need to be placed **on the next line** directly after the element. If the element is indented, we need to indent the set accordingly.

Heading
: We can place the set on the following line again, but it's now also possible to let them follow on **the same line**.

Fenced code block
: We need to place them after the **first fence** and the language indicator — like `` ```md {.left}``
{.dl-loose}

### Different kinds of attributes

Class attributes
: Usually, they style an element and refer to a CSS class. We can use the long form following the HTML syntax --- like `class="name"`. The short alternative is the CSS syntax: `.name`.  

Identification attributes
: Usually, they serve as anchors and need to be unique. Again, we can use `id="identifier"` or short `#identifier`.

Other
: All other HTML attributes can be injected with their HTML syntax. Personally I’ve found the `lang`-attribute to be very useful. We can place it after a block with a different content language to let the browser hyphenation engine do its work properly.
{.dl-loose}

## Layout
Most _Perplex_ attributes style a specific element and the layout is shown on its page. Some are of general use, they are introduced on the next pages.
