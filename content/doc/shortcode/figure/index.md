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
  - src: fig/tiny.svg
    name: tiny
    title: Tiny placeholder
    params:
      class: tiny 
      caption: Tiny figure on the right
  - src: fig/tiny.copy.svg
    name: tiny2
    title: Tiny placeholder
    params:
      class: tiny left
      caption: Tiny figure on the left
  - src: fig/small.svg
    name: small
    title: Small placeholder
    params:
      class: small left
  - name: small-portrait
    src: fig/small_portrait.svg
    title: Small portrait placeholder
    params:
      class: left
  - name: small-portrait-right
    src: fig/small_portrait_right.svg
    title: Small portrait placeholder
    params:
      class: right
  - src: fig/medium.svg
    name: medium
    title: Placeholder
    params:
      class: medium right
  - src: fig/large.svg
    name: large
    title: Placeholder
    params:
      class: large
  - src: fig/extra-large.svg
    name: xlarge
    title: Placeholder
    params:
      class: xlarge
  - src: mathias-konrath-JHb-UFfNOhI-unsplash.jpg
    name: mathias
    title: Skyline of Frankfurt
    params:
      class: large
      attr: Mathias Konrath / Unsplash
      attrlink: https://unsplash.com/@konni
  - src: beau-swierstra-Ndz-4phqtlg-unsplash.jpg
    name: beau
lastmod: 2022-07-25T20:09:40.575Z
---

Because no Markdown element corresponds to the complex HTML `<figure>` tag, we need this shortcode for self-contained images.
{.p-first} <!--more-->

Hugo already provides a [`figure`]({{< relref "internal#figure" >}}) shortcode and Perplex overrides it. The original syntax remains valid with **one exception**. The Perplex shortcode allows to write a caption in Markdown between the starting and closing tag.

When there is no shortcode closing tag, we need to add a slash to the last angled bracket, to mark the shortcode as self-closing:

```md {.left}
{{</* figure src="image" /*/>}}
```

In case we forget the self-closing slash, Hugo will treat the following Markdown as the expected caption and probably produce a garbled page.

## Syntax

You’ll find the syntax for Hugo’s built-in `figure` in the [docs][hugofig]. The Perplex version offers the same set of named parameters.  Because it tends to get very long and error-prone, Perplex offers an alternative syntax using Hugo’s page resources.

### Class Attributes

| Attribute(s) | Mobile                      | Two columns                 | &ge; Three columns              |
|:-------------|-----------------------------|:----------------------------|:--------------------------------|
| tiny         | {^1}&frasl;{_2} float right | {^1}&frasl;{_2} float right | {^1}&frasl;{_2} float right     |
| small        | full                        | 1 float right               | 1 float right                   |
| small left   | full                        | 1 float left                | 1 float left                    |
| medium       | full                        | full                        | 1{^1}&frasl;{_2} float right                   |
| large        | full                        | full                        | 2 left                          |
| large right  | full                        | full                        | 2 float right                   |
| xlarge       | full                        | full                        | full                            |

## Layout

### Tiny

{{< figure tiny2 />}}

{{< figure tiny />}}

{{< farfar 2 >}}

### Small

{{< figure small-portrait-right />}}

{{< farfar 2 >}}

{{< figure small />}}

{{< farfar 1 >}}

### Medium

{{< figure medium >}}
This size is the default for images with a landscape ratio.
{{< /figure >}}

{{< farfar 3 >}}

### Large (default)

{{< figure large />}}

### Extra large

{{< figure xlarge >}}

{{< /figure >}}

### Large

[hugofig]: https://gohugo.io/content-management/shortcodes/#figure=