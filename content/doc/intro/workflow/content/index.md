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
categories: [Workflow, Theme]
tags: [Hugo]
---

The folder structure is the foundation for the generated website structure. (TODO: Finish)
{.p-first} <!--more-->

## Content organization 

It may take a little while to get your head around Hugo’s content folder structure. To keep the general concept in mind did help me: Hugo establishes a connection between the Markdown input and the generated pages, which is as short as possible.

{{< mnote up=14 >}}
Hugo also offers the possibility to include additional data or to render raw HTML files, but this theme doesn’t utilize this functionality for now.  
{{< /mnote >}}

The content of the root itself {$/} and the folders `doc`, `blog` and `article`. The theme provides layout templates for these page types. Hugo applies the matching template automatically to every content file inside these directories and their subdirectories.

The root `/`
: contains top level pages, which should

`doc`
`blog`
`article`

### Single pages {#single}

We already created a new file [`blog/my-first-post.md`]({{< relref "#first" >}}). This is the simplest way to generate a new page.

#### Leaf Bundle

When we include resources like images into a page, we like to [retrieve them]({{< relref "#resources" >}}) easily. When we need some files only on a specific page, we can create a _leaf bundle_ like this:

```sh {.left}
hugo new blog/my-second-post/index.md
```

The file `index.md` is rendered again as a single page, but now we can move page-specific resources in the folder of the _leaf branch_ and access them directly via their filename.

{{< mnote up=14 >}}
**Subdirectories** are possible. We can build only one single page with a leaf bundle, but there is no limit to the folder structure for resources.
{{< /mnote >}}

#### Blog posts

When the number of blog entries rises, we need some structure. This is achieved with _taxonomies_, and Hugo’s defaults are the usual _categories_ and _tags_. We can use them immediately, the front matter already includes the empty parameter keys:

{{< mnote up=14 >}}
**New Taxonomies** may be defined in the configuration. Please read the corresponding [docs](https://gohugo.io/content-management/taxonomies#configure-taxonomies).
{{< /mnote >}}

```yaml {class="col-left" linenos=true linenostart=5 }
categories:
tags:
```

When we add our taxonomies as a comma separated list inside the empty `[]`, Hugo will generate additional list pages for every taxonomy we introduced.

#### Documentation Pages

A larger documentation site needs a clear hierarchy, a sidebar navigation and a search engine (TODO!), to find pages as quickly as possible. And to read the documentation like a book, we need references to the next and the previous pages and also to . All these navigational elements are build from parameters in the front matter. When we create a new documentation page with

```sh {.left}
hugo new doc/demo/my-first-doc-page.md
```

we start with a front matter, that contains a few more entries than a blog post. The first 5 lines, that we already have seen, are left out:

```yaml {linenos=true linenostart=6 class=col-left}
TODO
---
```

The new parameter _weight_ is of general meaning for the order of all pages, the others are menu entries and are lined up under the `` section and are specifically creating the structure of the doc menu `[menu.doc]`.

`weight`
: lets a page fall deeper in the hierarchy, the higher it gets. Right now our new doc page has an entry at the bottom of the sidebar navigation, take a look.

`name`
: is the title of the menu entry. If the page title is very long, we can provide a short version to avoid a messy menu.

`identifier`
: is an internal name, that lets other pages refer to this one as their `parent`.

`parent`
: If this parameter contains the identifier of another page, the current page is a level beyond its parent in the menu. If there is no parent, the page gets a top level menu entry.

`pre`
: is used very specific by Perplex: It contains the identifier of a _Material Icon_ from _Google_. To change it, please visit their [website](http://fonts.google.com/icons). You can pick any icon there. Select it and copy the identifier from the icon font embedding section (It's usually the icon name written in lower letters and with underscores `_` instead of spaces).
{.dl-loose}

### List pages {#list}

Besides single pages we usually need list pages. They can show an overview of  the content of sections and provide some kind of introduction.

#### Branch Bundle

Because our new page is a demonstration, we like to file it in a special section. We create this demo section as a _branch bundle_ with the following command:

```sh {.left}
hugo new doc/demo/_index.md
```

The small difference between a _leaf bundle_ for a [single page]({{< relref "#single" >}}) and a _branch bundle_ is the leading underscore for the Markdown master file. It's only `index.md` versus `_index.md`. But they have a very different purpose. A folder with a _leaf bundle_ collects material for _one_ page. A _branch bundle_ collects as many pages and may include as many other bundles as we need — there is no technical limit to the depth of folder hierarchy. A branch bundle can act like a chapter, section or subsection.

`_index.md` should contain general content about this section. The page for a _branch bundle_ usually also presents a list of selected content from every page in the branch.

{{< mnote up=11 >}}
**No subdirectories** are accessible to retrieve resources in `_index.md`. All resources specific for the list page generated from `_index.md` at the root of the _branch bundle_ need also to be placed in the branch root. This limitation avoids confusion about the purpose of subfolders.
{{< /mnote >}}

To reflect this relationship in the menu, we need to set `parent = "demo"` in `my-first-doc-page` and Hugo rearranges the page structure and the menu alike.

### Page Bundles

[_Branch bundles_]({{< relref "#branch-bundle" >}}) and [_leaf bundles_]({{< relref "#leaf-bundle" >}}) are both _page bundles_. A _branch bundle_ for a list page may also include page resources.