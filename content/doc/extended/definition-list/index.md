---
authors: [Georg Makowski]
date: "2021-03-24T21:44:53+01:00"
description: A series of terms and associated details
menu:
  doc:
    name: Definition List
    parent: extended
    pre: hd
subtitle: false
title: Definition List
weight: 210
categories: [Markdown]
tags: [List, Block]
resources:
  - name: featured
    src: sandy-millar-Kl4LNdg6on4-unsplash.jpg
    params: 
      alt: A few entries in a printed dictionary
---

Definition lists consist of **terms** as list markers, which are associated with **details** in the list entries.
{.p-first} <!--more-->

The definition list is an essential tool to structure textual content on a small scale. There is only one Markdown syntax structure, but Perplex offers some nice styling options.  

## Syntax

```md
First Term
: Far far away, behind the word mountains, far from the countries Vokalia and 
Consonantia, there live the blind texts.
: Far far away, behind the word mountains, far from the countries Vokalia and
Consonantia, there live the blind texts.

Second Term with
Term Alternative
: Far far away, behind the word mountains, far from the countries Vokalia and
Consonantia, there live the blind texts.
```

Every list item begins with one or more **terms**. The lines after them contain the **details** starting with a colon followed by a space. An **empty line** between the list items is mandatory.

## Layout

The layout has to consider the length and number of all the components. The default version is working with every combination of terms and descriptions the additional options are not. The **tight** style suits single terms with details, which do usually not exceed one line on larger screens. The **loose** style is intended for terms with extensive details.

### Standard

The standard layout resembles the default style of common browsers:

First Term
: {{< farfarshort 1 >}}
: {{< farfarshort 1 >}}

Second Term with
Term Alternative
: {{< farfarshort 1 >}}
{.box}

This style looks especially well as a literature list for example:

Horkheimer, Max und Theodor W. Adorno
: _Dialektik der Aufklärung: Philosophische Fragmente_. 18\. Aufl. Frankfurt am Main: Fischer Taschenbuch Verl., 2009.

Wiener, Norbert
: _Kybernetik: Regelung und Nachrichtenübertragung im Lebewesen und in der Maschine_. Econ classics. Düsseldorf: ECON-Verl., 1992.
{lang="de", .box}

### Tight

For a list with short single terms and only one short definition, a tighter is probably more suitable. We apply it with the [attribute](/doc/attribute) `{.dl-tight}`:

First
: Far far away, behind the word mountains...

Second
: There live the blind texts.
{.dl-tight, .box}

### Loose

Short terms with long descriptions will look better with a loose style, that is applied by the [attribute](/doc/attribute) `{.dl-loose}`

First Term
: {{< farfarshort 1 >}}
: {{< farfarshort 1 >}}

Second Term
: {{< farfarshort 1 >}}
{.dl-loose, .box}

In the case we need a little more space for the terms, we can apply `.dl-loose3`. The normal loose style reserves a quarter of the full text width for terms, with this attribute we get a third.
