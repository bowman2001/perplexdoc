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

There is only one Markdown image element but the theme distinguishes between two possible positions: **stand-alone** & **embedded**.
{.p-first} <!--more-->

This is the introduction to the basic syntax and its default layout. You can [enhance the image layout](doc/enhancing/image) in many ways with this theme. 

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
{.inline}

{{< mnote >}}
**The title attribute** only shows up when a pointer hovers over the element. Many touch-screen devices don't have one. An image title shouldn’t contain essential information.
{{< /mnote >}}

#### Reference

We can place a marker in a second pair of **squared brackets** to separate the image reference:

```md {.left-in}
![Description][imgref]
```

We have to provide the image reference somewhere else in the same file by repeating the marker followed by a colon and a space before the path:

```md
[imgref]: long/path/to/image.jpg "Optional Title"
```

### Two possible positions

These two distinctive ways to place an image inside Markdown lead to a different layout:

#### Stand-alone

```md {.left-in}
Paragraph before…

![Description](image.jpg)

Paragraph after…
```

By surrounding an image element with empty lines it becomes a Markdown block element and gets treated as a figure.

#### Embedded {.clear}

```md {.left-in}
![Description](image.jpg) The 
paragraph containing the image
```

When we place an image inside our paragraph text it gets embedded as a float.

## Layout

### Stand-alone

The default for stand-alone images is the text width:

![Placeholder image](svg/text.svg)

{{% pangram 3 %}}
{.placeholder data-pagefind-ignore="all"}

### Embedded

The default for embedded images is the small width:

![Placeholder image](svg/small.svg) {{% pangram 13 %}}
{.placeholder data-pagefind-ignore="all"}

