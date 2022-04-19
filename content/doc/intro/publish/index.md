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
weight: 80
---

Only two basic steps are involved in publishing a static website: **Build & Deploy**. But there are many ways to do this.
{.p-lead} <!--more-->

Most currently available options and their implementation with _Hugo_ get described in the section [Hosting & Deployment][hd] of its documentation. In all cases the parameter `baseURL` needs to be set to the site URL in the main configuration file [`config.yaml`]({{< relref "configyaml#6" >}}).

The following remarks should give you an impression of the two most common workflows.

## Build & Deploy with your own hardware

An easy way for smaller or beginning projects — with one person responsible for the publishing — is just to stick to the computer, where the content gets finalized.

To generate a complete version of the site on our local file system, we run _Hugo_ in its _build mode_ in the project root like this:

```md {.left}
hugo --minify
```

_Hugo_ then renders the site and writes the files by default into the folder `public`. We can transfer the contents of this directory directly to our provider. Because a static website is fully functional, we can also upload the files to a provider with a _**C**ontent **D**elivery **N**etwork (CDN)_ — without having to worry about caching. It gets immediately distributed to servers all over the world and is available to everyone with minimal latency.

## Automated Build and Continuous Deployment

Special providers allow to automate the build process with the help of configurable virtual machines. This is especially useful for teams, which need a shared build environment. The provider gets access to their _Git_ repository and automatically pulls new content and (re)builds the site. Some of them have their own CDN, which they populate immediately afterwards.

[hd]: https://gohugo.io/hosting-and-deployment/
