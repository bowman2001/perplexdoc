---
authors: [Georg Makowski]
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

A paragraph is a sequence of Unicode characters with arbitrary length and finished by an empty line.

The theme also styles a **first** paragraph — like the first one on this page — and a **big** and a **small** one.

These styles are applied with the [attributes](/doc/enhancing/attribute) `{.p-first}`, `{.p-big}`, and `{.p-small}`.

## Layout

Line height and length are coordinated with the proportions of the font-family Plex. The space between subsequent paragraphs is twice as big as the space between two lines inside a paragraph. On small screens, it’s a little less.

{{< mnote up=11 >}}
In print subsequent paragraphs are sometimes separated by indenting their first line, to interrupt the reading flow as little as possible.

The technique is mostly used for prose, but also appropriate for notes like this one. Here, a vertical separation would falsely suggest the beginning of a new note.
{{< /mnote >}}

### Two normal paragraphs

{{% pangram 3 %}}
{.placeholder data-pagefind-ignore="all"}

{{% pangram 3 %}}
{.placeholder data-pagefind-ignore="all"}

### Big paragraph

{{% pangram 3 %}}
{.placeholder data-pagefind-ignore="all"}

{{% pangram 2 %}}
{.placeholder data-pagefind-ignore="all"}
{.p-big}

{{% pangram 3 %}}
{.placeholder data-pagefind-ignore="all"}

### Small paragraph

{{% pangram 3 %}}
{.placeholder data-pagefind-ignore="all"}

{{% pangram 4 %}}
{.placeholder data-pagefind-ignore="all"}
{.p-small}

{{% pangram 3 %}}
{.placeholder data-pagefind-ignore="all"}
