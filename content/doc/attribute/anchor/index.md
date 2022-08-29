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
subtitle: false
title: Anchors
weight: 320
---

It's easy to manually add anchors to any block element with an identifier attribute and to reference them with a Markdown link.  
{.p-first} <!-- more -->

## Syntax

### Anchor

We add the anchor as an identification attribute like any other attribute. We can use the long form `id=our-identifier` or the short one `#our-identifier`:

```md
This is the text block, we would like to refer to from another place on this 
page or from another page on this site.
{id=our-identifier}
```

### Reference

From same page
: The reference is a [link]({{< relref "doc/basic/link" >}}) to the anchor `[link to anchor]({{< relref "#our-identifier">}})`.

From another page
: The reference is a link to the page with the anchor appended `[link to anchor]({{< relref "anchor#our-identifier">}})`.
{.dl-loose}

## Layout

This is the text block, we would like to refer to from another place on this page or from another page on this site.
{#our-identifier}

And this is [the reference]({{< relref "#our-identifier">}}). When the anchored block is targeted by a reference, it gets a little background highlighting. Usually the anchored block is far away from the reference. Then, the browser jumps to right place first.
