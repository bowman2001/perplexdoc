---
authors: [Georg Makowski]
title: Markdown Layout
description: One-page Markdown overview
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
- src: bigsplash
  name: Big splash of water
  params: 
    caption: Check
categories: [Overview, Markdown]
tags: [Block, Inline]
weight: 5
---

This article contains samples of the extended CommonMark syntax to give a quick impression of the layout.
{.p-first}
<!--more-->

The theme offers style variations for many of these elements. Only the defaults are presented here.

## Headings

The following HTML elements `<h1>`—`<h6>` represent the title, three levels of section headings, and two levels of paragraph headings. The paragraph headings are placed **inside** their paragraphs.

Usually, the title does **not get used** in Markdown content. All theme templates generate titles from front-matter meta-data.

---

# Title

Xerum, quo qui aut unt expliquam qui dolut labo. Aque venitatiusda cum, voluptionse latur sitiae dolessi aut parist aut dollo enim qui voluptate ma dolestendit peritin re plis aut quas inctum laceat est volestemque...
{.blind}

---

## Section
Xerum, quo qui aut unt expliquam qui dolut labo. Aque venitatiusda cum, voluptionse latur sitiae dolessi aut parist aut dollo enim qui voluptate ma dolestendit peritin re plis aut quas inctum laceat est volestemque...
{.blind}

### Subsection
Xerum, quo qui aut unt expliquam qui dolut labo. Aque venitatiusda cum, voluptionse latur sitiae dolessi aut parist aut dollo enim qui voluptate ma dolestendit peritin re plis aut quas inctum laceat est volestemque...
{.blind}

#### Sub-subsection
Xerum, quo qui aut unt expliquam qui dolut labo. Aque venitatiusda cum, voluptionse latur sitiae dolessi aut parist aut dollo enim qui voluptate ma dolestendit peritin re plis aut quas inctum laceat est volestemque...
{.blind}

##### Paragraph
Xerum, quo qui aut unt expliquam qui dolut labo. Aque venitatiusda cum, voluptionse latur sitiae dolessi aut parist aut dollo enim qui voluptate ma dolestendit peritin re plis aut quas inctum laceat est volestemque commosa as cus endigna tectur, offic to cor sequas etum rerum idem sintibus eiur? Quianimin porecus evelectur, cum que nis nust voloribus ratem aut omnimi, sitatur? Quiatem. Nam, omnis sum am facea corem alique molestrunt et eos evelece arcillit ut aut eos eos nus, sin conecerem erum fuga. Ri oditatquam, ad quibus unda veliamenimin cusam et facea ipsamus es exerum sitate dolores editium rerore eost, temped molorro ratiae volorro te reribus dolorer sperchicium faceata tiustia prat.
{.blind}

###### Small Paragraph
Itatur? Quiatae cullecum rem ent aut odis in re eossequodi nonsequ idebis ne sapicia is sinveli squiatum, core et que aut hariosam ex eat.
{.blind}

## Images

Since version 0.108.0 Hugo allows distinguishing stand-alone and embedded images.

### Stand-alone

![A big splash of water](bigsplash)

### Embedded

![A smaller splash of water](splash) Xerum, quo qui aut unt expliquam qui dolut labo. Aque venitatiusda cum, voluptionse latur sitiae dolessi aut parist aut dollo enim qui voluptate ma dolestendit peritin re plis aut quas inctum laceat est volestemque commosa as cus endigna tectur, offic to cor sequas etum rerum idem sintibus eiur? Quianimin porecus evelectur, cum que nis nust voloribus ratem aut omnimi, sitatur? Quiatem. Nam, omnis sum am facea corem alique molestrunt et eos evelece arcillit ut aut eos eos nus, sin conecerem erum fuga. Ri oditatquam, ad quibus unda veliamenimin cusam et facea ipsamus es exerum sitate dolores editium rerore eost, temped molorro ratiae volorro te reribus dolorer sperchicium faceata tiustia prat.
{.blind .blind-right}

## Link

- This is an internal [example link](#images).

- This is an external [example link](https://example.com "example.com").

## Blockquotes
The blockquote element represents content that is quoted from another source, optionally with a citation which must be within a `footer` or `cite` element, and optionally with in-line changes such as annotations and abbreviations.

### Without attribution

> Xerum, quo qui aut unt expliquam qui dolut labo. Aque venitatiusda cum, voluptionse latur sitiae dolessi aut parist aut dollo enim qui voluptate ma dolestendit peritin re plis aut quas inctum laceat est volestemque...
> {.blind}
>
> **Note** that you can use _Markdown syntax_ within a blockquote.

### With attribution and footnote

> Don't communicate by sharing memory, share memory by communicating.
> {=— Rob Pike[^1]}

[^1]: The above quote is excerpted from Rob Pike's [talk](https://www.youtube.com/watch?v=PAAkCSZUG1c) during Gopherfest, on November 18, 2015.

## Tables

Tables aren't part of CommonMark, but Hugo supports their syntax as an extension by default.

### Centered table columns

| Name  | Age |
|:-----:|:---:|
|  Bob  | 27  |
| Alice | 23  |

### Inline Markdown within tables

| Inline    | Markdown |        In         |  Table |
|:----------|:--------:|:-----------------:|-------:|
| _italics_ | **bold** | ~~strikethrough~~ | `code` |

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

- List item
- Another item
- And another item

### Nested unordered and ordered list

- Item 1

  1. First sub-item of the first item
  
  2. Second sub-item of the first item

- Item 2

  1. First sub-item of the second item

  2. Second sub-item of the second item
  
### Definition list

The definition list is also an extension for Goldmark supported by Hugo.

First term
: Description of the first term

Second term
: Description of the second term

## Missing Markdown elements

Some inline HTML elements have no corresponding syntax in Goldmark. We can either enable raw HTML in Markdown or use some Hugo features to generate them.
### Simple inline: sub, sup, kbd, mark, cite

H{_2}O, X{^n} + Y{^n} = Z{^n}

Press {%CTRL} + {%ALT} + {%Delete} to end the session.

Most {!salamanders} are nocturnal, and hunt for insects, worms, and other small creatures.

We can reference a {=book}.

{{< mnote up=23 >}}
This theme supports safe Markdown &rightarrow; `unsafe: false`. These elements are placed after Goldmark rendering with `replaceRE` of [replacement codes](/doc/replace).
{{< /mnote >}}

### Inline with attributes: abbr, dfn

[HTML](abbr "HyperText Markup Language")

[Replacement codes](dfn "replacement") are defined by curly braces and one or more markers.

{{< mnote up=10 >}}
These elements are inserted with the reserved link targets “{$abbr}” and “{$dfn}” and a title for the render-link hook.
{{< /mnote >}}