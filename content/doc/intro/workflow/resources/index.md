---
author: Georg Makowski
title: Resource Organization
description: How to include additional material like images
subtitle: false
date: 2022-09-11T14:58:46+02:00 
weight: 45
menu:
  doc:
    name: Resources
    parent: workflow 
    pre: collections
categories: [Resources]
tags: [Hugo]
---

This theme expects local resources. All additional files like images need to be placed in page bundles. Page resources from parent sections or taxonomies can be re-used conveniently.
{.p-first} <!--more-->

## Hugo’s options {#resources}

There are generally three options to store and retrieve resource files (like images):

Page specific
: We can save them in the folder of a page bundle and access them with a short relative path. We can register the resources in the front-matter and add additional meta-data. This Hugo feature has one big advantage: Every content page is self-sufficient and may be re-used in other sites simply by cloning its folder.

Site specific
: We can save them in the {$assets} folder and can use them for every page of our project. The [favorite icon]({{< relref "doc/site/favicon" >}}) is a typical case. Hugo doesn’t offer a native data structure to add meta-data to assets, but its possible to build them.

Remote
: Resources may also be retrieved via URL or API. This powerful feature has been introduced recently.
{.dl-loose}

## Resources for this theme

Perplex relies exclusively on [page bundles](/doc/intro/workflow/content#bundles) to store page specific resources.

```YAML {.left}
resources:
  - src: original_image_filename.jpg
    name: image
```

A resource is registered as usual for Hugo by providing its source path and adding a name. We can add as many files we like this way to the list under the `resources` key. Its also possible to add arbitrary meta-data under an additional `params` key. This theme processes a bunch of them for the [CommonMark image element](/doc/basic/image#meta-data).  


### Resources from other page bundles

There may be also a downside depending on content structure. In case we want to include a resource more than once, we need to store it repeatedly. To overcome this problem at least partially, this theme is also looking for resources in taxonomy and parent pages, when they are not included in a given page bundle.

#### Lookup order

In case a resource is not found in a given page bundle, the theme tries the next related page and so on in the following order:

1. Page
2. First tag of the page
3. First category of the page
4. Parent of the page
5. Parents parent
6. Next parent and so on …
{.col2}