---
title: Favicon
description: Page description placeholder
subtitle: false
date: 2022-01-30T18:51:37+01:00 
weight: 999
image:
  featured: 
menu:
  doc:
    name: Favicon
    parent: special
    pre: remove
draft: true
---

The *Favorite Icon* is placed in the `<head>` containing the meta-data of a web page. Browsers usually show the icon in the tab, the address bar and before bookmarks.
{.p-lead} <!--more-->

![favicon](icon/favicon.svg) The favorite icon is needed in many sizes and until recently in different image formats. There are many free web services to help create them from a single file. Fortunately most browsers now support vectorized icons in the SVG format. We can get away with two files: The SVG and a PNG fallback. The [real favicon generator](https://realfavicongenerator.net/) is able to produce icon sets from raster and from vector image files.  
{.i-tiny}

To use raster versions of your icon, you need to create the template file   `layouts/partials/head/favicon.html` in your project root. It will override the template from the theme, and you can place the HTML referencing your icon images there. The icon folder needs to be placed in the `static` directory and will be copied directly to the root of the published folder structure.   
