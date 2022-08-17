---
author: Georg Makowski
date: "2021-03-25T10:41:36+01:00"
description: Photographs, Graphics etc.
featImg: mulyadi-JJMoAiVl9jA-unsplash.jpg
menu:
  doc:
    name: Image
    parent: basic
    pre: image
resources:
- name: normal
  src: normal.svg
  title: Normal placeholder
  params:
    caption: The default size for an embedded image
- name: small
  src: small.svg
  title: Small placeholder
  params:
    caption: A small embedded image
- name: tiny
  src: tiny.svg
  title: Tiny placeholder
  params:
    caption: Tiny image
subtitle: false
title: Images
weight: 155
categories: [Markdown]
tags: [Inline]
---

With **Perplex**, Markdown images should always be embedded in a text block. Self-contained images are the domain of the [figure]({{< relref "figure" >}}) shortcode.
{.p-first} <!--more-->

## Syntax

Embedding an image is syntactically very similar to placing a [link]({{< relref "link" >}}). The key difference: The image element begins with an exclamation mark`!`.

### Short inline notation

 ```md {.left}
 ![Name](path/to/image.jpg)
 ```

The _name_ of the image element inside the square brackets `[]` is used as alternative text[^1] in case the browser can't display the image.

This syntax is preferable when the relative path name is short — like for images in a [Hugo page bundle]({{< relref "hugo#bundle" >}}).

### Reference notation

We can use a marker in a second pair of squared brackets to separate the image reference:

```md {.left}
![Name][imgref]
```

We have to provide the image reference somewhere else in the same file by repeating the marker followed by a colon and a space before the path:

```md
[imgref]: long/path/to/image.jpg "Optional Title"
```

This syntax is especially convenient, when an image is used more than once or when a long path or title would clutter the other content.

{{< mnote up=13 >}}
**The optional title** for an image gets displayed, when a mouse pointer hovers over the image. Consider that many touch-screen devices don't have one. The image title shouldn’t contain very important information.
{{< /mnote >}}

### Block Attributes

| Attribute      | Mobile | Tablet  |
|:---------------|:-------|:--------|
| default (left) |        |         |
| .i-right       |        |         |
| .i-midst      |        |         |
| .i-small       |        |         |
| .i-tiny        |        |         |

## Image resolution

Perplex relies on Hugo’s image processing capabilities to generate differently sized versions of every image. Thereby, every browser can pick the smallest sufficient size based on the actual width of the image and the pixel density of the actual screen.

For good results, the original images should have a width of at least {{< imagewidth 2 >}} to allow double density on screens with a high resolution.

## Layout

First, copies with different sizes are generated for the given image. They are all placed with the `srcset`-attribute inside the `<img>`-tag and to be at the disposal of the browsers. Based on the actual size of the image and the device resolution, every browser can download the optimal version.{^\*}

Perplex embeds every image **as a float** into the containing paragraph. The most obvious place is _at the beginning_ of paragraph. But we may want to place images also _in the middle_ of a paragraph. In both cases following paragraphs may flow around the image, too, when the containing paragraph is not very long.

Because the image element is so easy to use, authors often include images self-contained {!_between paragraphs_}. This is a {!**problematic practice**}, because the image element will always be wrapped inside a paragraph in the resulting HTML.{^**} Therefore, the {!standard floating layout in Perplex will be broken}.

{{< mnote up=14 >}}
A self-contained image element is treated by Markdown like a paragraph with the image as the sole content inside. The HTML `<img>`-tag is an inline element in need of a block element as container.
{{< /mnote >}}

### The best way {.h-p .h-tip}
to deal with self-contained images in Perplex is to use the [_figure_-shortcode]({{< relref "figure" >}}), that includes the image.

### At the beginning of a paragraph

This is the most common place for an embedded image. By default its placed embedded on the left, if the screen is wide enough.

#### Default size

![Placeholder][normal] Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean. A small river named Duden flows by their place and supplies it with the necessary regelialia. It is a paradisematic country, in which roasted parts of sentences fly into your mouth. Even the all-powerful Pointing has no control about the blind texts it is an almost unorthographical life. One day however a small line of blind text by the name of Lorem Ipsum decided to leave for the far World of Grammar.
{.blind .blind-right}

![Placeholder][normal] Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean. A small river named Duden flows by their place and supplies it with the necessary regelialia. It is a paradisematic country, in which roasted parts of sentences fly into your mouth. Even the all-powerful Pointing has no control about the blind texts it is an almost unorthographical life. One day however a small line of blind text by the name of Lorem Ipsum decided to leave for the far World of Grammar.
{.i-right .blind .blind-left}

#### Small size

![Placeholder][small] Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean. A small river named Duden flows by their place and supplies it with the necessary regelialia. It is a paradisematic country, in which roasted parts of sentences fly into your mouth. Even the all-powerful Pointing has no control about the blind texts it is an almost unorthographical life.
{.i-small .blind}

![Placeholder][small] Far, far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean. A small river named Duden flows by their place and supplies it with the necessary regelialia. It is a paradisematic country, in which roasted parts of sentences fly into your mouth. Even the all-powerful Pointing has no control about the blind texts it is an almost unorthographical life.
{.i-small .i-right .blind}

#### Tiny size

![Placeholder][tiny] Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean. A small river named Duden flows by their place and supplies it with the necessary regelialia. It is a paradisematic country, in which roasted parts of sentences fly into your mouth.
{.i-tiny .blind}

![Placeholder][tiny] Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean. A small river named Duden flows by their place and supplies it with the necessary regelialia. It is a paradisematic country, in which roasted parts of sentences fly into your mouth.
{.i-tiny .i-right .blind}

### In the middle of a paragraph

#### Default

Far, far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean. ![Placeholder][normal] A small river named Duden flows by their place and supplies it with the necessary regelialia. It is a paradisematic country, in which roasted parts of sentences fly into your mouth. Even the all-powerful Pointing has no control about the blind texts it is an almost unorthographical life.
{.i-midst .blind .blind-right}

One day however a small line of blind text by the name of Lorem Ipsum decided to leave for the far World of Grammar. The Big Oxmox advised her not to do so, because there were thousands of bad Commas, wild Question Marks and devious Semikoli, but the Little Blind Text didn’t listen.
{.blind .blind-right}

Far, far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean. ![Placeholder][normal] A small river named Duden flows by their place and supplies it with the necessary regelialia. It is a paradisematic country, in which roasted parts of sentences fly into your mouth. Even the all-powerful Pointing has no control about the blind texts it is an almost unorthographical life.
{.i-midst .i-right .blind .blind-left}

#### Small

Far, far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. ![Placeholder][small] A small river named Duden flows by their place and supplies it with the necessary regelialia.
{.i-small .i-midst}

 Far, far away, behind the word mountains, far from the countries Vokalia and Consonantia. ![Placeholder][small] Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean. A small river named Duden flows by their place and supplies it with the necessary regelialia. It is a paradisematic country, in which roasted parts of sentences fly into your mouth. Even the all-powerful Pointing has no control about the blind texts it is an almost unorthographical life.
{.i-midst .i-small .i-right .blind}

#### Tiny

Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. ![Placeholder](placeholder/img/tiny.svg)
{.i-tiny .i-midst}

Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean. ![Placeholder][tiny] A small river named Duden flows by their place and supplies it with the necessary regelialia. It is a paradisematic country, in which roasted parts of sentences fly into your mouth. Even the all-powerful Pointing has no control about the blind texts it is an almost unorthographical life.
{.i-midst .i-tiny .i-right .blind}

### With a caption

#### Default

![Placeholder](normal) Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean. A small river named Duden flows by their place and supplies it with the necessary regelialia. It is a paradisematic country, in which roasted parts of sentences fly into your mouth. Even the all-powerful Pointing has no control about the blind texts it is an almost unorthographical life. One day however a small line of blind text by the name of Lorem Ipsum decided to leave for the far World of Grammar.
{.blind .blind-right}

#### Small

![Placeholder](small) Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean. A small river named Duden flows by their place and supplies it with the necessary regelialia. It is a paradisematic country, in which roasted parts of sentences fly into your mouth. Even the all-powerful Pointing has no control about the blind texts it is an almost unorthographical life. One day however a small line of blind text by the name of Lorem Ipsum decided to leave for the far World of Grammar.
{.i-small .blind}

#### Tiny

![Placeholder](tiny) Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean. A small river named Duden flows by their place and supplies it with the necessary regelialia. It is a paradisematic country, in which roasted parts of sentences fly into your mouth. Even the all-powerful Pointing has no control about the blind texts it is an almost unorthographical life. One day however a small line of blind text by the name of Lorem Ipsum decided to leave for the far World of Grammar.
{.i-tiny .blind}

## Fallback to full width

![Placeholder](img/efe-kurnaz-RnCPiXixooY-unsplash.jpg)
{.i-full}

[^1]: for the `alt`-attribute.

[normal]: placeholder/img/normal.svg
[small]: placeholder/img/small.svg
[tiny]: placeholder/img/tiny.svg
