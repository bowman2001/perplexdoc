---
author: Georg Makowski
date: 2022-01-12T21:33:11+01:00
description: Embeds the *Asciinema* video player
menu:
  doc:
    name: Asciinema Wrapper
    parent: appendix
    pre: smart_display
subtitle: false
title: Asciinema
weight: 1080
lastmod: 2022-07-25T15:48:00.191Z
draft: true
---

The shortcode is a wrapper for the video player embedding script.
{.p-first} <!--more-->

{{< highlight go-html-template "linenos=true" >}}
{{< readfile file="/themes/perplex/layouts/shortcodes/asciinema.html" >}}
{{< /highlight >}}
