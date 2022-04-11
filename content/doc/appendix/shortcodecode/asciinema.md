---
author: Georg Makowski
date: "2022-01-12T21:33:11+01:00"
description: Embeds the *Asciinema* video player
featImg: ""
menu:
  doc:
    name: Asciinema Wrapper
    parent: shortcodecode
    pre: smart_display
subtitle: false
title: Asciinema
weight: 100
---

The shortcode is basically a wrapper for the official video player embedding script.
{.p-lead} <!--more--> 

{{< highlight go-html-template "linenos=true" >}}
{{< readfile file="/themes/perplex/layouts/shortcodes/asciinema.html" >}}
{{< /highlight >}}
