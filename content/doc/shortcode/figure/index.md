---
author: Georg Makowski
date: 2021-09-11T00:07:48+02:00
description: Self-contained images
subtitle: false
title: figure
weight: 520
menu:
  doc:
    name: figure
    parent: shortcode
    pre: add_photo_alternate
resources:
  - src: markus-spiske--dbOrdtrR1A-unsplash.jpg
    name: featured
    params:
      alt: Some HTML figure tags on a computer screen
  - src: fig/tiny.svg
    name: tiny
    params:
      alt: Placeholder image, tiny size
      size: tiny
      posh: right
      caption: Tiny figure on the right
  - src: fig/small.svg
    name: small
    params:
      alt: Placeholder image, small size
      size: small 
      posh: left
      caption: Small on the left
      attr: GM
  - name: small-portrait
    src: fig/small_portrait.svg
    params:
      alt: Placeholder image, small portrait size
      size: small
      posh: left
      attr: GM
  - src: fig/medium.svg
    name: medium
    params:
      alt: Placeholder image, medium size
      size: medium 
      posh: right
      attr: GM
  - src: fig/normal.svg
    name: normal
    params:
      alt: Placeholder image, normal size
      size: normal
      posh: left
      attr: GM
  - src: fig/large.svg
    name: large
    params:
      alt: Placeholder image, large size
      size: large
      attr: GM
  - src: fig/extra-large.svg
    name: xlarge
    params:
      size: xlarge
      alt: Placeholder image, extra large size
      attr: gm
  - src: mathias-konrath-JHb-UFfNOhI-unsplash.jpg
    name: mathias
    params:
      alt: Skyline of Frankfurt am Main
      size: large
      attr: Mathias Konrath / Unsplash
      attrlink: https://unsplash.com/@konni
  - src: beau-swierstra-Ndz-4phqtlg-unsplash.jpg
    name: beau
lastmod: 2022-07-25T20:09:40.575Z
categories: [Shortcode]
tags: [Block, Image]
---

Because no Markdown element corresponds to the complex HTML `<figure>` tag, we need this shortcode for self-contained images.
{.p-first} <!--more-->

Hugo already provides a [`figure`]({{< relref "internal#figure" >}}) shortcode and Perplex overrides it. The original syntax remains valid with **one exception**. The Perplex shortcode allows to write a caption in Markdown between the starting and closing tag.

When there is no shortcode closing tag, we need to add a slash to the last angled bracket, to mark the shortcode as self-closing:

```md {.left}
{{</* figure src="image" /*/>}}
```

Should we miss the self-closing slash, Hugo cannot warn us. It will treat the following Markdown as the expected caption and produce a probably very garbled result.

## Syntax

You’ll find the syntax for Hugo’s built-in `figure` in the [docs][hugofig]. The Perplex version offers the same set of named parameters.  Because it tends to get very long and error-prone, Perplex offers an alternative syntax using Hugo’s page resources.

##### Resource meta-data

We can specify the following parameters with the given keys and types of values:

| Parameter | Key | Values |
|:---------|:----------|:---------|
| Alternative text | alt | Plain string |
| Attribution | attr | Inline Markdown string |
| Attribution link | attrlink | URL |
| Caption | caption | Inline Markdown string |
| Class | class | CSS class names |
| Link | link | URL |
| Horiz. position | posh | {{% parameters imaging.embedded.posh %}} |
| Vert. position | posv | {{% parameters imaging.embedded.posv %}} |
| Related | rel | See [MDN web docs](https://developer.mozilla.org/en-US/docs/Web/HTML/Link_types) |
| Size | size | {{% parameters imaging.embedded.size %}} |
| Target | target | {{% parameters link.target %}} |

## Layout

### Small

{{< figure src="small-portrait" posh="right" >}}
Small portrait figure on the right
{{< /figure >}}

{{< farfar 2 >}}

{{< figure small >}}
Small figure on the left (default horizontal position)
{{< /figure >}}

{{< farfar 1 >}}

### Medium

{{< figure medium >}}
This size is a good choice for images with a landscape ratio. On smaller screens with only two columns its displayed like a small image.
{{< /figure >}}

{{< farfar 2 >}}

### Normal

{{< figure normal >}}
The **default** normal size is using the full text width. If the margin is available, the caption is placed there.
{{< /figure >}}

### Large

{{< figure large >}}
In the documentation layout the large size fills the text width and the right margin. The text of the caption is constrained to the text width. The attribution is placed in the right margin an on the right as usual.
{{< /figure>}}

### Large

[hugofig]: https://gohugo.io/content-management/shortcodes/#figure=
