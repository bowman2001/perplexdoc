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
tags: [Block, Headings]
resources:
- name: featured
  src: ashni-Wh9ZC4727e4-unsplash.jpg
---

Headings introduce and order the segments on a page. On a website with many pages, each level should have similar importance.
{.p-first} <!--more-->

## Syntax

Markdown headings are preceded by number signs `#` and a space. The six available headings are associated with the following meaning in Perplex:

1. `# Page Title`&emsp;{s [**Not needed**][anchor] on standard Perplex pages!}

2. `## Section Heading`

3. `### Subsection Heading`

4. `#### Sub-Subsection Heading`

5. `##### Paragraph Heading`

6. `###### Small Paragraph Heading`

Usually we don’t want to apply the full hierarchy on moderate sized pages, because too much structure is confusing. For an appropriate layout, it’s often desirable to skip one or two levels and use paragraph headings inside of sections for example. But this is against recommended HTML guidelines. Headings should be used strictly in their descending order, because screen readers and other automatic interpreters get confused otherwise. To follow this recommendation we need to skip headings visually. 

An easy way to inform readers about especially important text segments is to highlight their headings with signal colors.

For all these variations we can add Markdown [attributes][attr].

### Paragraph Headings {#h-p}

We can style any heading like a paragraph heading with the attribute `{.h-p}`. For the probably rare occasions we need to style a heading as a small paragraph heading we need an additional attribute: `{.h-p .h-p-s}`.

### Special Headings

When we want to highlight some **warning**, an important **information** or **tip**, we can use `{.h-warn}`, `{.h-info}` or `{.h-tip}`.

A warning paragraph for example starts with a heading like this:

```md
##### Warning Paragraph {.h-warn}
Far far away, behind the word mountains, far from the countries Vokalia and…
```

## Layout

Headings are not only recognized by their font styling but also by the white-space surrounding them. That's why the following examples are shown in the way they usually appear: In front and in between some text.

***

# Page Title {.h-info .mt2 .mb2 #title}

If the page already has a title, the first heading **should not** occur in the Markdown content. Like many themes Perplex provides titles for all pages.

{{< mnote up=8 >}}
The [page title]({{< relref "doc/page/title" >}}) is generated from parameters in the front-matter.
{{< /mnote >}}

We still may need the first heading on special pages without a title section, when we want to compose a title in the Markdown content.

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

[anchor]: {{< relref "#title" >}}
[attr]: {{< relref "doc/attribute" >}}
