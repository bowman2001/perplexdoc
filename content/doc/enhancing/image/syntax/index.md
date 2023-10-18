---
authors: [Georg Makowski]
title: Enhanced Image Syntax
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

We can preprocess images (rotate, change ratio, and zoom) and have several options for placing them in and around the text. We can add a caption. All this is achieved by additional parameters associated with the image source.
{.p-first}
<!--more-->

There are two different ways to place an image in Markdown — **stand-alone** or **embedded**. The theme styles them differently by default (see [basic syntax](/doc/basic/image)).

CommonMark can handle only 3 parameters. To generate a caption and change the layout etc., the theme offers many additional parameters. There are three ways to associate them with your usual images:

1. Resource parameters

2. Parameters in a data file

3. Query string parameters attached to the file name
{.col2}

Additionally there are diagrams generated from textual descriptions:

4. Codeblock attributes
{.ol-continue}

## Additional parameters

| Parameter | Key | Values |
|:---------|:----------|:---------|
| Alternative text | **alt** | Plain string |
| Attribution | **attr** | Inline Markdown string |
| Attribution link | **attrlink** | URL |
| Caption | **caption** | Inline Markdown string |
| Class | **class** | Additional CSS classes |
| Link | **link** | URL for a linked image |
| Horiz. position | **posh** | _embedded_: {{% parameters imaging.embedded.posh %}} |
| | | _figure_: {{% parameters imaging.figure.posh %}} |
| Vert. position | **posv** | _embedded_: {{% parameters imaging.embedded.posv %}} |
| Link related | **rel** | See [MDN web docs](https://developer.mozilla.org/en-US/docs/Web/HTML/Link_types) |
| Size | size | _embedded_ {{% parameters imaging.embedded.size %}} |
| | | _figure_: {{% parameters imaging.figure.size %}} |
| Link target | **target** | {{% parameters link.target %}} |
| Rotate | **rotate** | |
| Ratio | **ratio** | |
| Zoom | **zoom** | |
{.normal}

In case we use the {$alt} parameter, we can leave the first bracket of the image element empty.

Alternative Text in the first **square brackets** of the Markdown image **overrides** the resource parameter.
{.box-info}

### Resource parameters

```yaml {.right linenos=true linenostart=10}
resources:
- src: image.jpg
  name: newname
  params:
    caption: A placeholder image
    width: tiny
    posh: left
```

We register an image in the front-matter list of resources with its file name or relative path. We add a new internal name and **need to** call it by this new name only `![Placeholder](newname)`. To pass additional parameters we add the optional `params` key. They need to be indented by two additional spaces (or a short tab) relative to `params`.

### Data file parameters

```yaml {.right linenos=true linenostart=1}
src: image.jpg
caption: A placeholder image
width: tiny
posh: left
```

### In-place query string parameters

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

### The value `middle` {.h-p}
for the vertical positioning doesn’t move an embedded image into the middle of the block. It’s only an indicator for the layout to add some additional space on top of images, which are already placed in the middle of a text block.

[^1]: The syntax for **query strings** has been introduced to extend URLs with optional parameters like `https://name.org?id=val&id2=val2`. They are usually generated automatically to specify API requests.

Parameters defined in the front-matter are **overridden** by the **in-place parameters** will override them.
{.box-info}
