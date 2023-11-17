---
authors: [Georg Makowski]
title: Hugo Module{/}for rendering images
linktitle: Image module
description: Retrieve, preprocess and render all kinds of images
date: 2023-10-11T15:57:57+02:00
resources:
  - src: alvin-lenin-gy0IAx6KXSg-unsplash.jpg
    name: featured
    params: 
      alt: long pier leading to a house in the sea    
categories: [module]
tags: [image]
draft: true
---

Hugo includes many powerful methods for the image processing pipeline. This module offers theme developers and their users a way to apply them consistently.
{.p-first}
<!--more-->

The module can process many parameters to control all stages of Hugo’s imaging pipeline. The possible values for some of these parameters need to be configured by template developers. Given a proper configuration the module offers their users very versatile render hooks to retrieve (or create) all kinds of images, preprocess them, and apply all configured layout classes.

Theme developers can also use the partials for the different processing steps to assemble their layout elements.

## Retrieving images

Image resources for Hugo may be stored locally (in page bundles), globally (in the {$assets} folder), or on a remote server accessible via HTTP. We can associate meta-data not only with local files (as Hugo already offers natively) but also with global and remote ones in local data files (See the [introduction for resources](/doc/intro/workflow/resources)).

## Preprocessing

We can resize, zoom in, and rotate raster images with the three resource parameters {$ratio}, {$zoom}, and {$rotate} before they are transformed into source sets.

## Including and offering layout classes

Developers may incorporate all their available classes for images to be applied with this module. Specified width classes for figures and embedded images are the minimum configuration this module needs to function. Optional are shadows, frames, backgrounds ... you name it.

{{< mnote up=8 >}}Suggestions for missing layout parameters developers would like to include are welcome.{{< /mnote >}}

## Transforming into optimal formats

Raster images
: The formats JPEG, PNG, and BMP are converted to WEBP source sets by default, optionally preserving the alpha channel of PNG. The specific sizes of your source sets, fallback images and placeholders are calculated by the module. It is sufficient to configure the possible minimal and maximal width for every available image class. One single configuration parameter for the size factor between subsequent images in your sets determines your desired balance between saving server storage space and reducing the amount of necessary bandwidth to view your pages.

Vector graphics
: Small SVG images are automatically embedded inline into HTML pages. The maximum size for inline embedding is configurable.

GIF
: Images in this format are not transformed and are included as they come by default. GIFs may contain an animated image set and Hugo can not discriminate between simple GIFs and animated ones. If you want to transform a simple GIF into a WEBP source set like the usual formats you need to set the parameter `process: run`. Animations do **not survive** the transformation, only the first image of an animation sequence is used.  

## Avoiding layout shifts

All raster images and their optional placeholders are placed in matching containers with a pre-calculated fixed ratio. When developers need a specific ratio (in cards for example) they can enforce a suitable resizing in their templates.

## Delivering optimal sizes to viewers

[Lazysizes]() calculates the near-optimal image size for every browser viewport width and repeats this process automatically in case it changes (when a viewer changes the zoom setting of its browser for example).

## Smooth loading 

### Source sets of raster images

Very small images like author portraits or avatars may be embedded into the generated HTML with the parameter `base64: run`. The maximum size for these embedded base64-encoded strings is configurable. When the encoded string is too long the image is loaded in the default way.

The loading process starts by default with an CSS-gradient between the two primary colors of an image. The alternative is a small **L**ow **Q**uality **I**mage **P**laceholder (LQIP) which is generated when the parameter `lqip: run` is set for specific images. Lazysizes replaces both placeholders with a near-optimal version of the original image as soon as the image tag comes into view. In case the LQIP itself is too large for embedding (max size configurable) a three stage loading process is applied. At first the image container shows the mentioned gradient, then Lazysizes loads the small LQIP as soon as the image comes into view and switches again to the optimal large image the moment it’s available.
{.inline}

{{< mnote >}}To study the loading processes with more detail you can throttle your network in the developer-environment of your desktop-browser.{{< /mnote >}}

### Original images or SVGs

Images which haven’t been transformed are loaded lazily with the usual browser-native attribute.