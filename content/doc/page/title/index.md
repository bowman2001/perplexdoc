---
authors: [Georg Makowski]
title: Title Section
description: The first section of content 
date: 2022-01-17T15:42:24+01:00 
weight: 610
menu:
  doc:
    name: Title Section
    parent: page
    pre: title
categories: [template]
tags: [title, page]
---

The title section is generated from meta-data in the frontmatter.
{.p-first}
<!--more-->

Most parameters for the title section contain strings. Often, we can just type them directly into the YAML frontmatter block.

There is **one caveat for YAML strings**: In case we’re using characters, which are reserved for YAML formatting, we need to enclose strings in (straight) quotes to avoid parsing errors.
{.box-info}

## The title itself

`title:` {s (mandatory)}
: is a string and its value contains the page title. It may include inline markup or replacement codes. In case we use any markup, we **need to** provide an additional linktitle with pure text for navigational elements.

`linktitle:` {s (optional)}
: is a pure text string and contains a short title. It’s used in navigational elements.
{.dl-loose}

## Description

`description:` {s (mandatory)}
: is a text string and contains a more thorough explanation of the page’s topic. It should still be relatively short, because it appears in navigational elements like the section overview or small cards.

`subtitle:` {s (optional)}
: is a boolean and set to `false` by default. Set it to `true` if you want the short description to appear also as a subtitle beneath the page title. Usually, the [first paragraph](standfirst) in the content is meant to introduce the reader and they usually don’t mix well.
{.dl-loose}
