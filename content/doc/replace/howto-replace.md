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
| Line Break  |     a{‍/}b     |     a{/}b     |

{{< mnote up=8 >}}

This line break is **by no means** a solution for [ordinary line breaks]({{< relref "doc/basic/linebreak" >}}). Its only meant for [headings]({{< relref "doc/basic/headings" >}}).
{{< /mnote >}}

These codes are substituted with the help of short regular expressions in the layout template [{$replacements.html}]({{< relref "doc/appendix/replacements" >}}). It processes the Hugo variable `.Content` which contains the rendered Markdown content as HTML string. The procedure is safe, because Goldmark treats the curly braces and their content like any other Markdown and discards raw HTML to prevent script attacks. Should you enable raw HTML, security is not your concern anyway.

### Available as a module {.h-p .h-tip}
The template file for the theme has a separated repository [hugo-mod-replacements](https://github.com/bowman2001/hugo-mod-replacements).

To manipulate our generated HTML with regular expressions isn’t bad, because its secure and fast. But it’s a syntax hack and can’t be parsed the usual way. There are relatively common syntax extensions for most of these elements which other Markdown renderers have already implemented. [Extensions for Goldmark](https://github.com/yuin/goldmark/tree/master/extension) which could be enabled in Hugo, would be the better solution. Then we could run a regex parser for the last time on these replacements and turn them into extended Markdown syntax.
