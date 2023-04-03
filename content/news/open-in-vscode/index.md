---
author: Georg Makowski
title: Open files in VSCode{/}from Hugo’s server preview
linktitle: Open VSCode from server-mode
date: 2023-03-31T00:44:36+02:00
categories: [Tip, Module]
tags: [vscode]
---

Two short partials create a link to open the content file{/}of the current page in Hugo’s server-mode.
{.p-first}
<!--more-->

The first one renders the opening anchor-tag with the VSCode link, the second one places the closing tag. The tags are generated only, if Hugo runs in server-mode and if a local file is present.

## {$vscode_start.html}

```go-html-template
{{- if .Site.IsServer -}}
    {{- with .File -}}
        {{- $path := print "vscode://file" .Filename  -}}
        <a {{ printf "href=%q" $path | safeHTMLAttr }} rel="nofollow">
    {{- end -}}
{{- end -}}{{- /**/ -}}
```

{{< mnote up=11 >}}
**If and only if** Hugo’s server is configured to deliver the preview to a public IP address, there may be a security concern with `.Filename`. The link shows the full path to the content files. But by default the server only responds on {$localhost}.
{{< /mnote >}}

## {$vscode_end.html}

```go-html-template
{{ if .Site.IsServer }}
    {{- with .File }}
        </a>
    {{- end }}
{{ end }}{{- /**/ -}}
```

The partials are also available in the small module [hugo-mod-open-in-vscode](https://github.com/bowman2001/hugo-mod-open-in-vscode).

The Perplex theme places the link in the date or the title.
