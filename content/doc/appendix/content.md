---
author: Georg Makowski
date: "2021-12-21T22:32:04+01:00"
description: Partial for processing `.Content`
menu:
  doc:
    name: Content.html
    parent: appendix
    pre: find_replace
title: 'content.html'
weight: 855
---

Inspired from a suggestion by [Joe Mooring](https://discourse.gohugo.io/u/jmooring/summary) at the [_Hugo_ community](https://discourse.gohugo.io).

{{< highlight html "linenos=true" >}}
{{< readfile file="/themes/perplex/layouts/partials/content.html" >}}
{{< /highlight >}}

{{< sidenote up=29 >}}
The [9th line]({{< relref "#9" >}}) actually doesn’t look that crazy. [_Replacements_]({{< relref "replace" >}}) are applied everywhere in _Markdown_ and here the replacement for a text float shifts a part of its own regular expression to the right. Until now, I’ve found no way to stop this. But it’s only a problem in this meta-documentation and should be of no concern elsewhere.

{{< /sidenote >}}
