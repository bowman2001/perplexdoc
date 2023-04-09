---
author: Georg Makowski
title: Markdown Layout
description: One page Markdown Overview
subtitle: false
date: 2022-05-12T22:30:17+02:00 
menu:
  doc:
    name: Markdown Layout
    parent: tldr
    pre: edit
resources:
- src: Markdown.png
  name: featured
  params:
    alt: Markdown logo
    size: tiny
    container: "no"
categories: [Getting started, Markdown]
tags: [Block, Inline]
weight: 5
---

This article contains samples of the extended CommonMark syntax to show the CSS-layout of the rendered HTML.
{.p-first}
<!--more-->

The theme offers style variations for many of these elements. This page presentss only the default styles.

## Headings

The following HTML `<h1>`—`<h6>` elements represent the title, three levels of section headings, and two levels of paragraph headings. They are placed before paragraphs and the paragraph headings are even placed inside them.

Usually, the title does **not get used** in Markdown content. All theme templates generate titles from front-matter meta-data. 

---

# Title

Xerum, quo qui aut unt expliquam qui dolut labo. Aque venitatiusda cum, voluptionse latur sitiae dolessi aut parist aut dollo enim qui voluptate ma dolestendit peritin re plis aut quas inctum laceat est volestemque...
{.blind}

---

## Section
Xerum, quo qui aut unt expliquam qui dolut labo. Aque venitatiusda cum, voluptionse latur sitiae dolessi aut parist aut dollo enim qui voluptate ma dolestendit peritin re plis aut quas inctum laceat est volestemque...
{.blind}

### Sub-section
Xerum, quo qui aut unt expliquam qui dolut labo. Aque venitatiusda cum, voluptionse latur sitiae dolessi aut parist aut dollo enim qui voluptate ma dolestendit peritin re plis aut quas inctum laceat est volestemque...
{.blind}

#### Sub-sub-section
Xerum, quo qui aut unt expliquam qui dolut labo. Aque venitatiusda cum, voluptionse latur sitiae dolessi aut parist aut dollo enim qui voluptate ma dolestendit peritin re plis aut quas inctum laceat est volestemque...
{.blind}

##### Paragraph
Xerum, quo qui aut unt expliquam qui dolut labo. Aque venitatiusda cum, voluptionse latur sitiae dolessi aut parist aut dollo enim qui voluptate ma dolestendit peritin re plis aut quas inctum laceat est volestemque commosa as cus endigna tectur, offic to cor sequas etum rerum idem sintibus eiur? Quianimin porecus evelectur, cum que nis nust voloribus ratem aut omnimi, sitatur? Quiatem. Nam, omnis sum am facea corem alique molestrunt et eos evelece arcillit ut aut eos eos nus, sin conecerem erum fuga. Ri oditatquam, ad quibus unda veliamenimin cusam et facea ipsamus es exerum sitate dolores editium rerore eost, temped molorro ratiae volorro te reribus dolorer sperchicium faceata tiustia prat.
{.blind}

###### Small Paragraph
Itatur? Quiatae cullecum rem ent aut odis in re eossequodi nonsequ idebis ne sapicia is sinveli squiatum, core et que aut hariosam ex eat.
{.blind}

## Images
**TODO**

### Stand-alone

### Embedded

## Link

- This is an internal [example link](#images).

- This is an external [example link](https://example.com "example.com").

## Blockquotes
The blockquote element represents content that is quoted from another source, optionally with a citation which must be within a `footer` or `cite` element, and optionally with in-line changes such as annotations and abbreviations.

### Without attribution

> Xerum, quo qui aut unt expliquam qui dolut labo. Aque venitatiusda cum, voluptionse latur sitiae dolessi aut parist aut dollo enim qui voluptate ma dolestendit peritin re plis aut quas inctum laceat est volestemque...
> {.p-blind}
> 
> **Note** that you can use _Markdown syntax_ within a blockquote.

### With attribution and footnote

> Don't communicate by sharing memory, share memory by communicating.
> {=— Rob Pike[^1]}

[^1]: The above quote is excerpted from Rob Pike's [talk](https://www.youtube.com/watch?v=PAAkCSZUG1c) during Gopherfest, on November 18, 2015.

## Tables

Tables aren't part of CommonMark, but Hugo supports them out of the box.

### Centered table columns

|   Name | Age |
|:--------:|:----:|
|    Bob | 27 |
|  Alice | 23 |

### Inline Markdown within tables

| Inline     | Markdown  | In                | Table      |
|:---------- |:---------:|:-----------------:|----------:|
| _italics_  | **bold**  | ~~strikethrough~~ | `code`     |

## Code Blocks

### With backticks (code fences)

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>Example HTML5 Document</title>
</head>
<body>
  <p>Test</p>
</body>
</html>
```

### Code block indented with four spaces

    <!DOCTYPE html>
    <html lang="en">
    <head>
      <meta charset="UTF-8">
      <title>Example HTML5 Document</title>
    </head>
    <body>
      <p>Test</p>
    </body>
    </html>

### Code block with Hugo's internal highlight shortcode

{{< highlight html >}}
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>Example HTML5 Document</title>
</head>
<body>
  <p>Test</p>
</body>
</html>
{{< /highlight >}}

## List Types

### Ordered list

1. First item
2. Second item
3. Third item

### Unordered list

* List item
* Another item
* And another item

### Nested unordered and ordered list

* Item 1
  1. First sub-item
  
  3. Second sub-item

* Item 2
  1. First sub-item of second item

  2. Second sub-item of second item
  
### Definition list

First term
: Description of the first term

Second term
: Description of the second term

## Other Elements — sub, sup, kbd, mark

H{_2}O

X{^n} + Y{_n} = Z{^n}

Press {%CTRL} + {%ALT} + {%Delete} to end the session.

Most {!salamanders} are nocturnal, and hunt for insects, worms, and other small creatures.

{{< mnote up=23 >}}
These HTML tags are not present in the Markdown &Rightarrow; `unsafe: false`. They are introduced after Goldmark rendering with `replaceRE` of [replacement codes](/doc/replace). 
{{< /mnote >}}
