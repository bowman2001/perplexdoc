---
author: Georg Makowski
date: "2022-01-06T14:15:12+01:00"
description: Identify and refer to block elements
menu:
  doc:
    name: Anchors
    parent: attributes
    pre: anchor
resources: 
  - src: grant-durr-21ztbENjzeI-unsplash.jpg
    name: featured
    params:
      alt: The anchor of a ship
subtitle: false
title: Anchors
weight: 320
categories: [Theme, Hugo]
tags: [Attribute]
---

It's easy to manually add anchors to any block element with an identifier attribute and to reference them with a Markdown link.  
{.p-first} <!--more-->

## Syntax

When we manually add an **anchor** attribute, we usually want to place on or more **references** somewhere else.  

### Anchor

We add the anchor as an identification attribute like any other attribute. We can use the long form `id=our-identifier` or the short form `#our-identifier`. It’s more consistent to use the short version, because we **have** to use this one in the reference:

```
This is the text block, we would like to refer to from another place on this 
page or from another page on this site.
{#our-identifier}
```

### Reference

From same page
: The reference is a [link]({{< relref "doc/basic/link" >}}) to the anchor `[link to anchor](#our-identifier)`.

From another page
: The reference is a link to the page with the anchor appended `[link to anchor](page#our-identifier)`.
{.dl-loose}

## Layout

This is the text block, we would like to refer to.
{id=our-identifier}

And this is [the reference]({{< relref "#our-identifier">}}). When the anchored block is targeted by a reference, it gets a little background highlighting. Usually the anchored block is far away from the reference. Then, the browser jumps to right place first.
