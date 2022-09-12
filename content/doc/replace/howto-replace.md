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
categories: [Theme]
tags: [Replacements]
---

The syntax is simple: The targeted piece of text is enclosed by the curly braces `{` and `}` and an ASCII sign after the first one. `x{‍^3}` for example gets turned into x{^3}.
{.p-first} <!--more-->

## Quick Overview

Perplex includes the following replacement codes and styles them:

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

{{< mnote up=8 >}}
We can’t see the result of the line break because the `<br>` tag has no effect without text.
{{< /mnote >}}

These codes are substituted with the help of short regular expressions in the layout template [{$replacements.html}]({{< relref "doc/appendix/replacements" >}}). It processes the Hugo variable `.Content` which contains the rendered Markdown content as HTML string. The procedure is safe, because Goldmark treats the curly braces and their content like any other Markdown and discards raw HTML to prevent script attacks. Should you enable raw HTML, security is not your concern anyway.

### Available as a module {.h-p .h-tip}
The template file for the theme gets included from the separated repository [hugo-mod-replacements](https://github.com/bowman2001/hugo-mod-replacements).

To run regex on your generated HTML is fine, because its secure and also fast. But its obviously a somewhat clumsy solution. Extensions for Goldmark, which can be enabled in Hugo, would be the right one. Then we would could run an external regex parser for the last time and turn these replacements into extended Markdown syntax.
