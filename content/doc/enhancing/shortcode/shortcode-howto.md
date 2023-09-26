---
authors: [Georg Makowski]
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
    pre: help
categories: [Markdown]
tags: [Shortcode]
draft: true
---

Shortcodes can inject arbitrary and configurable HTML or Markdown from within Markdown files --- “Hugo’s shortcodes are Markdown’s hidden superpower”.
{.p-first} <!--more-->

## Syntax

A shortcode without variables looks like `{{</* simple */>}}` or `{{%/* simple */%}}`. The name of the shortcode is enclosed into two curly braces and angled brackets. Both shortcodes would call a file in the folder `layout/shortcodes/simple.html` of our project root or the theme directory and execute the templates therein.

Shortcodes with angled brackets `< >` directly generate HTML and the ones with percentage signs `% %` generate Markdown.  

There are two options to pass parameters: **positional** or **named** parameters. Both possibilities may exist for the same shortcode, but they can't be mixed for one call.

### Positional

The shortcode  `{{%/* pangram */%}}` is often used on this site to generate placeholder text. It expects only one _unnamed_ parameter and returns the specified amount of sentences.

```md {.left-in}
{{%/* pangram 3 */%}}  
```

{{% pangram 3 %}}
{data-pagefind-ignore="all"}

{{< mnote up=11 >}}
The shortcode is available in the module [hugo-mod-pangram](https://github.com/bowman2001/hugo-mod-pangram).
{{< /mnote >}}

### Named

When we want to offer more parameters, we better name them to avoid confusion. An example is the shortcode {$mnote} for marginal notes:

```md
{{</* mnote src="image.jpg" alt="Description" title="Title" */>}} 
```

{{< mnote up=5 >}}
This shortcode you could and maybe even should use for all your stand-alone images.
{{< /mnote >}}
