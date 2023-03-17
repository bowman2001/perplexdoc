---
title: Replacement Module
description: Inject inline HTML into rendered Markdown with simple codes
subtitle: false
date: 2022-09-01T23:55:26+02:00
categories: [Module]
tags: [Replacements, Security]
---

Replacement codes help to avoid raw HTML in Markdown. Single curly braces and a few special ASCII characters let Hugo place simple missing inline HTML tags into the already rendered Markdown.
{.p-first} <!--more-->

The codes look like `{*text}`, where `*` is a placeholder for one or more ASCII characters. The superscript tag `<sup>` for example is marked by `^` and fits the following regular expression (Golang syntax):

```go-html-template
replaceRE `\{\^([^}]*)\}` "<sup>$1</sup>"
```

This syntax and method does not collide with any other as far as I know. And it’s definitely safe against attacks. But it’s still a workaround and a better option would be to write extensions for Hugo’s default Markdown renderer [Goldmark][goldmark].  

All replacements are chained together in one Hugo partial, which can process every piece of rendered Markdown content in the templates (mostly `.Content`).

**These replacements are published as a tiny [Hugo module on GitHub][module]**.

[module]: https://github.com/bowman2001/hugo-mod-replacements/
[goldmark]: https://github.com/yuin/goldmark "GitHub repository"