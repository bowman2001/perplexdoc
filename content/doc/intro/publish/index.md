---
author: Georg Makowski
date: "2021-09-14T12:56:56+02:00"
description: Build & Deploy a static website
featImg: nasa-Q1p7bh3SHj8-unsplash.jpg
menu:
  doc:
    name: Publish
    parent: intro
    pre: cloud_upload
subtitle: false
title: Publish
weight: 25
---

Only two basic steps are involved in publishing a static website: **Build & Deploy**. There are many ways to realize them.
{.p-first} <!--more-->

Most available options and their workflow with Hugo are mentioned in the section [Hosting & Deployment][hd] of its documentation. In all cases we need to set the parameter `baseURL` to the site URL in the main configuration file [{$config.yaml}]({{< relref "configyaml#6" >}}).

The following remarks should give you an impression of the two general workflows.

## Build & Deploy with your own hardware

As long as you are the only one responsible for finalizing the content, it’s easy to stick to your own computer for both steps. To generate a complete version of the site on the local file system, we run Hugo in its _build mode_ in the project root like this:

```md {.left}
hugo --minify
```

Hugo then renders the site and writes the files by default into the folder `public`. You can upload its contents directly to your provider. Because a static website is fully functional, you may also transfer the files to a big provider with a _**C**ontent **D**elivery **N**etwork (CDN)_ — without having to think about caching as you would for a database driven CMS. The new pages then get immediately distributed to servers all over the world and are available with minimal latency.

## Automated Build and Continuous Deployment

Special providers automate the build process with configurable virtual machines. This is especially useful for teams, which need a shared build environment. The provider gets access to their repository (usually Git based), automatically pulls new content and (re)builds the site. Some of them own a CDN, which they populate immediately afterwards.

This setup is also convenient for advanced non-commercial projects as long as commercial providers offer a free tier for personal or open-source use. Hugo is building sites so fast, you may well stay in their often generous limits.

[hd]: https://gohugo.io/hosting-and-deployment/
