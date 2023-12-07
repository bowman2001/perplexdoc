---
authors: [Georg Makowski]
title: Local Installation & Configuration
description: How to install Hugo and the theme
subtitle: false
date: 2022-09-11T14:57:26+02:00
weight: 30
menu:
  doc:
    name: Install & configure
    parent: workflow
    pre: start
categories: [getting started, hugo]
tags: [installation, configuration, workflow]
resources: 
  - src: damian-markutt-Dhmn6ete6g8-unsplash.jpg
    name: featured
    params:
      alt: Colorful sunrise in the Rätikon Mountain-Range, Switzerland
      caption: Rätikon Mountain-Range
      anchor: Center
---

Hugo, the world’s fastest static site generator is steadily gaining traction. Hugo provides a reliable production environment and allows to build fast and secure websites with this theme and many others.
{.p-first} <!--more-->

[Hugo](https://gohugo.io) is a single command line tool for macOS, Windows, Linux and BSD derivatives. Binaries for most operating systems and some containers are usually available within a day or a few after every minor release.

{{< mnote up=11 >}}
The [Hugo source](https://github.com/gohugoio/hugo) can be compiled on every machine with a recent [Go environment](https://go.dev).
{{< /mnote >}}

The [Hugo documentation site][hugodoc] addresses developers mostly and offers detailed information. With a good theme only a small part of this knowledge is necessary to produce a professional website.

## Install Hugo

Please follow the specific [installation instructions](https://gohugo.io/installation/) for your operating system on the Hugo documentation site (the docs). This theme needs the **extended version** of Hugo for its support of the WEBP image format.

Hugo is still evolving and getting better all the time. Newer versions of this theme may rely on recent features. If you are interested in them, you should choose an installation, which is easy to update frequently.

In case you are satisfied with a given setup you don’t need to upgrade. One of the great advantages of Hugo is reliability. All Hugo releases are still available and if you want to stick to a certain configuration you simply can.
{.box-info}

## Get the theme

The theme is hosted on [GitHub][themeRepo] and available as open source under the Apache-2.0 license.  

When you start to get acquainted with Hugo and need content examples for this theme, you should take a look at the example site in the folder {$exampleSite} of the theme. You can run Hugo in this folder of your local copy as described [on the next page](/doc/intro/workflow/local-server).

If you need more examples, you can also get the source for this documentation site. Its content is licensed as Creative Commons [(CC-BY-SA 4.0)][cc] and is also available on [GitHub](https://github.com/bowman2001/perplexdoc).

### Folder structure

The folders for the example site and the project site contain standard Hugo folders.

```sh {.right .lh15 .hide-mobile}
├── assets
├── config
├── content
├── static
└── themes
```

{$assets}
: provides site-wide resources to be processed by the theme (not many).

{$config}
: is the configuration folder with all site-wide parameters for this project.

{$content}
: contains the Markdown files and their resources. This is where you probably want to start looking.

{$themes}
: may contain one or more theme folders. When the current theme is configured as a module the folder may be empty.

{$static}
: hosts all directories or files without the need for processing. They are copied to the publication folder (default: public) as they are.
{.dl-loose}

The additional reserved {$\_vendor} folder includes a recent copy of this theme and all its dependencies. It’s working as a module cache and should never be touched directly. Modules are imported from there as long as we don’t configure them otherwise. Because of these cached copies, there is no need to install a Go environment in the beginning.

### Project configuration

All configuration options are listed in the [Hugo docs](https://gohugo.io/getting-started/configuration/). The examples therein are given for a **single configuration file** like {$hugo.yaml} in your project root directory.
{.inline}

{{< mnote >}}
Hugo changed the name for the main configuration file recently. {$config.\*} remains valid.
{{< /mnote >}}

The configuration for the example site is in one file [{$hugo.yaml}][exampleConfig] to provide a simple setup which is also a good starting point for new projects.

The configuration for the documentation project uses the alternative option of a **configuration directory** named {$config} with separate files for the configuration sections. For the growing number of options, this arrangement is clearer. The top configuration file is still called {$hugo.yaml} the other ones are named like the section they contain.
{.inline}

{{< mnote >}}
**The section key** is obsolete in separate section configuration files. The name of such a file is the key. Consider this, when you adopt a configuration option from the Hugo docs, where examples a usually given for a single config file with sections.
{{< /mnote >}}

### Start a project from scratch

We create an empty new project with a command like

```sh {.left-in}
hugo new site mysite
```

and get the folder {$mysite} with all the standard folders.

```sh {.right .lh15 .hide-mobile .up-8}
├── archetypes
├── assets
├── config
├── content
├── layouts
├── static
└── themes
```

As Hugo themes usually do, this theme includes folders for {$archetypes}, {$assets}, {$data}, {$layouts} and {$static}. The corresponding folders in the project root are only meant for additional material or modified templates to override the ones from the theme with the same name.

There are three ways to get a theme from a Git repository:

1. Download and unzip its compressed file package in the {$themes} folder. This is the fastest way and the best option for a try-out.

2. Clone it with [**Git**](https://git-scm.com/) into the {$themes} folder. If you are already using Git for your project, you probably should clone the theme as a submodule. This is also the only workflow to contribute directly to the development of a Hugo theme or module.

3. Import a theme as a Hugo module. You need a recent [Golang environment](https://go.dev) – Hugo modules rely on Go modules. The Hugo docs provide a [guide to this feature](https://gohugo.io/hugo-modules). Once set up, Hugo modules are the best way to update themes or other external components, content etc. There is a simple example for a theme module in the file [{$module.yaml}](/doc/appendix/config/moduleyaml).

When you choose option 1. or 2., you need to tell Hugo to use the theme in the [config file](/doc/appendix/config/hugoyaml.md#8). With 3. (the module) you don’t. Hugo includes modules by default as themes.

## Having trouble with Hugo?

When you encounter problems specifically with Hugo and can’t find an answer in its [documentation][hugodoc], the [Hugo community](https://discourse.gohugo.io) will support you. Please search the forum archive, because most likely your problem has already been answered there.

If you are confronted with a new problem, please read the guidelines **How to Request Help** at the top of the forum site first, before you submit your request. You may need to provide a (temporary) public repository to let people inspect your code in detail.

All problems with this theme or this documentation should be addressed in [their repositories](/doc/intro/perplex#in-case-of-problems)!

[hugodoc]: https://gohugo.io/documentation
[cc]: https://creativecommons.org/licenses/by-sa/4.0/
[themeRepo]: https://github.com/bowman2001/perplex
[exampleConfig]: https://github.com/bowman2001/perplex/blob/main/exampleSite/hugo.yaml