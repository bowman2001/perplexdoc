---
author: Georg Makowski
date: "2021-08-27T09:59:47+02:00"
description: Substitution of punctuation 
featImg: kristian-strand-p8gzCnZf39k-unsplash.jpg
menu:
  doc:
    name: Typographer
    parent: extended
    pre: format_quote
subtitle: false
title: Typographer
weight: 60
---

Simple ASCII punctuation characters are substituted with typographical glyphs.
{.p-lead} <!--more-->

The concept for *Typographer* follows the [Smartypants](https://daringfireball.net/projects/smartypants/) project from John Gruber, who also started Markdown. Convenient typing options should encourage the use of good typography.

The same results could also be achieved by using the *Unicode characters* or *HTML entities*, but they are difficult to use. These are the substitutions the *Typographer* offers:

| Element       | With Typographer |  With HTML entities   |  Result   |
| :------------ | :--------------: | :-------------------: | :-------: |
| Quotes        |    `"Quote"`     | `&ldquo;Quote&rdquo;` |  "Quote"  |
| Single quotes |    `'Quote'`     | `&lsquo;Quote&rsquo;` |  'Quote'  |
| Apostrophe    |     `Hugo's`     |    `Hugo&rsquo;s`     |  Hugo's   |
| Angled quotes |   `<<Angle>>`    | `&laquo;Angle&raquo;` | <<Angle>> |
| Em Dash       |      `---`       |      `&emdash;`       |   ---   |
| En Dash       |       `--`       |      `&endash;`       |    --     |
| Ellipses      |      `...`       |      `&hellip;`       |    ...    |

## Apostrophe for omissions

English apostrophes are not only used for the possessive case or contractions. At the beginning and at the end of a word they can also indicate, that one or a few characters have been left out. The typographer extension has no chance to detect this meaning algorithmically and produces false punctuation or leaves a straight quote untouched.

When we type `rock 'n' roll` for example we get **rock 'n' roll**, which is wrong. The 'n' is not a quoted character, but a shortened version of 'and'. The ‘a’ and the ‘d’ are omitted.

To proper **rock ’n’ roll**, we need to use type the apostrophe or the corresponding HTML entity `&rsquo;`, which is the same as the English right single quotation mark.

[^ptapo]: This example is inspired by [Practical Typography](https://practicaltypography.com/apostrophes.html)
