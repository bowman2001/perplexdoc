---
author: Georg Makowski
title: How to use replacements
description: Replacement codes for some HTML inline tags
subtitle: false
date: 2022-04-19T13:00:09+02:00
weight: 410
featImg:
menu:
  doc:
    name: Howto
    identifier: howtoreplace
    parent: replace
    pre: help_outline
---

Place your lead paragraph here. If you don't need special styling, remove the attribute. The _more-tag_ marks the paragraph as the content _summary_ for this page.
{.p-lead} <!--more-->

## Syntax

Every element is surrounded by the curly braces `{` and `}`. A special character after the first brace indicates the intended replacement.

`^`
: Superscript `<sup>`

`_`
: Subscript `<sub>`

`#`
: Keyboard `<kbd>`

`!`
: Mark `<mark>`

`=`
: Citation `<cite>`

`+`
: Insertion `<ins>`
{.dl-tight}

## Quick Overview of the Layout

_Perplex_ applies the following replacements and styles them like the following examples:

| Element     |  Code   |  Result   |
|:------------|:-------:|:---------:|
| Superscript |   ^3    |   {^3}    |
| Subscript   |   _2    |   {_2}    |
| Keyboard    |   #K    |   {#K}    |
| Mark        |  !mark  |  {!mark}  |
| Citation    | =author | {=author} |
| Insertion   | +insert | {+insert} |

{{< sidenote up=16 >}}
These codes are substituted with the help of short regular expressions in the layout template [`content.html`]({{< relref "content" >}}). Every call of `.Content` in the _Markdown_ templates is replaced with this partial. Other _Hugo_ themes could use it as well.  
{{< /sidenote >}}

[^todo]:| Break       | /       | break{/}here |
