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
weight: 105
categories: [Markdown]
tags: [Block]
resources:
- name: featured
  src: ashni-Wh9ZC4727e4-unsplash.jpg
---

Headings introduce and order the segments on a page. On a website with many pages, each level should have similar importance.
{.p-first} <!--more-->

## Syntax

Markdown headings are preceded by number signs `#` and a space. The six available headings are associated with the following meaning in Perplex:

1. `# Page Title`&emsp;{s[**Not needed**][anchor] on standard Perplex pages!}

2. `## Section Heading`

3. `### Subsection Heading`

4. `#### Sub-Subsection Heading`

5. `##### Paragraph Heading`

6. `###### Small Paragraph Heading`

Usually we don’t want to apply the full hierarchy on moderate sized pages, because too much structure is confusing. And for an appropriate layout, it’s often desirable to skip one or two levels and use paragraph headings inside of sections. But this is going against recommended HTML guidelines. Headings should be used strictly in their descending order, because screen readers and other automatic interpreters get confused otherwise.

To follow this recommendation _and_ skip headings visually, we need heading [attributes][attr].

### Paragraph Headings {#h-p}

We can style any heading like a _paragraph heading_ with the [attribute][attr] `{.h-p}`. For the probably rare occasions we need to style a heading as a _small paragraph heading_ we need an additional attribute: `{.h-p .h-p-s}`.

### Special Headings

When we want to highlight a heading, that contains some _warning_ or an important _information_ or _tip_, we can use these [attributes][attr]: `{.h-warn}`, `{.h-info}`, `{.h-tip}`

A warning paragraph starts with a heading like this:

```md
##### Warning Paragraph {.h-warn}
Far far away, behind the word mountains, far from the countries Vokalia and
```

## Layout

Headings are not only recognized by their font styling, but also by the white-space surrounding them. That's why the following examples are shown the way they usually appear: In front and in between some text.

***

# Page Title {.h-info .mt2 #title}

If the page already has a title, the first heading **should not** occur in the Markdown content. Like many themes Perplex provides titles for all pages.

{{< mnote up=8 >}}
The title is generated from parameters in the front-matter. (See [title]({{< relref "title" >}}))
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
[attr]: {{< relref "attribute" >}}
