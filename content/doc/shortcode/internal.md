---
author: Georg Makowski
date: "2021-08-16T10:56:35+02:00"
description: Simplify common tasks
menu:
  doc:
    name: Hugo in-house
    parent: shortcode
    pre: source
title: Hugo’s built-in internal shortcodes
weight: 590
---

## Resolve internal URLs {#relref}

To refer to a page on our site we can include the URL into a [link]({{< relref "link" >}}) like any other. But it's often long and when our content grows and evolves, the path may change. Therefore, we better leave the resolution to Hugo by using an unambiguous name for the page.

{{< mnote >}}
If the name of a page is not unique, we still need to fill in the complete relative path. The advantage of `relref` then is, that Hugo checks the existence of the file.
{{< /mnote >}}

To replace unique names with URLs, Hugo provides `relref` or `ref`. Internal links with these shortcodes look like

```md
[Link]({{</* relref "link" */>}})
[Introduction]({{</* ref "intro" */>}})
```

`relref`
: returns the relative URL of the page, which is usually the better option. Perplex then can distinguish between internal and external URLs and style the links with two different colors.

`ref`
: returns always the absolute URL of the page, which may be necessary under special circumstances.
{.dl-loose}

## Show a figure {#figure}

Markdown contains no element, that gets rendered into a figure, because this is a task beyond simple markup. Therefore, Hugo includes the `figure` shortcode with many options and the possibility to add styling classes. The resulting HTML includes just the original image, because the internal shortcode is a minimal default and meant to be overridden by theme developers with their specific version.

Perplex does override the built-in `figure` shortcode with its own, but the variables are kept in place. There are no adjustments necessary. Additional options are presented on the page for the theme [`figure`]({{< relref "figure" >}})

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

- The featured image with `{{</* param featImg */>}}` as “{{< param featImg >}}”. In this case `param` shows the **site parameter**, because there is no such entry in the front-matter of this page.

[hugofigure]: https://gohugo.io/content-management/shortcodes/#figure
