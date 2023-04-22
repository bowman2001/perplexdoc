---
author: Georg Makowski
title: Resource Organization
description: How to include files like images
subtitle: false
date: 2022-09-11T14:58:46+02:00 
weight: 45
menu:
  doc:
    name: Resources
    parent: workflow 
    pre: collections
categories: [Resources, Getting started]
tags: [Image]
---

This theme expects resources like images as local files. We need to place them in page bundles and register them in the front-matter of the Markdown file. Resource files from parent sections or taxonomies may be re-used conveniently.
{.p-first} <!--more-->

Hugo allows to handle resources in different ways and this theme supports the one which has a lot of support by Hugo out of the box, offers a lot of flexibility and doesn’t rely on external services{^*}.

{{< mnote star=1 >}}
The theme could be extended to work with external providers of course, but this won’t be part of the standard release.
{{< /mnote >}}

## Hugo’s general options {#resources}

There are three ways to store and retrieve resource files (like images):

Page specific
: We can save them in the folder of a page bundle and access them with a short relative path. We then need to register the resources in the front-matter and add additional meta-data. This Hugo feature has one big advantage: Every content structure is self-sufficient and may be re-used in other sites simply by cloning its folder.

Site specific
: We can save them in the {$assets} folder and can use them for every page of our project. The [favorite icon](/doc/site/favicon) is an example for this theme.

Remote
: Resources may also be retrieved via URL or API. The theme can generate [Kroki diagrams](https://kroki.io) via their API.
{.dl-loose}

We can register every file in a page bundle **only once**. And then, we can’t reference it anymore under its original name.

Remote resources may slow down the build considerably, when an external service is not available. 

## Resources for this theme

The theme relies on [page bundles](/doc/intro/workflow/content#bundles) to store page specific resources.

```YAML {.left}
resources:
  - src: original_image_filename.jpg
    name: image
```

A resource needs to be registered as usual by providing its source path and by adding a short name as an identifier label. We can add as many files we like to the list under the `resources` key. Its also possible to add arbitrary meta-data under an additional `params` key. This theme can process a bunch of them for the [CommonMark image element](doc/basic/image/syntax#resource-meta-data).

## Resources from other page bundles

### Problem & Solution

There may be a downside to this approach depending on our specific content structure. In case we want to include a resource more than once, we need to store and register it repeatedly in different page bundles. To overcome this problem, this theme is also looking for resources in taxonomy and parent pages. This also allows to use already registered resources in simple pages, which aren’t bundles themselves.

### Lookup Order

In case a resource is not found in a given page, the theme tries the next related page and so on in the following order:

1. Page
2. First tag of the page
3. First category of the page
4. Parent of the page
5. Parents parent
6. Next parent and so on …
{.col2}
