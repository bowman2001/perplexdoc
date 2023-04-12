---
author: Georg Makowski
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
categories: [Hugo]
tags: [Menu, Configuration]
---

Menu configuration file in {$config/_default}. Contains mostly menus for external links.
{.p-first}<!--more-->

The menu structure for internal links is preferably built from front-matter parameters in the corresponding Markdown files!
{.clear}

{{< highlight yaml "linenos=true" >}}
{{< readfile file="/config/_default/menu.yaml" >}}
{{< /highlight >}}
