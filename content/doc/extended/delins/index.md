---
title: Strike-through and Insertion
linktitle: Delete & insert
description: Explicitly mark changes in the content
subtitle: false
date: '2021-09-13T22:45:36+02:00'
weight: 240
authors:
- Georg Makowski
categories:
- Markdown
tags:
- Inline
menu:
  doc:
    name: Delete & insert
    parent: extended
    pre: remove
resources:
- name: featured
  src: engin-akyurt-GqJUczrwIG4-unsplash.jpg
  params:
    alt: A few colored pencils
    anchor: Top
toc: false
---

Correction marks highlight changes while working on a draft. Lately, strike-through has also become a hip visual style.
{.p-first} <!--more-->

To visually record important changes in our text, we can expressively cancel a part of the previous version by marking it ~~strike-through~~. The opposite action is to mark a part as ++inserted++ later.
{#layex}

## Syntax

Strike-through is applied by surrounding text with two swung dashes on every side like `~~deletion~~`. There is extra Markdown syntax for an insertion available in Hugo working like `‍++insertion++`. This extra extension needs to be enabled in the markup configuration.

## Layout

See the [second paragraph](#layex).

Consider that these markings tend to look unprofessional on a finalized page if it's not some kind of draft or change log.
{.box-info}
