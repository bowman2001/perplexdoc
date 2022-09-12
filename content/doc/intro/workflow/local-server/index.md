---
author: Georg Makdowski
title: Hugo’s local Server
description: Get an instant local preview 
subtitle: false
date: 2022-09-11T14:58:16+02:00 
weight: 35
menu:
  doc:
    name: Local Server
    parent: workflow
    pre: dns
resources:
  - src: ales-nesetril-Im7lZjxeLhg-unsplash.jpg
    name: featured
categories: [Workflow, Theme]
tags: [Hugo]
---

When we work on a web project, we like to examine the resulting pages as fast as possible. We can start Hugo in server mode to generate a local preview in no time.
{.p-first} <!--more-->

 A command like the following in the root of a project starts the [Hugo server][server]:

```sh
hugo server -D --minify --navigateToChanged 
```

{{< mnote up=6 >}}
Hugo’s server is configurable and can also show a private preview under a public URL. But it's **not** a full-fledged web server.
{{< /mnote >}}

The pages are rendered into the memory and the site is served under <http://localhost:1313> by default.

- The flag `-D` lets Hugo include **drafted** files. All files created with `hugo new` are usually configured as drafts, using `draft: true` in the front-matter. When a Markdown file is ready for [publishing]({{< relref "doc/intro/workflow/publish" >}}), we need to remove this entry or change it to `draft: false`.

- The flag `--minify` tells Hugo to remove unnecessary whitespace from the resulting code.

- The flag `--navigateToChanged` tells the server to relay the page of the last changed file to the browser. As soon as we save a file the corresponding page pops up in the browser.

## Adding your first content {#first}

To generate a new Markdown file, we go to the root folder of our project and use a command like

```sh {.left}
hugo new blog/first.md
```

The new file is created in the folder {$content/blog}. It already contains a front matter section with some reasonable entries or placeholders to start with.

The `title`, `date` and `description` parameters is strongly recommended for Perplex as it is for many other themes.

```yaml {class="left" linenos=true }
---
title: First 
description: 
date: 2022-07-01T21:22:27+02:00
categories: [Theme]
tags: [Demo]
draft: true
---
```

The title has been guessed from the file name and the date from the moment we ran the command.[^1]

The Markdown content begins after the front matter. Hugo will update our site in the browser. If we make a mistake, Hugo will display a descriptive error message on its console and in the browser.

[^1]: The templates for new files reside in the folder {$archetypes}.

### Example session {#example}

Show all the steps described above

{{< asciinema id=fFz7xPpWGOdRCcLXBdYTXqPXu rows=20 startAt=2  >}}

[server]: https://gohugo.io/commands/hugo_server