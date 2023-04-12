---
author: Georg Makowski
title: Missing Features
description: Functionality to include before public release
subtitle: false
date: 2023-04-12T11:26:56+02:00 
menu:
  doc:
    name: Missing Features
    parent: tldr
    pre: rule
categories: []
tags: [feature]
weight: 9
draft: true
---

Features, which I consider essential before a public release, and the ones which would be nice to have.
{.p-first}
<!--more-->

## Essential

Author pages
: an {$authors} taxonomy with a special template looks like the best idea.

Better SEO
: This will happen in the module [{$hugo-mod-meta}](https://github.com/bowman2001/hugo-mod-meta)

Site-wide search form
: Javascript library without dependencies called in a modal window --- [this module][search] looks promising.

Social Icons
: Simple icons are looking like the obvious choice.
{.dl-loose}

[search]: https://github.com/hugomods/search "Module by Razon Yang"

## Nice to have

### Colors

- An easy way to change the four basic colors and their derivatives in the theme --- would probably require the additional installation of postcss.

- Dark Mode

### Icons

- SVG Icons (at the moment the only icons available are the web font set of Google Material Icons)

- Other icon sets than Material Icons

Suggestions are also welcome as new issues in the [repo](https://github.com/bowman2001/perplex).