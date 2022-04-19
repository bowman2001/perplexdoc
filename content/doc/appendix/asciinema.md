---
author: Georg Makowski
date: "2022-01-12T21:33:11+01:00"
description: Embeds the *Asciinema* video player
featImg: ""
menu:
  doc:
    name: Asciinema Wrapper
    parent: appendix
    pre: smart_display
subtitle: false
title: Asciinema
weight: 880
draft: true
---

The shortcode is basically a wrapper for the official video player embedding script.
{.p-lead} <!--more--> 

{{< highlight go-html-template "linenos=true" >}}
{{< readfile file="/themes/perplex/layouts/shortcodes/asciinema.html" >}}
{{< /highlight >}}
