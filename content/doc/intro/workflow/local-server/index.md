---
authors: [Georg Makowski]
title: The local Workflow
description: Write while watching instant previews 
subtitle: false
date: 2022-09-11T14:58:16+02:00
weight: 35
menu:
  doc:
    name: Local Workflow
    parent: workflow
    pre: dns
resources:
  - src: ales-nesetril-Im7lZjxeLhg-unsplash.jpg
    name: featured
    params:
      alt: A half-open glowing computer notebook
categories: [Getting started]
tags: [Hugo]
---

While working on our content, we like to examine the result. To generate an immediate local preview, we run Hugo in server mode.
{.p-first} <!--more-->

The following instructions assume, that you have opened a terminal and are in your project root containing a copy of this documentation project.

## Hugo’s server mode

```sh {.left-in}
hugo server -D --navigateToChanged
```

This command in the root of a project starts the [Hugo server][server]. All the HTML pages are rendered into memory and the site is served under <http://localhost:1313> by default.

{{< mnote up=14 >}}
Hugo’s server can be specially configured to show a site on a public IP address. But it's **not** a full-fledged web server. The server is **only** meant for private previews. The theme templates may include conditional code for the server mode which could pose a security risk if shown in public.
{{< /mnote >}}

- The flag `-D` lets Hugo include **drafted** files. All files created with `hugo new` include `draft: true` in the front-matter. When a Markdown file is ready for [publishing](/doc/intro/workflow/publish), we need to remove this entry or change it to `draft: false`.

- The flag `--navigateToChanged` tells the server to relay the page of the last changed file to the browser. When we save a changed content file the corresponding page gets served in the browser.

## Your first content

To generate a new blog entry use a command like

```sh {.left-in}
hugo new blog/first.md
```

The new file is created in the folder {$content/blog}. It has a front-matter section with some parameter keys for meta-data. They contain auto-generated values, or placeholders, or are empty.[^1] The first lines of the front-matter look like

```yaml {.left-in linenos=true }
---
author: 
title: First
date: 2022-07-01T21:22:27+02:00
```

The `author` value is optional, the `title` and the `date` are mandatory. The `title` is just guessed from the file name — you probably want to change it. The `date` contains the moment when we ran the `hugo new` command in a special format. You can also change it but need to be very careful, because typos may lead to errors.

At first, we ignore the following empty `resources` section and its parameters. We’ll [catch up later](/doc/intro/workflow/resources) with that.

```yaml {.left-in linenos=true linenostart=10}
categories: []
tags: []
draft: true
---
```

At the end of the front-matter are the taxonomy keys with empty lists (squared brackets) as values. Here you can add one or more keywords (comma-separated).

Our Markdown content begins after the front-matter.

```text
**Placeholder**: Put your own summary paragraph here instead of this one.
{.p-first}
<!--more-->
```

All new files contain this placeholder with a special [attribute](/doc/improved/attribute/howto) for the [first paragraph](/doc/page/standfirst) and the {$more} tag to mark this first paragraph as the page summary. You are encouraged to replace this placeholder with your summary now or later. It’s essential for cards and other page previews.

Your following content may be simple text without markup in the beginning.

As soon as you save your file, Hugo’s server will update your site in the browser. Should you make mistakes, Hugo will display a descriptive error message on its console or in the browser.

[^1]: The templates for the file generation with `hugo new` are part of the theme. But like any other theme template, we can override them. See the [Hugo docs](https://gohugo.io/content-management/archetypes/) if you want to create your own.

[server]: https://gohugo.io/commands/hugo_server

## Editor usage

The following tips may improve your editing experience.

### Auto-save delay
Some editors are saving our work so fast by default, that nearly every keystroke leads to a new file version and the regeneration of the corresponding page. When we are in the process of changing sensitive content like front-matter parameters, this can easily cause Hugo’s server to throw an error, because Hugo can’t render inconsistent files.

This is not a big deal but gets annoying after a while. It’s better to set the auto-save delay to a bigger value, which lets us save consistent file versions manually.

### Editor links in the local preview

A few editors offer protocols to open files with a special link. For now, the theme provides a link to open the content file in a local instance of Visual Studio Code. This link is only present if Hugo runs in server mode and a local file exists. It’s placed in the date at the top or the bottom of regular pages. Because taxonomy pages don’t show a date, the link is placed in the title.

{{< mnote up=11 >}}
Hugo allows importing **remote content** as a module. In that case, there are no local files to open.
{{< /mnote >}}
