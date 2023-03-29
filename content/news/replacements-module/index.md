---
author: Georg Makowski
title: New Hugo Replacement Module
description: Inject inline HTML into rendered Markdown with simple codes
subtitle: false
date: 2022-09-01T23:55:26+02:00
categories: [Module]
tags: [Replacement, Security]
---

Replacement codes let us avoid raw HTML in Markdown. The theme places missing inline tags into the rendered Markdown with regular expressions.
{.p-first} <!--more-->

The codes look like `{*text}`, where `*` is a placeholder for one or more ASCII characters. The superscript tag `<sup>` for example is marked by `^` and fits the following regular expression (Golang syntax):

```go-html-template
replaceRE `\{\^([^}]*)\}` "<sup>$1</sup>"
```

This syntax does not collide with any other elements --- as far as I know. And it’s safe, because the replacements are applied after the Markdown rendering. Hugo discards all HTML in Markdown by default.

{{< mnote up=11 >}}
[**Markdown attributes**](/doc/attribute) have a similar syntax, but they usually aren’t present in the rendered HTML code anymore. Except for Markdown code examples including attributes. Therefore, the `#` and `.` signs are avoided.
{{< /mnote >}}

All replacements are chained together in one Hugo partial, which process every piece of rendered Markdown content in the templates (mostly `.Content`).

**These replacements are published as a tiny [Hugo module on GitHub][module]**.

This approach is only a workaround. To have extensions for Hugo’s Markdown renderer [Goldmark][goldmark] would be the better solution.

[module]: https://github.com/bowman2001/hugo-mod-replacements/
[goldmark]: https://github.com/yuin/goldmark "GitHub repository"
