---
author: Georg Makowski
date: 2021-08-18T10:59:52+02:00
description: Place a note in the right marginal column of the page
menu:
  doc:
    name: Marginal Note
    parent: shortcode
    pre: note
title: Marginal Note
weight: 530
categories: [Markdown]
tags: [Marginal Note, Shortcode]
---

A marginal note contains additional important but nonessential information. It explains some context, sheds light on a detail or speculates on a given topic etc.
{.p-first} <!--more-->

A marginal note should accompany the main text without interrupting it. If the screen is big enough, it’s placed in the right margin. Usually we need to move the note up to match the line in the main text which the note is referring to.

On small screens is no space for marginal notes. It’s placed inside a box with limited height, then.

## Syntax

The shortcode is called `mnote` and is placed with an opening and closing tag around the note. The note can contain only paragraphs and no headings etc.

The shortcode can also take three named parameters:

up
: Number of units (1rem) to push the note up. Paragraph blocks have a line height of three units in this theme.

star
: Number of stars to show at the beginning of the note. 1 or 2 are possible.

dagger
: Kind of dagger to show at the beginning of the note. 1 or 2 are possible.
{.dl-loose}

Optional stars or daggers should be matched by similar signs in the main text. They are used to reference notes which can’t be placed directly beside the text they are referring to. A star is the usual asterisk `*` on the keyboard. A dagger `†` corresponds to the entity `&dagger;` and a double dagger `‡` to `&Dagger;`.

```md
{{</* mnote up=11 */>}}
When she reached the first hills of the Italic Mountains, she had a last view 
back on the skyline of her hometown Bookmarksgrove, the headline of Alphabet 
Village and the subline of her own road, the Line Lane. 
{.p-blind}
{{</* /mnote */>}}
```

## Layout

There is a **short** and a **long** marginal note. On screens with a right margin their layout is identical. On smaller ones the long notes are partly hidden and can be expanded. The star and the dagger wouldn’t be necessary in respect to the layout structure, because the notes are placed right besides the text.

### Short Note

Far far away, behind the word mountains{^\*}, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean. A small river named Duden flows by their place and supplies it with the necessary regelialia.
{.blind}

{{< mnote up=14 star=1 >}}
When she reached the first hills of the Italic Mountains, she had a last view back on the skyline of her hometown Bookmarksgrove, the headline of Alphabet Village and the subline of her own road, the Line Lane.
{{< /mnote >}}

### Long Note

Far far away{^&dagger;}, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean. A small river named Duden flows by their place and supplies it with the necessary regelialia.
{.blind}

It is a paradisematic country, in which roasted parts of sentences fly into your mouth. Even the all-powerful Pointing has no control about the blind texts it is an almost unorthographic life. One day however a small line of blind text by the name of Lorem Ipsum decided to leave for the far World of Grammar.
{.blind}

{{< mnote up=28 dagger=1 >}}
When she reached the first hills of the Italic Mountains, she had a last view back on the skyline of her hometown Bookmarksgrove, the headline of Alphabet Village and the subline of her own road, the Line Lane. Pityful a rethoric question ran over her cheek, then she continued her way.

On her way she met a copy. The copy warned the Little Blind Text, that where it came from it would have been rewritten a thousand times and everything that was left from its origin would be the word "and" and the Little Blind Text should turn around and return to its own, safe country.
{{< /mnote >}}
