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
toc: false
---

GoAT renders ASCII diagrams as SVG and is a Golang implementation of Markdeep’s ASCII renderer.
{.p-first} <!--more-->

GoAt is not directly an extension of the Markdown renderer, but a new option for rendering code blocks with Hugo.

[Markdeep](http://casual-effects.com/markdeep/) provides the documentation to create ASCII diagrams for GoAT. We need to surround them with a [fenced code block](/doc/basic/code#code-block) and the language identifier `goat` like this:

{{< playground "And the ASCII gets transformed into a nice SVG-diagram:" >}}

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
The font layout of GoAT is hard-coded into the resulting SVG. The typography should get adapted to the theme. But this looks complicated to me.
{{< /mnote >}}
