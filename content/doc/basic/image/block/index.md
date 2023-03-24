---
author: Georg Makowski
title: Stand-alone Image (figure)
description: Layout for image as a single block
subtitle: false
date: 2023-03-23T10:10:38+01:00 
menu:
  doc:
    name: Stand-alone
    parent: images
    pre: panorama
resources:
  - src: markus-spiske--dbOrdtrR1A-unsplash.jpg
    name: featured
    params:
      alt: Some HTML figure tags on a computer screen
  - src: fig/small.svg
    name: small
    params:
      alt: Placeholder image, small size
      size: small 
      posh: left
      caption: Small on the left
      attr: gm
  - name: small-portrait
    src: fig/small_portrait.svg
    params:
      alt: Placeholder image, small portrait size
      caption: Small portrait on the right
      size: small
      posh: right
      attr: gm
  - src: fig/medium.svg
    name: medium
    params:
      alt: Placeholder image, medium size
      caption: This size is a good choice for images with a landscape ratio. On smaller screens with only two columns its displayed like a small image.
      size: medium 
      posh: right
      attr: gm
  - src: fig/normal.svg
    name: normal
    params:
      alt: Placeholder image, normal size
      caption: The **default** normal takes the full text width. If the margin is available, the caption is placed there.
      size: normal
      posh: left
      attr: gm
  - src: fig/large.svg
    name: large
    params:
      alt: Placeholder image, large size
      caption: The large size fills the text width and the right margin on documenation pages. The text of the caption is constrained to the text width. The attribution is placed in the right margin an on the right as usual.
      size: large
      attr: gm
  - src: fig/extra-large.svg
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

The theme allows to resize your stand-alone Markdown images and change their place in the layout.
{.p-first}
<!--more-->

## Layout

The numbers in the following placeholder images are roughly a multiple of the main text width. The body copy is just blind text, the captions are descriptive.

### Small

![](small-portrait)

{{< farfar 2 >}}

![](small)

{{< farfar 1 >}}

### Medium

![](medium)

{{< farfar 2 >}}

### Normal
{{< farfar 1 >}}

![](normal)

{{< farfar 1 >}}

### Large
{{< farfar 1 >}}

![](large)

{{< farfar 1 >}}

### Extra Large

{{< farfar 1 >}}

![](xlarge)

{{< farfar 1 >}}
