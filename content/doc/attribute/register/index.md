---
author: Georg Makowski
title: Attribute Register
description: A list of all specific attributes for Perplex
subtitle: false
date: 2022-07-20T23:21:00+02:00 
weight: 390
menu:
  doc:
    name: Register
    parent: attributes
    pre: app_registration
categories: [Markdown]
tags: [Attribute] 
toc: false
---

All element specific attributes should be listed here.
{.p-first} <!--more-->

To attach the attributes correctly in Markdown, have a look at the short [Howto]({{< relref "howto-attribute" >}}).

|Element    | Attribute Name | CSS-class |
|:----------|:--------|-------:|
| Headings  | [Paragraph heading]({{< relref "doc/basic/headings#h-p" >}}) | {$.h-p} |
| | Small paragraph h. | {$.h-p .h-p-s} |
| | Warning | {$.h-warn} |
| | Info | {$.h-info} |
| | Tip | {$.h-tip} |
| Paragraph | Standfirst paragraph | {$.p-first} |
| | Big paragraph | {$.p-big} |
| | Small paragraph | {$.p-small} |
| | Meta paragraph | {$.p-meta} |
| Blockquote | Hero quote | {$.blockquote-hero} |
| Ordered list | continue counting | {$.ol-continue} |
