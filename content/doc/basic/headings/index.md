---
authors: [Georg Makowski]
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

Headings introduce and order content segments on a page. Heading levels need to descend without interruption. We can modify headings only visually when we want to skip some levels.
{.p-first} <!--more-->

## Syntax

Markdown headings are preceded by number signs `#` and a space. The six available headings are associated with the following meaning in Perplex:

1. `# Page Title`&emsp;**{s [Usually not available](#page-title)!**}

2. `## Section Heading`

3. `### Subsection Heading`

4. `#### Sub-Subsection Heading`

5. `##### Paragraph Heading`

6. `###### Small Paragraph Heading`

To alter the style of these heading, Perplex offers Markdown [attributes][attr].

### Paragraph Headings {#h-p}

On moderately sized pages, we often don’t want to apply the full hierarchy headings, because too much structure gets also confusing. We may like to skip one or two levels and use paragraph headings in normal sections, for example.

But this would violate the HTML guidelines. Headings need to follow strictly in their descending order because screen readers and other automatic interpreters get confused otherwise.

To abide to this rule, we skip headings only visually. Any heading looks like a paragraph heading with the attribute `{.h-p}` or `{.h-p-s}` for a small paragraph heading.

### Highlighted Headings

To emphasize especially important text segments, we can begin them with a highlighted heading. This is a more subtle form than  [annotation boxes](/doc/enhancing/attribute/box).

To indicate a section about some **danger**, **warning**, **information**, or **success**, we apply the attributes `{.h-danger}`, `{.h-warn}`, `{.h-info}`, or `{.h-success}`.

A warning paragraph for example starts with a heading like this:

```text 
##### Warning Paragraph {.h-warn}
Far far away, behind the word mountains, far from the countries Vokalia and…
```

### Very long headings with complicated topics stretching over more than one line

CommonMark offers no possibility to break a heading line because every line starting with a `#` starts a new heading.

When a heading exceeds the line length of the layout, it breaks automatically. That may occur at an unfortunate place: Before the last word or between tightly related words. To introduce a manual break we can put the replacement code `{‍/}` between two words **without any spacing character** like this:

```text {.expand}
### Nice long heading with a complicated topic{‍/}stretching over more than one line
```

and we get:

### Nice long heading with a complicated topic{/}stretching over more than one line

This line break is displayed only when the full-text width fits the viewport. On small screens, it’s invisible, because manual line breaks could come out even worse.

## Layout

Headings are not only recognized by their font styling but also by the space surrounding them. That's why the following examples are shown in the way they usually appear: In front and in between some text.

***

# Page Title {.mt3 .mb3}

The first heading is reserved for titles. Only one `<h1>` tag should occur on any webpage. We may want to compose a title in Markdown on special pages but in all theme templates the [title section](/doc/page/title) is rendered from meta-data in the frontmatter.
{.box-warn}

## Section
{{% pangram 4 %}}
{.placeholder data-pagefind-ignore="all"}

### Subsection 
{{% pangram 4 %}}
{.placeholder data-pagefind-ignore="all"}

#### Sub-Subsection
{{% pangram 4 %}}
{.placeholder data-pagefind-ignore="all"}

##### Paragraph 
{{% pangram 4 %}}
{.placeholder data-pagefind-ignore="all"}

###### Small paragraph
{{% pangram 4 %}}
{.placeholder data-pagefind-ignore="all"}

#### Paragraph attribute {.h-p}
{{% pangram 4 %}}
{.placeholder data-pagefind-ignore="all"}

#### Danger {.h-danger .h-p}
{{% pangram 4 %}}
{.placeholder data-pagefind-ignore="all"}

#### Warning {.h-warn .h-p}
{{% pangram 4 %}}
{.placeholder data-pagefind-ignore="all"}

#### Info {.h-info .h-p}
{{% pangram 4 %}}
{.placeholder data-pagefind-ignore="all"}

##### Success {.h-success}
{{% pangram 4 %}}
{.placeholder data-pagefind-ignore="all"}

[attr]: /doc/enhancing/attribute
