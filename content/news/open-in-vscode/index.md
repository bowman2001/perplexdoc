---
author: Georg Makowski
title: Open files in VSCode from Hugo’s server preview
linktitle: Open VSCode from server-mode
date: 2023-03-31T00:44:36+02:00
categories: [Module]
tags: [vscode]
resources:
  - src: 
    name: featured
    params:
      alt: 
---

Two short partials create a link to the content file of the current page in Hugo’s server-mode.
{.p-first}
<!--more-->

The first one renders the opening anchor-tag with the VSCode link, the second one places the closing tag. The tags are generated only, if Hugo runs in server-mode and if a local file is present.

**{$vscode_start.html}**

```go-html-template
{{- if .Site.IsServer -}}
    {{- with .File -}}
        {{- $path := print "vscode://file" .Filename  -}}
        <a {{ printf "href=%q" $path | safeHTMLAttr }} rel="nofollow">
    {{- end -}}
{{- end -}}{{- /**/ -}}
```

**{$vscode_end.html}**

```go-html-template
{{ if .Site.IsServer }}
    {{- with .File }}
        </a>
    {{- end }}
{{ end }}{{- /**/ -}}
```

The partials are also available in the small module [hugo-mod-open-in-vscode](https://github.com/bowman2001/hugo-mod-open-in-vscode).
