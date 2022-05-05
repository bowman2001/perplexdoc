---
author:
title: Content
description: How to prevent injection of malicious code
subtitle: false
date: 2022-05-05T10:17:42+02:00 
weight: 860
featImg:
menu:
  doc:
    name: Content
    parent: security
    pre: article
draft: true
---

Place your lead paragraph here. If you don't need special styling, remove the attribute `{.p-lead}`. The **more**-tag marks this placeholder paragraph as the content summary for this page. It’s an introduction for your readers and provides information to search engines.
{.p-lead} <!--more-->

## Don’t allow raw HTML

It’s possible to allow raw HTML inside of Markdown. The benefit seems obvious: We could use missing HTML elements directly. But there are two good reasons, why _Goldmark_ discards all HTML in _Markdown_ by default:

1. The whole purpose of _Markdown_ is to get rid of coding HTML directly.

2. Markdown is meant to be an easy and _safe_ markup for working on text files.    Malicious code could be hidden in HTML.

## TODO

- fenced code blocks
- attributes
- shortcodes
