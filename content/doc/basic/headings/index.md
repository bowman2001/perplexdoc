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

To alter the style of these heading, Perplex offers Markdown [attributes][attr].

### Paragraph Headings {#h-p}

Usually, we don’t want to apply the full hierarchy on moderate-sized pages, because too much structure is confusing. For an appropriate layout, it may be desirable to skip one or two levels and use paragraph headings inside of sections for example.

But this is against HTML guidelines. Headings need to be applied strictly in their descending order because screen readers and other automatic interpreters get confused otherwise. To follow this rule we can skip headings only visually.

We can style any heading like a paragraph heading with the attribute `{.h-p}`. For the rare occasions, when we need to style a heading as a small paragraph heading there is the attribute: `{.h-p-s}`.

### Highlighted Headings

Another variation of the heading style is highlighting. It’s an easy way to inform readers about especially important text segments.

To indicate a section with a **danger**, **warning**, **information**, or **success**, we have the attributes `{.h-danger}`, `{.h-warn}`, `{.h-info}`, or `{.h-success}`.

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

This line break is displayed only when the screen can show the full width of the main text. On small screens, it’s invisible, because the line breaks would look even worse.

## Layout

Headings are not only recognized by their font styling but also by the white space surrounding them. That's why the following examples are shown in the way they usually appear: In front and in between some text.

***

# Page Title {.mt3 .mb3}

The first heading remains reserved for titles. We may want to compose a title in Markdown on special pages.

If the page already has a title, as it does in all templates of this theme, the first heading **should not** occur in the Markdown content.
{.box-warn .inline}

{{< mnote down=1 >}}
The entire [title section](/doc/page/title) is generated from parameters in the front-matter.
{{< /mnote >}}

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
