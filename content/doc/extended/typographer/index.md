---
authors: [Georg Makowski]
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

The Typographer provides nearly the same functionality as the [Smartypants](https://daringfireball.net/projects/smartypants/) project from John Gruber, who also started Markdown. His idea: Convenient typing options should encourage the use of good typography.

## Substitutions

| Name          |    ASCII    |  Result   |
| :------------ | :---------: | :-------: |
| Quotes        |  `"Quote"`  |  "Quote"  |
| Single quotes |  `'Quote'`  |  'Quote'  |
| Apostrophe    |  `Hugo's`   |  Hugo's   |
| Angled quotes | `<<Angle>>` | <<Angle>> |
| Em Dash       |    `---`    |    ---    |
| En Dash       |    `--`     |    --     |
| Ellipses      |    `...`    |    ...    |
{.normal}

## Unicode characters {.h-tip}

The typographer is for sure way better than dumb punctuation. But you should consider, that the same results can also be achieved by using the appropriate Unicode characters or HTML entities. They require more effort in the beginning. But in the long run, you’ll never have to worry about the correct substitutions again. The typographer extension is restricted to handling English punctuation and even there are a few edge cases, which can’t be recognized algorithmically.

If you are serious about typographically correct punctuation or want to process your Markdown with other renderers, there is no other way than to take care of it by yourself with Unicode characters.
