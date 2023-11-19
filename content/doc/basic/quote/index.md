---
authors: [Georg Makowski]
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
tags: [Quote, punctuation, Block, Inline]
---

To quote someone means to recognize her or his thoughts as part of our own. We may agree or disagree, but we should refer to them correctly.
{.p-first} <!--more-->

A single word or short piece of text is usually quoted in the running text and is called an **inline quote**. A longer text segment is usually quoted as a separate block and called a **blockquote**.

Some quotes should attract immediate attention while scanning the page. These are **hero quotes** and Perplex provides the [attribute](/doc/enhancing/attribute) `{.blockquote-hero}` to style them.

## Inline Quote

Quotes in the running text just need to be enclosed by quotation marks.

When we type `“I quote you”` we simply get “I quote you”.
{.p-big}

But our keyboard usually doesn't show these typographically correct _curly_ quotation marks and we like to use the directly available straight ones, which get then replaced by our software.

### Substitution of English quotation marks

Hugo replaces the typographically dumb straight quotes by default with the correct curly ones of the English language. This is the responsibility of the [typographer extension](/doc/extended/typographer). 

We can simply use {~"} — straight quotes — like this:

`"An inline quote"`&emsp;for&emsp;"An inline quote"
{.p-big}

And a single word or a quote inside a quote is marked with {~\'} — single straight quotes:

`"A quote 'inside'"`&emsp;for&emsp;"A quote 'inside'"
{.p-big}

### Substitution for other languages

The substitutions of the typographer can be specifically determined in the markup section for the Goldmark renderer. (See [Hugo docs](https://gohugo.io/getting-started/configuration-markup/#goldmark))

#### Angled quotes in French, Swiss, and German (partially)

We can open French and Swiss quotes with two {~<} angled brackets and close them with two {~>} in the other direction. They get replaced with nice guillemets (not guillemots!).

`<<Pardon my French>>`&emsp;for&emsp;<<Pardon my French>>
{.p-big}

In German publishing we sometimes use guillemets the other way around:

`>>Zahnstocher<<`&emsp;for&emsp;>>Zahnstocher<<
{.p-big}

We get into trouble with these, when we start a line with `>>` because the `>` is also the sign for a [quotation block](#blockquote).

In case we need the reversed angled quotes only in a few cases, we can begin the line with an invisible entity like the zero width joiner `&zwj;` before two angles as a workaround:

&zwj;>>Noch einen Zahnstocher, bitte!<<
{.p-big}

A good solution for a site with angled quotes only is to configure the normal quote replacements of the typographer as angled quotes.
{.box-info}

## Blockquote

Every line of a block quotation has to start with a **right-angled bracket**, empty lines included:

```md
> Sphinx of black quartz, judge my vow! The quick brown fox jumps over 
> the lazy dog. Waltz job vexed quick frog nymphs.
>
> A very big box sailed up then whizzed quickly from Japan. My faxed joke
> won a pager in the cable TV quiz show.
```

The result is an indented block with a slightly smaller font size with serifs:

> Sphinx of black quartz, judge my vow! The quick brown fox jumps over the lazy dog. Waltz job vexed quick frog nymphs.
>
> A very big box sailed up then whizzed quickly from Japan. My faxed joke won a pager in the cable TV quiz show.

Blockquotes may include additional markup like emphasis, inline quotes, links, footnotes, and other inline markup and maybe even lists. The CommonMark specification allows the use of all elements of Markdown inside of a blockquote.

**But consider this in practice:** Nested block quotes or tables inside of block quotes? This theme does not support every possibility. Feel free to file an issue in the theme repository, if an important option has no suitable layout.
{.box-info}

## Hero quote

Because there is only one possible markup for blockquotes described above, we have to use the [attribute](/doc/enhancing/attribute) `.blockquote-hero`: 

```md
> BlewJ’s computer quiz favored proxy hacking. Big July earthquakes confound
> zany experimental vow. Bawds jog, flick quartz, vex nymphs. Show mangled
> quartz flip vibe exactly. Public junk dwarves quiz mighty fox.
> --- _Famous Person_
{.blockquote-hero}
```
{data-pagefind-ignore="all"}

to produce this layout:

> BlewJ’s computer quiz favored proxy hacking. Big July earthquakes confound zany experimental vow. Bawds jog, flick quartz, vex nymphs. Show mangled quartz flip vibe exactly. Public junk dwarves quiz mighty fox.
> --- _Famous Person_
{.blockquote-hero data-pagefind-ignore="all" .inline}

{{< mnote down=1 >}}
To emphasize the hero quote even more we can add [rules](/doc/basic/horizontal-rule) before and after the quote.
{{< /mnote >}}

## Hanging quotes

Micro-typography is usually missing on the web because browsers don’t support it. But hanging quotes at the beginning of a paragraph are possible! They are applied to English “quotes”, French «guillemets», »German guillemets«, and German „Gänsefüßchen“.

“This is a quote surrounded by English double quotes”

«Pardon my french»

»Könnte ich bitte einen Zahnstocher bekommen?«
{lang=de}

„Könnte ich bitte noch einen Zahnstocher bekommen?”
{lang=de}
