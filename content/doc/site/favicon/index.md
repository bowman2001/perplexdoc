---
authors: [Georg Makowski]
title: Favicon
description: The site icon
subtitle: false
date: 2022-01-30T18:51:37+01:00 
weight: 655
menu:
  doc:
    name: Favicon
    parent: siteelem
    pre: glyphs
resources:
  - src: favicon.svg
    name: favicon
    params:
      size: tiny 
      alt: Favorite icon
categories: [Theme]
tags: [Favicon]
---

The **Favorite Icon** is placed in the HTML `<head>` of every page. Browsers usually show the icon in the tab, the address bar and before bookmarks. It may also get used as an application icon, when the website implements the necessary functionality.
{.p-first} <!--more-->

![Favorite icon of this site](favicon) The favorite icon is needed in many sizes and --- until recently --- in different image formats. There are still many web services, which create all these files from a single raster image. But fortunately, most browsers now support resizable vectorized icons in the SVG format. We can now get away with two files: The SVG and a PNG fallback.

The [real favicon generator](https://realfavicongenerator.net/) for example generates these icon sets from raster and from vector image files for free. This theme is expecting the two files {$favicon.svg} and {$favicon.png} in the folder {$assets/icon}. That should be it.

To use a bunch of already existing raster versions, you need to create the template file `layouts/partials/head/favicon.html` in your project root. It will override the template from the theme, and you can place the HTML referencing your icon images in the traditional way there. The icon folder needs to be placed in the `static` directory. It will be copied by Hugo without further processing to the root of the published folder structure. So it should be easy to get the path right.
