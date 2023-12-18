---
authors: [Georg Makowski]
date: "2021-09-13T12:58:49+02:00"
description: Configure image processing
menu:
  doc:
    name: imaging.yaml
    parent: config
    pre: image
title: 'imaging.yaml'
weight: 1030
categories: [configuration]
tags: [image]
---

The image processing configuration for Hugo in the folder {$config/_default}.
{.p-first}<!--more-->

The image processing by this theme depends on many additional parameters for the module [{$hugo-mod-image}](https://github.com/bowman2001/hugo-mod-image). They are predefined in the module configuration in {$data/modImg.yaml} and partially overwritten and extended in the same folder of the theme.
{.clear}

{{< highlight yaml "linenos=true" >}}
{{< readfile file="/config/_default/imaging.yaml" >}}
{{< /highlight >}}
