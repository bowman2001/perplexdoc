---
authors: [Georg Makowski]
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
categories: [template]
tags: [image, page]
series: [images]
weight: 630
resources:
  - src: ray-hennessy-gdTxVSAE5sk-unsplash.jpg
    name: featured
    params:
      alt: fireworks over open water
      zoom: 2
---

The theme presents the featured image at the top of your page and in preview cards. It’s also prepared for references in search engines and social networks.
{.p-first} <!--more-->

## Syntax

The featured image needs to be provided either as a [page resource](/doc/intro/workflow/resources/) with the name {$featured} or as a data file (YAML, TOML, or JSON) with this base name.

In case you want to use an image already registered in the page resources under a different name, you can mark it with the parameter `featured: image-name`. If no specific featured image is given for a page, the theme will search [related pages](doc/intro/workflow/resources/#fallback-resources-from-related-page-bundles) for a fallback.
{.inline}

{{< mnote >}}The name **icon** is reserved for the menu icon (see below) and can’t be used as a new identifier.{{< /mnote >}} 

All the parameters available for [enhancing images](doc/enhancing/image/syntax) are available except the ones for the width, which depends on the current page layout.

News, Blog, Docs
: The {$small} width is the default and we can only use {$tiny} as an alternative.

Articles [TODO]
: The default width for articles is large and we can only use the alternatives {$text} or {$xlarge}.
{.dl-loose}

## Size of the image

The [necessary width](/doc/enhancing/image/processing) depends on the layout but we should consider the use of a featured image for previews in another context. The preferred width of social networks may be significantly higher.

## Menu icon as image

When there already is a menu icon in the frontmatter of a **documentation page**, we can simply reuse it by setting the parameter `featured: icon`.