---
title: Mermaid
description: Show Mermaid diagrams
subtitle: false
date: 2022-01-22T18:05:56+01:00 
weight: 730
menu:
  doc:
    name: Mermaid
    parent: plugin
    pre: account_tree
categories: [Markdown]
tags: [Diagram]
resources:
  - name: featured
    src: emily-goodhart-vu1BlBAZ_RU-unsplash.jpg
    params:
      alt: A woman with a big mono-fin swimming in a pool
---

Mermaid is a popular Javascript library creating SVG diagrams from text and code descriptions.
{.p-first} <!--more-->

The [Mermaid site](https://mermaid.js.org) offers Tutorials and good documentation.

## Syntax

```md {.lh15 .left}
‍```mermaid
stateDiagram-v2
    [*] --> Still
    Still --> [*]
    Still --> Moving
    Moving --> Still
    Moving --> Crash
    Crash --> [*]
‍```
```

The diagram descriptions are formatted as [code blocks](doc/basic/code) with the language identifier `mermaid`. The example shows the code for a state diagram.
{.clear}

## Layout

```mermaid {.fig--size-tiny .fig--posh-left}
stateDiagram-v2
    [*] --> Still
    Still --> [*]
    Still --> Moving
    Moving --> Still
    Moving --> Crash
    Crash --> [*]
```

{{< farfar 3 >}}

```mermaid {.fig--size-normal}
mindmap
  root((mindmap))
    Origins
      Long history
      Popularisation
        British popular psychology author Tony Buzan
    Research
      On effectivness<br/>and features
      On Automatic creation
        Uses
            Creative techniques
            Strategic planning
            Argument mapping
    Tools
      Pen and paper
      Mermaid
```
