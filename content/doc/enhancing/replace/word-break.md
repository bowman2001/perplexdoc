---
title: Word Break
description: Break long words manually
subtitle: false
date: 2023-12-12 13:15:07+01:00
weight: 492
authors:
- Georg Makowski
categories:
- markdown
tags:
- linebreak
- replacement
menu:
  doc:
    identifier: word-break
    name: Word Break
    parent: replace
    pre: sort
---

Very long strings that are not hyphenated automatically may need an optional line break without a hyphen. We can generate the HTML tag `<wbr>` with this replacement code.
{.p-first}
<!--more-->

## Syntax

Place one or more `{‍w}` in the middle of the long word where a line break without a hyphen should be applied if necessary:

```md {.expand}
Super{‍w}califragilisticexpialidociousissuper{‍w}califragilisticexpialidociousissuper{‍w}califragilisticexpialidocious.
```

## Layout

Super{w}califragilisticexpialidociousissuper{w}califragilisticexpialidociousissuper{w}califragilisticexpialidocious.

As you may see, the browser may not follow our suggestion for the word break. The version 120.0.6099.109 the Chrome browser breaks the word **with a hyphen at another place** for example.
{.box-warn} 