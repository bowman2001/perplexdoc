---
author: Georg Makowski
title: Image Processing
description: The theme generates all necessary versions 
subtitle: false
date: 2023-03-23T11:51:34+01:00 
menu:
  doc:
    name: Processing
    parent: images
    pre: engineering
categories: [markdown]
tags: [image, block]
series: [images]
weight: 158
---

The theme relies on Hugo’s processing capabilities for image resources in page bundles.
{.p-first}
<!--more-->

Many different sized versions of every image are generated automatically, so every client browser finds an optimal size to display. We only need to supply an original image which is large enough for the intended layout.

## Resolution

For crisp images on high density screens we should at least provide images for double density display.

| Image type | 2&times;density | 3&times;density |
|:-----------|:-------:|:-----:|
| block (default) | {{< width/measure 2 >}} | {{< width/measure 3 >}} |
| large block | {{< width/measure 3 >}} | {{< width/measure 4.5 >}} |
| extra-large block | {{< width/measure 4 >}} | {{< width/measure 6 >}} |
| embedded (default) \& small block | {{< width/column 2 >}} | {{< width/column 3 >}} |
| small embedded | {{< width/column 1 >}} | {{< width/column 1.5 >}} |

When we build a project with more than hundred images — like this project — we have to show a little patience on the first Hugo run. Image processing may take a few minutes. The generated images are cached by Hugo and we don’t have to wait again in subsequent runs.

{{< mnote up=14 >}}
On **virtual machines** we should enable a caching mechanism. If the provider pulls the content from a repository, we can  include the reserved {$_resources} folder, where processed files are stored.
{{< /mnote >}}

In case we can’t provide a large enough version of an image, Perplex uses an [excellent interpolation filter][filter] provided by Hugo to enlarge its size smoothly. Those interpolated images may look blurry nonetheless, there is no way to get missing information back. A high resolution of the original is always preferable.

## Manipulation

### TODO

- Improve templates
- Document resource parameters


[filter]: https://gohugo.io/content-management/image-processing/#resampling-filter
