---
authors: [Georg Makowski]
date: "2021-03-24T21:26:08+01:00"
description: References at the end of the page
menu:
  doc:
    name: Footnotes
    parent: extended
    pre: short_text
subtitle: false
title: Footnotes
weight: 220
categories: [Markdown]
tags: [Block]
resources:
  - name: featured
    src: kelly-sikkema-et5mfj1eB94-unsplash.jpg
    params:
      alt: A book with a lot of hand-written notes 
      zoom: 1.6
      anchor: BottomLeft
---

Footnotes are best suited for (formal) information, which is not essential for the meaning of the text.
{.p-first} <!--more-->

Footnotes are indispensable for scientific texts and more rigorous essays. They reference sources or elaborate on details. Because they are placed at the end of the content, the footnote marker contains a link allowing to jump to the note. And the note contains a link back to the marker.

{{< mnote up=5 >}}
To jump back and forth between text and footnotes is distracting. Perplex offers a [marginal note](/doc/enhancing/shortcode/mnote) like this one as an alternative for more important notes. If possible the note gets placed in the marginal column besides the main text. On smaller screens it appears in a box with a limited height.
{{< /mnote >}}

## Syntax

A Footnote consists of a **marker** and a separate **reference** below. Every reference needs to be unique for logical reasons. But it’s possible to refer multiple times to the same reference and the same **marker** may appear more than once on a page.

### Marker

A marker looks like `[^1]` or `[^footnotephrase]`. The brackets and the `^` character are mandatory, the name of the marker can be chosen arbitrarily — no need to count or follow some pattern. There’s only one rule: All references on a page need to be **unique**.

{{< mnote up=14 >}}
A marker should be placed **directly behind** a word or a sentence without any space in between. It’s not prohibited to leave space before, but an ugly line break between the text and the marker may occur.
{{< /mnote >}}

### Reference

To mark the reference, we have to repeat the marker somewhere in the file on a separate line. After an additional colon and a space `:` follows the content. To add separate paragraphs to a footnote, we need to indent them by four spaces or a tab.

The order of the references in the file is irrelevant, the generated footnotes are always sorted in the same order as the markers.

```md {.expand}
This sentence includes a footnote after a word[^10] and one 
at the end.[^footnotephrase] We can refer more than once[^10] to a footnote.

[^footnotephrase]: This footnote reference is placed above the other
reference from the footnote marker before. This may happen easily with
many footnotes and is no problem.

    If we indent a paragraph below a footnote reference by four
    spaces or a tab, it adds a new paragraph to this footnote.

[^10]: This is the reference for the first and the last footnote marker in this example.
```

## Layout

The markers on a page are always numbered in the order of their appearance and placed at the bottom of the page below a horizontal rule. The syntax example from above is styled like this:

This sentence includes a footnote after a word[^10]  and one at the end.[^footnotephrase] We can refer more than once[^10] to a footnote.
{.layout-box}

[^footnotephrase]: This footnote reference is placed above the other reference from the footnote marker before. This may happen easily with many footnotes and is no problem.

    If we indent a paragraph below a footnote reference by four spaces or a tab, it adds a new paragraph to this footnote.

[^10]: This is the reference for the first and the last footnote marker in this example.

The markers are enclosed in square brackets by Perplex as it is custom in the field of natural sciences. The notes are moved as usual to the bottom of the page below a horizontal rule.
