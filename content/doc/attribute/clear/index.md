---
authors: [Georg Makowski]
title: Clear a floating element
description: Stop text from floating around an embedded element
subtitle: false
date: 2023-04-14T22:02:51+02:00 
menu:
  doc:
    name: Clear
    parent: attribute
    pre: layers_clear
categories: [Attribute]
weight: 380
---

Sometimes we want the text to stop floating around an embedded element. Then we have to place a good ol’ `.clear` attribute.
{.p-first}
<!--more-->

On a small mobile device, the following layout problem is probably unrecognizable. Please use a device that shows the full-text width (view-port &ge; {$600px}) to study the example.

## The problem

![](splash?size=small) When we embed an element like the image here the text floats around it. That’s what we want initially but now we start a new subsection.

## New section beside the image

This new subsection still floats around the embedded image! Instead, we would like to begin a new block after the embedded element with the heading on the left as usual.

## The solution

![](bigsplash?size=small) Again, we have an embedded element and the text floats around it as it should. Now we clear the float by adding the attribute `{.clear}` to the containing paragraph. And the floating stops for all the following content.
{.clear}

## The section after the image

That’s it. We got our separate section.
