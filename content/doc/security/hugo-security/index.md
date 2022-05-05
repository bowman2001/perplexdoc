---
author: Georg Makowski
date: "2022-01-12T14:20:05+01:00"
description: Description
featImg: 
menu:
  doc:
    name: Hugo
    identifier: hugosec
    parent: security
    pre: engineering
subtitle: false
title: Hugo
weight: 830
---

To enable the production of secure websites using a workflow, which is itself as secure as possible is one of the essential features of Hugo.
{.p-lead} <!--more-->

The _Hugo project_ has outlined its [security model][hugo] in the documentation.

Hugo allows to call a few often used external pieces of software at runtime by default. When we want to include external content as a module for example, we need to enable the use of a separately installed _Go binary_ for this mechanism. Like with every other _Hugo_ theme, websites generated with _Perplex_ may include external content, but this project does not.

All the other

The [security configuration][secyaml]

[hugo]: https://gohugo.io/about/security-model "Hugo’s Security Model"
[secyaml]: {{< relref "securityyaml" >}}
