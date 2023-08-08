---
authors: [Georg Makowski]
date: "2021-03-25T10:41:36+01:00"
description: Include photos, graphics etc.
menu:
  doc:
    name: Image
    parent: basic
    pre: photo
subtitle: false
title: Image
categories: [markdown]
tags: [image]
weight: 150
---

The CommonMark image syntax is simple and the theme additionally distinguishes between two possible image positions: **stand-alone** & **embedded**.
{.p-first} <!--more-->

## Syntax

The CommonMark image element is syntactically very similar to a [link](/doc/basic/link). The only difference is, that the image element begins with an exclamation mark: `!`. 

There are also two notations to reference the source: Directly **inline** or with an additional **reference**.

### Notation

#### Inline

 ```md
 ![Alternative Text](image.jpg "Optional Title")
 ```

The alternative text inside the square brackets `[]` is used by screen readers, pure text browsers, and all kinds of data scrapers.

The optional title becomes the title attribute in the `<img>` tag.

{{< mnote up=5 >}}
**The title **attribute** gets displayed only when a pointer hovers over the element. Many touch-screen devices don't have one. An image title shouldn’t contain essential information.
{{< /mnote >}}

#### Reference

We can place a marker in a second pair of **squared brackets** to separate the image reference:

```md {.left-in}
![Name][imgref]
```

We have to provide the image reference somewhere else in the same file by repeating the marker followed by a colon and a space before the path:

```md
[imgref]: long/path/to/image.jpg "Optional Title"
```

### Placement

CommonMark doesn’t care, where we place an image element. But since version {$0.108.0} Hugo does! The two distinctive ways lead to a different layout:

#### Stand-alone

```md {.left-in}
Paragraph before…

![Name][imgref]

Paragraph after…
```

By surrounding an image element with empty lines it becomes a Markdown block element and gets treated as a figure.

#### Embedded {.clear}

```md {.left-in}
![Name][imgref] The paragraph 
containing the image
```

When we place an image inside our paragraph text–usually at the beginning–it’s embedded as a float.

## Layout

### Stand-alone

The default for the usual stand-alone CommonnMark image element is the normal size and occupies the main text width as usual in most web layouts.

![Placeholder image](fig/normal.svg)

{{% pangram 3 %}}
{.placeholder data-pagefind-ignore="all"}

### Embedded

