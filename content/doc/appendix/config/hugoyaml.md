---
title: hugo.yaml
description: Main configuration file
subtitle: false
date: '2021-09-10T23:09:20+02:00'
weight: 1010
authors:
- Georg Makowski
categories:
- configuration
tags:
- hugo
menu:
  doc:
    name: hugo.yaml
    parent: config
    pre: home
---

The main project configuration file in {$config/_default}
{.p-first}<!--more-->

&nbsp;
{.clear}

{{< highlight yaml "linenos=true" >}}
{{< readfile file="/config/_default/hugo.yaml" >}}
{{< /highlight >}}
