---
author: Georg Makowski
title: Getting Started
description: Install Hugo and get Perplex
subtitle: false
date: 2022-09-11T14:57:26+02:00 
weight: 30
menu:
  doc:
    name: Getting Started
    parent: workflow
    pre: start
categories: [Theme]
tags: [Hugo, Installation]
draft: true
---

The world’s fastest static site generator is steadily gaining traction. Hugo provides a reliable production environment and allows to build fast and secure websites.
{.p-first} <!--more-->

[Hugo](https://gohugo.io) is a single command line tool for macOS, Windows, Linux and BSD derivatives. A binary for most operating systems and some containers is usually available within a day or a few after every release.

{{< mnote up=11 >}}
The [Hugo source](https://github.com/gohugoio/hugo) can be compiled on every machine with a recent [Go environment](https://go.dev).
{{< /mnote >}}

The [Hugo documentation site][hugodoc] addresses developers mostly and offers detailed and extensive information. Only a small part of it is necessary to produce a professional static website using a fully functional theme.

## Install Hugo

Please read the [installation instructions](https://gohugo.io/getting-started/installing/) for your operating system on the documentation site. Perplex works with any recent version.

## Use Perplex

When you start to get acquainted with Hugo or when you are curious about the source for this site, you can download this documentation project as an example. It’s publicly available on [GitHub]({{< param sourceURL >}}) and ships with all the files for the documentation and a few examples for blog postings and articles.

### The documentation project

The folders for the project site contain only a minimal set of standard Hugo folders.

```sh {.right .lh15 .hide-mobile}
├── assets
├── config
└── content
```

{$assets}
: contains site wide resources.

{$config}
: contains the configuration files for this project.

{$content}
: contains all the Markdown files and page specific resources like images.
{.dl-loose}

The additional {$\_vendor} folder includes a recent copy of the [Perplex theme]({{< param themeURL >}}). The theme is imported as a module, but because its vendored into this folder there is no need for a Go environment.

#### Start from scratch

We create an empty new project with a command like

```sh {.left}
hugo new site mysite
```

and get the folder {$mysite} with all the standard folders.

```sh {.right .lh15 .up-8}
├── archetypes
├── assets
├── config
├── content
├── layouts
├── static
└── themes
```

As Hugo themes usually do, Perplex includes its own folders for {$archetypes}, {$assets} and {$layouts} and the corresponding folders in the project root are only meant for additional or modified templates to override the ones from the theme with the same name.

The {$themes} folder can hold as many themes as we like and there are three ways to retrieve a public theme from a Git repository provider:

1. Download and unzip its compressed file package in the {$themes} folder. This is the fastest way and the best option for a try-out.

2. Clone it with [**Git**](https://git-scm.com/) into the {$themes} folder. If you already are using Git for your project, you probably should clone every theme as a submodule. This is also the best workflow to contribute to the development of a Hugo theme or module.  

3. Import a theme as a Hugo module. You need a recent [Golang environment](https://go.dev) for that – Hugo modules rely on Go modules. The Hugo docs provide a [guide to this feature](https://gohugo.io/hugo-modules). Once set up, Hugo modules are the easiest way to update themes or other external components, content etc. There is simple example for the configuration in the file [{$module.yaml}]({{< relref "moduleyaml.md" >}}).

When you chose option 1. or 2., you need to tell Hugo to use the theme in the [config file]({{< relref "configyaml.md#8" >}}). With the module you don’t, Hugo includes modules by default as themes.

## Project configuration

All configuration options are explained in the [docs](https://gohugo.io/getting-started/configuration/). The examples therein are given for a **single configuration file** like {$config.yaml} in your project root directory.

The configuration for this project is using the alternative option of a **configuration directory** named {$config} with separate files for the sections. For the growing number of options this arrangement is clearer. The top configuration file is still called {$config.yaml} the other ones are named like the section they contain.

### Please note {.h-info .h-p}

The configuration files for sections don't include the section identifier anymore, because the name of the file already is the section identifier. When you adopt a configuration option from the Hugo docs, you need to remove the section identifier. And should you copy a configuration option from a section in the config folder into a single {$config.yaml} you need to add it again. Same goes for TOML.

## Having trouble with Hugo?

When you encounter problems with Hugo and don’t find an answer in its [documentation][hugodoc], the [Hugo community](https://discourse.gohugo.io) will support you. Please search the forum archive, because most likely your problem has already been solved. If you are confronted with a new problem, please read the guidelines **How to Request Help** at the top of the site first, before you submit your request.

[hugodoc]: https://gohugo.io/documentation
