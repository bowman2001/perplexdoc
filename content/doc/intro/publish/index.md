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

Many available workflows for Hugo are mentioned in the section [Hosting & Deployment][hd] of its documentation. In all cases we need to set the parameter `baseURL` to the URL of our site in the main configuration file [{$config.yaml}]({{< relref "configyaml#6" >}}).

The following remarks will give you a first impression of two general ways to build & deploy.

## Use your own hardware

As long as you are the only one finalizing the content, it’s easy to stick to your own computer. To generate a complete version of the site, we run Hugo in _build mode_ from the project root like this:

```md {.left}
hugo --minify
```

Hugo renders the site and writes the files by default into the folder `public`. You can upload its content directly to your provider. You may also transfer the files to a big provider with a **C**ontent **D**elivery **N**etwork (CDN) — without thinking about caching as you would for a database driven CMS. The pages are then distributed to servers all over the world and are available with minimal latency.

## Automated Build and Continuous Deployment

Special providers automate the build process with configurable virtual machines. This is especially useful for teams in need of a reliable shared build environment. The provider gets access to the repository (usually Git based), automatically pulls new content and (re)builds the site. Some of them also own a CDN, which gets populated immediately afterwards.

This setup is also convenient for advanced non-commercial projects as long as commercial providers offer a free tier for personal or open-source use. Hugo is building sites so fast, you may well stay in their often generous limits.

[hd]: https://gohugo.io/hosting-and-deployment/
