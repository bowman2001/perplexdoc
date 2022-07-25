---
author: Georg Makowski
date: "2021-08-16T10:56:40+02:00"
description: These shortcodes include content from external providers
menu:
  doc:
    name: Hugo remote 
    parent: shortcode
    pre: download
title: Hugo’s built-in remote shortcodes
weight: 580
---

These are Hugo’s remote shortcodes to embed external content from popular service providers.
{.p-first} <!--more-->

## Layout

Styles are provided by the hosts of the content and may not always fit very well into the Perplex layout.

### Include a _gist_ from _GitHub_

A call of `{{</* gist spf13 7896402 "img.html" */>}}` gets rendered to:

{{< gist spf13 7896402 "img.html" >}}

See the [Hugo documentation](https://gohugo.io/content-management/shortcodes#gist) for further details.

### Include postings from _Instagram_

{{< instagram BWNjjyYFxVx >}}

See the [Hugo documentation](https://gohugo.io/content-management/shortcodes#instagram) for further details.

### Include messages from _Twitter_ with {$tweet}

{{< tweet 877500564405444608 >}}

See the [Hugo documentation](https://gohugo.io/content-management/shortcodes#tweet) for this specific shortcode.

### Include videos from _Vimeo_

{{< vimeo 146022717 >}}

See the [Hugo documentation](https://gohugo.io/content-management/shortcodes#vimeo) for this specific shortcode.

### Include videos from _Youtube_

#### Syntax 

```md
{{</* youtube id="w7Ft2ymGmfc" title="A New Hugo Site in Under Two Minutes" */>}}
```

See the [Hugo documentation](https://gohugo.io/content-management/shortcodes#youtube) for further details.

#### Layout 

{{< youtube id="w7Ft2ymGmfc" title="A New Hugo Site in Under Two Minutes" >}}


