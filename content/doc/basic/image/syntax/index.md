---
author: Georg Makowski
title: Image Syntax
description: CommonMarks image syntax plus optional resources and in-place query-string
subtitle: false
date: 2023-03-23T10:11:05+01:00 
weight: 152
menu:
  doc:
    name: Syntax
    parent: images
    pre: tag
categories: [markdown]
tags: [image, block]
series: [images]
---

The CommonMark image syntax is short and simple and the theme generates a default layout for both kinds of images. To alter their appearance we need Hugo’s resource feature in the front-matter.
{.p-first}
<!--more-->

## Syntax

Embedding an image is syntactically similar to placing a [link]({{< relref "doc/basic/link" >}}). The sole difference: The image element begins with an exclamation mark`!`.

There are also two versions of CommonMark images: Inline notation & reference notation.

### Inline notation

 ```md
 ![Alternative Text](image.jpg "Optional Title")
 ```

The alternative text inside the square brackets `[]` is used by screen readers, pure text browsers and all kinds of data scrapers.

The optional title is added as the title attribute to the HTML `<img>`.

{{< mnote up=5 >}}
**The title attribute** gets displayed, when a mouse pointer hovers over the element. Consider that many touch-screen devices don't have one. The image title shouldn’t contain essential information, its only a convenience for some users.
{{< /mnote >}}

### Reference notation

We can use a marker in a second pair of squared brackets to separate the image reference:

```md {.left}
![Name][imgref]
```

We have to provide the image reference somewhere else in the same file by repeating the marker followed by a colon and a space before the path:

```md
[imgref]: long/path/to/image.jpg "Optional Title"
```

This syntax is especially convenient, when an image is used more than once. Or when a long path/title would clutter the content.

### Place in the content

CommonMark doesn’t care, where we place an image element. But since version {$0.108} Hugo does! We can use the Markdown image element in two distinctive ways:

#### Stand-alone

```md {.left}
Paragraph before…

![Name][imgref]

Paragraph after…
```

We surround our image element with empty lines and it’s a Markdown block element and gets treated as a figure.

#### Embedded {.clear}

```md {.left}
![Name][imgref] The paragraph 
containing the image
```

We write it in line with our paragraph text–usually at the beginning–and it gets embedded as a float.

### Passing extra parameters

Markdown can’t handle more image parameters than the ones mentioned above. To offer layout variations, Perplex can handle additional parameters with the help of Hugo. All of them can be given as resource meta-data in the front-matter. Alternatively we can change some layout parameters directly in the Markdown by adding parameters to the image name.

#### Resource meta-data {#meta-data}

We can specify the following parameters with the given keys and types of values:

| Parameter | Key | Values |
|:---------|:----------|:---------|
| Alternative text | alt | Plain string |
| Attribution | attr | Inline Markdown string |
| Attribution link | attrlink | URL |
| Caption | caption | Inline Markdown string |
| Class | class | CSS class names |
| Link | link | URL |
| Horiz. position | posh | {{% parameters imaging.embedded.posh %}} |
| Vert. position | posv | {{% parameters imaging.embedded.posv %}} |
| Related | rel | See [MDN web docs](https://developer.mozilla.org/en-US/docs/Web/HTML/Link_types) |
| Size | size | {{% parameters imaging.embedded.size %}} |
| Target | target | {{% parameters link.target %}} |

In case we use the {$alt} parameter, we can leave the first bracket of the img element empty.

#### Text in the first bracket {.h-p .h-info}
alway overrides the resource parameter.

#### Adding parameters in-place

We can use a special syntax to set the few layout parameters, which tend to change more often in the process of content creation. The size and the position of an image can be specified like:

```md
![Alternative text](image.jpg?size=small&posh=right)
```

The start of every name extension is marked by an interrogation mark `?`. Then follows a short parameter key, the equal sign `=` and the parameter value. Consecutive key-value pairs are separated by an ampersand `&`.[^1]

{{< mnote up=17 >}}
The idea to use the well established syntax for query strings goes back to a suggestion by Joe Mooring in the Hugo forum.
{{< /mnote >}}

We can specify a few parameters to a given set of values:

| Parameter | Key | Values |
|:----|:----|:----|
| Size | size (s) | {{% parameters imaging.embedded.size %}} |
| Horiz. position | posh (ph) | {{% parameters imaging.embedded.posh %}} |
| Vert. position | posv (pv) | {{% parameters imaging.embedded.posv %}} |

##### The value `middle`
for the vertical positioning doesn’t move an embedded image into the middle of the block. Its only an indicator for the layout to add some additional space for images, which are already placed in the middle of a text block.

[^1]: The syntax for **query strings** has been introduced to extend URLs with optional parameters like `https://name.org?id=val&id2=val2`. They are usually generated automatically to specify API requests.

##### Overriding resource parameters {.h-info}

When the given parameters are already defined in the resource section of the front-matter, the in-place parameters will override them.
