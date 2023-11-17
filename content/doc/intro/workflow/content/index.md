---
authors: [Georg Makowski]
title: Content Organization & Navigation
linktitle: Content & Nav
description: The structure of the {$content} folder
subtitle: false
date: 2022-09-11T14:58:36+02:00 
weight: 40
menu:
  doc:
    name: Content & Navigation
    parent: workflow
    pre: create_new_folder
categories: [getting started]
tags: [hugo]
---

The {$content} folder structure of our Hugo project lays the foundation for the website (URL) structure. Taxonomies and menu entries in the frontmatter allow the theme to systematically create navigational links.
{.p-first} <!--more-->

It may take a little while to get your head around Hugo’s content structure. It’s helping me to keep Hugo’s general goal in mind: The folder structure and all the files therein are rendered as straightforwardly as possible. Organizational overhead is avoided — small details matter instead.
{.inline}

{{< mnote >}}
**By the way:** This theme is primarily focused on Markdown content but Hugo also offers to process some other markup formats, hand-crafted HTML content, and static data structures.
{{< /mnote >}}

## Folder structure

When the project root and the folders {$doc}, {$news}, {$blog}, and {$article} contain Markdown files (and resources), their content is rendered with specific layout templates.  

{$/}  {s (project root)}
: is for top-level pages.

{$doc}
: contains the documentation and can handle three folder levels deep filled with Markdown files and their resources. The individual pages are accessible via section pages and the sidebar menu.

{$news}
: these short postings are listed in a paginated stream on the top-level news page regardless of the subfolder structure.

{$blog}
: blog postings are accessible through cards shown on the top-level blog list page.

{$article}
: contains longer postings which are accessible through cards on the top-level article list page.
{.dl-loose}

## Page structure and organization

Hugo offers **single pages** and **list pages** and Perplex always provides templates for these two views for every type of content.
{.inline}

{{< mnote >}}
**Top-level pages** are an exception because they are usually not listed systematically. We add them manually to a top-level menu or reference them in a link.
{{< /mnote >}}

### Single pages

You may have already created the new demo file {$content/blog/first.md} while following the example in the section [first content](/doc/intro/workflow/local-server#your-first-content). This is the simplest way to generate a new posting without any additional resources.

#### Leaf Bundles

When we include resources like images on a page, we like to [retrieve them](resources) easily. If we need some files only on a specific page, we create a leaf bundle like this:

```sh {.left-in}
hugo new blog/second
```

We now have created the file {$content/blog/second/index.md} which is rendered again as a single page under the relative URL {$/blog/second/}. Now we can store page-specific resources in its folder and access them by their filename or short relative path.

{{< mnote up=14 >}}
**Subdirectories** are possible. We can build only one single page with a leaf bundle, but there are no constraints for resource folders.
{{< /mnote >}}

#### Postings in the news, blog, or article sections

```yaml {class="right" linenos=true linenostart=5 }
categories: []
tags: []
```

When the number of entries rises, we need some navigation and can provide it by adding **taxonomies**. Hugo’s default taxonomies are the usual **categories** and **tags**. Every new frontmatter already includes these keys and an empty list `[]` to be filled with comma-separated values.

{{< mnote star=1 >}}
We can also add **sub-folders** in the posting sections but they only modify the URL tree.
{{< /mnote >}}

When we add taxonomies Hugo generates additional list pages for all regular pages with the same taxonomy.

##### Taxonomies

apply to our whole site and are completely independent of the folder structure. The number of taxonomies tends to grow with the size of projects. We shouldn’t let them get out of hand. I recommend using only one or maybe two general categories per page. We can add tags marking aspects of the content, but much more than a handful also tends to confuse users instead of guiding them.

##### New Taxonomies

can be defined easily in the site configuration. Please read the [Hugo docs](https://gohugo.io/content-management/taxonomies#configure-taxonomies) about them. Including new taxonomies in the site layout needs additional template programming.

#### Documentation Pages

We create a new documentation page with a command like

```sh {.left-in}
hugo new doc/demo/first.md
```

Now we have the new file in {$content/doc/demo/first.md} with a frontmatter containing a few more entries than a simple posting.

{{< mnote up=5 >}}We can also create a documentation leaf bundle with something like `hugo new doc/demo/second`.{{< /mnote >}}

These are the new lines:

```yaml {linenos=true linenostart=6 .left-in}
menu:
  doc:
    identifier: first 
    name: First
    parent: 
    pre: remove
weight: 9999
```

We have a new `menu` section that specifically targets the menu called `doc` with four special menu parameters. The theme builds the documentation sidebar from these parameters.

{{< mnote up=5 >}}You may have expected a central menu configuration, but this way is much easier. When we create a new documentation page we usually know, where we like to put in the menu order.{{< /mnote >}}

There is this one other new parameter called `weight` which controls the place of the page in the section hierarchy.
More specifically:

`name`
: is the title of the menu entry. If the page title is very long, we can provide a short version to avoid a messy menu.

`identifier`
: is an internal name, that lets other pages refer to this one as their `parent`. It is only relevant for sections (list pages) and we should simply delete it for ordinary content pages.

`parent`
: If this parameter contains the identifier of another page, the current page is placed a level beyond its parent in the sidebar menu. If there is no parent, the page gets a top-level menu entry.

`pre`
: is used very specific by this theme: It contains the identifier for a **Material Icon** from _Google_. Visit their [website](http://fonts.google.com/icons) to find a suitable one. You can pick any icon there and copy the identifier from the icon font embedding section (It's usually the icon name written in lower letters and with underscores `_` instead of spaces).

`weight`
: lets a page fall deeper in the hierarchy of the section, the higher it gets. Right now our new doc page has an entry at the bottom of the sidebar navigation because its weight is very high — take a look.
{.dl-loose}

To place this new page under the demo section in the menu, you will need to set `parent: demo` in the frontmatter.

##### Taxonomies

To connect our documentation site-wide with other sections (news, blog, or articles) we can also add taxonomies to our doc pages. This allows to reference them there as related content. 

### List pages (branch bundles) {#branch-bundles}

In this step, we create a page for a new sub-section in the demo section. And like every kind of section page in Hugo this is a list page.

List pages present an overview of the section's content and provide some general introduction as their own content. Their templates are used for **branch bundles**.

We create a new sub-section in the demo section with the following command:

```sh {.left-in}
hugo new doc/demo/subsec/_index.md
```

We can distinguish the content filename {$\_index.md} for the branch bundle only by the leading underscore from the content filename {$index.md} for a [leaf bundle](#leaf-bundles)! We need to be especially careful about this because they have a very different purpose and function. A branch bundle contains as many pages and may include as many other bundles as we need — and there is also no technical limit to the depth of the folder levels. A branch bundle can act like a chapter, section or subsection depending on its place in the folder hierarchy.

{$\_index.md} may contain general content about its section as an introduction but its essential function is to generate a specific list view for the content included in its branch.

{{< mnote up=11 >}}
**Subdirectories** are accessible to retrieve resources for `_index.md`. Because any subdirectory could contain another bundle we should use distinguishable names for pure resource directories to avoid confusion.
{{< /mnote >}}

#### Taxonomy pages

Taxonomy pages are generated automatically for every category and tag in our frontmatter. These pages are always list pages and contain cards with a preview of all the pages of the given taxonomy.

It’s possible and can be especially useful with this theme to create an explicit branch bundle for your taxonomies with a command like

```sh {.left-in}
hugo new tags/demo
```

and get {$tags/demo/_index.md} with a short frontmatter section.

Now we can add a special featured image (&rightarrow; [see resources](doc/intro/workflow/resources)) and a taxonomy description for the title. We can reuse this featured image on all pages with this taxonomy if we are too lazy to give them their own featured image. Special Markdown content for taxonomies is unnecessary and probably confusing. We don’t expect further explanations on a taxonomy page.

#### Author pages

Author pages are handled like taxonomies (and technically they simply are taxonomies). Every author in the frontmatter gets her or his own page automatically. To fill it with personal information we use a command like

```sh {.left-in}
hugo new authors/demo-author
```

to create {$/authors/demo-author/_index.md}.

The frontmatter offers authors a few additional parameters which are documented on the [page about the author template](/doc/site/authors).

### Page Bundles {#bundles}

[Branch bundles](#branch-bundles) and [leaf bundles](#leaf-bundles) are both called **page bundles**, which share the possibility to store resource files. Besides that, they are very different as described on this page.
