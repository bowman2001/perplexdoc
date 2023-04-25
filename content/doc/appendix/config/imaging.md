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
categories: [Hugo]
tags: [Image, Configuration]
---

The image processing configuration for Hugo in the folder {$config/_default}.
{.p-first}<!--more-->

The theme needs additional parameters for the image processing. These are predefined in the theme config and may be overwritten under the `imaging:` key of the params key section.
{.clear}

{{< highlight yaml "linenos=true" >}}
{{< readfile file="/config/_default/imaging.yaml" >}}
{{< /highlight >}}
