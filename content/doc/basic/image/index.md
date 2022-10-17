---
author: Georg Makowski
date: "2021-03-25T10:41:36+01:00"
description: Photos, Graphics etc.
menu:
  doc:
    name: Image
    parent: basic
    pre: image
resources:
- name: featured
  src: mulyadi-JJMoAiVl9jA-unsplash.jpg
  params:
    alt: Splashing ring of water
- name: normal
  src: normal.svg
  params:
    alt: Placeholder image, default size
    caption: The default size for an embedded image
    attr: GM
- name: small
  src: small.svg
  params:
    alt: Placeholder image, small size
    caption: A small embedded image
    attr: GM
- name: tiny
  src: tiny.svg
  params:
    alt: Placeholder image, tiny size
    caption: Tiny image
    attr: GM
subtitle: false
title: Images
weight: 155
categories: [Markdown]
tags: [Inline, Image]
series: [images]
---

Perplex handles all Markdown images by default as floats inside a text block. Self-contained separate images are the domain of the {$figure} shortcode. But there is a fallback for the widespread self-contained use of Markdown images.
{.p-first} <!--more-->

## Syntax

Embedding an image is syntactically similar to placing a [link]({{< relref "doc/basic/link" >}}). The sole difference: The image element begins with an exclamation mark`!`.

### Short inline notation

 ```md {.left}
 ![Name](image.jpg)
 ```

The name of the image element inside the square brackets `[]` is used as alternative text[^1] in case the browser can't display the image and is mandatory.

This syntax is preferable when the relative path name is short — like for images in a [Hugo page bundle]({{< relref "doc/intro/workflow/content#page-bundles" >}}).

### Reference notation

We can use a marker in a second pair of squared brackets to separate the image reference:

```md {.left}
![Name][imgref]
```

We have to provide the image reference somewhere else in the same file by repeating the marker followed by a colon and a space before the path:

```md
[imgref]: long/path/to/image.jpg "Optional Title"
```

This syntax is especially convenient, when an image is used more than once or when a long path or title would clutter the content.

{{< mnote up=14 >}}
**The optional title** for an image gets displayed, when a mouse pointer hovers over the image. Consider that many touch-screen devices don't have one. The image title shouldn’t contain very important information.
{{< /mnote >}}

### Passing parameters

Markdown images can’t handle more parameters than the ones mentioned above. To offer layout options, Perplex includes additional parameters for the images. All of them can be given as resource meta-data in the front-matter. The parameters changing the layout, can alternatively be added directly to the image resource name as query string.

#### Resource meta-data

| Parameter | Identifier | Possible values |
|:---------|:----------|:---------|
| Alternate text | alt | Plain string |
| Attribution | attr | Inline Markdown string |
| Attribution link | attrlink | URL |
| Caption | caption | Inline Markdown string |
| Class | class | CSS class names |
| TODO: Finish |

#### In place query string

```sh {.left}
https://name.org?id=val&id2=val2
```

The syntax for query strings has been introduced to extend URLs with optional parameters. The start of every query string is marked by an interrogation mark `?`. Then follows a short parameter key, the equal sign `=` and the parameter value. Consecutive key-value pairs a separated by an ampersand `&`.

{{< mnote up=17 >}}
These query strings are usually meant to be generated automatically to specify API requests. 
{{< /mnote >}}

We are using the syntax here for the few layout parameters, which tend to change more often in the process of content creation. We can specify the size and the position of an image like:

```md
![Alternative text](image.jpg?size=small&posh=right)
```

| Parameter | Key | Possible values |
|:----|:----|:----|
| Size | size (s) | {{% parameters imaging.embedded.size %}} |
| Horiz. position | posh (ph) | {{% parameters imaging.embedded.posh %}} |
| Vert. position | posv (pv) | {{% parameters imaging.embedded.posv %}} |

## Image resolution

Perplex relies on Hugo’s powerful image processing capabilities. Many different sized versions of every image are generated automatically, so every client browser can pick the optimal size to display.

{{< mnote up=14 >}}
When we build a project with many images — like this one or example — we have to show a little patience in the beginning. Image processing may take a few minutes. The generated images are cached by Hugo and we don’t have to wait again in subsequent runs.
{{< /mnote >}}

The For good results, the original images should have a width of at least {{< imagewidth 2 >}} to allow double density on screens with a high resolution.

## Layout

Perplex embeds every image **as a float** into the containing paragraph. The most obvious place is _at the beginning_ of paragraph. But we may want to place images also _in the middle_ of a paragraph. In both cases following paragraphs may have to flow around the image, too, when the containing paragraph is not very long.

{{< mnote up=14 >}}
A self-contained image element is treated by Markdown like a paragraph with the image as the sole content inside. The HTML `<img>`-tag is an inline element in need of a block element as container.
{{< /mnote >}}

### The best way {.h-p .h-tip}

to deal with self-contained images in Perplex is to use the [_figure_-shortcode]({{< relref "figure" >}}), that includes the image.

### At the beginning of a paragraph

This is the most common place for an embedded image. By default its placed embedded on the left, if the screen is wide enough.

#### Default size

![](normal) Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean. A small river named Duden flows by their place and supplies it with the necessary regelialia. It is a paradisematic country, in which roasted parts of sentences fly into your mouth. Even the all-powerful Pointing has no control about the blind texts it is an almost unorthographical life. One day however a small line of blind text by the name of Lorem Ipsum decided to leave for the far World of Grammar.
{.blind .blind-right}

![](normal?pos=right) Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean. A small river named Duden flows by their place and supplies it with the necessary regelialia. It is a paradisematic country, in which roasted parts of sentences fly into your mouth. Even the all-powerful Pointing has no control about the blind texts it is an almost unorthographical life. One day however a small line of blind text by the name of Lorem Ipsum decided to leave for the far World of Grammar.
{.blind .blind-left}

#### Small size

![](small?size=small) Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean. A small river named Duden flows by their place and supplies it with the necessary regelialia. It is a paradisematic country, in which roasted parts of sentences fly into your mouth. Even the all-powerful Pointing has no control about the blind texts it is an almost unorthographical life.
{.blind}

![](small?pos=right&size=small) Far, far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean. A small river named Duden flows by their place and supplies it with the necessary regelialia. It is a paradisematic country, in which roasted parts of sentences fly into your mouth. Even the all-powerful Pointing has no control about the blind texts it is an almost unorthographical life.
{.blind}

#### Tiny size

![](tiny?s=tiny) Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean. A small river named Duden flows by their place and supplies it with the necessary regelialia. It is a paradisematic country, in which roasted parts of sentences fly into your mouth.
{.blind}

![](tiny?s=tiny&p=right) Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean. A small river named Duden flows by their place and supplies it with the necessary regelialia. It is a paradisematic country, in which roasted parts of sentences fly into your mouth.
{.blind}

### In the middle of a paragraph

#### Default

Far, far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean. ![](normal?pv=middle) A small river named Duden flows by their place and supplies it with the necessary regelialia. It is a paradisematic country, in which roasted parts of sentences fly into your mouth. Even the all-powerful Pointing has no control about the blind texts it is an almost unorthographical life.
{.blind .blind-right}

One day however a small line of blind text by the name of Lorem Ipsum decided to leave for the far World of Grammar. The Big Oxmox advised her not to do so, because there were thousands of bad Commas, wild Question Marks and devious Semikoli, but the Little Blind Text didn’t listen.
{.blind .blind-right}

Far, far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean. ![](normal?ph=right&pv=middle) A small river named Duden flows by their place and supplies it with the necessary regelialia. It is a paradisematic country, in which roasted parts of sentences fly into your mouth. Even the all-powerful Pointing has no control about the blind texts it is an almost unorthographical life.
{.blind .blind-left}

#### Small

Far, far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. ![](small?size=small&posv=middle) A small river named Duden flows by their place and supplies it with the necessary regelialia.

 Far, far away, behind the word mountains, far from the countries Vokalia and Consonantia. ![](small?ph=right&pv=middle&s=small) Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean. A small river named Duden flows by their place and supplies it with the necessary regelialia. It is a paradisematic country, in which roasted parts of sentences fly into your mouth. Even the all-powerful Pointing has no control about the blind texts it is an almost unorthographical life.
{.blind}

#### Tiny

Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. ![](tiny?pv=middle&s=tiny) Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.

Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean. ![](tiny?ph=right&pv=middle&s=tiny) A small river named Duden flows by their place and supplies it with the necessary regelialia. It is a paradisematic country, in which roasted parts of sentences fly into your mouth. Even the all-powerful Pointing has no control about the blind texts it is an almost unorthographical life.
{.blind}

## Fallback to full width

![A surreal colored corridor](efe-kurnaz-RnCPiXixooY-unsplash.jpg?size=full)

[^1]: for the `alt`-attribute.
