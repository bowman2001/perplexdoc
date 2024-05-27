---
title: Clear a floating element
linktitle: Clear
description: Stop text from floating around an embedded element
subtitle: false
date: 2023-04-14 22:02:51+02:00
weight: 347
authors:
- Georg Makowski
categories:
- markdown
tags:
- attribute
menu:
  doc:
    name: Clear
    parent: attribute
    pre: layers_clear
resources:
- name: featured
  src: ali-abdul-rahman-Xva-TYqwHhA-unsplash.jpg
  params:
    alt: Clear water
- name: splash
  src: mulyadi-JJMoAiVl9jA-unsplash.jpg
  params:
    alt: splash of water
    width: tiny
    caption: none
---

Sometimes we want the text to stop floating around an embedded element. We need a good ol’ `.clear` attribute, then.
{.p-first}
<!--more-->

On a small mobile device, the following layout problem is probably unrecognizable. To study the example, please use a device with a view-port &ge; {$600px}.

## The problem

![](splash) When we embed an element like the image here the text floats around it. That’s what we want initially but now we start a new subsection.

## New section beside the image

This new subsection still floats around the embedded image! Instead, we would like to begin a new block after the embedded element with the heading on the left as usual.

## The solution

![](splash) Again, we have an embedded element and the text floats around it as it should. Now we clear the float by adding the attribute `{.clear}` to the containing paragraph. And the floating stops for all the following content.
{.clear}

## The section after the image

That’s it. We got our separate section.
