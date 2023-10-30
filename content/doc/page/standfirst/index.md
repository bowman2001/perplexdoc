---
authors: [Georg Makowski]
title: Standfirst Paragraph
linktitle: Standfirst
description: Introduces or summarizes the page
subtitle: false
date: 2022-01-18T23:24:32+01:00 
weight: 620
menu:
  doc:
    name: Standfirst
    parent: page
    pre: short_text
resources:
  - name: featured
    src: belinda-fewings-6wAGwpsXHE0-unsplash.jpg
    params:
      alt: Colored welcome
categories: [Markdown]
tags: [paragraph, page]
---

When the first paragraph contains a short introduction or summary, the theme can use it. We can mark this first paragraph with an attribute and a special tag.
{.p-first #first} <!--more-->

A lead paragraph is optional but strongly recommended. Every regular page file generated with `hugo new` contains a placeholder.

## Syntax
The [attribute](/doc/enhancing/attribute) `{.p-first}` styles the paragraph differently. The more-tag `<!--more-->` marks the paragraph as the summary of the page which is displayed on cards and in content lists etc.

Hugo always generates a content summary if anyhow possible. But Hugo cannot analyze content. If there is no tagged first paragraph it strips the first sentences (≈ 70 words) down to unformatted text.
{.inline}

{{< mnote >}}This may lead to badly truncated text and sometimes even to nearly incomprehensible results when these first lines have been strongly structured by markup.{{< /mnote >}}

## Result
The [first paragraph](#first) on this page is styled as stand-first like on most other pages of this documentation.
