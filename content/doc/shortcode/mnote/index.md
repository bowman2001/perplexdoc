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

A marginal note contains additional nonessential information. It explains some context, sheds light on a detail or speculates on a given topic etc.
{.p-first} <!--more-->

A marginal note accompanies the text without interruption, if the screen is big enough, because it’s placed in the right margin. There, the editor can move the note up to match a line the note is referring to.  

On small screens a note has to follow after the associated text block.

## Syntax

```md
{{</* mnote up=11 */>}}
When she reached the first hills of the Italic Mountains, she had a last view 
back on the skyline of her hometown Bookmarksgrove, the headline of Alphabet 
Village and the subline of her own road, the Line Lane. 
{.p-blind}
{{</* /mnote */>}}
```

## Layout

There are short and long marginal notes. On screens, which allow for three columns or more, their layout is identical. On mobile screens long notes are partly hidden and can be fully opened and partly hidden again.

### Short Note

{{< farfar 1 >}}

{{< mnote up=14 >}}
When she reached the first hills of the Italic Mountains, she had a last view back on the skyline of her hometown Bookmarksgrove, the headline of Alphabet Village and the subline of her own road, the Line Lane.
{.p-blind}
{{< /mnote >}}

### Long Note

{{< farfar 2 >}}

{{< mnote up=28 >}}
When she reached the first hills of the Italic Mountains, she had a last view back on the skyline of her hometown Bookmarksgrove, the headline of Alphabet Village and the subline of her own road, the Line Lane. Pityful a rethoric question ran over her cheek, then she continued her way.
{.blind}
On her way she met a copy. The copy warned the Little Blind Text, that where it came from it would have been rewritten a thousand times and everything that was left from its origin would be the word "and" and the Little Blind Text should turn around and return to its own, safe country.
{.blind}
{{< /mnote >}}
