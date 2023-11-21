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

There are two different ways to place an image in Markdown — **stand-alone** or **embedded**. The theme styles them differently by default (&rightarrow; [basic syntax](/doc/basic/image)).

CommonMark can handle only 3 parameters. To generate a caption and change the layout etc., the theme offers many additional parameters. There are three ways to associate them with your usual images:

1. Page resource parameters

2. Parameters in a data file

3. Query string parameters attached to the name in the Markdown image element
{.col2}

Additionally, there are diagrams generated from textual descriptions:

4. Parameters as additional code block attributes
{.ol-continue}

How to add parameters to page resources in the frontmatter or to global and remote resources in a data file is described in the [introduction to the workflow](/doc/intro/workflow/resources).

Query string parameters are a specialty for the in-place manipulation of images [described below](#query-string-parameters).

Parameters for fenced code blocks are added together with their special attributes (&rightarrow; [code page](/doc/basic/code)).

## Additional image parameters

Preprocessing
`anchor`, `rotate`, `ratio`, `zoom`
: We can manipulate images to some extent:
  
  - Zooming and rotating are self-explanatory. 
  
  - The desired ratio of an image is given as the decimal fraction between the width and the height proportions. For example: {$3:2 = 1.5} .
  
  - When we zoom in or change the ratio the image gets cropped. The selected area of the image is usually determined by a "smart" algorithm (the default setting). To manually choose the area we set the anchor to one of the nine available areas.

Layout 
`attr`, `attrlink`, `caption`, `class`, `posh`, `posv`, `width`
: We can change the size and the place of an image and add a rich caption:

  - The size of an image is determined by its width parameter.

  - The horizontal position can be changed with `posh`. The vertical position parameter `posv` only adds some space for embedded images in the middle of a text block.

  - Besides the caption text, we can also place an attribution with a link in the image caption.

  - In case we want to apply a special styling to an image, we can add a CSS class.

Other properties
`alt`, `link`, `rel`
: We can add alternative text and a link to the image:
  
  - We can use the `alt` parameter to add the mandatory alternative description for an image.
    
    Alternative text in the **first square bracket** of the image element **overrides** this resource parameter.
    {.box-info}
  
  - We can place a link around the image and determine its relation.
{.dl-loose}

The following table lists the possible values for all image parameters:  

| Parameter | Key | Values |
|:---------|:----------|:---------|
| Anchor | **anchor** | {{% mod-img/value "preprocess" "anchor" %}} |
| Alternative text | **alt** | Plain string |
| Attribution | **attr** | Inline Markdown string |
| Attribution link | **attrlink** | URL |
| Caption | **caption** | Inline Markdown string |
| Class | **class** | CSS class |
| Link | **link** | URL for a linked image |
| Horiz. position | **posh** | {{% mod-img/value "embed" "posh" "options" %}} |
| Vert. position | **posv** | _embedded_: {{% mod-img/value "embed" "posv" "options" %}} |
| Link related | **rel** | See [MDN web docs](https://developer.mozilla.org/en-US/docs/Web/HTML/Link_types) |
| Width | **width** | _embedded_: {{% mod-img/value "embed" "width" "options" %}} |
| | | _figure_: {{% mod-img/value "figure" "width" "options" %}} |
| Rotate | **rotate** | {{% mod-img/value "preprocess" "rotate" %}} |
| Ratio | **ratio** | Real number in [0.2, 5.0] |
| Zoom | **zoom** | Real number in [1.0, {{% mod-img/value "preprocess" "zoomMax" %}}] |
{.normal}


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

We register an image in the frontmatter list of resources with its file name or relative path. We add a new internal name and **need to** call it by this new name only `![Placeholder](newname)`. To pass additional parameters we add the optional `params` key. They need to be indented by two additional spaces (or a short tab) relative to `params`.

### Data file parameters

```yaml {.right linenos=true linenostart=1}
src: image.jpg
caption: A placeholder image
width: tiny
posh: left
```

### Query string parameters

We can use a special syntax to set a few layout parameters, which tend to change more often in the process of content creation. The size and the position of an image can be specified like:

```md
![Alternative text](image.jpg?width=small&posh=right)
```

The start of every image name extension is marked by an interrogation mark `?`. Then follows a short parameter key, the equal sign `=` and the parameter value. Consecutive key-value pairs are separated by an ampersand `&`.[^1]

We can use these parameters:

| Parameter | Key | Values |
|:----|:----|:----|
| Width | **width** |  _embedded_: {{% mod-img/value "embed" "width" "options" %}} |
| | | _figure_: {{% mod-img/value "figure" "width" "options" %}} |
| Horiz. position | **posh** | {{% mod-img/value "embed" "posh" "options" %}} |
| Vert. position | **posv** | {{% mod-img/value "embed" "posv" "options" %}} |
| Anchor | **anchor** | {{% mod-img/value "preprocess" "anchor" %}} |
| Rotate | **rotate** | {{% mod-img/value "preprocess" "rotate" %}} |
| Ratio | **ratio** | Real number in [0.2, 5.0] |
| Zoom | **zoom** | Real number in [1.0, {{% mod-img/value "preprocess" "zoomMax" %}}] |

{.normal}

[^1]: The syntax for **query strings** has been originally introduced to extend URLs like `https://name.org?id=val&id2=val2` with parameters for an HTML API.

Parameters defined in the frontmatter are **overridden** by the **in-place parameters** will override them.
{.box-info}
