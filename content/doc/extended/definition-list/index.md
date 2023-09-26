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
: {{% pangram 3 %}}
: {{% pangram 3 %}}

Second Term with
Term Alternative
: {{% pangram 3 %}}
{.layout-box data-pagefind-ignore="all"}

This style looks especially well as a literature list for example:

Horkheimer, Max und Theodor W. Adorno
: _Dialektik der Aufklärung: Philosophische Fragmente_. 18\. Aufl. Frankfurt am Main: Fischer Taschenbuch Verl., 2009.

Wiener, Norbert
: _Kybernetik: Regelung und Nachrichtenübertragung im Lebewesen und in der Maschine_. Econ classics. Düsseldorf: ECON-Verl., 1992.
{lang="de" .layout-box}

### Tight

For a list with short single terms and only one short definition, a tighter is probably more suitable. We apply it with the [attribute](/doc/enhancing/attribute) `{.dl-tight}`:

First
: {{% pangram 1 %}}

Second
: {{% pangram 1 %}}
{.dl-tight .layout-box data-pagefind-ignore="all"}

### Loose

Short terms with long descriptions will look better with a loose style, that is applied by the [attribute](/doc/enhancing/attribute) `{.dl-loose}`

First term
: {{% pangram 3 %}}
: {{% pangram 3 %}}

Second term
: {{% pangram 3 %}}
{.dl-loose .layout-box data-pagefind-ignore="all"}

In the case we need a little more space for the terms, we can apply `.dl-loose3`. The normal loose style reserves a quarter of the full text width for terms — with this attribute we get one third:

First very long term
: {{% pangram 3 %}}
: {{% pangram 3 %}}

Second very long term
: {{% pangram 3 %}}
{.dl-loose3 .layout-box data-pagefind-ignore="all"}

### Icon list

When can also use icons to define the aspects of our structured information. The attribute `{.dl-icon}` provides a fitting layout. Often the corresponding details are short, so we can combine the attribute with a column layout. Therefor, the attribute set here is `{.dl-icon .col2}`:

{{< material-symbol hd big >}}
: {{% pangram 2 %}}

{{< material-symbol preview big >}}
: {{% pangram 2 %}}

{{< material-symbol volcano big >}}
: {{% pangram 2 %}}

{{< material-symbol person big >}}
: {{% pangram 2 %}}

{{< material-symbol rocket big >}}
: {{% pangram 2 %}}

{{< material-symbol water big >}}
: {{% pangram 2 %}}
{.dl-icon .col2 data-pagefind-ignore="all"}