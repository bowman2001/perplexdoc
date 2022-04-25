---
author: Georg Makowski
date: "2021-09-11T00:07:48+02:00"
description: Display Images together with additional information
subtitle: false
title: figure
weight: 10
menu:
  doc:
    name: figure
    parent: theme
    pre: add_photo_alternate
resources:
- src: img/mathias-konrath-JHb-UFfNOhI-unsplash.jpg
  name: mathias
  title: "{{< farfar 1 >}}"
  params:
    attr: Mathias Konrath / Unsplash
    attrlink: https://unsplash.com/@konni
- src: img/beau-swierstra-Ndz-4phqtlg-unsplash.jpg
  name: beau  
---

There is no Markdown counterpart for the complex HTML `figure` tag. To include big images with a caption and an attribution into our pages, we need this shortcode.
{.p-lead} <!--more-->

Hugo already provides a [`figure` shortcode]({{< relref "internal#figure" >}}) and _Perplex_ overrides it. The original syntax remains valid. The _Perplex_ shortcode adds the possibility to write the caption between a starting and closing tag. This way we can use block elements of Markdown, especially small headings.

## Layout

{{< figure src="fig/small.svg" />}}

{{< farfar 2 >}}
