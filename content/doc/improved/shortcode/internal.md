---
authors: [Georg Makowski]
date: "2021-08-16T10:56:35+02:00"
description: Simplify common tasks
menu:
  doc:
    name: Hugo in-house
    parent: shortcode
    pre: topic
title: Hugo’s built-in internal shortcodes
weight: 590
draft: true
---

Hugo ships with a few shortcodes to handle your content and configuration.
{.p-first} <!--more-->

## `highlight` Code {#highlight}

The highlight shortcode is complex and may use some additional CSS files.

{{< highlight html >}}
<section id="main">
  <div>
   <h1 id="title">{{ .Title }}</h1>
    {{ range .Pages }}
        {{ .Render "summary"}}
    {{ end }}
  </div>
</section>
{{< /highlight >}}

### Get parameters with `param` {#param}

We can show a configuration parameter in the content with this shortcode. Their values always get converted to a string:

- The title of this page with `{{</* param title */>}}` as “{{< param title >}}”.

- The parent of the menu entry with `{{</* param menu.doc.parent */>}}` as “{{< param menu.doc.parent >}}”.

- The description with `{{</* param description  */>}}` as “{{< param description >}}”.

