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

Surrounding chunks of text with the single curly braces `{` and `}` and a special ASCII sign lets Hugo inject inline HTML tags with regular expressions. This kind of replacement code can be used in Markdown instead of enabling raw HTML.
{.p-first} <!--more-->

The codes all look like `{*text}`, where `*` is a placeholder for an ASCII sign triggering the indented replacement. The one for the insertion tag `<ins>` uses `+` as identification character and triggers the following replacement.

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
