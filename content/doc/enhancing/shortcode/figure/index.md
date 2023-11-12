---
authors: [Georg Makowski]
date: 2021-09-11T00:07:48+02:00
description: Shortcode for self-contained images
subtitle: false
title: Figure
weight: 595
menu:
  doc: 
    name: Figure
    parent: shortcode
    pre: add_photo_alternate
resources:
  - src: markus-spiske--dbOrdtrR1A-unsplash.jpg
    name: featured
    params:
      alt: Some HTML figure tags on a computer screen
  - src: fig/small.svg
    name: small
    params:
      alt: Placeholder image, small size
      size: small 
      posh: left
      caption: Small size
      attr: gm
  - name: small-portrait
    src: fig/small_portrait.svg
    params:
      alt: Placeholder image, small portrait size
      caption: Small portrait size
      size: small
      posh: right
      attr: gm
  - src: fig/medium.svg
    name: medium
    params:
      alt: Placeholder image, medium size
      caption: Medium size
      size: medium 
      posh: right
      attr: gm
  - src: fig/normal.svg
    name: normal
    params:
      alt: Placeholder image, normal size
      caption: The **default** normal size is using the full text width. If the margin is available, the caption is placed there.
      size: normal
      posh: left
      attr: gm
  - src: fig/large.svg
    name: large
    params:
      alt: Placeholder image, large size
      caption: Large size
      size: large
      attr: gm
  - src: fig/extra-large.svg
    name: xlarge
    params:
      size: xlarge
      alt: Placeholder image, extra large size
      caption: The full size of an extra large image will only show on pages with a left margin. It’s treated here like a large image.
      attr: gm
  - src: beau-swierstra-Ndz-4phqtlg-unsplash.jpg
    name: beau
categories: [Markdown]
tags: [Shortcode]
draft: true
---

Because no Markdown element corresponds to the complex HTML `<figure>` tag, this shortcode **was** the solution for stand-alone images.
{.p-first} <!--more-->

Hugo already provides a {$figure} shortcode and Perplex overrides this shortcode.

## Syntax

The original syntax remains valid with **two exceptions**.

1. The Perplex shortcode allows writing the caption between the starting and closing shortcode. When there is no shortcode closing tag, we need to add a slash to the last angled bracket, to mark the shortcode as self-closing like `{{</* figure src="image" */>}}`.

    Should we miss the self-closing slash, Hugo can’t recognize the mistake and expects a closing tag. It may treat all the following Markdown as the caption and produce a very garbled page.

2. The {$title} parameter has a different meaning in Perplex. The Hugo shortcode treats it as a title for the caption and generates a `<h4>` tag. The Perplex {$figure} uses the {$title} parameter as attribute and adds it to the resulting figure because captions should contain only inline Markdown in the Perplex layout.  

The Perplex version offers the same set of named parameters as Hugo’s built-in shortcode and a few more to specify the size and position of a figure.

### Named parameters

We can specify the following parameters with the given key names and types of values:

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
{.normal}

When we need many of these parameters, the figure tag gets very long and therefore prone to typing errors. Perplex also offers the alternative to specify these parameters in the resources section of the frontmatter.

#### Overriding of frontmatter meta-data {.h-p .h-info}

When we have set parameters in the frontmatter and also specify them in named parameters for the shortcode, the latter will override the former. Same goes for the optional caption between the shortcode tags.

## Layout

The numbers in the following placeholder images are roughly a multiple of the main text width.

### Normal (default)

{{% pangram 2 %}}
{.placeholder data-pagefind-ignore="all"}

{{< figure normal >}}

{{% pangram 2 %}}
{.placeholder data-pagefind-ignore="all"}
### Small

{{< figure src="small-portrait" posh="right" >}}

{{% pangram 15 %}}
{.placeholder data-pagefind-ignore="all"}

{{< figure small >}}

{{% pangram 10 %}}
{.placeholder data-pagefind-ignore="all"}

### Medium

{{< figure medium >}}

{{% pangram 15 %}}
{.placeholder data-pagefind-ignore="all"}

### Large

{{< figure large >}}

### Extra Large

{{< figure xlarge >}}