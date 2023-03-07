---
author: Georg Makowski
title: Code Layout
description: Demo for styling options in a blog posting or article
subtitle: false
date: 2022-11-01T14:54:07+01:00
categories: [Markdown]
tags: [Code, Inline, Block]
series: [Demo]
---

The main text column offers space for {$80} characters of code in one line. When we need {$120} to fit in one line, we can expand code boxes into the marginal column(s).
{.p-first} <!--more-->

Short snippets of code are usually placed **in line** with the normal text. Longer pieces of code or entire files should be embedded as **code blocks**.

Hugo can style and colorize code blocks according to their content with the built-in _Chroma highlighter_ and offers some options to style these blocks.

## Syntax

### Inline Code

A code snippet is surrounded by single backticks like `` `code` ``.

### Code Block

We have two ways to mark a block as code:

Fenced
: When a block is surrounded by three back-ticks `` ``` `` in the line above and beyond it's a **fenced code block**.

Indented
: A block of text indented by 4 spaces or a tab is also treated as a **code block**.
{.dl-loose}

The **fenced** version of the CommonMark syntax is **preferable** for two reasons:

1. The following styling options are only available for fenced blocks:

   1. Code highlighting

   2. Line numbers

   3. Line markers

   4. Line anchors
   {.col2-l2}

2. There is an overlap with the syntax for the extensions [footnote][ftn] and [definition-list][dl]. When we have subsequent paragraphs there, we need to indent them also by 4 spaces or a tab. If we try to place an indented code block after a footnote reference or a definition detail, Hugo will treat it as this kind of continuation indent and not as a code block.
   {#overlap}

### Highlighting

Chroma can highlight many languages, when we add their usual file suffixes. The Hugo docs include the full list of available [languages][hugochroma].

### Additional styling for fenced code blocks

In contrast to other block elements the attributes follow the **first fence** of the code block on the same line after a space, like `` ```md {linenos=true}``.

The options suitable for Perplex are:

`linenos`
: Enables or disables line numbers. They are disabled by default [for this project]({{< relref "markup#40" >}}) --- enable them with `linenos=true`.

`hl_lines`
: Especially highlights some code lines. The lines must be given as a set of numbers or ranges enclosed in square brackets. Every range has to be surrounded additionally by quotes: `hl_lines=[2,"5-7"]`.

`linenostart`
: Lets the line numbers begin with a given number, like `linenostart=23`

`lineanchors`
: Adds a prefix to the anchors on the line numbers. With `lineanchors=prefix` for example the anchors are named `prefix-1`, `prefix-2`, ...
{.dl-loose}

## Layout

### Inline

The HTML tag to mark the beginning of code is `<code>`. And to mark the end we use the corresponding closing tag `</code>`. Markdown text surrounded by backticks like `` `text` `` gets enclosed by these tags.

### Block

The first backticks marking a code block may be followed by an abbreviation for the code language. Then Hugo is able to highlight and colorize the source code for better legibility. The abbreviations are usually the same as the common suffix for a code file.

### Fenced

#### Without line numbers

```md
The *HTML* tag at the **beginning** of code is `<code>`.
And to mark the **end** we use the corresponding closing tag `</code>`.
```

#### With line numbers (table layout)

```md {linenos=true}
The *HTML* tag at the **beginning** of code is `<code>`.
And to mark the **end** we use the corresponding closing tag `</code>`.
```

### Indented

    The _HTML_ tag at the **beginning** of code is `<code>`.
    And to mark the **end** we use the corresponding closing tag `</code>`.

### Long lines

```go {class=large linenos=true}
// NodeRendererFunc is a function that renders a given node.
type NodeRendererFunc func(writer util.BufWriter, source []byte, n ast.Node, entering bool) (ast.WalkStatus, error)

// A NodeRenderer interface offers NodeRendererFuncs.
type NodeRenderer interface {
 // RendererFuncs registers NodeRendererFuncs to given NodeRendererFuncRegisterer.
 RegisterFuncs(NodeRendererFuncRegisterer)
}
```

```md {linenos=true, linenostart=3, hl_lines=["3-4"]}
Normal consecutive text is transformed by the markdown renderer to a paragraph
block.

Every blank line indicates the beginning of a new paragraph.
> A blockquote is marked by a `>` at the beginning of every line
> of the quote. It may contain *text formatting* itself.
```

An unformatted text segment like this one is transformed by the markdown renderer to a paragraph block.

Every _blank_ line indicates the beginning of a _new_ paragraph.
> A blockquote is marked by a `>` at the beginning of every line of the quote. It may contain _text formatting_ itself.

***

### When all lines are no longer than 40 characters

```json
{
  "firstName": "John",
  "lastName": "Smith",
  "age": 35,
  "profession": "Last Man Standing"
}
```

```bash {.lh15}
├── assets
├── config
├── package.json
├── public
├── resources
└── themes
```

[hugochroma]: https://gohugo.io/content-management/syntax-highlighting/#list-of-chroma-highlighting-languages

[ftn]: {{< relref "doc/extended/footnotes#reference" >}}

[dl]: {{< relref "doc/extended/definition-list" >}}
