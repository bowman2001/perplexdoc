---
authors: [Georg Makowski]
date: "2021-09-10T23:09:20+02:00"
description: Main configuration file
subtitle: false
menu:
  doc:
    name: hugo.yaml
    parent: config
    pre: home
title: 'hugo.yaml'
weight: 1010
categories: [configuration]
tags: [hugo]
---

The main project configuration file in {$config/_default}
{.p-first}<!--more-->

&nbsp;
{.clear}

{{< highlight yaml "linenos=true" >}}
{{< readfile file="/config/_default/hugo.yaml" >}}
{{< /highlight >}}
