---
date: "2021-08-15T23:14:50+02:00"
description: Custom HTML constructs
featImg: roman-synkevych-vXInUOv1n84-unsplash.jpg
menu:
  doc:
    identifier: shortcode
    name: Shortcodes
    pre: integration_instructions
subtitle: false
title: Shortcodes
weight: 30
---

_Hugo’s_ shortcodes allow to inject arbitrary HTML code into the the pages generated from _Markdown_ files. 
{.p-lead} <!--more-->

## Syntax

A shortcode without variables looks like `{{</* simple */>}}`. The name of the shortcode is enclosed into two curly braces and angled brackets. This shortcode would call a file in the folder `layout/shortcodes/simple.html` of our project root or the theme directory and execute the templates therein. 

To deliver parameters there are two options: *positional* or *named* parameters. Both possibilities may exist for the same shortcode, but they can't be mixed in one call. 

### Positional

The shortcode  `{{</* farfar */>}}` is sometimes used on these pages. It has only one *unnamed* parameter and returns up to five paragraphs of blind text. 

```md {.left}
{{</* farfar 3 */>}}  
```

This call inserts three paragraphs of blind text. 

### Named

When we want to offer more parameters, we better name them, because it's tricky to remember many positions. An example for this kind the is the one for self-contained images. A call of [`{{</* figure */>}}`]({{< relref "figure" >}}) should include at least three parameters: 

```md
{{</* figure src="image.jpg" alt="Description" title="Title" */>}} 
```

## Shortcodes available for Perplex
