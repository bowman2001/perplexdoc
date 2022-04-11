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

Two basic steps are involved in publishing our static website: **Build & Deploy**.
{.p-lead} <!--more-->

There are a lot of options for a static website. Many of them are described in the section [Hosting & Deployment](https://gohugo.io/hosting-and-deployment/) of the documentation.

In all cases the parameter `baseURL` has to be set to the registered site URL in the main configuration file [`config.yaml`]({{< relref "configyaml#4" >}}).

## Build & Deploy with your own hardware

The simplest way for smaller projects — with one person responsible for the publishing — is obviously to stick to the computer, where the content gets finalized.

To generate a complete version of the site on our local file system, we run _Hugo_ in *build mode* in the project root like this:

```md {class=col-left}
hugo --minify
```

_Hugo_ renders the site and writes the files into the folder `public` if we haven't changed the default configuration. Now we can transfer the contents of this directory to our provider as usual. Because our static website is already fully functional, we can upload the files also directly to a _**C**ontent **D**elivery **N**etwork (CDN)_ — without caching. There it gets distributed to servers all over the world and is available to everyone with minimal latency.

## Automated Build and Continuous Deployment

To automate the build process special providers allow to configure a virtual machine for every website. This is especially useful for teams, because they need a shared build environment. The provider gets access to the *Git* repository and automatically pulls new content. Then he starts the virtual machine, builds the current site and populates its CDN with the new version.
