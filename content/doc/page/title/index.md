---
title: Title Section
description: The first section of content
date: 2022-01-17 15:42:24+01:00
weight: 610
authors:
- Georg Makowski
categories:
- template
tags:
- title
- headings
- page
menu:
  doc:
    name: Title Section
    parent: page
    pre: title
---

The title section of all templates is generated from parameters in the frontmatter of our content files.
{.p-first}
<!--more-->

The title sections of this theme often begin with general data like the publishing date, author portraits, breadcrumbs or taxonomies. The frontmatter parameters for this meta-information have already been discussed in the [general introduction](/doc/intro).

Then follows the title and an optional subtitle which is generated from a short description. Both are mandatory for this theme even if there is usually no visible subtitle.

## The title

`title` {s (mandatory)}
: is a Markdown string and contains the page title.

`linktitle` {s (optional)}
: is a Markdown string and contains an optional short title. This parameter is used for navigational elements and defaults to the `title` value. Use it if the full title is too large.
{.dl-loose}

The theme checks the length of the title (or the link title) to keep the length of breadcrumbs within a reasonable limit for a balanced layout. You can set a new limit with the site configuration parameter `params: limit: linkTitle`.
{.box-info}

## Description

`description` {s (mandatory)}
: is a text string and contains a more thorough explanation of the page’s topic. It should still be short because it appears in navigational elements like the section overview or small cards.

`subtitle` {s (optional)}
: is a boolean and set to `false` by default. Set it to `true` if you want the short description to appear as a subtitle beneath the page title. Usually, the [first paragraph](standfirst) in the content is meant to introduce the reader and they usually don’t mix well.
{.dl-loose}

There is **one caveat for YAML strings**: In case we’re using characters, that are reserved for YAML formatting (like `:` or `-`), we need to enclose strings in (straight) quotes to avoid parsing errors.
{.box-warn}