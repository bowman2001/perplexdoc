---
author: Georg Makowski
date: "2021-08-18T10:59:52+02:00"
description: Description
menu:
  doc:
    name: Marginal Note
    parent: theme
    pre: note    
title: Marginal Note
weight: 530
---

A marginal note contains additional information not vital for the meaning of the content. It explains context, sheds light on a detail or speculates on the given topic etc.
{.p-first}

A marginal note accompanies the text without interruption, if the screen is big enough. Then, it’s placed in the right margin.

On small screens the note has to follow after the associated text block. Because long notes would fill small screens, they are partly hidden.

## Syntax

```md
{{</* mnote up=11 */>}}
When she reached the first hills of the Italic Mountains, she had a last view 
back on the skyline of her hometown Bookmarksgrove, the headline of Alphabet 
Village and the subline of her own road, the Line Lane. Pityful a rethoric 
question ran over her cheek, then she continued her way.
{.p-blind}
{{</* /mnote */>}}
```

## Layout

There are short and long marginal notes, with a slightly different layout on mobile screens. 

### Short Note

{{< farfar 1 >}}

{{< mnote up=15 >}}
But nothing the copy said could convince her and so it didn’t take long until a few insidious Copy Writers ambushed her, made her drunk with Longe and Parole and dragged her into their agency, where they abused her for their projects again and again. And if she hasn’t been rewritten, then they are still using her.
{{< /mnote >}}

### Long Note

{{< farfar 2 >}}

{{< mnote up=29 >}}
When she reached the first hills of the Italic Mountains, she had a last view back on the skyline of her hometown Bookmarksgrove, the headline of Alphabet Village and the subline of her own road, the Line Lane. Pityful a rethoric question ran over her cheek, then she continued her way.

On her way she met a copy. The copy warned the Little Blind Text, that where it came from it would have been rewritten a thousand times and everything that was left from its origin would be the word "and" and the Little Blind Text should turn around and return to its own, safe country.
{.blind}
{{< /mnote >}}


