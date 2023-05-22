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

LaTeX is the most popular typesetting system for complex mathematical expressions. This Hugo module includes the KaTeX Javascript library to render mathematical expressions in Markdown.
{.p-first}
<!--more-->

The module provides the two shortcodes `{{</* math */>}}` and `{{</* chem */>}}` to wrap **inline LaTeX**. They prevent distortions by the Markdown rendering. Already working LaTeX expressions surrounded by a `$` or doubly escaped parenthesis are still fine, of course.

**LaTeX blocks** can be placed inside fenced code blocks with the identifiers `math` or `chem`. They also provide protection against distortions and have another advantage: We can use newlines in formulas as usual in LaTeX. Again, already working LaTeX expressions surrounded by two dollars or doubly escaped squared brackets are still fine.

The module is [available on GitHub](https://github.com/bowman2001/hugo-mod-katex) and includes a minimal example site with demos.