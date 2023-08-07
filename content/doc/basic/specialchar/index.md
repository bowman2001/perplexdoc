---
authors: [Georg Makowski]
date: "2021-03-25T10:53:07+01:00"
description: How to use special characters
menu:
  doc:
    name: Special Characters
    parent: basic
    pre: glyphs
title: Special Characters
weight: 190
categories: [markdown]
tags: [spacing, inline]
resources:
  - name: featured
    src: raphael-schaller-GkinCd2enIY-unsplash.jpg
    params:
      alt: Movable type for printing letters
---

All available characters are valid Markdown. The following sections are about the special ones we can’t use directly.
{.p-first} <!--more-->


## Escaping formatting Characters

The characters reserved for Markdown formatting are not directly available anymore. To use them literally we need to **escape** them by adding a backslash `\` in front.

{{< mnote up=11 >}}
**Unescaped** formatting characters may be treated literally or not, depending on the circumstances. They can suddenly produce strange layout errors, when we change the text in their vicinity. And they most certainly irritate code editors and highlighters.
{{< /mnote >}}

When we escape a number sign `\#` for example it’s just the number sign ‘**\#**’.

## HTML Entities

**Entities** are ASCII codes for **Unicode characters**. These codes begin with an ampersand `&` and end with a semicolon `;`. For example:

`&para;` 
: means the paragraph&ensp;&para;&nbsp;.

`&sect;` 
: means the section&ensp;&sect;&nbsp;.

`&#8477;` 
: means the set of real numbers&ensp;&#8477;&nbsp;.
{.dl-loose}

 For more exotic ones you should check, if they are available in the [**IBM Plex** fonts][plexspec] this theme is shipping with. If a character is missing there, the browsers will first try to use a local font and may display a glyph with a more or less noticeable different shape. And if they can't find a representation for the character anywhere, they will display an ugly placeholder glyph. You may take a good look at the &#8477; in the last example. The Plex fonts provide no glyphs for the real set but there is usually one available in system fonts and will differ more or less in shape.

Please remember the often neglected sets of general entities, which are meant to facilitate nice typography — the ones for **spacing** and **(not) breaking**.

### Spacing

Good typography needs the right amount of space between type. For the most part this is the job of the web designer. But the horizontal spacing between words and characters remain the responsibility of the editor. The following HTML entities are available in Plex and many other good fonts:

| Name                    | Entity Code |  Example   |
|:------------------------|:-----------:|:----------:|
| No space (for comparison) |             |     xx     |
| Hair space              | `&hairsp;`  | x&hairsp;x |
| Thin space              | `&thinsp;`  | x&thinsp;x |
| Normal space            |  {%Space}   |    x x     |
| en space (wide as an n) |  `&ensp;`   |  x&ensp;x  |
| em space (wide as an m) |  `&emsp;`   |  x&emsp;x  |
| num space               |  `&numsp;`  | 1&numsp;3  |
{.normal}

### Breaking Words — or not

The major browsers do support hyphenation for a few languages, Perplex includes a [polyfill][hy] for the missing ones. That’s why we usually don’t need to place soft hyphens.

The non-breaking entities are meant for situations where characters or words should never be separated by a new line.

| Name                      |    Code    |  Example   |
|:--------------------------|:----------:|:----------:|
| Soft hyphen               |   `&shy;`  |  x&shy;x   |
| Non breaking space        |  `&nbsp;`  |  x&nbsp;x  |
| Narrow non breaking space | `&#x202f;` | x&#x202f;x |
| Zero width joiner         | `&zwj;`    | x&zwj;x    |
{.normal}

## Emojis

Hugo supports emojis :woozy_face: (`:‍woozy_face:`) in Markdown content, if we set the global parameter [`enableEmoji`][he] to `true`. 

There are a lot of them according to this [cheat sheet](https://www.webfx.com/tools/emoji-cheat-sheet/). Have fun!

[plexspec]: https://ibm.com/plex/specs

[hy]: https://github.com/mnater/Hyphenopoly

[he]: https://gohugo.io/getting-started/configuration/#enableemoji
