---
authors: [Georg Makowski]
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
    pre: help
categories: [Markdown]
tags: [replacement]
---

Text enclosed by curly braces `{` and `}` and special ASCII signs is replaced with missing Markdown tags after rendering. `x{‍^3}` for example gets turned into x{^3}.
{.p-first} <!--more-->

## Quick Overview

Perplex includes the following replacement codes and styles them:

| Element     |     Code     |   Result    |
|:------------|:------------|:-----------|
| Superscript |    {‍^3}      |    {^3}     |
| Subscript   |    {‍_2}      |    {_2}     |
| Keyboard    |    {‍~K}      |    {~K}     |
| Variable    | {‍$variable}  | {$variable} |
| Mark        |   {‍!mark}    |   {!mark}   |
| Citation    |  {‍=work}     |  {=work}  |
| Insertion   |  {‍+insert}   |  {+insert}  |
| Conditional break | a{‍/}b |  a{/}b |
{.normal}
 
These codes are substituted with the help of short regular expressions in the layout template [{$replacements.html}](/doc/appendix/replacements). It processes the Hugo variable `.Content` that contains the rendered Markdown as an HTML string. 

The substitutions are safe because Goldmark checks these codes like any other Markdown and discards any raw HTML before they are replaced.

## Available as a module

The replacement template is available in a separate repository: [hugo-mod-replacements](https://github.com/bowman2001/hugo-mod-replacements).

**These substitutions are reliable but a hack**. The codes can’t be parsed by Markdown renderers. A better solution would be to add [extensions for Goldmark](https://github.com/yuin/goldmark/tree/master/extension) and for many elements there already is a relatively common syntax in other Markdown flavors. If they would be available for Goldmark, we could run a regex parser for the last time on these replacements and change them into regular extended syntax.
{.box-info}
