---
authors: [Georg Makowski]
title: Extended Image Syntax
linktitle: Syntax
description: Move & resize images and add a caption
subtitle: false
date: 2023-03-23T10:11:05+01:00
weight: 303
menu:
  doc:
    name: Syntax
    parent: image
    pre: tag
resources:
  - name: featured
    src: alain-pham-P_qvsF7Yodw-unsplash.jpg
    params:
      alt: bridge structure
categories: [markdown]
tags: [image, block]
series: [images]
---

To alter the appearance we can pass additional parameters.
{.p-first}
<!--more-->

## Syntax

Additionally, this theme offers two great options:

1. The two different ways to place an image in Markdown — **stand-alone** or **embedded** — are styled differently.

2. **Resource parameters** and a few **in-place parameters** can enhance and change the image layout.


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

We register an image in the list of resources with its file name or relative path. Then, we apply a new internal name and **have to** call it by this new name like `![](img)`. To pass parameters we add the optional `params` key to its resource entry. This key can contain all the available parameters, they need to be indented by two additional spaces relative to `params`.

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
{.normal}

In case we use the {$alt} parameter, we can leave the first bracket of the image element empty.

Alternative Text in the first **square brackets** of the Markdown image **overrides** the resource parameter.
{.box-info}

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

Parameters defined in the front-matter are **overridden** by the **in-place parameters** will override them.
{.box-info}
