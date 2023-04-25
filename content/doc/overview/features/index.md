---
authors: [Georg Makowski]
title: Concept & Features
description: About the goals of this theme
subtitle: false
date: 2022-05-12T22:29:06+02:00 
menu:
  doc:
    name: Concept & Features
    parent: tldr
    pre: featured_play_list
categories: [Overview]
tags: [features]
weight: 6
---

Good legibility on modern devices and a coherent site structure for technical content are the main traits of this theme.
{.p-first} <!--more-->

Perplex is a documentation theme accompanied by sections for news and a blog. Author pages and an article section are planned.

At the moment, this site shows the news section as a start page. A design for a distinct homepage may get released as a module.

## Design & Layout

The typographic design of this theme is based on the open-source font family Plex by IBM. I’ve developed the CSS stylesheet around their proportions.

The layout is **fluid-responsive**. This concept has been around for a while but hasn’t been realized often. I’m not sure why because there are [only advantages](/blog/accessibility-of-fluid-typography). The proportions of this layout stay fixed between breakpoints beyond mobile. And this also means:

- The view-port is used in full as long as needed.

- The line length stays the same (beyond mobile).

All text is placed on a **baseline grid** to introduce a comfortable vertical rhythm. Combined with the fluid-responsive design this concept allows placing images and other elements in and around the text with great accuracies [like this](/blog/image/stand-alone) or [this](/doc/basic/image/inline).

## Usage concept

The theme will be self-sufficient. All necessary fonts and Javascript libraries will be automatically tested and packed in for self-hosting. Recent copies of all module dependencies are available in {$_vendor}. No other installation than a standard binary of a recent Hugo release is required to get started --- at the moment it needs the latest: {$v0.111.3}.

## Support

As soon as there are meaningful contributions to the development, I would love to change this theme into a community project. Without Hugo, it would have never happened.
