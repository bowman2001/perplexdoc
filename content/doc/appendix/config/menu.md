---
authors: [Georg Makowski]
date: "2021-10-25T20:58:45+02:00"
description: Configuration for external menu entries
menu:
  doc:
    name: menu.yaml
    parent: config
    pre: menu
subtitle: false
title: menu.yaml
weight: 1020
categories: [configuration]
tags: [menu]
---

The project menu configuration file in {$config/_default}.
{.p-first}<!--more-->

The menu structure for internal links is preferably built from frontmatter parameters in the Markdown files. This central file only contains entries without a page.
{.clear}

{{< highlight yaml "linenos=true" >}}
{{< readfile file="/config/_default/menu.yaml" >}}
{{< /highlight >}}
