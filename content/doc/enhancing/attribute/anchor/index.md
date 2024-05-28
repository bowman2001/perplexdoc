---
title: Anchors
description: Identify and refer to block elements
subtitle: false
date: '2022-01-06T14:15:12+01:00'
weight: 335
authors:
- Georg Makowski
categories:
- Markdown
tags:
- Attribute
menu:
  doc:
    name: Anchors
    parent: attribute
    pre: anchor
resources:
- src: grant-durr-21ztbENjzeI-unsplash.jpg
  name: featured
  params:
    alt: The anchor of a ship
---

It's easy to manually add anchors to any block element with an identifier attribute and to reference them with a Markdown link.  
{.p-first} <!--more-->

## Syntax

When we manually add an **anchor** attribute, we usually want to place one or more **references** somewhere else.  

### Anchor

We add the anchor as an identification attribute like any other attribute. We can use the long form `id=our-identifier` or the short form `#our-identifier`. It’s more consistent to use the short version because we **have** to use this one in the reference anyway:

```md
This is the text block, we would like to refer to from another place on this 
page or from another page on this site.
{#our-identifier}
```

### Reference

From the same page
: The reference is a [link](/doc/basic/link) to the anchor `[link to anchor](#our-identifier)`.

From another page
: The reference is a link to the page with the anchor appended `[link to anchor](page#our-identifier)`.
{.dl-loose}

## Layout

This is the text block, we would like to refer to.
{#our-identifier}

And this is [the reference](#our-identifier). When the anchored block is targeted by a reference, it gets a little background highlighting. Usually, the anchored block is far away from the reference. Then, the browser jumps to the right place.

## No link checks for manual anchors {.h-info}

Unfortunately, the render hook for links cannot check a manual anchor. It appears missing and produces a bogus warning, if the `errorLevel:` for `fragments:` is set to `warning`. This does **not** affect the result, the links are always rendered fine. (&rightarrow; [link validation](/doc/basic/link#validation)).
