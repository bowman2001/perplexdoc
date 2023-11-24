---
authors: [Georg Makowski]
date: "2021-09-14T12:56:56+02:00"
description: Build & deploy the static website
menu:
  doc:
    name: Publish
    parent: workflow
    pre: cloud_upload
subtitle: false
title: Publish
weight: 50
categories: [Getting-Started]
tags: [workflow]
resources: 
  - name: featured
    src: nasa-Q1p7bh3SHj8-unsplash.jpg
    params:
      alt: The Gulf of Mexico by night from outer space. The electric lightning appears as a global net.
---

Publishing a static website involves always two basic steps: **Build & Deploy**. There are many ways to realize them.
{.p-first} <!--more-->

Many workflows for Hugo are listed in the section [Hosting & Deployment][hd] of its documentation. In all cases we need to set the parameter `baseURL` to our domain URL in the main configuration file [{$config.yaml}](/doc/appendix/config/hugoyaml#6).

The following remarks should give you a first impression of two common concepts.

## Use your own hardware

As long as you are the only one finalizing the content, it’s easy to stick to your own computer. To generate a complete version of the site, we use Hugo’s default **build mode** in the project root for example like this:

```md {.left-in}
hugo --minify
```

Hugo renders the site, minifies the HTML and writes the files by default into the folder {$public}. You can upload its content directly to your provider. That’s it. You may also transfer the files to a big provider with a **C**ontent **D**elivery **N**etwork (CDN) for worldwide minimal latency.

## Automated Build and Continuous Deployment

Special providers automate the build process with configurable virtual containers. This is especially useful for teams in need of a reliable shared build environment. The provider gets access to the teams repository (usually Git based), automatically pulls new content and (re)builds the site or just a preview. Some of them also own a CDN, which they can populate immediately after every build.

```kroki {diagram=plantuml padding=two background=white caption="Workflow for some authors and a few editors on a Hugo project" attr=gm}
@startuml
!include C4_Context.puml
!include C4_Container.puml

title Automated Build and Continous Deployment

Person(editor, "Editor", "Edits Markdown")
Person(author, "Author", "Writes Markdown" )
System(local1, "Local Hugo Server", "Generates local preview")
System(local2, "Local Hugo Server", "Generates local preview")
System_Boundary(git, "Git provider") {
  Container(repository, "Git repository", "Git, GUI", "Allows shared version control" )
}
System_Boundary(abcd, "ABCD Provider") {
  Container(build, "Build environment", "Git, Hugo & Theme", "Builds site")
  System(net, "Content Delivery Network", "Hosts site")
}

Rel(author, repository, "Pushes/Pulls", "draft")
Rel(author, local1, "Checks", "draft preview")
Rel(editor, repository, "Pushes/Pulls", "draft/finalized")
Rel_R(editor, local2, "Checks", "draft preview")
Rel(editor, build, "Checks", "finalized preview")
Rel(build, repository, "Pulls", "finalized content")
Rel(build, net, "Deploys", "finalized site" )
@enduml
```

This kind of setup may also be convenient for non-commercial projects and in a simplified form for private sites with only one author/editor. Some commercial providers offer a free tier for personal or open-source use. Hugo is building sites so fast, your project may well stay in their sometimes generous limits with several builds per day.

**Caching resources** between builds in a container is mandatory if we include many images and don’t want to waste energy and money on their repeated processing. Processed resources are always cached by Hugo. But we need to make sure that the caching folder is stored in our repository or enable another caching mechanism between runs in a container.
{.box-danger}

[hd]: https://gohugo.io/hosting-and-deployment/
