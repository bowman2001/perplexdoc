---
title: How to use shortcodes?
description: Inject arbitrary HTML in Markdown
subtitle: false
date: 2022-04-15 22:09:40+02:00
weight: 510
authors:
- Georg Makowski
categories:
- Markdown
tags:
- Shortcode
menu:
  doc:
    name: Howto
    identifier: shortcodehowto
    parent: shortcode
    pre: help
---

Shortcodes can inject arbitrary and configurable HTML (or automated Markdown) in Markdown content --- Hugo offers them as "Markdown’s hidden superpower".
{.p-first} <!--more-->

## Syntax

A shortcode without variables looks like `{{</* simple */>}}` or `{{%/* simple */%}}`. Both shortcodes would call a file in the folder `layout/shortcodes/simple.html` of our project root or the theme directory and execute their template code.

Shortcodes with angled brackets `< >` directly generate HTML and the ones with percentage signs `% %` generate Markdown which is then processed as usual.  

There are two options to pass parameters: **positional** or **named**. Both options may exist for the same shortcode, but they can't be mixed in one call.

Shortcodes may also process Markdown content which is enclosed by the first shortcode and its closing counterpart.

### Positional

The shortcode  `{{%/* pangram */%}}` is often used on this site to generate placeholder text. It expects only one **unnamed** parameter and returns the specified amount of pangram sentences.

```md {.left-in}
{{%/* pangram 3 */%}}  
```

{{% pangram 3 %}}
{data-pagefind-ignore="all"}

{{< mnote up=11 >}}
The shortcode is available in the module [hugo-mod-pangram](https://github.com/bowman2001/hugo-mod-pangram).
{{< /mnote >}}

### Named

More parameters are usually named to avoid confusion about their order and function. An example is the shortcode {$mnote} for marginal notes:

```md
{{</* mnote up=11 dagger=2 */>}}
This note gets placed in the marginal column.
{{</* /mnote */>}} 
```

### Shortcodes with content

The last example is also meant to demonstrate the usage of a closing shortcode. 

**Notice the slash** `/` in the closing shortcode repetition!
{.box-info}