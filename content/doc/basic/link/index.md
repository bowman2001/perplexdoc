---
author: Georg Makowski
date: "2021-03-23T22:11:38+01:00"
description: All types of references to a URL
featImg: edge2edge-media-t1OalCBUYRc-unsplash.jpg
menu:
  doc:
    name: Links
    parent: basic
    pre: link
title: Links
weight: 150
---

Internet references or short links are the binding fabric of the web. Markdown encourages their usage by providing simple markup options.
{.p-lead} <!--more-->

The easiest way to create a link is to write the reference directly into the text and let it be handled _automatically_ by Hugo. If we want to _name_ a link, we need to connect the name with the reference.

A reference on your own website is called an _internal link_, a reference to another an _external link_.

## Syntax

### Automatic links

A URL (**U**niform **R**esource **L**ocator) starting with `http://` or `https://` is automatically transformed into a link by the _linkify_ extension. If you want to stop this default behaviour, you can set `linkify = false` in the [configuration]({{< relref "markup#9" >}}).  

To include links from a word or phrase there are two options:

1. You can include them **inline** within the text.
2. They may also be written in a separate **reference** like a footnote.

## Automatic links {#linkify}

We can surround URLs for better legibility in the markdown file
with angle brackets `<>`. The result is the same:

`http://www.example.com`&ensp;or&ensp;`<http://www.example.com>`
are linked automatically to
<http://www.example.com> or <http://www.example.com>.

## Inline link

The link inside of the text has to be enclosed by square brackets `[]` and the
URL and the optional title follow directly afterwards in parens `()`.

### Examples

```md
- [This is an inline-style link](https://www.google.com)
- [This is an inline-style link](https://www.google.com "Google's Homepage")
 with a title.
 Hover your mouse on top of it.
```

- [This is an inline-style link](https://www.google.com)
- [This is an inline-style link](https://www.google.com "Google's Homepage") with a title.
Hover your mouse on top of it.

## Reference link

A reference link is marked by a second set of square brackets with a reference name inside. `[Link to Example][refexample]` is displayed as:

[Link to Example][refexample]

The reference marker has to be repeated anywhere beyond the link, followed by a colon `:`, the URL and an optional title:

`[refexample]: http://www.example.com "Example page"`

This line is never shown, the information is only used to generate the correct reference for the link text above.

[refexample]: http://www.example.com "Universal example page"
