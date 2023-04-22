---
author: Georg Makowski
title: Image Syntax
description: CommonMarks image syntax with optional resources or an in-place query-string
subtitle: false
date: 2023-03-23T10:11:05+01:00 
featured: bigsplash
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

The CommonMark image syntax is short and the theme distinguishes between two possible image positions: **stand-alone** & **embedded**. To alter the appearance we can pass additional parameters to the theme.
{.p-first}
<!--more-->

## Syntax

The CommonMark image element is syntactically very similar to a [link](/doc/basic/link). The sole difference is, that the image element begins with an exclamation mark: `!`. There are also two notations to reference the source: **Inline** or **reference**.

Additionally, the theme makes further distinctions:

- The two possible ways to place an image in Markdown — **stand-alone** or **embedded** — are handled differently.

- **Resource parameters** and a few **in-place parameters** can enhance and change the image layout.

### Notation

#### Inline

 ```md
 ![Alternative Text](image.jpg "Optional Title")
 ```

The alternative text inside the square brackets `[]` is used by screen readers, pure text browsers and all kinds of data scrapers.

The optional title is added as the title attribute to the HTML `<img>`.

{{< mnote up=5 >}}
**The title attribute** gets displayed, when a pointer hovers over the element. Consider that many touch-screen devices don't have one. The image title shouldn’t contain essential information.
{{< /mnote >}}

#### Reference

We can place a marker in a second pair of **squared brackets** to separate the image reference:

```md {.left}
![Name][imgref]
```

We have to provide the image reference somewhere else in the same file by repeating the marker followed by a colon and a space before the path:

```md
[imgref]: long/path/to/image.jpg "Optional Title"
```

### Placement

CommonMark doesn’t care, where we place an image element. But since version {$0.108.0} Hugo does! The two distinctive ways lead to a different layout:

#### Stand-alone

```md {.left}
Paragraph before…

![Name][imgref]

Paragraph after…
```

By surrounding an image element with empty lines it becomes a Markdown block element and gets treated as a figure.

#### Embedded {.clear}

```md {.left}
![Name][imgref] The paragraph 
containing the image
```

When we place an image inside our paragraph text–usually at the beginning–it’s embedded as a float.

### Passing extra parameters

CommonMark can’t handle more image parameters than the ones mentioned above. To generate a caption etc., the theme offers additional parameters. All of them are possible **resource parameters** in the front-matter. A few image layout parameters may also be added directly to the Markdown content by adding **in-place parameters** to the image name.

#### Resource meta-data

```yaml {.right linenos=true linenostart=10}
resources:
- src: image.jpg
  name: img
  params:
    alt: Alternative description
    caption: A placeholder image
    size: tiny
    posh: left
```

We register an image in the list of resources with its file name or relative path. Then, we apply a new internal name and **have to** call it by this new (short) name like `![](img)`. To pass parameters we add the optional `params` key to its resource entry. This key can contain all the available parameters, they need to be indented by two additional spaces relative to `params`.

The following keys and types of values are available:

| Parameter | Key | Values |
|:---------|:----------|:---------|
| Alternative text | alt | Plain string |
| Attribution | attr | Inline Markdown string |
| Attribution link | attrlink | URL |
| Caption | caption | Inline Markdown string |
| Class | class | CSS class names |
| Link | link | URL |
| Horiz. position | posh | _embedded_: {{% parameters imaging.embedded.posh %}} |
| | | _figure_: {{% parameters imaging.figure.posh %}} |
| Vert. position | posv | _embedded_: {{% parameters imaging.embedded.posv %}} |
| Related | rel | See [MDN web docs](https://developer.mozilla.org/en-US/docs/Web/HTML/Link_types) |
| Size | size | _embedded_ {{% parameters imaging.embedded.size %}} |
| | | _figure_: {{% parameters imaging.figure.size %}} |
| Target | target | {{% parameters link.target %}} |

In case we use the {$alt} parameter, we can leave the first bracket of the image element empty.

##### Alternate Text {.h-info}
in the Markdown image overrides the resource parameter.

#### In-place parameters
We can use a special syntax to set a few layout parameters, which tend to change more often in the process of content creation. The size and the position of an image can be specified like:

```md
![Alternative text](image.jpg?s=small&ph=right)
```

The start of every image name extension is marked by an interrogation mark `?`. Then follows a short parameter key, the equal sign `=` and the parameter value. Consecutive key-value pairs are separated by an ampersand `&`.[^1]

We can place only these parameters:

| Parameter | Key | Values |
|:----|:----|:----|
| Size | size (s) | {{% parameters imaging.embedded.size %}} |
| Horiz. position | posh (ph) | {{% parameters imaging.embedded.posh %}} |
| Vert. position | posv (pv) | {{% parameters imaging.embedded.posv %}} |

##### The value `middle`
for the vertical positioning doesn’t move an embedded image into the middle of the block. It’s only an indicator for the layout to add some additional space on top of images, which are already placed in the middle of a text block.

[^1]: The syntax for **query strings** has been introduced to extend URLs with optional parameters like `https://name.org?id=val&id2=val2`. They are usually generated automatically to specify API requests.

##### Overriding resource parameters {.h-info}

When the given parameters are already defined in the resource section of the front-matter, the in-place parameters will override them.
