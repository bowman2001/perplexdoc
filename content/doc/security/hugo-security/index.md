---
authors: [Georg Makowski]
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

Its an essential feature of Hugo to enable the production of secure websites while using a workflow, which is itself as secure as possible.
{.p-first} <!--more-->

The Hugo project is putting a strong focus on security issues and has outlined its [**security model**][hugo] at the beginning of the documentation.

Hugo allows by default to call a few much needed external binaries at runtime. When we want to include external content as a module for example, we need to enable the use of the Golang environment, which provides secure handling of dependencies. To generate our CSS with the Dart-Sass preprocessor, we need to call its embedded binary. To post-process our CSS-stylesheets we may like to call the PostCSS CLI, which is a node package and includes a lot of other node packages. It’s sometimes even convenient to let Hugo call an editor.

Depending on our needs and security concerns we can allow Hugo those calls or don’t. The same for the values of system environment variables or others. All this and more can be configured in the security configuration file [{$security.yaml}][secyaml].

The Perplex theme doesn’t need any additional programs and this project relies on content of my own. So, this project does’t allow Hugo to call other binaries. Because I can’t think of other security risks at runtime, I did not optimize this project configuration further for security and recommend to read the Hugo documentation if you are confronted with them.

[hugo]: https://gohugo.io/about/security-model "Hugo’s Security Model"
[secyaml]: /doc/appendix/config/securityyaml
