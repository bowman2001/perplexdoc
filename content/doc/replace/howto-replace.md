---
author: Georg Makowski
title: How to use replacements
linktitle: Howto
description: Curly braces and an identifier in Markdown
subtitle: false
date: 2022-04-19T13:00:09+02:00
weight: 410
menu:
  doc:
    name: Howto
    identifier: howto-replace
    parent: replace
    pre: help_outline
categories: [Markdown]
tags: [replacement]
---

We enclose a piece of text by curly braces `{` and `}` and add an ASCII sign after the first one. `x{‍^3}` for example gets turned into x{^3}.
{.p-first} <!--more-->

## Quick Overview

Perplex includes the following replacement codes and styles them:

| Element     |     Code     |   Result    |
|:------------|:------------:|:-----------:|
| Superscript |    {‍^3}      |    {^3}     |
| Subscript   |    {‍_2}      |    {_2}     |
| Keyboard    |    {‍%K}      |    {%K}     |
| Variable    | {‍$variable}  | {$variable} |
| Mark        |   {‍!mark}    |   {!mark}   |
| Citation    |  {‍=work}     |  {=work}  |
| Insertion   |  {‍+insert}   |  {+insert}  |

These codes are substituted with the help of short regular expressions in the layout template [{$replacements.html}]({{< relref "doc/appendix/replacements" >}}). It processes the Hugo variable `.Content` which contains the rendered Markdown as HTML string. The procedure is safe, because Goldmark treats the curly braces and their content like any other Markdown and discards any raw HTML to prevent malicious code.

## Available as a module {.h-tip}
A copy of the replacements template gets included from a separate repository: [hugo-mod-replacements](https://github.com/bowman2001/hugo-mod-replacements).

To manipulate our generated HTML with simple regular expressions is secure and fast. But these are syntax hacks which can’t be parsed by Markdown renderers. A better solution would be to add [extensions for Goldmark](https://github.com/yuin/goldmark/tree/master/extension) and for many elements there already is a relatively common syntax in other Markdown flavors. If they would be available for Goldmark, we could run a regex parser for the last time on these replacements and change them into regular extended syntax.
