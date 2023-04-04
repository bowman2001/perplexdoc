---
author: Georg Makowski
date: "2021-03-23T21:46:56+01:00"
description: Main page structure
menu:
  doc:
    name: Text Headings
    parent: basic
    pre: text_fields
subtitle: false
title: Text Headings
linktitle: Headings
weight: 105
categories: [Markdown]
tags: [Headings, Block]
---

Headings introduce and order the segments on a page. We can modify headings only visually to adhere to a strict HTML hierarchy while enhancing the design.
{.p-first} <!--more-->

## Syntax

Markdown headings are preceded by number signs `#` and a space. The six available headings are associated with the following meaning in Perplex:

1. `# Page Title`&emsp;{s [**Not needed**](#page-title) on standard Perplex pages!}

2. `## Section Heading`

3. `### Subsection Heading`

4. `#### Sub-Subsection Heading`

5. `##### Paragraph Heading`

6. `###### Small Paragraph Heading`

Usually, we don’t want to apply the full hierarchy on moderate-sized pages, because too much structure is confusing. For an appropriate layout, it may be desirable to skip one or two levels and use paragraph headings inside of sections for example.

But this is against recommended HTML guidelines. Headings should be used strictly in their descending order because screen readers and other automatic interpreters get confused otherwise. To follow this recommendation we need to skip headings only visually.

Another variation of their style is to highlight them. It’s an easy way to inform readers about especially important text segments.

Perplex offers Markdown [attributes][attr] for these style variations.

### Paragraph Headings {#h-p}

We can style any heading like a paragraph heading with the attribute `{.h-p}`. For the probably rare occasions, we need to style a heading as a small paragraph heading we need an additional attribute: `{.h-p .h-p-s}`.

### Highlighted Headings

To mark a heading as a **warning**, important **information**, or **tip**, we have the attributes `{.h-warn}`, `{.h-info}`, or `{.h-tip}`.

A warning paragraph for example starts with a heading like this:

```text
##### Warning Paragraph {.h-warn}
Far far away, behind the word mountains, far from the countries Vokalia and…
```

### Very long heading with a complicated topic stretching over more than one line

CommonMark offers no possibility to break a heading line. Because every new line starting with a `#` is a new one, every heading has to stay on its initial line. 

When a heading exceeds the line length of the layout, it breaks automatically. That may occur at an unfortunate place: Before the last word or between tightly related words. To introduce a break we can put the replacement code `{‍/}` between two words **without any spacing character** like this:

```text
### Very long heading with a complicated topic{‍/}stretching over more than one line
```

and we get:

### Very long heading with a complicated topic{/}stretching over more than one line

The line break is displayed only when the screen can show the full width of the main text. Otherwise, it’s removed, because additional line breaks make things worse on small screens with arbitrary line breaks.

## Layout

Headings are not only recognized by their font styling but also by the white space surrounding them. That's why the following examples are shown in the way they usually appear: In front and in between some text.

***

# Page Title {.mt3 .mb3}

If the page already has a title, the first heading **should not** occur in the Markdown content. Like many themes, this one generates titles on all pages.

{{< mnote up=8 >}}
The entire [title section](/doc/page/title) is generated from parameters in the front-matter.
{{< /mnote >}}

The first heading remains reserved for titles. We may want to compose a title in Markdown on special pages. But with this theme, we usually don’t need it at all.

## Section Heading
{{< farfar 1 >}}

### Subsection Heading
{{< farfar 1 >}}

#### Sub-Subsection Heading
{{< farfar 1 >}}

#### Styled Paragraph Heading {.h-p}
{{< farfar 1 >}}

#### Warning Paragraph {.h-warn .h-p}
{{< farfar 1 >}}

##### Info Paragraph {.h-info}
{{< farfar 1 >}}

##### Tip Paragraph {.h-tip}
{{< farfar 1 >}}

###### Small Paragraph Heading
{{< farfar 1 >}}

[attr]: /doc/attribute
