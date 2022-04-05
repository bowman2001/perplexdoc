---
date: "2021-08-19T12:39:30+02:00"
description: Tiny codes for missing inline HTML elements
featImg: brett-jordan-DDupbpu4MS4-unsplash.jpg
menu:
  doc:
    identifier: replace
    name: Replacements
    pre: find_replace
subtitle: false
title: Replacements
weight: 15
---

A few HTML inline tags have no counterpart in *_Goldmark_*. The *_Perplex_* theme offers a set of replacements to use them easily.  
{.p-lead} <!--more-->

## Quick Overview

Every element is surrounded by the curly braces `{` and `}`. The special character after the first one indicates the intended replacement. The following glyphs get enclosed in the corresponding HTML tags and are styled accordingly: 

| Element     |  Code   |  Result   |
|:------------|:-------:|:---------:|
| Superscript | \{^3\}  |   {^3}    |
| Subscript   |   _2    |   {_2}    |
| Keyboard    |   #K    |   {#K}    |
| Mark        |  !mark  |  {!mark}  |
| Citation    | =author | {=author} |
| Insertion   | +insert | {+insert} |

{{< sidenote up=16 >}}
These codes are substituted with the help of short regular expressions in the layout partial [`content.html`]({{< relref "content" >}}). Every call of `.Content` in the _Markdown_ templates is replaced with this partial. Other _Hugo_ themes could use it as well.  
{{< /sidenote >}}


[^todo]:| Break       | /       | break{/}here |



## Detailed Layout Examples
