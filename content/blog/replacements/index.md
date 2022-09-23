---
title: Replacements
description: Short expressions in single curly braces
subtitle: false
date: 2022-09-01T23:55:26+02:00
weight: 1
categories: [Content]
tags: [Replacements, HTML, Security]
draft: true
---

Single curly braces and a special ASCII sign let Hugo inject inline HTML tags with the help of regular expressions. Replacement codes help to avoid raw HTML in Markdown.
{.p-first} <!--more-->

The codes all look like `{+text}`, where `+` is a placeholder for an ASCII sign triggering the indented replacement. The one here for the insertion tag `<ins>` uses `+` as identification character and triggers the following replacement.

```go-html-template
replaceRE `\{\+([^}]*)\}` "<ins>$1</ins>"
```