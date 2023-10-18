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

Simple ASCII punctuation characters are substituted with typographic correct ones.
{.p-first} <!--more-->

The Typographer provides a similar functionality as the [Smartypants](https://daringfireball.net/projects/smartypants/) project from John Gruber, who also started Markdown.

The concept: Convenient typing options should encourage the use of good typography. (see also &rightarrow; [Quote](/doc/basic/quote))

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

These substitutions can be configured in the markup section for the Goldmark renderer.

## More general alternative

There are some reasons not to rely (always) on typographic substitution. They aren’t compelling for every project but may be considerable for yours.

1. If we want to transform our Markdown content with the help of other rendering software, we may not find a substitution engine working in the same way as Hugo’s typographer.

2. The substitution of punctuation like the apostrophe is unreliable for rare edge cases, where the correct substitution does not only depend on the place of the quotation mark in the content, but also on its meaning.

The only alternative then, is to write the correct punctuation yourself or to use a Markdown editor capable of transforming straight quotes on the fly like some word processors do.

There are two ways we can write correct punctuation and other special characters directly:

[Keyboard Shortcuts](/doc/appendix/german-punctuation)
: These are key combinations for special characters which depend unfortunately on the operating system and the keyboard layout. On some systems, they are relatively easy to remember. On others, they are very weird and practically useless.

[HTML entities](/doc/basic/specialchar)
: We get the German _Gänsefüßchen_&ensp;&bdquo;&nbsp;and&nbsp;&ldquo;&nbsp; with `&bdquo;` and `&ldquo;` for example. Entities look weird in text files, but the result is as good as the original Unicode characters.
{.dl-loose}

{{< mnote up=12 >}}
It’s possible to replace entities with Unicode characters and maybe your editor has a plugin for that.
{{< /mnote >}}
