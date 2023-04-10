---
author: Georg Makowski
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
  - src: fig/tiny_text.svg
    name: tiny
    params:
      alt: Placeholder image, tiny size
      size: tiny
      posh: left
      caption: Tiny figure
      attr: gm
  - src: fig/small_text.svg
    name: small
    params:
      alt: Placeholder image, small size
      size: small 
      posh: left
      caption: Small figure
      attr: gm
  - name: small-portrait
    src: fig/small_portrait_text.svg
    params:
      alt: Placeholder image, small portrait size
      caption: Small portrait figure
      size: small
      posh: right
      attr: gm
  - src: fig/medium_text.svg
    name: medium
    params:
      alt: Placeholder image, medium size
      caption: Medium figure – this size is a good choice for a landscape ratio. 
      size: medium 
      posh: right
      attr: gm
  - src: fig/normal_text.svg
    name: normal
    params:
      alt: Placeholder image, normal size
      caption: The **default** normal size occupies the full text width. If the margin is available, the caption is placed there.
      size: normal
      posh: left
      attr: gm
  - src: fig/large_text.svg
    name: large
    params:
      alt: Placeholder image, large size
      caption: The large size fills the text width and the right margin on documenation pages. The text of the caption is constrained to the text width. The attribution is placed in the right margin an on the right as usual.
      size: large
      attr: gm
  - src: fig/extra-large_text.svg
    name: xlarge
    params:
      size: xlarge
      alt: Placeholder image, extra large size
      caption: The size of an extra large image will only show in blog and article pages. It’s treated here like a large image, because the sidebar occupies the left margin.
      attr: gm
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

To produce the following layout options besides the default we need to adhere to the theme’s special [image syntax](/doc/basic/image/syntax). The numbers in the following placeholder images are roughly a multiple of the main text width.

## Default

The default for the usual stand-alone CommonnMark image element is the normal size and occupies the main text width as usual in most web layouts.

![Placeholder image](fig/normal.svg)

Only if we register the source file in the front matter as a named resource, we can add a caption etc. and generate the different layout options shown in the next sections. The following body copy consists of **blind text**, but the captions are descriptive.

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
