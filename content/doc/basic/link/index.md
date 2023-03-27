---
author: Georg Makowski
date: "2021-03-23T22:11:38+01:00"
description: All types of references to a URL in our text
menu:
  doc:
    name: Links
    parent: basic
    pre: link
title: Links
categories: [Markdown]
tags: [Inline]
resources: 
  - name: featured
    src: edge2edge-media-t1OalCBUYRc-unsplash.jpg
    params:
      alt: A few chain links
weight: 145
---

Internet references or short “links” are the binding fabric of the web. Markdown encourages their use by providing a bunch of simple markup options.
{.p-first} <!--more-->

Irrespective of the way we write our text links, their layout looks the same. Perplex distinguishes only between **internal links** to our own website and **external links** to others by applying a different color for their decoration.

## Syntax

The easiest way to create a link is to write an URL (**U**niform **R**esource **L**ocator) directly into the text and let it be handled **automatically**. Sometimes we may want to explicitly show an URL like this, but often we prefer to **name** them. To achieve this, we need to connect the name with the reference.

### Automatic links from URLs

CommonMark transforms **marked** URLs into full HTML references. With the **linkify** extension we can even omit the marks and write raw URLs.

#### Marked links

CommonMark URLs need to be enclosed in angle brackets `<>` like `<http://www.example.com>` and are rendered into <http://www.example.com>.

#### Raw URLs {#linkify}

Every URL starting with `http://` or `https://` is automatically transformed into a link by the **linkify** extension. If you want to stop this default behavior, you can set `linkify` to `false` in the [configuration](/doc/appendix/config/markup#9).  

### Named links

There are two ways to turn a phrase or word into a link. We can include them **inline** within the text, which is convenient but bloats the text especially in case of long URLs. The alternative is to write the URL into a separate **reference** like a footnote.

#### Inline link

The link inside of the text has to be enclosed by square brackets `[]` and the
URL and the optional title follow directly afterwards in parens `()`. Like this:

```md
1. This is an [inline-style link](https://www.google.com)

2. This is an [inline-style link](https://www.google.com "Google's Homepage")
   with a title. Hover your mouse over it.
{.col2}
```

And the resulting links look like this:

1. This is an [inline-style link](https://www.google.com)

2. This is an [inline-style link](https://www.google.com "Google's Homepage") with a title. Hover your mouse over it.
{.col2 .box}

{{< mnote up=10 >}}
The tooltip is a nice feature, but because we can’t hover with the mouse over elements on a touch screen they won’t be available there.
{{< /mnote >}}

#### Reference link

A reference link is marked by a second set of square brackets with a short reference name inside. `[Link to Example][ref]` is again displayed as [Link to Example][ref] when we repeat the reference marker somewhere else in the file, followed by a colon `:`, the URL and an optional title:

```md
[ref]: http://www.example.com "Example page"
```

This line is never shown, the URL and the title are just used as attributes of the link element.

[ref]: http://www.example.com "Example page"
