---
author: Georg Makowski
date: "2021-08-27T09:59:47+02:00"
description: Substitution of punctuation 
menu:
  doc:
    name: Typographer
    parent: extended
    pre: format_quote
subtitle: false
title: Typographer
weight: 260
categories: [Markdown]
tags: [Inline]
resources:
  - name: featured
    src: kristian-strand-p8gzCnZf39k-unsplash.jpg
---

Simple ASCII punctuation characters are substituted with typographical glyphs.
{.p-first} <!--more-->

The Typographer provides the same functionality as the [Smartypants](https://daringfireball.net/projects/smartypants/) project from John Gruber, who also started Markdown. Convenient typing options encourage the use of good typography.

These are the substitutions:

| Name          |   ASCII          |  Result   |
| :------------ | :--------------: | :-------: |
| Quotes        |    `"Quote"`     |  "Quote"  |
| Single quotes |    `'Quote'`     |  'Quote'  |
| Apostrophe    |     `Hugo’s`     |  Hugo’s   |
| Angled quotes |   `<<Angle>>`    | <<Angle>> |
| Em Dash       |      `---`       |   ---   |
| En Dash       |       `--`       |    --     |
| Ellipses      |      `...`       |    ...    |

{{< mnote up=16 >}}
The same results can also be achieved by using Unicode glyphs or HTML entities. They require more of an effort in the beginning, but in the long run you’ll never have to worry about substitutions again.
{{< /mnote >}}
