---
author: Georg Makowski
date: "2021-12-29T17:52:55+01:00"
description: Decorate your page and grab attention
menu:
  doc:
    name: Featured Image
    parent: page
    pre: image
subtitle: false
title: Featured Image
linktitle: Featured
categories: [Page]
tags: [image]
series: [images]
weight: 630
resources:
  - src: ray-hennessy-gdTxVSAE5sk-unsplash.jpg
    name: featured
    params:
      alt: fireworks over open water
---

Perplex presents this image at the top of your page and in reference cards. It’s also included in a special format for search engines and social networks.
{.p-first} <!--more-->

## Prerequisite

The image file needs to be placed in the [page bundle](/doc/intro/workflow/content#bundles). Only one featured image is allowed per page and it should be at least {${{< width/column 2 >}}} wide to display it with double density on high resolution screens.

If no featured image is available for a page, Perplex will search for one in related pages or display a site fallback.

## Syntax

To make the image file available to Hugo and the theme, it also needs to be registered in the [resources section](/doc/intro/workflow/resources) of the front-matter. The filename of the image is identified there by its reserved name `featured`. And you can add an alternative text for your image with the `alt` parameter.

The content file of this page for example contains the following section:

```yaml
resources:
  - src: ray-hennessy-gdTxVSAE5sk-unsplash.jpg
    name: featured
    params:
      alt: fireworks over open water
```
