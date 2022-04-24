---
author: Georg Makowski
date: "2021-09-14T12:56:56+02:00"
description: Build & Deploy a static website
featImg: nasa-Q1p7bh3SHj8-unsplash.jpg
menu:
  doc:
    name: Publish
    parent: Introduction
    pre: cloud_upload
subtitle: false
title: Publish
weight: 25
---

Only two basic steps are involved in publishing a static website: **Build & Deploy**. But there are many possible ways to realize them.
{.p-lead} <!--more-->

Most available options and their workflow with _Hugo_ get described in the section [Hosting & Deployment][hd] of its documentation. In all cases we need to set the parameter `baseURL` to the site URL in the main configuration file [`config.yaml`]({{< relref "configyaml#6" >}}).

The following remarks should give you an impression of the two most common workflows.

## Build & Deploy with your own hardware

As long as only you are responsible for finalizing the content, its easy to stick to your computer for both steps. To generate a complete version of the site on the local file system, we run _Hugo_ in its _build mode_ in the project root like this:

```md {.left}
hugo --minify
```

_Hugo_ then renders the site and writes the files by default into the folder `public`. You can upload its contents directly to your provider. Because a static website is fully functional, you may also transfer the files to a big provider with a _**C**ontent **D**elivery **N**etwork (CDN)_ — without having to think about caching as you would for a database driven CMS. The new pages then get immediately distributed to servers all over the world and are available with minimal latency.

## Automated Build and Continuous Deployment

Special providers automate the build process with configurable virtual machines. This is especially useful for teams, which need a shared build environment. The provider gets access to their repository (usually _Git_), automatically pulls new content and (re)builds the site. Some of them own a _CDN_, which they populate immediately afterwards.

[hd]: https://gohugo.io/hosting-and-deployment/
