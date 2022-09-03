---
author: Georg Makowski
date: "2021-12-21T22:32:04+01:00"
description: Partial for processing `.Content`
menu:
  doc:
    name: Content.html
    parent: appendix
    pre: find_replace
title: 'content.html'
weight: 1055
draft: true
---

This template file contains the regular expressions for all replacements codes.
{.p-first} <!--more-->

There has been a [helpful and clarifying discussion][forum-topic] if this template opens a security loophole. I couldn’t see it myself at first, but the bottom line is simply: No, not at all.

{{< highlight html "linenos=true" >}}
{{< readfile file="/themes/perplex/layouts/partials/content.html" >}}
{{< /highlight >}}

{{< mnote up=19 >}}
The [11th line]({{< relref "#11" >}}) actually doesn’t look that crazy. [_Replacements_]({{< relref "doc/replace" >}}) are applied everywhere in Markdown and here the replacement for a text float shifts a part of its own regular expression to the right. Until now, I’ve found no way to stop this. But it’s only a problem in this meta-documentation and should be of no concern elsewhere.
{{< /mnote >}}

[forum-topic]: https://discourse.gohugo.io/t/get-missing-inline-html-tags-in-markdown-without-enabling-html/40234