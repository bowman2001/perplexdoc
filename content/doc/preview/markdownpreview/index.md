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
  name: markdown
  params:
    alt: Markdown logo
    size: tiny
categories: [Getting started, Markdown]
tags: [Block, Inline]
weight: 5
---

This article offers a sample of basic Markdown syntax that can be used in Hugo content files and shows whether basic HTML elements are decorated with CSS in a Hugo theme.
{.p-first}
<!--more-->

## Headings

The following HTML `<h1>`—`<h6>` elements represent the title, three levels of section headings, and two levels of paragraph headings. They are placed before paragraphs and the paragraph headings are even placed inside them.

# Title

Xerum, quo qui aut unt expliquam qui dolut labo. Aque venitatiusda cum, voluptionse latur sitiae dolessi aut parist aut dollo enim qui voluptate ma dolestendit peritin re plis aut quas inctum laceat est volestemque...
{.blind}
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
## Blockquotes

The blockquote element represents content that is quoted from another source, optionally with a citation which must be within a `footer` or `cite` element, and optionally with in-line changes such as annotations and abbreviations.

### Blockquote without attribution

> Tiam, ad mint andaepu dandae nostion secatur sequo quae.
> **Note** that you can use _Markdown syntax_ within a blockquote.

### Blockquote with attribution

> Don't communicate by sharing memory, share memory by communicating.
> {=— Rob Pike[^1]}

[^1]: The above quote is excerpted from Rob Pike's [talk](https://www.youtube.com/watch?v=PAAkCSZUG1c) during Gopherfest, on November 18, 2015.

## Tables

Tables aren't part of CommonMark, but Hugo supports them out of the box.

   Name | Age
:--------|:------
    Bob | 27
  Alice | 23

### Inline Markdown within tables

| Inline     | Markdown  | In                | Table      |
|:---------- |:--------- |:----------------- |:---------- |
| _italics_  | **bold**  | ~~strikethrough~~ | `code`     |

## Code Blocks

### Code block with backticks

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

### Ordered List

1. First item
2. Second item
3. Third item

### Unordered List

* List item
* Another item
* And another item

### Nested list

* Item
  1. First Sub-item
  2. Second Sub-item

## Other Elements — sub, sup, kbd, mark

H{_2}O

X{^n} + Y{_n} = Z{^n}

Press {%CTRL} + {%ALT} + {%Delete} to end the session.

Most {!salamanders} are nocturnal, and hunt for insects, worms, and other small creatures.

