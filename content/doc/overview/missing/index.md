---
authors: [Georg Makowski]
title: Missing Features
description: Functionality to include before public release
subtitle: false
date: 2023-04-12T11:26:56+02:00 
menu:
  doc:
    name: Missing Features
    parent: tldr
    pre: rule
categories: [Overview]
tags: [feature]
weight: 9
---

Features, which I consider essential before a public release, and the ones which would be nice to have.
{.p-first}
<!--more-->

## Essential

Better SEO
: This will happen in the module [{$hugo-mod-meta}](https://github.com/bowman2001/hugo-mod-meta)

Social Icons
: Simple icons are looking like the obvious choice.

Site-wide search
: Javascript library without dependencies called in a modal window --- [this module][search] looks promising.

Dark Mode
: The dark mode will change the colors of the light parts of the theme. The code elements will stay the same because also changing them looks like way too much work for now.
{.dl-loose}


[search]: https://github.com/hugomods/search "Search module by Razon Yang"

## Nice to have

Configurable colors
: Option to change the four basic colors and their derivatives in the theme --- will require the additional installation of PostCss.

Icons
: - SVG Icons (at the moment the web font set of Google Material Icons is available)
  - A choice to use other icon sets than Material Icons
{.dl-loose}

Suggestions are also welcome as new issues in the [repo](https://github.com/bowman2001/perplex). Please check out the existing ones.
