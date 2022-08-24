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
---

Hugo’s shortcodes can inject arbitrary HTML into Markdown. They are [“Markdown’s hidden superpower”](https://gohugo.io).
{.p-first} <!--more-->

## Syntax

A shortcode without variables looks like `{{</* simple */>}}`. The name of the shortcode is enclosed into two curly braces and angled brackets. This shortcode would call a file in the folder `layout/shortcodes/simple.html` of our project root or the theme directory and execute the templates therein.

To deliver parameters there are two options: _positional_ or _named_ parameters. Both possibilities may exist for the same shortcode, but they can't be mixed in one call.

### Positional

The shortcode  `{{</* farfar */>}}` is sometimes used on these pages. It has only one _unnamed_ parameter and returns up to five paragraphs of blind text.

```md {.left}
{{</* farfar 3 */>}}  
```

This call inserts three paragraphs of blind text.

### Named

When we want to offer more parameters, we better name them, because it's tricky to remember many positions. An example is the shortcode for self-contained images. A call of [{$figure}]({{< relref "figure" >}}) should include at least three parameters:

```md
{{</* figure src="image.jpg" alt="Description" title="Title" */>}} 
```
