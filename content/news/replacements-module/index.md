---
title: Replacement Module
description: Inject inline HTML into rendered Markdown with simple codes
subtitle: false
date: 2022-09-01T23:55:26+02:00
categories: [Module]
tags: [Replacement, Security]
---

Replacement codes let us avoid raw HTML in Markdown. Hugo can insert missing inline HTML tags into the rendered Markdown with simple regular expressions.
{.p-first} <!--more-->

The codes look like `{*text}`, where `*` is a placeholder for one or more ASCII characters. The superscript tag `<sup>` for example is marked by `^` and fits the following regular expression (Golang syntax):

```go-html-template
replaceRE `\{\^([^}]*)\}` "<sup>$1</sup>"
```

This syntax and method does not collide with any other as far as I know. And it’s definitely safe against attacks, because the regular expressions are applied after content security checks. But it’s still a workaround and a better option would be to write extensions for Hugo’s default Markdown renderer [Goldmark][goldmark].

{{< mnote up=14 >}}
[**Markdown attributes**](/doc/attribute) have a similar syntax, but they aren’t present in the rendered HTML code anymore. Except for code examples. That’s why we need to avoid any ASCII glyph, which also acts as an CSS attribute identifier.
{{< /mnote >}}

All replacements are chained together in one Hugo partial, which can process every piece of rendered Markdown content in the templates (mostly `.Content`).

**These replacements are published as a tiny [Hugo module on GitHub][module]**.

[module]: https://github.com/bowman2001/hugo-mod-replacements/
[goldmark]: https://github.com/yuin/goldmark "GitHub repository"
