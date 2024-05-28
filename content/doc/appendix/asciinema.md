---
title: Asciinema wrapper
description: Embeds the *Asciinema* video player
subtitle: false
date: 2022-01-12 21:33:11+01:00
weight: 1080
authors:
- Georg Makowski
menu:
  doc:
    name: Asciinema Wrapper
    parent: appendix
    pre: smart_display
lastmod: 2022-07-25 15:48:00.191000+00:00
draft: true
---

A wrapper shortcode for the embedding script hosted by Asciinema
{.p-first} <!--more-->

{{< highlight go-html-template "linenos=true" >}}
{{< readfile file="/themes/perplex/layouts/shortcodes/asciinema.html" >}}
{{< /highlight >}}
