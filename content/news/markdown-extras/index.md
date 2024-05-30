---
authors: [Georg Makowski]
title: 'Extra Markdown extensions'
linktitle: Extra extensions
description: "Extra Markdown extensions"
date: 2024-05-14T20:16:07+02:00
categories: [markdown]
tags: [hugo]
---

Since version {$0.126.0} Hugo offers to render additional inline markup for super- and subscripts, insertions, and marked content.
{.p-first}
<!--more-->

When we like to write 1^st^, H~2~O, ==marked==, or ++inserted content++ we can achieve this with extended Goldmark markup:

```md
1^st^, H~2~O, ==marked==, or ++inserted content++
```

The necessary configuration options for these new markup extensions are described in the [Hugo documentation][doc] and can be enabled separately.

The extensions are part of [Hugo's goldmark extensions][extensions]. Thanks a lot to BEP and Joe Mooring for their implementation suggestions, the integration, and some code improvements.

[doc]: https://gohugo.io/getting-started/configuration-markup/#goldmark
[extensions]: https://github.com/gohugoio/hugo-goldmark-extensions