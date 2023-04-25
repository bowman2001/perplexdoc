---
authors: [gm]
editors: [gm]
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
- name: small
  src: small_text.svg
  params:
    alt: Placeholder image, small size
    caption: A small embedded image
    attr: gm
- name: tiny
  src: tiny_text.svg
  params:
    alt: Placeholder image, tiny size
    caption: Tiny image
    attr: gm
categories: [markdown]
tags: [image, block]
series: [images]
---

The theme embeds an inline Markdown image  **as a float** in the layout.
{.p-first}
<!--more-->

## Layout

The most common choice for an embedded image is **at the beginning** of a paragraph. But we may want to place images also **in the middle** of one. In both cases also following blocks will flow around the image, when the containing one is too short. To stop this behavior, we have to add the [attribute](/doc/attribute) `.clear` to the **following** block.

### Default

The default size is the normal one placed on the left. Images without an entry in the front-matter should be used only at the beginning of text blocks. Registering an image as a [resource](/doc/intro/workflow/resources) opens many options. We can [add a caption](#normal) for example.

![Placeholder image](normal.svg) Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean. A small river named Duden flows by their place and supplies it with the necessary regelialia. It is a paradisematic country, in which roasted parts of sentences fly into your mouth. Even the all-powerful Pointing has no control about the blind texts it is an almost unorthographical life. One day however a small line of blind text by the name of Lorem Ipsum decided to leave for the far World of Grammar.
{.blind .blind-right}

### At the beginning

This is the most common place for an embedded image. By default its placed on the left, if the screen is wide enough.

#### Normal size {#normal}

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

