---
authors: [Georg Makowski]
title: 'Markdown extra extensions'
linktitle: Extra extensions
description: "Extra Markdown extensions"
date: 2024-05-14T20:16:07+02:00
categories: [markdown]
tags: [hugo]
draft: true
---

Since version {$0.126.0} Hugo offers to render additional inline markup for super- and subscripts, insertions, and marked content.
{.p-first}
<!--more-->

When we like to write 1^st^, H~2~O, ==marked==, or ++inserted content++ we can achieve this with extended Goldmark markup:

```md
1^st^, H~2~O, ==marked==, or ++inserted content++
```

The necessary configuration options described in the [Hugo documentation][doc] can be enabled separately.

[doc]: https://gohugo.io/getting-started/configuration-markup/#goldmark