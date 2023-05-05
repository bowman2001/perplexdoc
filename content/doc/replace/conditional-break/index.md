---
authors: [Georg Makowski]
title: Conditional Break
description: This line break only shows for full-width text layouts
subtitle: false
date: 2023-04-18T14:27:49+02:00 
menu:
  doc:
    identifier: conditional-break 
    name: Conditional Break
    parent: replace
    pre: drag_handle
categories: [design]
tags: [replacement, fluid-responsive]
weight: 490
---

Sometimes we like to break a title or a line only for those layouts, which show the text in full width.
{.p-first}
<!--more-->

## Syntax

The code `{‍‍‍‍/}` is placed between the words **without additional spacing** like 

```md
### A compact heading{‍/}looks visually appealing
```

## Layout

The layout changes depending on the viewport width. The break is only visible on larger screens.

### A compact heading{/}looks visually appealing

{{< farfarshort 1 >}}