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

Replacements are kind of a hack, but they are easy to use. I’ve been waiting too long now for the right solution: Some extensions for Goldmark, which can be enabled in Hugo.
{.p-first} <!--more-->

## Quick Overview

Perplex includes the following replacement codes and styles them like this:

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
We can’t see the result of the line break because the `<br>` tag is invisible.
{{< /mnote >}}

These codes are substituted with the help of short regular expressions in the layout template [{$replacements.html}]({{< relref "doc/appendix/replacements" >}}). It processes the Hugo variable `.Content` which contains the rendered Markdown content as HTML string. 

### Available as module {.h-p .h-tip}
The file used by Perplex is the only essential content of the repository [hugo-mod-replacements](https://github.com/bowman2001/hugo-mod-replacements).
