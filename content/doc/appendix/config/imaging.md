---
title: imaging.yaml
description: Configure image processing
date: '2021-09-13T12:58:49+02:00'
weight: 1030
authors:
- Georg Makowski
categories:
- configuration
tags:
- image
menu:
  doc:
    name: imaging.yaml
    parent: config
    pre: image
---

The image processing configuration for Hugo in the folder {$config/_default}.
{.p-first}<!--more-->

The image processing by this theme depends on many additional parameters for the module [{$hugo-mod-image}](https://github.com/bowman2001/hugo-mod-image). They are predefined in the module configuration in {$data/modImg.yaml} and partially overwritten and extended in the same folder of the theme.
{.clear}

{{< highlight yaml "linenos=true" >}}
{{< readfile file="/config/_default/imaging.yaml" >}}
{{< /highlight >}}
