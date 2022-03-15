---
date: "2021-03-24T21:23:17+01:00"
description: Content from an editor or a command line
image:
  featured: markus-spiske-1LLh8k2_YFk-unsplash.jpg
menu:
  doc:
    name: Code
    parent: basic
    pre: code
subtitle: false
title: Code
weight: 35
---

**Perplex** offers space for 80 characters of code in one content line, when the screen is big enough. If the marginal column gets included, more than 120 fit in.
{.p-lead} <!--more-->

Short snippets of code are often placed *in line* with the normal text. Long pieces of code or entire files are marked as *code blocks*.

_Hugo_ can style and colorize code blocks according to their content with the built-in *Chroma highlighter* and offers some options to style these blocks.  

## Syntax

### Inline Code

A code snippet is surrounded by single backticks like `` `code` ``.

### Code Block

We have two ways to mark a block as code:

Fenced
: when a block is surrounded by three back-ticks `` ``` `` in the line above and beyond it's a *fenced code block*.

Indented
: a block of text indented by 4 spaces or a tab is also treated as a *code block*.
{.dl-loose}

The *fenced* version of the _Commonmark_ syntax is perferable for two reasons:

1. The following options are available only for fenced blocks:

   1. Code highlighting

   2. Line numbers

   3. Line markers

   4. Line anchors
   {.col2-l2}

2. There is an overlap with the syntax for the extensions [footnote][ftn] and [definition-list][dl]. When we need subsequent paragraphs there, we need to indent them also by 4 spaces or a tab. If we place an indented code block after a footnote reference or a definition detail, _Hugo_ will treat it as a continuation and not as a code block.

### Highlighting

Many programming or markup languages are highlighted by *Chroma*, when we add their usual file suffixes or another identification code. The _Hugo_ docs include the full list of available [Chroma highlighting languages][hugochroma].

### Additional styling for fenced code blocks

In contrast to other block elements the attributes follow the **first fence** of the code block on the same line after a space, like `` ```md {linenos=true}``.

The options suitable for _Perplex_ are:

`linenos`
: Enable or disable line numbers. They are disabled by default [for this project]({{< relref "markup#40" >}}), enable them with `linenos=true`

`hl_lines`
: Especially highlight some code lines. The lines must be given as a set of numbers or ranges enclosed in square brackets. Every range has to be surrounded additionally by quotes: `hl_lines=[2,"5-7"]`.

`linenostart`
: lets the line numbers begin with a given number, like `linenostart=23`

`lineanchors`
: Add a prefix to the anchors on the line numbers. With `lineanchors=prefix` for example the anchors are named `prefix-1`, `prefix-2`, ...
{.dl-loose}

## Layout

gets rendered to:

The html tag to mark the beginning of code is `<code>`. And to mark the end we use the corresponding closing tag `</code>`.

### Code Blocks

The first backticks marking a code block may be followed by an abbreviation for the kind of code. Then _Hugo_ is able to highlight and colorize the source code for better readability. The abbreviations are usually the same or are referring to the common suffix for a file containing that kind of code.

### Fenced

```md
The *HTML* tag at the **beginning** of code is `<code>`.
And to mark the **end** we use the corresponding closing tag `</code>`.
```

### Indented

     The *HTML* tag at the **beginning** of code is `<code>`.
     And to mark the **end** we use the corresponding closing tag `</code>`.

### Long lines

```go {class=full-width linenos=true}
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

Every *blank* line indicates the beginning of a *new* paragraph.
> A blockquote is marked by a `>` at the beginning of every line of the quote. It may contain *text formatting* itself.

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

[ftn]: {{< relref "footnotes#reference" >}}

[dl]: {{< relref "definition-list" >}}
