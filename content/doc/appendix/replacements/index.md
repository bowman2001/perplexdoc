---
authors: [Georg Makowski]
date: "2021-12-21T22:32:04+01:00"
description: Partial for inserting inline HTML tags in `.Content`
menu:
  doc:
    name: replacements.html
    parent: appendix
    pre: find_replace
title: 'replacements.html'
weight: 1055
categories: [Markdown]
tags: [Replacement]
---

This template file from the module {$hugo-mod-replacements} contains the regular expressions for all replacement codes.
{.p-first} <!--more-->

There has been a [clarifying discussion][forum-topic] if this template may open a loophole for script attacks. I couldn’t see it myself at first, but the bottom line is simply: No, not at all. Goldmark discards all HTML in the Markdown and also in the replacement codes with the default setting `unsafe: false`. These regular expressions are applied to the rendered Markdown, which gets cleared of all HTML tags before it’s transformed into HTML itself.

{{< highlight go-html-template "linenos=true" >}}
{{< readfile file="_vendor/github.com/bowman2001/hugo-mod-replacements/layouts/partials/replacements.html" >}}
{{< /highlight >}}

[forum-topic]: https://discourse.gohugo.io/t/get-missing-inline-html-tags-in-markdown-without-enabling-html/40234 