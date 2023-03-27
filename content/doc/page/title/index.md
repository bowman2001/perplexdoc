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

The title section has two different layout styles depending on the function and the place of a page in the site hierarchy.
{.p-first} <!--more-->

## List and top-level page

1. Header rule
2. Page title
3. Optional subtitle
{.col2}

## Single content page

1. Meta content
2. First date published
3. Page Title
4. Optional subtitle.
{.col2}

## Variable Elements

### Meta content

Documentation
: Short breadcrumbs above the page title provide the name of the current section and link to its page. If there is a parent section, its name is also referenced.

Blog entries
Articles
: Labels above the page title show categories and tags the page has been given and link to their collection pages.
{.dl-loose}

### Day of publishing
This information is contained in the `date` parameter of the front-matter data and ususally set to the date, when the content file has been generated with `hugo new`.

### Page Title
The page title is taken from the `title` parameter in the front-matter and may contain inline Markdown formatting like emphasis.

### Subtitle
The subtitle is taken from the `description` parameter in the front-matter, if the front-matter parameter `subtitle` is `true`. It may also contain inline markup.

The subtitle is an optional element, because there is also the possibility to show a [standfirst paragraph](/doc/page/standfirst) at the beginning of the content. It’s up to the editor, which elements to use.
