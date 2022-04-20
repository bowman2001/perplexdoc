---
author: Georg Makowski
date: "2022-01-12T14:20:05+01:00"
description: Description
featImg: fly-d-mT7lXZPjk7U-unsplash.jpg
menu:
  doc:
    name: Security
    parent: intro
    pre: security
subtitle: false
title: Security
weight: 30
---

_CommonMark_ and its extensions are mostly inherently secure, because they don't allow manipulating the rendered HTML.
{.p-lead} <!-- more -->

When we have control over the content for _Hugo_, we need a theme with 

## Don’t allow raw HTML

It’s possible to allow raw HTML inside of Markdown. The benefit seems obvious: We could use missing HTML elements directly. But there are two good reasons, why _Goldmark_ discards all HTML in _Markdown_ by default:

1. The whole purpose of _Markdown_ is to get rid of coding HTML directly.

2. Markdown is meant to be an easy and *safe* markup for working on text files.    Malicious code could be hidden in HTML.

## TODO

- fenced code blocks
- attributes
- shortcodes
