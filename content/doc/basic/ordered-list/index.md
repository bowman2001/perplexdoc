---
author: Georg Makowski
date: "2021-03-24T21:44:46+01:00"
description: List marked with ordered natural numbers
featImg: jan-antonin-kolar-lRoX0shwjUQ-unsplash.jpg
menu:
  doc:
    name: Ordered List
    parent: basic
    pre: format_list_numbered
subtitle: false
title: Ordered List
weight: 30
---

Ordered lists suggest a very clear structure. Don't let them get too long — they get annoying after a while.
{.p-lead} <!--more--> 

## Syntax

List items begin with an integer followed by a period and a space. The order of the numbers is not important, we even may use always the same number. Markdown treats the numbers as markers and ignores their values. Every list will follow 1, 2, 3… .

{{< sidenote up=9 >}}

##### The first number
gets injected as the `start` attribute of the `<ol>`-tag. But this value affects only the browser-internal counter and because _Perplex_ declares CSS-counters all lists start with 1 by default. 

It’s possible to manipulate the counters with attributes — see [With Interruption]({{< relref "#interruption" >}})
{{< /sidenote >}}

## Layout

The examples here are short, because the formatting is basically the same as for [unordered lists]({{< relref "unordered-list" >}}).

### Tight List

1. First item
2. Second item
3. Third item

### Nested Loose List with interruption {#interruption}

1. {{< farfar 1 >}}

    1. {{< farfarshort 1 >}}
   
    2. {{< farfarshort 1 >}}

2. {{< farfarshort 2 >}}

##### The interruption {.up-1}
of an ordered list for a general remark should not interrupt the counting, we need to go on afterwards where we left. The class [attribute]({{< relref "attribute" >}}) `{.ol-continue}` lets a list continue, where the previous did stop.
{.up-1}

1. {{< farfarshort 1 >}}

   1. {{< farfarshort 1 >}}

      1. {{< farfarshort 1 >}}
      
      2. {{< farfarshort 1 >}}
      3. {{< farfarshort 1 >}}
      4. {{< farfarshort 1 >}}

   1. {{< farfarshort 3 >}}

2. {{< farfarshort 1 >}} 
{.ol-continue}
