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
 ![Alternative Text](image.jpg)
 ```

The alternative text inside the square brackets `[]` is used by screen readers, pure text browsers and search engines.

{{< mnote up=11 >}}
We should always provide an alternative text. Perplex also allows to specify an `alt` parameter in the resource meta-data, when we reference an image there. In that case, we have two options: We can leave the brackets empty or override this resource parameter.
{{< /mnote >}}

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

Markdown can’t handle more image parameters than the ones mentioned here. To offer layout variations, Perplex includes additional parameters for the images with the help of Hugo. All of them can be given as resource meta-data in the front-matter. Alternatively we can change layout parameters directly in the Markdown by adding a query string to the image name.

#### Resource meta-data

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

#### In place query string

```sh {.left}
https://name.org?id=val&id2=val2
```

The syntax for query strings has been introduced to extend URLs with optional parameters. The start of every query string is marked by an interrogation mark `?`. Then follows a short parameter key, the equal sign `=` and the parameter value. Consecutive key-value pairs are separated by an ampersand `&`.

{{< mnote up=17 >}}
These query strings are usually generated automatically to specify API requests. The idea to use their well established syntax to pass on layout parameters goes back to a suggestion by Joe Mooring in the Hugo forum.
{{< /mnote >}}

We are using the syntax here for the few layout parameters, which tend to change more often in the process of content creation. We can only specify the size and the position of an image like:

```md
![Alternative text](image.jpg?size=small&posh=right)
```

| Parameter | Key | Values |
|:----|:----|:----|
| Size | size (s) | {{% parameters imaging.embedded.size %}} |
| Horiz. position | posh (ph) | {{% parameters imaging.embedded.posh %}} |
| Vert. position | posv (pv) | {{% parameters imaging.embedded.posv %}} |

##### Override {.h-info}

When these parameters are already defined in the resource section of the front-matter, the in-place parameters will override them.

## Resolution

Perplex relies on Hugo’s powerful image processing capabilities. Many different sized versions of every image are generated automatically, so every client browser can pick the optimal size to display. We don’t have to worry about the sizes, but we should supply a large enough original image. For crisp embedded images in the default size, the originals should have a width of at least {${{< colwidth 3 >}}} to allow triple density on screens with high resolution.

{{< mnote up=20 >}}
When we build a project with many images — like this one or example — we have to show a little patience in the beginning. Image processing may take a few minutes. The generated images are then cached by Hugo and we don’t have to wait again in subsequent runs. When you are using external builds, you should enable caching or include the {$resources} folder in your repository.
{{< /mnote >}}

In case we can’t provide a large enough version of an image, Perplex uses an [excellent interpolation filter][filter] provided by Hugo to enhance its size. Interpolated images may look blurry, there is nothing we can do about that.

## Layout

Perplex embeds every image **as a float** into the containing text block by default. The default is the most common choice **at the beginning** of the block. But we may want to place images also **in the middle**. In both cases following blocks may have to flow around the image, too, when the containing one is short.

### At the beginning

This is the most common place for an embedded image. By default its placed on the left, if the screen is wide enough.

#### Default size

![](normal) Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean. A small river named Duden flows by their place and supplies it with the necessary regelialia. It is a paradisematic country, in which roasted parts of sentences fly into your mouth. Even the all-powerful Pointing has no control about the blind texts it is an almost unorthographical life. One day however a small line of blind text by the name of Lorem Ipsum decided to leave for the far World of Grammar.
{.blind .blind-right}

![](normal?posh=right) Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean. A small river named Duden flows by their place and supplies it with the necessary regelialia. It is a paradisematic country, in which roasted parts of sentences fly into your mouth. Even the all-powerful Pointing has no control about the blind texts it is an almost unorthographical life. One day however a small line of blind text by the name of Lorem Ipsum decided to leave for the far World of Grammar.
{.blind .blind-left}

#### Small size

![](small?size=small) Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean. A small river named Duden flows by their place and supplies it with the necessary regelialia. It is a paradisematic country, in which roasted parts of sentences fly into your mouth. Even the all-powerful Pointing has no control about the blind texts it is an almost unorthographical life.
{.blind}

![](small?posh=right&size=small) Far, far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean. A small river named Duden flows by their place and supplies it with the necessary regelialia. It is a paradisematic country, in which roasted parts of sentences fly into your mouth. Even the all-powerful Pointing has no control about the blind texts it is an almost unorthographical life.
{.blind}

#### Tiny size

![](tiny?s=tiny) Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean. A small river named Duden flows by their place and supplies it with the necessary regelialia. It is a paradisematic country, in which roasted parts of sentences fly into your mouth.
{.blind}

![](tiny?s=tiny&ph=right) Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean. A small river named Duden flows by their place and supplies it with the necessary regelialia. It is a paradisematic country, in which roasted parts of sentences fly into your mouth.
{.blind}

### In the middle

#### Default

Far, far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean. ![](normal?pv=middle) A small river named Duden flows by their place and supplies it with the necessary regelialia. It is a paradisematic country, in which roasted parts of sentences fly into your mouth. Even the all-powerful Pointing has no control about the blind texts it is an almost unorthographical life.
{.blind .blind-right}

One day however a small line of blind text by the name of Lorem Ipsum decided to leave for the far World of Grammar. The Big Oxmox advised her not to do so, because there were thousands of bad Commas, wild Question Marks and devious Semikoli, but the Little Blind Text didn’t listen.
{.blind .blind-right}

Far, far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean. ![](normal?ph=right&pv=middle) A small river named Duden flows by their place and supplies it with the necessary regelialia. It is a paradisematic country, in which roasted parts of sentences fly into your mouth. Even the all-powerful Pointing has no control about the blind texts it is an almost unorthographical life.
{.blind .blind-left}

#### Small

Far, far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. ![](small?s=small&pv=middle) A small river named Duden flows by their place and supplies it with the necessary regelialia.

 Far, far away, behind the word mountains, far from the countries Vokalia and Consonantia. ![](small?ph=right&pv=middle&s=small) Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean. A small river named Duden flows by their place and supplies it with the necessary regelialia. It is a paradisematic country, in which roasted parts of sentences fly into your mouth. Even the all-powerful Pointing has no control about the blind texts it is an almost unorthographical life.
{.blind}

#### Tiny

Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. ![](tiny?pv=middle&s=tiny) Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.

Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean. ![](tiny?ph=right&pv=middle&s=tiny) A small river named Duden flows by their place and supplies it with the necessary regelialia. It is a paradisematic country, in which roasted parts of sentences fly into your mouth. Even the all-powerful Pointing has no control about the blind texts it is an almost unorthographical life.
{.blind}

## Fallback to full width

When your content already relies on self-contained Markdown images, it will take some time to restructure them. Because their default layout in Perplex will be broken—the default layout is only half the size of the main text column—we have a fallback.

{{< mnote up=14 >}}
A self-contained image element is treated by Markdown like a paragraph with the image as the sole content inside. The HTML `<img>`-tag is an inline element in need of a block element as container. When we use the [{$figure}-shortcode]({{< relref "figure" >}}) for self-contained images, we can also make them bigger than the main text column or place them on the sides.
{{< /mnote >}}

We can set the configuration parameter `embedFull` to `true` in the site configuration to use it for all images. We can also place this parameter in the front-matter of specific pages. Or we can set the size of a specific image to `full`, which is probably only useful for this demonstration:

```md
![A surreal colored corridor](efe-kurnaz-RnCPiXixooY-unsplash.jpg?size=full)
```

![A surreal colored corridor](efe-kurnaz-RnCPiXixooY-unsplash.jpg?size=full)

[^1]: for the `alt`-attribute.

[filter]: https://gohugo.io/content-management/image-processing/#resampling-filter
