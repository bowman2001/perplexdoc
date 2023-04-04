---
author: Georg Makowski
title: The local Workflow
description: Show an instant preview in your browser 
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

When we are working on our content, we often like to examine the resulting pages immediately. To generate an immediate local preview, we can run Hugo in server mode.
{.p-first} <!--more-->

The following instructions assume, that you are in the project root of a copy of this documentation project.

## Hugo’s server mode

```sh {.left}
hugo server -D --navigateToChanged 
```

This command in the root of a project starts the [Hugo server][server]. All the HTML pages are rendered into memory and the site is served under <http://localhost:1313> by default.

{{< mnote up=14 >}}
Hugo’s server can be configured to show a site on a public IP address. But it's **not** a full-fledged web server. The server is **only** meant for private previews and templates may include conditional code for the server mode which could pose a security risk if shown in public.
{{< /mnote >}}

- The flag `-D` lets Hugo include **drafted** files. All files created with `hugo new` are usually configured as drafts by setting `draft: true` in the front-matter. When a Markdown file is ready for [publishing](/doc/intro/workflow/publish), we need to remove this entry or change it to `draft: false`.

- The flag `--navigateToChanged` tells the server to relay the page of the last changed file to the browser. As soon as we save a content file the corresponding page pops up in the browser.

## Your first content

To generate a new Markdown file, we go to the root folder of our project and use a command like

```sh {.left}
hugo new blog/first.md
```

The new file is created in the folder {$content/blog}. It already contains a front-matter section with a few reasonable entries, placeholders, or empty parameter keys.[^1] 

```yaml {class="left" linenos=true }
---
author: 
title: First
date: 2022-07-01T21:22:27+02:00
```

The `author` value is optional, the `title` and the `date` are mandatory. The `title` is guessed from the file name and you probably want to change it. The `date` contains in a special format the moment to the second when we ran the `hugo new` command.

At first, we can ignore the following `resources` section and its parameters. We’ll [catch up later](/doc/intro/workflow/resources).

```yaml {.left linenos=true linenostart=10}
categories: []
tags: []
draft: true
---
```

At the end of the front-matter we have the taxonomies in squared brackets. We may add one or more keywords as a comma-separated list.

Our Markdown content begins after the front-matter. New files contain a placeholder with a special [attribute](/doc/attribute/howto) for the [first paragraph](/doc/page/standfirst). It should act as the page summary which is marked by the {$more} tag.

After we add or change some content and save the file again, Hugo’s server will update our site in the browser immediately. When we make mistakes, Hugo will display a descriptive error message on its console or in the browser.

[^1]: The templates for the file generation with `hugo new` are part of the theme. But like any other theme template, we can override them. See the [Hugo docs](https://gohugo.io/content-management/archetypes/) if you want to create your own.

[server]: https://gohugo.io/commands/hugo_server

## Editor usage

The following tips may improve your editing experience with Hugo and the theme.

### Auto-save delay
Some editors are saving our work so fast by default, that nearly every keystroke leads to a new file version and the regeneration of the corresponding page. When we are in the process of changing sensitive content like front-matter parameters this can easily bring down Hugo’s server, because Hugo can’t process inconsistent files. 

Then, we have to restart the server, which is not a big deal but gets annoying after a while. It’s better to set the auto-save delay to a greater value, which lets us save consistent file versions manually.

### Editor links in the local preview

A few editors offer a protocol to open files with a special link. The theme provides a link to open the content file in a local instance of _Visual Studio Code_. This link is only present if Hugo runs in server mode. It’s placed in the date at the top or the bottom of regular pages. Because taxonomy pages don’t show a date, the link is placed in the title.

{{< mnote up=14 >}}
Links to other editors could be provided easily, too, if they offer this functionality.
{{< /mnote >}}
