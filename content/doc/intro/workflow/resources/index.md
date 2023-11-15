---
authors: [Georg Makowski]
title: Resource Organization
description: How to provide files for your content
subtitle: false
date: 2022-09-11T14:58:46+02:00 
weight: 45
menu:
  doc:
    name: Resources
    parent: workflow 
    pre: photo_library
resources:
  - src: alexander-grey-tn57JI3CewI-unsplash.jpg
    name: files
    params:
      alt: A pile of files
      ratio: 1.5
      zoom: 1.75
      caption: This is the same image as the featured one. But the image has been cropped to the ratio of 3:2 and zoomed in with a factor of 1.75.
categories: [getting started]
tags: [resources, image]
---

This theme processes resources (like images) from all kinds of places: Local, global, or remote. However, associated meta-data specifying the processing and layout options usually need to be set locally.
{.p-first} <!--more-->

Hugo offers three general ways to access resources:

Page specific (local)
: We can store files in the same folder as the Markdown content and include them with a minimal relative path. We have to register these resources in the frontmatter if we need additional parameters to manipulate them.

    This native Hugo concept has one big advantage: The content is self-sufficient and may be reused in other sites simply by cloning the complete folder with the Markdown content and its resources.
    {.box-info}

Site-wide (global)
: We can store them in the {$assets} folder and use them everywhere. The [favorite icon](/doc/site/favicon) in the base template of a site is an example of this use case. Global storage can also be a good choice for repeatedly needed material in our Markdown content.

Remote
: Resources may be retrieved via URL or API. The provider could be a separate image server or a more complex service. Hugo stores the data from a remote server in a local cache to avoid repeated requests.

    Remote resources may slow down a build considerably when an external service is (temporarily) not available. 
    {.box-warn}
{.dl-loose}

## Page-specific local resources

When we place our Markdown content file in a separate folder we automatically create a [page bundle](/doc/intro/workflow/content#bundles) and can store resource files in the same folder (and subfolders). We can include those files with their relative path directly in our content.

We can also register them in the frontmatter under a new name in a special list under the `resources` key:

```YAML {.left-in linenos=true}
resources:
  - src: image_filename.jpg
    name: image
```

This is an example of a minimal entry in the resources list. The dash marks the beginning of the list entry followed by the source path and the new name. There are two important rules:

1. We can register every file in a page bundle **only once**.

2. We cannot include a resource file under its original name anymore.
{.col2}

The advantage we get from this simple entry is the short identifier instead of the long filename. This is the usual way to specify a **featured image**: Copy the file into the page bundle and name it `featured`. 

Registered resources offer much more possibilities with their optional `params` section for additional parameters:

```YAML {.inline linenos=true}
resources:
  - src: alexander-grey-tn57JI3CewI-unsplash.jpg
    name: files
    params:
      alt: A pile of files
      ratio: 1.5
      zoom: 1.75
      caption: This is the same image as the featured one. 
      But the image has been cropped to the ratio of 3:2 
      and zoomed in with a factor of 1.75.
```

The theme can process a bunch of them for the [CommonMark image element](doc/enhancing/image/syntax#resource-meta-data). 

![](files)



## Resources from related page bundles

There may be a downside to local resources depending on our specific content structure.

### Problem & Solution

In case we want to include a resource more than once, we need to store and register it repeatedly in different page bundles. To overcome this problem, this theme is also looking for resources in taxonomy and parent pages. This also allows to use of already registered resources in simple pages, which aren’t bundles themselves.

### Lookup Order

In case a resource is not found for the current page, the theme searches related pages in the following order:

1. Tags of the page
2. Category of the page
3. Parent of the page
4. Parents parent …
{.col2}
