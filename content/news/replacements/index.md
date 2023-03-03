---
title: Replacement module
description: Inject inline HTML into rendered Markdown
subtitle: false
date: 2022-09-01T23:55:26+02:00
categories: [Module]
tags: [Replacements, Security]
draft: true
---

Replacement codes help to avoid raw HTML in Markdown. Single curly braces and special ASCII characters let Hugo inject tags into the already rendered HTML with regular expressions.
{.p-first} <!--more-->

The codes look like `{*text}`, where `*` is a placeholder for one or more ASCII characters marking the indented replacement. The superscript tag `<sup>` for example is marked by `^` and triggers the following regular expression:

```go-html-template
replaceRE `\{\^([^}]*)\}` "<sup>$1</sup>"
```

All replacements can be chained together into one Hugo partial, which processes every piece of rendered content in the templates (mostly `.Content`). The replacements used in this Hugo theme are published separately as a tiny [Hugo module][module].

[module]: https://github.com/bowman2001/hugo-mod-replacements/