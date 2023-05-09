---
authors: [Georg Makowski]
title: Embedded image (float)
description: Layout for the inline image element
subtitle: false
date: 2023-03-23T10:10:51+01:00 
weight: 156
menu:
  doc:
    name: Embedded
    parent: images
    pre: image
resources:
- name: normal
  src: normal_text.svg
  params:
    alt: Placeholder image, normal size
    caption: Normal size
    attr: gm
    size: normal
- name: small
  src: small_text.svg
  params:
    alt: Placeholder image, small size
    caption: A small embedded image
    attr: gm
    size: small
- name: tiny
  src: tiny_text.svg
  params:
    alt: Placeholder image, tiny size
    caption: Tiny
    attr: gm
    size: tiny
categories: [markdown]
tags: [image, block]
series: [images]
---

The theme embeds an inline Markdown image by default **as a float** in the containing block.
{.p-first}
<!--more-->

This page contains demonstrations of the layout for embedded images. Their extended syntax is similar to the one for stand-alone images and is explained on the page about the [general image syntax](/doc/basic/image/syntax).

The most common place for an embedded image is **at the beginning** of a paragraph. But we may want to place images also **in the middle** of one or **inside of indented text** blocks.

## Default

The default size is the normal one placed on the left. Images without an entry in the front-matter should be used only at the beginning of text blocks. Registering an image as a [resource](/doc/intro/workflow/resources) opens many options. We can [add a caption](#normal) for example.

![Placeholder image](normal.svg) Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean. A small river named Duden flows by their place and supplies it with the necessary regelialia. It is a paradisematic country, in which roasted parts of sentences fly into your mouth. Even the all-powerful Pointing has no control about the blind texts it is an almost unorthographical life. One day however a small line of blind text by the name of Lorem Ipsum decided to leave for the far World of Grammar.
{.blind .blind-right}

## At the beginning

This is the most common place for an embedded image. By default its placed on the left, if the screen is wide enough.

### Normal size {#normal}

![](normal) Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean. A small river named Duden flows by their place and supplies it with the necessary regelialia. It is a paradisematic country, in which roasted parts of sentences fly into your mouth. Even the all-powerful Pointing has no control about the blind texts it is an almost unorthographical life. One day however a small line of blind text by the name of Lorem Ipsum decided to leave for the far World of Grammar.
{.blind .blind-right}

![](normal?posh=right) Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean. A small river named Duden flows by their place and supplies it with the necessary regelialia. It is a paradisematic country, in which roasted parts of sentences fly into your mouth. Even the all-powerful Pointing has no control about the blind texts it is an almost unorthographical life. One day however a small line of blind text by the name of Lorem Ipsum decided to leave for the far World of Grammar.
{.blind .blind-left}

### Small size

![](small?size=small) Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean. A small river named Duden flows by their place and supplies it with the necessary regelialia. It is a paradisematic country, in which roasted parts of sentences fly into your mouth. Even the all-powerful Pointing has no control about the blind texts it is an almost unorthographical life.
{.blind}

![](small?posh=right&size=small) Far, far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean. A small river named Duden flows by their place and supplies it with the necessary regelialia. It is a paradisematic country, in which roasted parts of sentences fly into your mouth. Even the all-powerful Pointing has no control about the blind texts it is an almost unorthographical life.
{.blind}

### Tiny size

![](tiny?s=tiny) Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean. A small river named Duden flows by their place and supplies it with the necessary regelialia. It is a paradisematic country, in which roasted parts of sentences fly into your mouth.
{.blind}

![](tiny?s=tiny&ph=right) Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean. A small river named Duden flows by their place and supplies it with the necessary regelialia. It is a paradisematic country, in which roasted parts of sentences fly into your mouth.
{.blind}

## In the middle

### Default

Far, far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean. ![](normal?pv=middle) A small river named Duden flows by their place and supplies it with the necessary regelialia. It is a paradisematic country, in which roasted parts of sentences fly into your mouth. Even the all-powerful Pointing has no control about the blind texts it is an almost unorthographical life.
{.blind .blind-right}

One day however a small line of blind text by the name of Lorem Ipsum decided to leave for the far World of Grammar. The Big Oxmox advised her not to do so, because there were thousands of bad Commas, wild Question Marks and devious Semikoli, but the Little Blind Text didn’t listen.
{.blind .blind-right}

Far, far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean. ![](normal?ph=right&pv=middle) A small river named Duden flows by their place and supplies it with the necessary regelialia. It is a paradisematic country, in which roasted parts of sentences fly into your mouth. Even the all-powerful Pointing has no control about the blind texts it is an almost unorthographical life.
{.blind .blind-left}

### Small

Far, far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. ![](small?s=small&pv=middle) A small river named Duden flows by their place and supplies it with the necessary regelialia.

 Far, far away, behind the word mountains, far from the countries Vokalia and Consonantia. ![](small?ph=right&pv=middle&s=small) Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean. A small river named Duden flows by their place and supplies it with the necessary regelialia. It is a paradisematic country, in which roasted parts of sentences fly into your mouth. Even the all-powerful Pointing has no control about the blind texts it is an almost unorthographical life.
{.blind}

### Tiny

Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. ![](tiny?pv=middle&s=tiny) Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.

Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean. ![](tiny?ph=right&pv=middle&s=tiny) A small river named Duden flows by their place and supplies it with the necessary regelialia. It is a paradisematic country, in which roasted parts of sentences fly into your mouth. Even the all-powerful Pointing has no control about the blind texts it is an almost unorthographical life.
{.blind}

## Indented text blocks

Embedded images take a fixed percentage of the width of the containing block: 

1. ![](tiny) Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean.

   - ![](tiny?posh=right) Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean.

   - ![](tiny) Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean.

2. Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.  ![](tiny?posv=middle&posh=right) Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean. A small river named Duden flows by their place and supplies it with the necessary regelialia.
{.blind}

### Full size {.clear}

Usually, we use a normal-sized stand-alone image to use the full width of the text. But they don’t fit inside indented text blocks. Then, we can also place embedded images with the full width of the containing block like this:

1. Far from the countries Vokalia and Consonantia, there live the blind texts:
   ![](normal?size=full)

2. Far from the countries Vokalia and Consonantia, there live the blind texts:
   ![](normal?size=full)
{.box}

or this

1. Far from the countries Vokalia and Consonantia, there live the blind texts:
   ![](normal?size=full)

2. Far from the countries Vokalia and Consonantia, there live the blind texts:
   ![](normal?size=full)
{.col2 .box}
