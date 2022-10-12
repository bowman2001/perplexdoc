---
author: Georg Makowski
date: "2021-03-24T13:21:59+01:00"
description: Text segments from other sources
menu:
  doc:
    name: Quote
    parent: basic
    pre: format_quote
subtitle: false
title: Quote
weight: 120
categories: [Markdown]
tags: [Block, Inline, Blockquote, Quote]
resources:
  - name: featured
    src: cj-dayrit-xX2aYSBsyKo-unsplash.jpg
    params:
      alt: The quote “All ideas grow out of other ideas” written on a a large stairway
---

To quote someone means to recognize her or his thoughts as part of our own. We may agree or disagree, but we should refer to them correctly.
{.p-first} <!--more-->

A single word or short piece of text is usually quoted in the running text and is called an **inline quote**. A longer text segment is usually quoted as separate block and called a **blockquote**.

Some quotes should attract immediate attention while scanning the page. These are **hero quotes** and Perplex provides the [attribute]({{< relref "doc/attribute" >}}) `{.blockquote-hero}` to style them.

## Inline Quotes

Quotes in the running text just need to be enclosed by quotation marks.

When we type `“I quote you”` we simply get “I quote you”.
{.p-big}

But our keyboard usually doesn't show these typographically correct _curly_ quotation marks and we like to use the directly available straight ones, which get then replaced by our software.

### Substitution of English quotation marks

Hugo replaces the typographically dumb straight quotes with the correct curly ones by default — this is the responsibility of the  [typographer extension]({{< relref "doc/extended/typographer" >}}). We can use {#"} — straight quotes — like this:

`"An inline quote"`&emsp;for&emsp;"An inline quote"
{.p-big}

And a single word or a quote inside a quote is marked with {#\'} — single straight quotes:

`"A quote 'inside'"`&emsp;for&emsp;"A quote 'inside'"
{.p-big}

### In French, Swiss and German (partially)

We can open French and Swiss quotes with two {#<} angled brackets and close them with two {#>} in the other direction. They get replaced with nice guillemets (not guillemots!).

`<<Pardon my French>>`&emsp;for&emsp;<<Pardon my French>>
{.p-big}

In German publishing we usually find guillemets the other way around:

`>>Zahnstocher<<`&emsp;for&emsp;>>Zahnstocher<<
{.p-big}

But we get into trouble with these, when we start a line with `>>`, because the `>` is also the sign for a [quotation block]({{< relref "#blockquote" >}}). We can begin the line with an invisible entity like the zero width joiner `&zwj;` for a quick workaround:

&zwj;>>Noch einen Zahnstocher, bitte!<<
{.p-big}

### General Solutions

Because the typographer can't handle other languages, we need to think about a way to include them directly

1. We can learn some _keyboard shortcuts_ to include often needed punctuation. They depend on the operating system and the keyboard layout. On some systems, they are relatively easy to remember, on others, they are practically useless. But you could give it at least a try and look them up for your configuration. Maybe they are useful.

2. We can always use [HTML entities]({{< relref "specialchar" >}}). We get the German _Gänsefüßchen_&ensp;&bdquo;&nbsp;and&nbsp;&ldquo;&nbsp; with `&bdquo;` and `&ldquo;` for example. Entities look weird in text files, but the result is as good as the original Unicode glyphs.

{{< mnote up=11 >}}
It’s possible to replace them later automatically with Unicode glyphs and maybe your editor has a plugin for that.
{{< /mnote >}}

## Blockquote

Every line of a block quotation has to start with a _right angled bracket_, empty lines  included:

```md
> It is a paradisematic country, in which roasted parts of sentences fly into
> your mouth. Even the all-powerful Pointing has no control about the blind
> texts it is an almost unorthographic life.
>
> One day however a small line of blind text by the name of Lorem Ipsum decided
> to leave for the far World of Grammar.[^1]
```

The result is an indented block with a slightly smaller font size and two paragraphs:

{{< mnote up=8 >}}
It should approximately match the number of characters in a normal line of text.
{{< /mnote >}}

> It is a paradisematic country, in which roasted parts of sentences fly into your mouth. Even the all-powerful Pointing has no control about the blind texts it is an almost unorthographic life.
>
> One day however a small line of blind text by the name of Lorem Ipsum decided to leave for the far World of Grammar.[^1]
{.blind}

Blockquotes may include other markup, because we need emphasis, inline quotes, links, footnotes and other inline markup and maybe even lists inside quotations. The CommonMark specification allows to use all elements of Markdown inside of a blockquote — theoretically.

But think of nested blockquotes or tables inside of blockquotes in practice. They can become an aesthetic nightmare. This theme does not support every possibility. Feel free to file an issue in the theme repository, if some important option has no suitable layout.

## Hero quote

Because there is only the one possible markup for blockquotes described above, we have to use the [attribute]({{< relref "doc/attribute" >}}) `.blockquote-hero`. The last lines of a hero quote look like this:

```md
> name of Lorem Ipsum decided to leave for the far World of Grammar.
>  ---  Famous Person
{.blockquote-hero}
```

This prodces the following layout:
> It is a paradisematic country, in which roasted parts of sentences fly into your mouth. Even the all-powerful Pointing has no control about the blind texts it is an almost unorthographic life One day however a small line of blind text by the name of Lorem Ipsum decided to leave for the far World of Grammar.
>  ---  Famous Person
{.blockquote-hero}

The author of a hero quote --- the "hero" --- is usually cited by name. To move the name to the right, it has to be tagged with the [replacement code]({{< relref "replace" >}}) for a citation.

## Hanging quotes

Micro-typography is usually missing on the web, but its easy to generate hanging quotes at the beginning of a paragraph. They are applied to English “quotes”, «guillemets» and German „Gänsefüßchen“.

“This is a quote surrounded by English double quotes”

«Pardon my french»

»Könnte ich bitte einen Zahnstocher bekommen?«
{lang=de}

„Könnte ich bitte noch einen Zahnstocher bekommen?”
{lang=de}

[^1]: https://www.blindtextgenerator.com/lorem-ipsum
