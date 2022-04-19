---
title: GoAT
description: Go ASCII Tool
subtitle: false
date: 2022-03-03T09:44:13+01:00
weight: 720
featImg:
menu:
  doc:
    name: Goat
    identifier: goat
    parent: plugin
    pre: schema
draft: true
---

GoAT renders ASCII diagrams as SVG. It’s an implementation of [Markdeep’s](http://casual-effects.com/markdeep/) ASCII renderer.
{.p-lead} <!--more-->

## Syntax

The ASCII diagram is marked as a [fenced code block]({{< relref "code#code-block" >}}) with the language identifier `goat`

{{< highlight md >}}
```goat
                  _______
 .---------.     /      /    .-----.
 |  Write  +-+->/ Edit ++-->| Share |
 '---------' ^ /______/ |    '-----'
             |          |
              '--------'
```
{{< /highlight >}}

## Layout

```goat
                  _______
 .---------.     /      /    .-----.
 |  Write  +-+->/ Edit ++-->| Share |
 '---------' ^ /______/ |    '-----'
             |          |
              '--------'
```
