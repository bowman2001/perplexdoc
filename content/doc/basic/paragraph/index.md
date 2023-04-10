---
author: Georg Makowski
date: "2021-03-23T21:38:25+01:00"
description: Essential building blocks of text
menu:
  doc:
    name: Paragraphs
    parent: basic
    pre: segment
subtitle: false
title: Paragraphs
weight: 108
categories: [Markdown]
tags: [paragraph, block]
resources:
  - name: featured
    src: finn-mund-8q2r2XQpDO0-unsplash.jpg
    params:
      alt: Some paragraphs of text
      hint: text
      quality: 90
---

Paragraphs are the essential building blocks of text. A comfortable line length and surrounding whitespace contribute to their legibility.
{.p-first} <!--more-->

## Syntax

A paragraph is a sequence of Unicode characters with arbitrary length. It’s finished by an empty line.

In addition to the normal paragraph, the theme offers a **first** paragraph — like the first one on this page. There is also a **big** and a **small** one. We can also assign a topic or some other general category to a following section by adding a **meta** paragraph above it.

These styles are applied with the [attributes](/doc/attribute) `{.p-first}`, `{.p-big}`, `{.p-small}` and `{.p-meta}`.

## Layout

Line height and length are coordinated with the proportions of the font-family Plex. The space between subsequent paragraphs is twice as big as the space between two lines inside a paragraph. On small screens it’s a little less.

{{< mnote up=11 >}}
In print subsequent paragraphs are sometimes separated by indenting their first line, to interrupt the reading flow as little as possible.

The technique is mostly used for prose, but also appropriate for notes like this one. Here, a vertical separation would falsely suggest the beginning of a new note.
{{< /mnote >}}

### Two standard Paragraphs

{{< farfar 2 >}}

### Big Paragraph

{{< farfarshort 1 >}}

Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.
{.p-big .blind}

{{< farfarshort 1 >}}

### Small Paragraph

{{< farfarshort 1 >}}

Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean. A small river named Duden flows by their place and supplies it with the necessary regelialia.
{.p-small .blind}

{{< farfarshort 1 >}}

Topic
{.p-meta}

### Meta Paragraph for headings

{{< farfarshort 1 >}}

Topic
{.p-meta}

#### Heading with Topic

{{< farfarshort 1 >}}
