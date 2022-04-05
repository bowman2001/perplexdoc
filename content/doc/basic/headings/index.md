---
date: "2021-03-23T21:46:56+01:00"
description: Main page structure
featImg: ashni-Wh9ZC4727e4-unsplash.jpg
menu:
  doc:
    name: Text Headings
    parent: basic
    pre: text_fields
subtitle: false
title: Text Headings

weight: 1
---

Headings introduce and order the segments on a page. On a website with many pages, each level should have similar importance.
{.p-lead} <!--more-->

## Syntax

_Markdown_ headings are preceded by number signs `#` and a space. The six available headings are associated with the following meaning in _Perplex_:

1. `# Page Title`&emsp;{s[**Not needed**][anchor] on standard _Perplex_ pages!}

2. `## Section Heading`

3. `### Subsection Heading`

4. `#### Sub-Subsection Heading`

5. `##### Paragraph Heading`

6. `###### Small Paragraph Heading`

Usually we don’t apply the full hierarchy on moderate sized pages, because too much structure is confusing. And we may skip some levels and use paragraph headings inside of sections for example.

### Special Headings

When we want to highlight a heading, that contains some *warning* or an important *information* or *tip*, we can use these [attributes][attr]: `{.h-warn}`, `{.h-info}`, `{.h-tip}`

A warning paragraph starts with a heading like this:

```md
##### Warning Paragraph {.h-warn}
Far far away, behind the word mountains, far from the countries Vokalia and
```

## Layout

Headings are not only recognized by their font styling, but also by the white-space surrounding them. That's why the following examples are shown the way they usually appear: In front and in between some text.

***

# Page Title {.h-info #title}

If the page already has a title, the first heading **should not** occur in the _Markdown_ content. Like many themes _Perplex_ provides titles for all pages.

{{< sidenote up=9 >}}
The title is generated from parameters in the front-matter. (See [title]({{< relref "title" >}}))
{{< /sidenote >}}

We still may need the first heading on special pages without a title section, when we want to compose a title in the _Markdown_ content.

## Section Heading
{{< farfar 1 >}}

### Subsection Heading
{{< farfar 1 >}}

#### Sub-Subsection Heading
{{< farfar 1 >}}

##### Paragraph Heading
{{< farfar 1 >}}

##### Warning Paragraph {.h-warn}
{{< farfar 1 >}}

##### Info Paragraph {.h-info}

{{< farfar 1 >}}

##### Tip Paragraph {.h-tip}
{{< farfar 1 >}}

###### Small Paragraph Heading
{{< farfar 1 >}}

[anchor]: {{< relref "#title" >}}
[attr]: {{< relref "attribute" >}}
