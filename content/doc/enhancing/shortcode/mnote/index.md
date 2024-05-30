---
title: Marginal Note
description: Place a note in the right marginal column of the page
date: 2021-08-18 10:59:52+02:00
weight: 530
authors:
- Georg Makowski
categories:
- Markdown
tags:
- Marginal Note
- Shortcode
menu:
  doc:
    name: Marginal Note
    parent: shortcode
    pre: note
---

A marginal note contains additional important but nonessential information. It explains some context, sheds light on a detail or speculates on a given topic etc.
{.p-first} <!--more-->

A marginal note should accompany the main text without interrupting it. If the view-port is big enough, it’s placed in the right margin. On mobile view-ports it appears in a box of limited height.

## Syntax

The marginal note follows after the content block it belongs to and this is the usual layout order on mobile view-ports. But the note will also be placed besides the next block on large view-ports and that is usually not intended.

To let it float besides the block before, we need to change the layout of this block with the attribute [`.inline`](/doc/enhancing/attribute/inline) to make room in the right margin.

```md
Longer Paragraph …
{.inline}

{{</* mnote */>}}
**Public junk dwarves** hug my quartz fox. Zack Gappow saved the job requirement
list for the six boys. Bored? Craving a pub quiz fix? Why, just come to the
Royal Oak! Cozy sphinx waves quart jug of bad milk. Quads of blowzy fjord 
ignite map vex’d chicks.
{{</* /mnote */>}}
```

The shortcode is called `mnote` and needs an opening and closing tag around the note. The note can contain only inline styling and no headings etc.

The shortcode has four named parameters:

`star`
: Number of stars to show at the beginning of the note. 1 or 2 are possible.

`dagger`
: Kind of dagger to show at the beginning of the note. 1 or 2 crossings are possible.

`up`
: Number of units (1rem) to push the note up. The default line height for this theme is **three units**. We can move the note up in case we can’t use `{.inline}`.

`down`
: Number of units (1rem) to push the note down. This is the way to make room for absolute positionend layout elements (like the featured image) in the margin before the current note.
{.dl-loose}

Optional stars or daggers should be matched by similar signs in the main text. They are used to reference notes which can’t be placed in the vincinity of the text they are referring to because other layout elements got in the way.

A star is the usual asterisk `*` on the keyboard. A dagger `†` corresponds to the entity `&dagger;` and a double dagger `‡` to `&Dagger;`.

## Layout

The theme distinguishes between **short** and **long** marginal notes. On screens with a right margin, their layout is identical. On smaller ones, the long notes are partly hidden and can be expanded.
{.inline}

{{< mnote >}}
The star and the dagger in the following examples aren’t necessary for the layout structure, because the notes are placed right beside the text. They’re just for show.
{{< /mnote >}}

### Short Note

{{% pangram 3 %}}^\*^ {{% pangram 5 %}}
{.placeholder data-pagefind-ignore=all .inline}

{{< mnote star=1 >}}
Public junk dwarves hug my quartz fox. Zack Gappow saved the job requirement list for the six boys. Bored? Craving a pub quiz fix? Why, just come to the Royal Oak! Cozy sphinx waves quart jug of bad milk. Quads of blowzy fjord ignite map vex’d chicks.
{{< /mnote >}}

### Long Note

{{% pangram 7 %}}^&dagger;^ {{% pangram 9 %}}
{.placeholder data-pagefind-ignore=all .inline}

{{< mnote dagger=1 >}}
Quizzical twins proved my hijack-bug fix. Waltz job vexed quick frog nymphs. Back in June, we delivered oxygen equipment of the same size. Cozy sphinx waves quart jug of bad milk. Fake bugs put in wax jonquils drive him crazy. Five hexing wizard bots jump quickly.

When zombies arrive, quickly fax judge Pat. Zack Gappow saved the job requirement list for the six boys. Quilt frenzy jackdaw gave them best pox. Pack my red box with five dozen quality jugs.
{{< /mnote >}}
