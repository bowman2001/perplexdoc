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

The theme presents the featured image at the top of your page and in reference cards. It’s also prepared as a preview-image for links in search engines and social networks.
{.p-first} <!--more-->

The featured image needs to be placed either as a [page resource](/doc/intro/workflow/resources/) with the name {$featured} or as a data file (YAML, TOML, or JSON) with this base name. In case you want to use an image already registered in the page resources under a different name, you can mark it with the parameter `featured: image-name`. If no specific featured image is given for a page, the theme will search in [related ones](doc/intro/workflow/resources/#resources-from-related-page-bundles).

The image should be at least {${{< width/column 2 >}}} wide for high density, a good width for high resolution preview-images is often {$1200px}.
{.inline}

{{< mnote >}}This depends on the layout of the social networks and search engines you would like to serve.{{< /mnote >}}

All the parameters available for [enhancing images](doc/enhancing/image/syntax) are available except the ones for the width, which depends on the page layout.

News, Blog, Docs
: The {$small} width is the default and we can only use {$tiny} as alternative.

Articles [TODO] 
: The default width for articles is large and we can only use the alternatives {$text} or {$xlarge}.
{.dl-loose}

### TODO

There is another option for documentation pages. We can generate a featured image with the icon from the menu entry in the frontmatter by setting the parameter `featured: icon`.
