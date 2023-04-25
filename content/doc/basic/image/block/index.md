---
authors: [gm]
editors: [gm]
title: Stand-alone Image (figure)
description: Layout for image as a single block
subtitle: false
date: 2023-03-23T10:10:38+01:00 
featured: bigsplash
menu:
  doc:
    name: Stand-alone
    parent: images
    pre: panorama
resources:
  - src: mathias-konrath-JHb-UFfNOhI-unsplash.jpg
    name: mathias
    params:
      alt: Skyline of Frankfurt am Main
      size: large
  - src: beau-swierstra-Ndz-4phqtlg-unsplash.jpg
    name: beau
categories: [markdown]
tags: [image, block]
series: [images]
weight: 154
---

The theme offers many different layout options for stand-alone Markdown images. Here you can see the results for a documentation page.
{.p-first}
<!--more-->

To produce the following layout options besides the default we need to adhere to the theme’s special [image syntax](/doc/basic/image/syntax). 

## Tiny

![](tiny)

{{< farfar 1 >}}

![](tiny?posh=right)

{{< farfar 2 >}}

## Small

![](small-portrait)

{{< farfar 2 >}}

![](small)

{{< farfar 1 >}}

## Medium

![](medium)

{{< farfar 2 >}}

![](medium?posh=left)

{{< farfar 2 >}}

## Normal
{{< farfar 1 >}}

![](normal)

{{< farfar 1 >}}

## Large
{{< farfar 1 >}}

![](large)

{{< farfar 1 >}}

## Extra Large

{{< farfar 1 >}}

![](xlarge)

{{< farfar 1 >}}


## Default

The default for the usual stand-alone CommonnMark image element is the normal size and occupies the main text width as usual in most web layouts.

![Placeholder image](fig/normal.svg)

Only if we register the source file in the front-matter as a named resource, we can add a caption etc. and generate the different layout options shown in the previous sections.