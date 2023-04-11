---
author: Georg Makowski
title: Current and coming Features
description: About the goals and 
subtitle: false
date: 2022-05-12T22:29:06+02:00 
menu:
  doc:
    name: Features
    parent: tldr
    pre: featured_play_list
categories: [Getting started]
weight: 3
draft: true
---

Good legibility on all modern devices and a coherent site structure for technical content are the main traits of this theme.
{.p-first} <!--more-->

Perplex is a documentation theme accompanied by sections for news and a blog. Author pages and an article section are planned.

At the moment, this site shows the news section as a start page. Should the theme attract some interest, I will release the design for a distinct homepage as a module.

## Design & Layout

The typographic design of this theme is based on the open font family Plex by IBM. I’ve developed the CSS stylesheet around their proportions. 

The layout is fluid-responsive. This concept has been around for a while but hasn’t been realized very often as far as I know. It has some nice advantages:

- Beyond mobile, the layout stays fixed between breakpoints and makes full use of the viewport as long as needed.

- This guarantees an optimal line length.

- And this allows us to accurately place images and other elements as floats around the text in the margins.

## Usage

The theme will be self-sufficient. All necessary fonts and Javascript libraries will be tested and packed in for self-hosting. Recent copies of all modules are in {$_vendor}. No other installation than a standard binary of a recent Hugo release is required to get started --- at the moment it needs the latest: {$v0.111.3}.
