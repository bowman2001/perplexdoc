---
author: Georg Makowski
date: "2021-09-07T21:43:30+02:00"
description: The fastest static site engine
featImg: img/Logo_of_Hugo_the_static_website_generator.svg
menu:
  doc:
    name: Hugo
    parent: intro
    pre: engineering
subtitle: false
title: Hugo
weight: 15
---

The world’s fastest _**S**tatic **S**ite **G**enerator (SSG)_ is steadily gaining traction. _Hugo_ provides a reliable production environment and allows to build fast and secure websites.
{.p-lead} <!--more-->

[_Hugo_](https://gohugo.io) is a command line tool for _macOS_, _Windows_, _Linux_ and _BSD_ derivatives. Binaries for most operating systems and some containers are usually available within a day or a few after every release.

{{< sidenote up=11 >}}
The [Hugo source](https://github.com/gohugoio/hugo) can be compiled on every machine with a recent [Go environment](https://go.dev).
{{< /sidenote >}}

## Getting started

The [Hugo documentation site][hugodoc] addresses developers mostly and offers detailed information. With this theme only a small amount of it is necessary to produce a professional static website.

### Install Hugo

Please read the [installation instructions](https://gohugo.io/getting-started/installing/) for your operating system on the documentation site. _Perplex_ works with any recent version.

### Use Perplex

When you are just getting acquainted with _Hugo_ and _Markdown_ or when you are curious about the source for this site, you can download this documentation project as an example. It’s available on [_GitHub_]({{< param sourceURL >}}) and ships with all the files for the documentation and a few examples for blog postings and simple pages.

#### The documentation project

The folders for the project site contain only a minimal set of standard _Hugo_ folders.

```sh {.right .lh15 .hide-mobile}
├── assets
├── config
└── content
```

`assets`
: contains site wide resources.

`config`
: contains the configuration files for this project.

`content`
: contains all the _Markdown_ files and page specific resources like images.
{.dl-loose}

The additional `_vendor` folder includes a local copy of the [_Perplex_ theme]({{< param themeURL >}}).

#### Start from scratch

We create an empty new project with a command like

```sh {.left}
hugo new site mysite
```

It creates the directory `mysite` and the full standard folder structure.

```sh {.right .lh15 .up-8}
├── archetypes
├── assets
├── config
├── content
├── layout
├── static
└── themes
```

When we use a _Hugo_ theme, it ships with _archetypes_ and _layout_ templates and the correspondent folders in the project root are only meant for modified templates, which may override the ones from the theme.

The _themes_ folder can hold as many themes as we like and there are three ways to retrieve a public theme from a _Git_ repository provider:

1. Download and unzip its compressed file package in the `themes` folder. This is the fastest way and the best option for a try-out.

2. Clone it with [_Git_](https://git-scm.com/) into the `themes` folder. If you already are using _Git_ for your project, you probably should clone every theme as a submodule. This is also the best workflow to contribute to the development of a _Hugo_ theme.  

3. Import the _Perplex_ repository as a Hugo module. You need to have a recent [Go environment](https://go.dev) – _Hugo_ modules rely on _Go_ modules. The Hugo docs provide a [guide to this powerful feature](https://gohugo.io/hugo-modules). Once set up, _Hugo modules_ are the easiest way to update themes or other external components of your _Hugo_ configuration. There is an example for the configuration in the file [`module.yaml`]({{< relref "moduleyaml.md" >}}), because this project imports the theme as a module.

{{< sidenote up=20 >}}
**This project** doesn’t need a _Go environment_, because it has a local copy (`_vendor`). But if you want to update the theme, you need to install _Go_ and apply the `hugo mod ...` commands.
{{< /sidenote >}}

When you chose option 1. or 2., you need to tell Hugo to use the theme in the [config file]({{< relref "configyaml.md#6" >}}). With the module you don’t.

## Run Hugo locally {#server-mode}

While working on a web project, we often like to constantly watch the resulting pages. To render and serve an instant local preview, we can run hugo in _server mode_. A command like the following in the root of the Hugo project starts the server:

```sh
hugo server -D --minify --navigateToChanged
```

{{< sidenote up=5 >}}
**Hugo’s server** can also show a private preview on the web under a configured URL. But it's **by no means** a full-fledged web server.
{{< /sidenote >}}

The pages are rendered into the computer memory and the site is served under <http://localhost:1313>.

- The flag `-D` lets _Hugo_ include _drafted_ files. All files created with `hugo new` are usually configured as drafts, using `draft = true` in the front-matter. When a Markdown file is ready for publishing, we need to remove this entry or change it to `draft = false`.

- The flag `--minify` tells _Hugo_ to remove unnecessary whitespace from the resulting code.

- The flag `--navigateToChanged` tells the server to automatically relay the page from the last edited file to the browser.

### Adding the first Content {#first}

To generate new Markdown files inside the `content` folder, we use a command like

```sh {.left}
hugo new blog/my-first-post.md
```

The new file resides in the folder `content/blog/`. It contains a front matter section with reasonable entries or placeholders to start with.

`title` and `date` are mandatory, a `description` is strongly recommended for _Perplex_ as it is for many other themes.

```yaml {class="col-left" linenos=true}
+++
title = "My First Post"
description = "Description"
date = 2021-10-01T21:22:27+02:00
categories = []
tags = []
draft = true
+++
```

The title has been guessed from the file name and the date from the moment we ran the command.[^1]

The Markdown content begins after the front matter. Hugo will update our site in the browser. If we make a mistake, Hugo will display a descriptive error message on its console and in the browser.

[^1]: The templates for new files reside in the folder `archetypes`.

### Example session {#example}

Show all the steps described above

{{< asciinema id=fFz7xPpWGOdRCcLXBdYTXqPXu rows=20 startAt=2  >}}

## Content organization

It may take a little while to get your head around _Hugo’s_ content folder structure. To keep the _general concept_ in mind did help me: _Hugo_ establishes a connection between the input  and the generated website, which is as short as possible. The folder structure determines the generated website structure in a similar way like _Markdown_ formatting determines the layout of our content.

The standard folders in the content directory of a _Perplex_ project are the content root itself `/` and the folders `doc`, `blog` and `article`. The theme provides layout templates for these page types. _Hugo_ applies the matching template automatically to every content file inside these directories and their subdirectories.

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

{{< sidenote up=14 >}}
**Subdirectories** are possible. We can build only one single page with a leaf bundle, but there is no limit to the folder structure for resources.
{{< /sidenote >}}

#### Blog posts

When the number of blog entries rises, we need some structure. This is achieved with _taxonomies_, and Hugo's defaults are the usual _categories_ and _tags_. We can use them immediately, the front matter already includes the empty parameter keys:

{{< sidenote up=14 >}}
**New Taxonomies** may be defined in the configuration. Please read the corresponding [docs](https://gohugo.io/content-management/taxonomies#configure-taxonomies).
{{< /sidenote >}}

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
weight = 100
[menu.doc]
  name = "My First Doc Page"
  identifier = 'my-first-doc-page'
  parent = ''
  pre = 'remove'
+++
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
: is used very specific by _Perplex_: It contains the identifier of a _Material Icon_ from _Google_. To change it, please visit their [website](http://fonts.google.com/icons). You can pick any icon there. Select it and copy the identifier from the icon font embedding section (It's usually the icon name written in lower letters and with underscores `_` instead of spaces).
{.dl-loose}

### List pages {#list}

Besides single pages we usually need list pages. They can show an overview of  the content of sections and provide some kind of introduction.

#### Branch Bundle

Because our new page is a demonstration, we like to file it in a special section. We create this demo section as a _branch bundle_ with the following command:

```sh {.left}
hugo new doc/demo/_index.md
```

The small difference between a _leaf bundle_ for a [single page]({{< relref "#single" >}}) and a _branch bundle_ is the leading underscore for the _Markdown_ master file. It's only `index.md` versus `_index.md`. But they have a very different purpose. A folder with a _leaf bundle_ collects material for _one_ page. A _branch bundle_ collects as many pages and may include as many other bundles as we need — there is no technical limit to the depth of folder hierarchy. A branch bundle can act like a chapter, section or subsection.

`_index.md` should contain general content about this section. The page for a _branch bundle_ usually also presents a list of selected content from every page in the branch.

{{< sidenote up=11 >}}
**No subdirectories** are accessible to retrieve resources in `_index.md`. All resources specific for the list page generated from `_index.md` at the root of the _branch bundle_ need also to be placed in the branch root. This limitation avoids confusion about the purpose of subfolders.
{{< /sidenote >}}

To reflect this relationship in the menu, we need to set `parent = "demo"` in `my-first-doc-page` and Hugo rearranges the page structure and the menu alike.

### Page Bundles {#bundle}

[_Branch bundles_]({{< relref "#branch-bundle" >}}) and [_leaf bundles_]({{< relref "#leaf-bundle" >}}) are both _page bundles_. A _branch bundle_ for a list page may also include page resources.

### Page Resources {#resources}

There are three options to store and retrieve resources (like images) for _Hugo_:

Page specific
: We can save them in the folder of a page bundle and access them there with the shortest possible path.

Site specific
: We save them most suitably in the `assets` folder and can use them on every page of our project. We may have to create a folder structure in `assets` to organize them.

Remote
: Resources may also be retrieved via URL or API. This powerful but complex feature has been introduced recently. No remote connectors ship with _Perplex_ at the moment.
{.dl-loose}

## Project configuration

All configuration options and their defaults are described in the [docs](https://gohugo.io/getting-started/configuration/). The examples therein are given for a _single configuration file_ like `config.yaml` in your project root directory.

The configuration for this _Perplex_ site is using the alternative option of a **configuration directory** named `config` with separate files for the sections. For the growing number of options this arrangement is much clearer. The top configuration file is called `config.yaml` the other ones are named like the section they contain.

### Please note {.h-info .h-p}

The configuration files for sections don't include the section identifier anymore, because the name of the file _is_ the section identifier. When you adopt a configuration option from the Hugo docs, you may therefore need to remove the section identifier.

## Having trouble with _Hugo_?

When you encounter problems with _Hugo_ and don’t find an answer in its [documentation][hugodoc], the [Hugo community](https://discourse.gohugo.io) can probably support you. Please search the forum archive, because most likely your problem has already been solved. Before you start a new topic, please read the guidelines _How to Request Help_ at the top of the site first.

[hugodoc]: https://gohugo.io/documentation
