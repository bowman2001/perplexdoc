---
author: Georg Makowski
date: "2021-03-24T21:26:08+01:00"
description: References at the end of the page
featImg: kelly-sikkema-et5mfj1eB94-unsplash.jpg
menu:
  doc:
    name: Footnotes
    parent: extended
    pre: short_text
subtitle: false
title: Footnotes
weight: 220
---

Footnotes are placed at the bottom of the page. They are best suited for technical information, which is not important for the intended meaning of the text.
{.p-lead} <!--more-->

Footnotes are indispensable for scientific documents or more rigorous essays. They reference sources or elaborate on details. Because they are placed at the end of the content, the footnote marker contains a link allowing to jump to the note. And the note contains a link back to the marker.

{{< sidenote up=6 >}}
To jump back and forth between text and footnotes is distracting. _Perplex_ offers a [side-note]({{< relref "side-note" >}}) like this one as an alternative. It’s placed nearby for more important content. On larger in the marginal column besides the main text, on mobile screens it’s inserted as an (expandable) box.  
{{< /sidenote >}}

## Syntax

A Footnote consists of a _marker_ and a separate _reference_ below. Every _reference_ needs to be unique for logical reasons. But it’s not unusual and possible to refer multiple times to the same reference. A _marker_ may appear more than once on a page.

### Marker

A marker looks like `[^1]` or `[^footnotephrase]`. The brackets and the `^` character are mandatory, the name of the marker can be chosen arbitrarily — no need to count or follow some pattern.

{{< sidenote up=11 >}}
A marker should be placed **directly behind** a word or a sentence without any space in between. It’s allowed to have a space before, but then an ugly line break between the text and the marker may occur.
{{< /sidenote >}}

There’s only one rule: **All references on a page need to be _unique_**.

### Reference

To mark the reference, we have to repeat the marker somewhere in the file on a separate line. After an additional colon and a space `:` follows the content. To add separate paragraphs to a footnote, we need to indent them by four spaces or a tab.

The order of the references in the file is irrelevant, the generated footnotes are always sorted in the same order as the markers.

```md
This sentence includes a footnote after a word[^10] and one 
at the end.[^footnotephrase] We can refer more than once[^10] to a footnote.

[^footnotephrase]: This footnote reference is placed above the other
reference from the footnote marker before. This may happen easily with
many footnotes and is no problem.

    If we indent a paragraph below a footnote reference by four
    spaces or a tab, it adds a new paragraph to this footnote.

[^10]: This is the reference for the first and the last footnote in this example.
```

## Layout

The markers on a page are always numbered in the order of their appearance and placed at the bottom of the page below a horizontal rule. The syntax example from above is styled like this:

This sentence includes a footnote after a word[^10]  and one at the end.[^footnotephrase] We can refer more than once[^10] to a footnote.
{.box}

[^footnotephrase]: This footnote reference is placed above the other reference from the footnote marker before. This may happen easily with many footnotes and is no problem.

    If we indent a paragraph below a footnote reference by four spaces or a tab, it adds a new paragraph to this footnote.

[^10]: This is the first footnote on this page.

The markers are enclosed in square brackets by _Perplex_ as it is custom in the field of natural sciences. The notes are moved as usual to the bottom of the page below a horizontal rule.
