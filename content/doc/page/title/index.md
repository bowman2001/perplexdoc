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
categories: [Theme]
tags: [title, page]
---

The title section is generated from meta-data in the front-matter.
{.p-first}
<!--more-->

Most parameters for the title section contain strings. Often, we can just write them conveniently into the YAML front-matter values. But there is one caveat with YAML: In case we’re using characters, which are reserved for YAML itself, we need to enclose these strings in straight quotes to avoid parsing errors.

## The title itself

`title:` (mandatory)
: is a string and its value contains the page title. It may include inline markup or replacement codes. But if we use them, we **need to** provide an additional linktitle with pure text for navigational elements.

`linktitle:` (optional)
: is a text string and contains a short title. It’s used in navigational elements.
{.dl-loose}

## Description

`description:` (mandatory)
: is a text string and contains a more thorough explanation of the page’s topic. It should still be relatively short, because it appears in navigational elements like the section overview or small cards.

`subtitle:` (optional)
: is a boolean and set to `false` by default. Set it to `true` if you want the short description to appear as a subtitle beneath the page title. Usually, the first paragraph in the content is meant to introduce the reader and you should not use a subtitle and a [standfirst paragraph](standfirst) together on the same page.
{.dl-loose}