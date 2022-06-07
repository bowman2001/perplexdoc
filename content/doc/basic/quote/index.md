---
author: Georg Makowski
date: "2021-03-24T13:21:59+01:00"
description: Text segments from other sources
featImg: cj-dayrit-xX2aYSBsyKo-unsplash.jpg
menu:
  doc:
    name: Quote
    parent: basic
    pre: format_quote
subtitle: false
title: Quote
weight: 120
---

Quoting is consciously repeating thoughts from another person, which yours are related to. When we reply to email, many programs append the previous mails automatically. These are just copies cluttering our conversations.
{.p-first} <!--more-->

A single word or short piece of text is usually quoted in the running text and is called an _inline quote_. A longer text segment of three or more lines is usually quoted as separate block and called a _blockquote_.

Some blockquotes should attract immediate attention while scanning the page. These are _hero quotes_ and _Perplex_ provides the [attribute]({{< relref "attribute" >}}) `{.blockquote-hero}` for alternative styling.

## Inline Quotes

Quotes in the running text need to be enclosed by quotation marks.

When we type `“I quote you”` we simply get “I quote you”.
{.p-big}

But our keyboard usually doesn't show these typographically correct quotation marks. That's why we often use simpler characters, which get replaced by our software.

### In English

_Hugo_ replaces the typographically _dumb_ straight quotes with the correct curly ones by default — this is the work of the  [typographer extension]({{< relref "typographer" >}}). We can simply place {#"} — the straight quote — around English quotes:

`"An inline quote"`&emsp;for&emsp;"An inline quote"
{.p-big}

And a quote inside a quote is marked with {#\'} — the single straight quote:

`"A quote 'inside'"`&emsp;for&emsp;"A quote 'inside'"
{.p-big}

### In French, Swiss and German (partially)

We can open French and Swiss quotes with two {#<} and close them with two {#>} — these are the _angled brackets_. They get replaced with guillemets (_not guillemots_!).

`<<Pardon my French>>`&emsp;for&emsp;<<Pardon my French>>
{.p-big}

In German publishing we often find guillemets the other way around:

`>>Zahnstocher<<`&emsp;for&emsp;>>Zahnstocher<<
{.p-big}

But we get into trouble with these, when we start a line with `>>`, because the `>` is also the _Markdown_ sign for a following [quotation block]({{< relref "#blockquote" >}}). We can begin the line with an invisible entity like the _zero width joiner_ `&zwj;` for a quick workaround:

&zwj;>>Noch einen Zahnstocher, bitte!<<
{.p-big}

### General Solutions

Because there are currently no replacement extension available for other languages, we need to think about a way to include them more directly

1. We can learn some _keyboard shortcuts_ to include often needed punctuation. But they depend on the operating system and the language. On some systems, they are relatively easy to remember, on others, they are practically useless.

2. We can always use [HTML entities]({{< relref "specialchar" >}}). We get the German _Gänsefüßchen_&ensp;&bdquo;&nbsp;and&nbsp;&ldquo;&nbsp; with `&bdquo;` and `&ldquo;` for example. Entities look weird in text files, but the result is as good as the original Unicode glyphs.

{{< sidenote up=11 >}}
It’s technically possible to replace them later automatically with Unicode glyphs, but until now I’ve found no simple piece of software I can recommend.
{{< /sidenote >}}

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

{{< sidenote up=8 >}}
It should approximately match the number of characters in a normal line of text.
{{< /sidenote >}}

> It is a paradisematic country, in which roasted parts of sentences fly into your mouth. Even the all-powerful Pointing has no control about the blind texts it is an almost unorthographic life.
>
> One day however a small line of blind text by the name of Lorem Ipsum decided to leave for the far World of Grammar.[^1]
{.blind}

Blockquotes may include other markup, because we need emphasis, inline quotes, links, footnotes and other inline markup and maybe even lists inside quotations. The _CommonMark_ specification allows to use all elements of Markdown inside of a blockquote — theoretically.

But think of nested blockquotes or tables inside of blockquotes in practice. They are an aesthetic nightmare in a typographical layout. This theme does not support every possibility. Feel free to write, if some important option is missing.

## Hero quote

Because there is only the one possible markup for blockquotes described above, we have to use the [attribute]({{< relref "attribute" >}}) `.blockquote-hero`. The last lines of a hero quote look like this:

```md
> name of Lorem Ipsum decided to leave for the far World of Grammar.
> {= ---  Famous Person}
{.blockquote-hero}
```

This prodces the following layout:
> It is a paradisematic country, in which roasted parts of sentences fly into your mouth. Even the all-powerful Pointing has no control about the blind texts it is an almost unorthographic life One day however a small line of blind text by the name of Lorem Ipsum decided to leave for the far World of Grammar.
> {= ---  Famous Person}
{.blockquote-hero}

The author of a hero quote -- the "hero" -- is usually cited by name. To give her or him the special place on the right, she or he has to be tagged with the [replacement code]({{< relref "replace" >}}) for a citation.

## Testing pull quotes

»Test«

[^1]: https://www.blindtextgenerator.com/lorem-ipsum
