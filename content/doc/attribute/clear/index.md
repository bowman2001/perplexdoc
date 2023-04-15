---
author: Georg Makowski
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

Sometimes we don’t want the text to float around an embedded element anymore.
{.p-first}
<!--more-->

## The problem

On a mobile device, the following layout problem may be unrecognizable. Please use a device that shows the optimal text width (viewport &ge; {$600px}).

![](splash?size=small) We have an embedded element like this image and the text floats around it. We want this initially, but now we would like to start a new subsection with a heading and that doesn’t look good.

### New subsection besides the image

This new subsection should start after the embedded image so that the heading resides on the left as usual.

## The solution

![](bigsplash?size=small) Again, we have an embedded element and the text floats around it. Now we clear the float by adding an attribute to the containing paragraph. And the floating stops for all the following content.
{.clear}

### Subsection after the image

That’s it.

## Syntax

The class attribute to clear a float is `{.clear}`.
