---
title: menu.yaml
description: Configuration for external menu entries
subtitle: false
date: '2021-10-25T20:58:45+02:00'
weight: 1020
authors:
- Georg Makowski
categories:
- configuration
tags:
- menu
menu:
  doc:
    name: menu.yaml
    parent: config
    pre: menu
---

The project menu configuration file in {$config/_default}.
{.p-first}<!--more-->

The menu structure for internal links is preferably built from frontmatter parameters in the Markdown files. This central file only contains entries without a page.
{.clear}

{{< highlight yaml "linenos=true" >}}
{{< readfile file="/config/_default/menu.yaml" >}}
{{< /highlight >}}
