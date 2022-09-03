---
title: Replacements
description: Short expressions in single curly braces
subtitle: false
date: 2022-09-01T23:55:26+02:00
weight: 1
categories: [Hugo]
tags: [HTML, Security]
draft: true
resources: 
  - src: Hugo.svg
    name: featured
---

Replacements let Hugo inject some missing inline HTML tags. They can be placed inside Markdown without enabling HTML.
{.p-first} <!--more-->

My first implementation fell short, because I cleared the inserted HTML with the obligatory function [{$safeHTML}](https://gohugo.io/functions/safehtml/) without considering the consequences. It was possible to place HTML tags inside the replacement codes! The replacements did all look like that:

```go-html-template
replaceRE `\{\+([^}]*)\}` "<ins>$1</ins>"
```

A solution to this threat is to disallow filled angled brackets inside the replacement code.   

## Testing Ground

{{< playground >}}
{+This is an insertion without any nasty intent}
{{< /playground >}}

{{< mnote up=17 >}}
Funny, but unavoidable, the replacement also takes place inside the code meant to demonstrate its function.
{{< /mnote >}}

{{< playground >}}
{+This could have been an insertion until <nasty>nasty tags</nasty> appeared}
{{< /playground >}}
