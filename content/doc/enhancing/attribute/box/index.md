---
title: Boxes
description: Annotation boxes for important information
subtitle: false
date: 2023-05-23 22:05:07+02:00
weight: 327
authors:
- Georg Makowski
categories:
- markdown
tags:
- attribute
menu:
  doc:
    name: Box
    parent: attribute
    pre: check_box_outline_blank
resources:
- src: klara-vernarcova-60zqbdiLHg0-unsplash.jpg
  name: featured
  params:
    alt: Cardboard boxes
---

There is one box for framing content like a figure. And there are four kinds of annotation boxes for important messages: **Danger**, **warning**, **info**, and **success**.
{.p-first}
<!--more-->

The normal box allows framing content like a figure.
{.box}

**Danger** {{% pangram 3 %}}
{.box-danger data-pagefind-ignore="all"}

**Warning** {{% pangram 3 %}}
{.box-warn data-pagefind-ignore="all"} 

**Info** {{% pangram 3 %}}
{.box-info data-pagefind-ignore="all"}

**Success** {{% pangram 3 %}}
{.box-success data-pagefind-ignore="all"}

Another more subtle approach for important messages is to [highlight headings](/doc/basic/headings#highlighted-headings) with similar attributes.
