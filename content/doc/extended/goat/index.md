---
title: GoAT
description: Go ASCII Tool
subtitle: false
date: 2022-03-03T09:44:13+01:00
weight: 290
categories: [Markdown]
tags: [Diagram]
menu:
  doc:
    name: Goat
    parent: extended
    pre: schema
---

GoAT renders ASCII diagrams as SVG and is an implementation of Markdeep’s ASCII renderer. I became a part of Hugo recently.
{.p-first} <!--more-->

[Markdeep](http://casual-effects.com/markdeep/) provides a documentation for creating ASCII diagrams. We need to surround them with a [fenced code block]({{< relref "doc/basic/code#code-block" >}}) and the language identifier `goat` like this:

{{< playground "and the ASCII gets rendered into a nice SVG-diagram:" >}}

```goat
                  _______
.---------.      /      /    .-----.
|  Write  +-+-->/ Edit +-+->| Share |
'---------' ^  /______/  |   '-----'
            |            |
             '----------'
```

{{< /playground >}}

{{< mnote up=22 >}}
The font layout of GoAT is hard-coded into the Diagram-Editor. If the feature is getting used a lot with this theme, the text layout should get enhanced.
{{< /mnote >}}
