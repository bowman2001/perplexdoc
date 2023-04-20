---
author: Georg Makowski
title: Title Section
description: The first section of content 
date: 2022-01-17T15:42:24+01:00 
weight: 610
menu:
  doc:
    name: Title Section
    parent: page
    pre: title
categories: [Theme]
tags: [title]
---

The title section is generated from meta-data in the front-matter. There are a few parameters besides the {$title} to produce the desired result.
{.p-first}
<!--more-->

Most parameters for the title section contain strings. Usually, we just write them into the front-matter values. But there is one caveat: In case we’re using characters, which are reserved for formatting front-matter data, we need to enclose these strings in straight quotes to avoid errors.

## The title itself

`title:` (mandatory)
: is a string and its value contains the page title. It may include inline markup and the replacement code `{‍/}` for a [conditional break](conditional-break). If we use markup or replacements, we **need to** provide a linktitle without them for navigational elements.

`linktitle:` (optional)
: is a text string and contains a short title. It’s used in navigational elements.
{.dl-loose}

## Description

`description:` (mandatory)
: is a text string and contains a more thorough explanation of the page’s topic. It should still be relatively short, because it appears in navigational elements like the section overview or small cards.

`subtitle:` (optional)
: is a boolean and set to `false` by default. Set it to `true` if you want the short description to appear as a subtitle beneath the page title. Usually, the first paragraph in the content is meant to introduce the reader and you should not use a subtitle and a [standfirst paragraph](standfirst) together on the same page.
{.dl-loose}