---
title: .markdownlint.yaml
description: Configuration file for the Markdown linter
subtitle: false
date: 2022-04-18 13:33:28+02:00
weight: 1060
authors:
- Georg Makowski
menu:
  doc:
    name: .markdownlint.yaml
    parent: appendix
    pre: edit
---

A Markdown linter helps to unify the markup style of the content. The following short configuration changes a few rules of Markdownlint.
{.p-first} <!--more-->

{{< highlight yaml "linenos=true" >}}
{{< readfile file="/content/.markdownlint.yaml" >}}
{{< /highlight >}}

There are also configuration files for Markdownlint in some content folders. They allow to document some variations of Markdown.

[mlint]: https://github.com/DavidAnson/markdownlint "Markdownlint"
