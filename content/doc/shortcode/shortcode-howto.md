---
author: Georg Makowski
title: How to use shortcodes?
description: Inject arbitrary HTML in Markdown
subtitle: false
date: 2022-04-15T22:09:40+02:00 
weight: 510
menu:
  doc:
    name: Howto
    identifier: shortcodehowto
    parent: shortcode 
    pre: help_outline
categories: [Markdown]
tags: [Shortcode]
---

Hugo’s shortcodes can inject arbitrary and configurable HTML from within Markdown files. They are “Markdown’s hidden superpower”.
{.p-first} <!--more-->

## Syntax

A shortcode without variables looks like `{{</* simple */>}}`. The name of the shortcode is enclosed into two curly braces and angled brackets. This shortcode would call a file in the folder `layout/shortcodes/simple.html` of our project root or the theme directory and execute the templates therein.

To deliver parameters there are two options: _positional_ or _named_ parameters. Both possibilities may exist for the same shortcode, but they can't be mixed in one call.

### Positional

The shortcode  `{{</* farfar */>}}` is sometimes used on these pages. It has only one _unnamed_ parameter and returns up to five paragraphs of blind text.

```md {.left}
{{</* farfar 3 */>}}  
```

This call produces three paragraphs of blind text.

{{< mnote up=8 >}}
I am **not** recommending the use of {$farfar}. I’ve intentionally chosen some funny text with a lot of bad or made-up English resulting from some kind-of “direct” German translation.
{{< /mnote >}}

### Named

When we want to offer more parameters, we better name them, because it's tricky to remember many of them and their position. An example is the shortcode for self-contained images. A call of [{$figure}](/doc/shortcode/figure) could include these three parameters and more:

```md
{{</* figure src="image.jpg" alt="Description" title="Title" */>}} 
```

{{< mnote up=5 >}}
This shortcode you could and maybe even should use for all your stand-alone images.
{{< /mnote >}}
