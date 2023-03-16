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

Perplex presents this image at the top of your pages and in reference cards. Its also fed to search engines and social networks with the help of meta tags.
{.p-first} <!--more-->

## Syntax

To make the image file available inside of a [page bundle]({{< relref "doc/intro/workflow/content#bundles" >}}), it needs to be included in the resources section of the front-matter. The content file of this page for example contains the following section:

```yaml
resources:
  - src: ray-hennessy-gdTxVSAE5sk-unsplash.jpg
    name: featured
    params:
      alt: fireworks over open water
```

The image is identified by its reserved name `featured`. Only one featured image is allowed per page and it should be at least {${{< width/column 2 >}}} wide to display it with double density on high resolution screens.

If no featured image is given for a page, Perplex will search for one: First in its taxonomies (and there the tags have priority), then in its parent folders.
