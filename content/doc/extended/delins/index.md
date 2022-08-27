---
author: Georg Makowski
date: "2021-09-13T22:45:36+02:00"
description: Explicitly mark changes in the content
menu: 
  doc:
    name: Delete or Insert
    parent: extended
    pre: remove
subtitle: false
title: Strike-through and Insertion
toc: false
weight: 240
categories: [Markdown]
tags: [Inline, Delete, Insert]
resources:
  - name: featured
    src: engin-akyurt-GqJUczrwIG4-unsplash.jpg
---

Correction marks highlight changes while working on a draft. Lately, strike-through has also become a hip visual style.
{.p-first} <!--more-->

To visually record important changes in our text, we can expressively cancel a part of the previous version by marking it ~~strike-through~~. The opposite action is to mark a part as {+inserted} later.
{#layex}

The extension _strike-through_ has been introduced by [GitHub](https://github.com), because a hell of a lot collaborative work is going on there. On a finalized page it tends to look unprofessional, if it's not some kind of change-log.

## Syntax

Strike-through is applied by surrounding text with two swung dashes `~~` on every side. There is no extension for an _insertion_, but you can use a [replacement]({{< relref "replace" >}}) starting with `+`.

## Layout

Please see the [second paragraph]({{< relref "#layex" >}}).
