---
authors: [gm]
editors: [gm]
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
tags: [punctuation, inline]
resources:
  - name: featured
    src: kristian-strand-p8gzCnZf39k-unsplash.jpg
    params:
      alt: Some specimen of movable type for printing 
---

Simple ASCII punctuation characters are substituted with the typographic correct ones.
{.p-first} <!--more-->

The Typographer provides in principle the same functionality as the [Smartypants](https://daringfireball.net/projects/smartypants/) project from John Gruber, who also started Markdown. Convenient typing options encourage the use of good typography.

## Substitutions
| Name          |   ASCII          |  Result   |
| :------------ | :--------------: | :-------: |
| Quotes        |    `"Quote"`     |  "Quote"  |
| Single quotes |    `'Quote'`     |  'Quote'  |
| Apostrophe    |     `Hugo’s`     |  Hugo’s   |
| Angled quotes |   `<<Angle>>`    | <<Angle>> |
| Em Dash       |      `---`       |   ---   |
| En Dash       |       `--`       |    --     |
| Ellipses      |      `...`       |    ...    |

## Unicode characters {.h-tip}
The same results can also be achieved by using Unicode characters or HTML entities. They require more of an effort in the beginning, but in the long run you’ll never have to worry about the correct substitutions again. The typographer extension mostly handles English punctuation and there are a few edge cases, which can’t be recognized algorithmically.

If you are serious about typographically correct punctuation and want to process your Markdown with other renderers, there is no better way than taking care of it by yourself.
