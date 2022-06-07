---
author: Georg Makowski
title: module.yaml
description: Module configuration
subtitle: false
date: 2022-05-11T14:03:23+02:00 
featImg:
menu:
  doc:
    name: module.yaml
    parent: config
    pre: view_module
weight: 1025
---

The module configuration for this project, which imports the _Perplex_ theme from its [GitHub repository]({{< param themeURL >}}).
{.p-first} <!--more-->

{{< highlight yaml "linenos=true" >}}
{{< readfile file="/config/_default/module.yaml" >}}
{{< /highlight >}}
