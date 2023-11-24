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
tags: [resources, image, workflow]
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

Registered resources offer many more possibilities with their optional `params` section for additional parameters:

```YAML {.inline linenos=true}
resources:
  - src: alexander-grey-tn57JI3CewI-unsplash.jpg
    name: files
    params:
      alt: A pile of files
      ratio: 1.5
      zoom: 1.75
      caption: This is the same image as the featured one. But the image has 
been cropped to the ratio of 3:2 and zoomed in with a factor of 1.75.
```

The theme can process a bunch of them for all [Markdown images](doc/enhancing/image/syntax#resource-meta-data).

![](files)

## Site-wide (global) resources

We can include these files directly with their path relative to the {$assets} folder.

In case we need to store them elsewhere in folders (local or remote), we can let [Hugo mount](https://gohugo.io/hugo-modules/configuration/#module-configuration-mounts) these into {$assets}.

## Remote resources

We can include a remote resource directly with its absolute URL.

## Global and remote resources with additional parameters

To associate global files with extra parameters we need to create a local data file (YAML, TOML, or JSON) with our global or remote resource as `src` and add the other parameters. Then we reference this data file as if it would be the resource.

`![Global image](global.yaml)` for example generates an image referenced in the data file {$global.yaml}:

```yaml
src: img/tiger/alicia-chong-jYM-AV5RRag-unsplash.jpg
caption: This tiger is stored in the {$assets} folder. The attribution here is 
extracted from the filename, but we can also add one manually.
```

![Global tiger](global.yaml)

## Fallback: resources from related page bundles

There is also the option to reuse local page resources from related pages as a fallback.

If a resource can’t be found elsewhere this theme is also looking for resources in related taxonomy and parent pages. This also allows to use of already registered resources in simple pages, which aren’t bundles themselves.

The fallback search happens in the following **lookup order**:

1. Tags of the page
2. Categories of the page
3. Parent of the page
4. Parents parent …
{.col2}

If there are more resources with the same name (like "featured") on a related type of page, then the first match wins.

This approach is convenient for this project and the theme default. But in case you want to use some other kind of fallback or none at all, you can overwrite the partial {$mod-resource/func/helper/page-fallback.html} in your project folder {$layouts/partials}.
