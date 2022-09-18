---
author: Georg Makowski
date: "2021-03-25T10:53:07+01:00"
description: How to write special characters
menu:
  doc:
    name: Special Characters
    parent: basic
    pre: emoji_symbols
title: Special Characters
weight: 190
categories: [Markdown]
tags: [Inline, Glyphs]
resources:
  - name: featured
    src: raphael-schaller-GkinCd2enIY-unsplash.jpg
---

All available glyphs are valid Markdown. The following sections are about the special ones, we can not use directly.
{.p-first} <!--more-->

## Escaping formatting Characters

The characters reserved for Markdown formatting are not directly available anymore. Depending on the circumstances, the Markdown renderer may sometimes recognize, when they are used literally. But we can't count on that and have to _escape_ them by adding a backslash `\` in front.

{{< mnote up=8 >}}
**Unescaped** formatting characters may suddenly produce strange layout errors, when we change the text in their vicinity. And they are driving Markdown code editors and highlighters crazy.
{{< /mnote >}}

When we escape a number sign `\#` for example it’s just the number sign ‘**\#**’ and not a formatting character anymore.

## HTML Entities

_Entities_ are ASCII codes for _Unicode glyphs_. These codes begin with an ampersand `&` and end with a semicolon `;`. For example:

1. `&para;` means the paragraph glyph&ensp;&para;&nbsp;.

2. `&sect;` means the section glyph&ensp;&sect;&nbsp;.

3. `&#8477;` means the set of real numbers&ensp;&#8477;&nbsp;.

 For more exotic ones you should check, if they are available in the [**IBM Plex** fonts][plexspec] this theme is shipping with. If a glyph is missing there, the browsers will first try to use a local font and may display a glyph with a more or less noticeable different shape. And if they can't find it anywhere, they will display an ugly placeholder. You may take a good look at the the _real set_ &#8477; in example 3, it’s not included in _Plex_.  

Please remember the two often neglected sets of general entities, which are meant to facilitate nice typography — the ones for _spacing_ and _(not) breaking_.

### Spacing

Good typography needs the right amount of space between type. For the most part this is the job of the web designer. But the horizontal space inside the text remains the responsibility of the author. When some words or characters need more or less horizontal space, the Markdown should include this information:

| Name                    | Entity Code |  Example   |
|:------------------------|:-----------:|:----------:|
| No space                |             |     xx     |
| Normal space            |  {#Space}   |    x x     |
| Hair space              | `&hairsp;`  | x&hairsp;x |
| Thin space              | `&thinsp;`  | x&thinsp;x |
| en space (wide as an n) |  `&ensp;`   |  x&ensp;x  |
| em space (wide as an m) |  `&emsp;`   |  x&emsp;x  |
| num space               |  `&numsp;`  | 1&numsp;3  |

### Breaking Words — or not

The major browsers do support hyphenation nowadays, Perplex includes a [polyfill][hy] for the ones that don’t. That’s why we usually don’t need to introduce soft hyphens anymore.

The non-breaking entities are meant for situations where characters or words should never be separated by a new line.

| Name                      |    Code    |  Example   |
|:--------------------------|:----------:|:----------:|
| Soft hyphen               |   `&shy;`  |  x&shy;x   |
| Non breaking space        |  `&nbsp;`  |  x&nbsp;x  |
| Narrow non breaking space | `&#x202f;` | x&#x202f;x |

[plexspec]: https://ibm.com/plex/specs

[hy]: https://github.com/mnater/Hyphenopoly
