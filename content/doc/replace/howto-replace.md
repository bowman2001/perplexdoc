---
author: Georg Makowski
title: How to use replacements
description: Curly braces and an identifier
subtitle: false
date: 2022-04-19T13:00:09+02:00
weight: 410
menu:
  doc:
    name: Howto
    identifier: howto-replace
    parent: replace
    pre: help_outline
---

Place your lead paragraph here. If you don't need special styling, remove the attribute. The _more-tag_ marks the paragraph as the content _summary_ for this page.
{.p-first} <!--more-->

## Syntax

Every element is surrounded by the curly braces `{` and `}`. A special character after the first brace indicates the replacement.

`^`
: Superscript `<sup>`

`_`
: Subscript `<sub>`

`#`
: Keyboard `<kbd>`

`$`
: Variable `<var>`

`!`
: Mark `<mark>`

`=`
: Citation `<cite>`

`+`
: Insertion `<ins>`

`/`
: Line break `<br>`
{.dl-tight .col2}

## Quick Overview of the Layout

Perplex applies the following replacements and styles them like the following examples:

| Element     |     Code     |   Result    |
|:------------|:------------:|:-----------:|
| Superscript |    {‍^3}     |    {^3}     |
| Subscript   |    {‍_2}     |    {_2}     |
| Keyboard    |    {‍#K}     |    {#K}     |
| Variable    | {‍$variable} | {$variable} |
| Mark        |   {‍!mark}   |   {!mark}   |
| Citation    |  {‍=author}  |  {=author}  |
| Insertion   |  {‍+insert}  |  {+insert}  |
| Line Break  |     {‍/}     |     {/}     |

{{< mnote up=16 >}}
These codes are substituted with the help of short regular expressions in the layout template [`content.html`]({{< relref "doc/appendix/replacements" >}}). Every direct call of `.Content` in the Markdown templates is replaced with this partial, which processes `.Content`.  
{{< /mnote >}}

[^todo]:| Break       | /       | break{/}here |
