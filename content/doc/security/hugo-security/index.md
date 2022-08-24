---
author: Georg Makowski
date: "2022-01-12T14:20:05+01:00"
description: Security at Runtime
menu:
  doc:
    name: Hugo
    identifier: hugosec
    parent: security
    pre: engineering
subtitle: false
title: Hugo
weight: 830
resources:
  - src: fly-d-mT7lXZPjk7U-unsplash.jpg
    name: featured
---

To enable the production of secure websites using a workflow, which is itself as secure as possible is one of the essential features of Hugo.
{.p-first} <!--more-->

The _Hugo project_ has outlined its [security model][hugo] in the documentation.

Hugo allows by default to call a few often used binaries at runtime. When we want to include external content as a module for example, we need to enable the use of _Go_. Like with every other Hugo theme, websites generated with Perplex may include external content, but this project does not.

All the other default binaries are also commented out in the [security configuration][secyaml] for this project, because Perplex templates do not call them.

[hugo]: https://gohugo.io/about/security-model "Hugo’s Security Model"
[secyaml]: {{< relref "securityyaml" >}}
