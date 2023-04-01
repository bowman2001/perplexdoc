---
title: Layout Options for stand-alone Images 
date: 2023-03-27T12:02:10+02:00
categories: [Markdown]
tags: [image, block]
series: [demo]
resources:
  - src: markus-spiske--dbOrdtrR1A-unsplash.jpg
    name: featured
    params:
      alt: Some HTML figure tags on a computer screen
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
toc: true
---

The theme offers many different layout options for stand-alone Markdown images. Here you can see the ones for all the pages without a sidebar.
{.p-first}
<!--more-->

This page is showing layout demonstrations. The CommonMark syntax and the additional parameter handling by this theme are described on the [image syntax page](/doc/basic/image/syntax).

The numbers in the following placeholder images are roughly a multiple of the main text width.

## Default

The normal size occupies the main text width, because this is the way stand-alone images are usually placed in other Hugo themes.

![Placeholder image](fig/normal.svg)

Only if we register the source file in the front-matter as a named resource, we can add a caption etc. and generate the different layout options shown in the next sections. The following body copy consists of **blind text**, but the captions are descriptive.

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