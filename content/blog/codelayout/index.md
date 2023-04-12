---
author: Georg Makowski
title: Code Layout Demonstration
description: Code layout without a sidebar
linktitle: Code Demo
date: 2022-11-01T14:54:07+01:00
categories: [Markdown]
tags: [Code, Inline, Block]
series: [Demo]
---

The main text column offers space for {$80} characters of code in one line. When we need {$120} to fit in, we can expand code boxes into the marginal column(s).
{.p-first} <!--more-->

This is a layout demonstration for pages without a sidebar. The docs contain the [syntax options](/doc/basic/code).

## Layout

### Inline

The HTML tag to mark the beginning of code is `<code>`. And to mark the end we use the corresponding closing tag `</code>`. Markdown text surrounded by backticks like `` `text` `` gets enclosed by these tags.

### Block

#### Without line numbers

```md
The *HTML* tag at the **beginning** of code is `<code>`.
And to mark the **end** we use the corresponding closing tag `</code>`.
```

#### With line numbers (table layout)

```md {linenos=true}
The *HTML* tag at the **beginning** of code is `<code>`.
And to mark the **end** we use the corresponding closing tag `</code>`.
```
#### Special sizes

For code examples with long lines, we can expand the block into the margin:

```go {class=large linenos=true}
// NodeRendererFunc is a function that renders a given node.
type NodeRendererFunc func(writer util.BufWriter, source []byte, n ast.Node, entering bool) (ast.WalkStatus, error)

// A NodeRenderer interface offers NodeRendererFuncs.
type NodeRenderer interface {
 // RendererFuncs registers NodeRendererFuncs to given NodeRendererFuncRegisterer.
 RegisterFuncs(NodeRendererFuncRegisterer)
}
```

When all code lines are no longer than 40 characters, we can place them inside or beside the text:

```json {.left linenos=true}
{
  "firstName": "John",
  "lastName": "Smith",
  "age": 35,
  "profession": "Last Man Standing"
}
```

{{< farfar 1 >}}

```bash {.lh15 .right}
├── assets
├── config
├── package.json
├── public
├── resources
└── themes
```

{{< farfar 1 >}}
