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

The first paragraph of every normal content page should contain a short introduction or summary. Usually, it’s also a good idea to mark this first paragraph with a styling attribute.
{.p-first #first} <!--more-->

A lead paragraph with a summary is mandatory for this theme because it’s needed as the content for large cards etc. Every regular content file generated with `hugo new` contains a placeholder to remind authors of its necessity.

Because list pages like documentation sections never appear in previews, they don’t have to contain such a summary. An introduction also for sections is nonetheless often a good idea.

## Syntax
The more-tag `<!--more-->` at the end of a paragraph marks it as the summary of the page.

Hugo always generates a content summary if anyhow possible. But Hugo cannot analyze content. If there is no tagged first paragraph it strips the first sentences (≈ 70 words) down to unformatted text.
{.inline}

{{< mnote >}}This may lead to badly truncated text and sometimes even to nearly incomprehensible results when these first lines have been strongly structured by markup.{{< /mnote >}}

The additional [attribute](/doc/enhancing/attribute) `{.p-first}` **before the more-tag** styles the first paragraph differently. This is a purely optional layout feature.

## Result
The [first paragraph](#first) on this page is styled as stand-first like on most other pages of this documentation.
