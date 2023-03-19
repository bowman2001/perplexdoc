---
author: Georg Makowski
date: "2021-12-21T22:32:04+01:00"
description: Partial for inserting inline HTML tags in `.Content`
menu:
  doc:
    name: replacements.html
    parent: appendix
    pre: find_replace
title: 'replacements.html'
weight: 1055
categories: []
tags: replacement]
---

This template file contains the regular expressions for all replacements codes.
{.p-first} <!--more-->

There has been a [helpful and clarifying discussion][forum-topic] if this template opens a security loophole. I couldn’t see it myself at first, but the bottom line is simply: No, not at all.

```go-html-template {linenos=true}
{{
.
| replaceRE `\{\^([^\}]*)\}` "<sup>$1</sup>"
| replaceRE `\{\_([^\}]*)\}` "<sub>$1</sub>"
| replaceRE `\{\%([^\}]*)\}` "<kbd>$1</kbd>"
| replaceRE `\{\!([^\}]*)\}` "<mark>$1</mark>"
| replaceRE `\{\=([^\}]*)\}` "<cite>$1</cite>"
| replaceRE `\{\+([^\}]*)\}` "<ins>$1</ins>"
| replaceRE `\{\$([^\}]*)\}` "<var>$1</var>"
| replaceRE `\{s\s?([^\}]*)\}` "<small>$1</small>"
| replaceRE `\{r\s?([^\}]*)\}` "<span style='float: right;'>$1</span>"
| replaceRE `\{d\s?([^\}]*)\}` "<span lang='de'>$1</span>"
| replaceRE `\{f\s?([^\}]*)\}` "<span lang='fr'>$1</span>"
| replaceRE `\s?(—|&mdash;)\s?` " — "
| replaceRE `(<p[^>]*>|<li[^>]*>)([“«»„])` "$1<span class='hang-quote'>$2</span>"
| safeHTML
}}
```

{{< mnote up=18 >}}
The [11th line]({{< relref "#11" >}}) actually doesn’t look that crazy. [_Replacements_]({{< relref "doc/replace" >}}) are applied everywhere to the generated HTML (see the small fonts in the 10th line). The replacement for a text float shifts a part of its own regular expression to the right. Until now, I’ve found no way to stop this. But it’s only a problem in this meta-documentation and should be of no concern elsewhere.
{{< /mnote >}}

[forum-topic]: https://discourse.gohugo.io/t/get-missing-inline-html-tags-in-markdown-without-enabling-html/40234