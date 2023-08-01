---
authors: [Georg Makowski]
title: Stand-alone Image
description: Layout demo for block images on a documentation page
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

![](fig-tiny)

{{% pangram 4 %}}

![](fig-tiny?posh=right)

{{% pangram 9 %}}

## Small

![](fig-small-portrait?posh=left)

{{% pangram 11 %}}

![](fig-small?posh=right)

{{% pangram 15 %}}

## Medium

![](fig-medium)

{{% pangram 9 %}}

![](fig-medium?posh=left)

{{% pangram 17 %}}

## Normal
{{% pangram 3 %}}

![](fig-normal)

{{% pangram 3 %}}

## Large
{{% pangram 3 %}}

![](fig-large)

{{% pangram 3 %}}

## Extra Large

{{% pangram 3 %}}

![](fig-xlarge)

{{% pangram 3 %}}

## Default

The default for the usual stand-alone CommonnMark image element is the normal size and occupies the main text width as usual in most web layouts.

![Placeholder image](fig/normal.svg)

Only if we register the source file in the front-matter as a named resource, we can add a caption etc. and generate the different layout options shown in the previous sections.