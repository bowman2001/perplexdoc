---
authors: [Georg Makowski]
title: Hugo Module{/}for Math and Chemistry
linktitle: hugo-mod-katex
description: Include the KaTeX library into your Hugo project
date: 2023-05-18T16:05:52+02:00
categories: [module]
tags: [latex]
math: true
---

This Hugo module provides the Javascript library KaTeX to render mathematical expressions in Markdown.
{.p-first}
<!--more-->

$\LaTeX$ is the quasi-standard for typesetting complex mathematical expressions. This module provides [$\KaTeX$](https://katex.org) for self-hosting.

Inline LaTeX
: Can be wrapped with the two Hugo shortcodes `{{</* math */>}}` and `{{</* chem */>}}`. They prevent distortions by the Markdown rendering. Already working LaTeX expressions surrounded by a `$` or doubly escaped parenthesis are still fine, of course.

LaTeX blocks 
: can be placed inside fenced code blocks with the identifiers `math` or `chem`. They also provide protection against distortions and have another advantage: We can use newlines in formulas as usual in LaTeX. Again, already working LaTeX expressions surrounded by two dollars or doubly escaped squared brackets are still fine.
{.dl-loose}

The module is [available on GitHub](https://github.com/bowman2001/hugo-mod-katex) and includes a minimal example site with demos.