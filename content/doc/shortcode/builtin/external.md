---
author: Georg Makowski
date: "2021-08-16T10:56:40+02:00"
description: These shortcodes include content from other websites
menu:
  doc:
    name: External
    parent: builtin
    pre: download
title: External
weight: 100
---


## Layout

The styles are provided by the hosts of the content and may not always fit very well into the _Perplex_ layout.

### Include a _gist_ from _GitHub_

A call of `{{</* gist spf13 7896402 "img.html" */>}}` gets rendered to:

{{< gist spf13 7896402 "img.html" >}}

See the [_Hugo_ documentation](https://gohugo.io/content-management/shortcodes#gist).

### Include postings with `instagram`

{{< instagram BWNjjyYFxVx >}}

See the [_Hugo_ documentation](https://gohugo.io/content-management/shortcodes#instagram).

### Include messages from _Twitter_ with `tweet`

{{< tweet 877500564405444608 >}}

See the [_Hugo_ documentation](https://gohugo.io/content-management/shortcodes#tweet) for this specific shortcode.

### Include videos with `vimeo`

{{< vimeo 146022717 >}}

See the [_Hugo_ documentation](https://gohugo.io/content-management/shortcodes#vimeo) for this specific shortcode.

### Include videos with `youtube`

{{< youtube id="w7Ft2ymGmfc" title="A New Hugo Site in Under Two Minutes" >}}

See the [_Hugo_ documentation](https://gohugo.io/content-management/shortcodes#youtube) for this specific shortcode.
