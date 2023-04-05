---
author: Georg Makowski
title: Content Organization
description: The structure of the {$content} folder
subtitle: false
date: 2022-09-11T14:58:36+02:00 
weight: 40
menu:
  doc:
    name: Contents
    parent: workflow
    pre: create_new_folder
categories: [Getting started]
tags: [Hugo]
---

The folder structure lays the foundation for the website structure. The theme relies on Hugo’s page bundle features.
{.p-first} <!--more-->

It may take a little while to get your head around Hugo’s content structure. It’s helping me to keep Hugo’s general goal in mind: The folder structure and all the files therein are rendered as straightforward and fast as possible. Organizational overhead is avoided — small details matter instead. Efficiency is Hugo’s greatest achievement but also the reason for misunderstandings.

{{< mnote up=14 >}}
Besides Markdown, Hugo also offers to process HTML files, data files, and other formats.  
{{< /mnote >}}

## Folder structure

The content of the root {$/} and the folders {$doc}, {$news}, {$blog}, and {$article} may contain Markdown files and their resources. The theme provides different layout templates for them. Hugo applies the matching templates automatically to every content file inside these directories and their descendants.

{$/}
:contains top-level pages

{$doc}
: contains the documentation and can handle three folder levels deep filled with Markdown files and their resources.

{$news}
: collects short postings like announcements, which are listed in a continuous stream on the top-level news page.

{$blog}
: collects postings, which are accessible through the top-level blog list page.

{$article}
: is meant for longer postings and essays, which are listed as cards on the top-level list page.
{.dl-loose}

## Page structure and organization

Hugo offers **single pages** and **list pages** and Perplex always provides at least templates for these two views of its content types.

Exceptions are top-level pages because they only need a single view. They usually aren’t listed and we need to add them to a top-level menu or reference them manually otherwise.

### Single pages {#single}

You may have already created the new demo file `blog/first.md` while following the example in the section [first content](/doc/intro/workflow/local-server#first). This is the simplest way to generate a new posting without any additional resources.

#### Leaf Bundles {#leaf}

When we include resources like images on a page, we like to [retrieve them](#resources) easily. If we need some files only on a specific page, we create a leaf bundle like this:

```sh {.left}
hugo new blog/second/index.md
```

The file `index.md` is rendered again as a single page under the relative URL {/blog/second/}, but now we can store page-specific resources in its folder and access them by their filename or short relative path.

{{< mnote up=14 >}}
**Subdirectories** are possible. We can build only one single page with a leaf bundle, but there are no constraints for resource folders.
{{< /mnote >}}

#### News and Blog Postings

```yaml {class="right" linenos=true linenostart=5 }
categories: []
tags: []
```

When the number of entries rises, we need some navigation structure for these types. We best provide it by adding **taxonomies**{^\*}. Hugo’s default taxonomies are the usual **categories** and **tags**. Every new front matter already includes the parameter keys and an empty list `[]`.

{{< mnote up=8 star=1 >}}
We can also add sub-folders and modify the URL structure. To provide an optional separate list view for a sub-folder, we also need to create a [branch file `_index.md`](#list) inside. Because taxonomies are the preferred structure for postings in Perplex, links to these additional sections only show up in the breadcrumbs at the bottom of the pages.
{{< /mnote >}}

As soon as we add our taxonomy inside the brackets `[]` or a few of them as a comma-separated list, Hugo generates additional list pages for every taxonomy we introduce. All regular pages on a site with the same taxonomy are shown there.

##### New Taxonomies

may be defined in the configuration. Please read the [Hugo docs](https://gohugo.io/content-management/taxonomies#configure-taxonomies) about them. Including them in the layout needs additional programming.

##### Taxonomies {.h-tip}

apply to our whole site and are completely independent of the folder structure. The number of taxonomies tends to grow with the size of projects. We shouldn’t let them get out of hand. It’s better to use only a small set of general categories and apply only one or maybe two to any page. We can add tags marking aspects of the content, but more than a few of them also get irritating.

#### Sidebar Menu for Documentation Pages

A larger documentation site needs navigation. The theme builds the sidebar from parameters in the front matter. You may have expected a central menu configuration, but this way is much easier. When we create a new documentation page we usually know, where we like to put it in the hierarchy. We create a new doc page like

```sh {.left}
hugo new doc/demo/first.md
```

Now we have a front matter containing a few more entries than a blog post. The first lines are the same and left out here:

```yaml {linenos=true linenostart=6 class=col-left}
TODO
---
```

The new parameter `weight` is of general meaning for the order of all pages on a site, the others are menu entries and are lined up under the `menu:` section and specifically create the structure of the doc menu `[menu.doc]`. 

`weight`
: lets a page fall deeper in the hierarchy, the higher it gets. Right now our new doc page has an entry at the bottom of the sidebar navigation, take a look.

`name`
: is the title of the menu entry. If the page title is very long, we can provide a short version to avoid a messy menu.

`identifier`
: is an internal name, that lets other pages refer to this one as their `parent`.

`parent`
: If this parameter contains the identifier of another page, the current page is a level beyond its parent in the menu. If there is no parent, the page gets a top-level menu entry.

`pre`
: is used very specific by Perplex: It contains the identifier for a **Material Icon** from _Google_. To change it, please visit their [website](http://fonts.google.com/icons). You can pick any icon there and copy the identifier from the icon font embedding section (It's usually the icon name written in lower letters and with underscores `_` instead of spaces).
{.dl-loose}

To place your new page in the coming menu section, you will need to set `parent: demo` in the front matter of {$doc/demo/first.md}. But we aren’t there yet, because we need to create the demo section first. And like every kind of section page in Hugo this will be a list page.

### List pages (branch bundles) {#list}

Besides single pages we obviously need list pages. They show an overview of the sections content and may provide some general introduction. There is only one proper way in Perplex to build them: As a **branch bundle**.

For example: Our first demo page is already placed inside the sub-folder {$demo} and now we like to generate the list view for this section. We create it with the following command:

```sh {.left}
hugo new doc/demo/_index.md
```

We can distinguish the filename {$\_index.md} for the branch bundle only by the leading underscore from the filename {$index.md} for a [leaf bundle](#leaf)! We need to be careful about this, because they have a very different purpose and function. A branch bundle collects as many pages and may include as many other bundles as we need — there is no technical limit to the directory depth. A branch bundle can act like a chapter, section or subsection depending on its place in the folder hierarchy.

After the front matter {\_index.md} may contain general content about its section. Its most important function is to trigger the generation of a specific list view for the content included in this branch.

{{< mnote up=11 >}}
**No subdirectories** are accessible to retrieve resources in `_index.md`. All resources specific for the list also need to be placed at the root of the _branch bundle_. This limitation avoids confusion about the purpose of possible sub-folders.
{{< /mnote >}}

### Page Bundles {#bundles}

[Branch bundles](#list) and [leaf bundles](#leaf) are both called **page bundles**, which share the possibility to store resource files. Other than the page bundles the branch bundles for list pages can’t retrieve their own resources from sub-folders, because these may well contain more page bundles.
