---
title: Section
description: Wrap a Markdown section with an arbitrary class
subtitle: false
date: 2023-08-02 09:58:25+02:00
weight: 9999
authors:
- Georg Makowski
categories: []
tags: []
menu:
  doc:
    identifier: section
    name: Section
    parent: shortcode
    pre: remove
resources:
- src: null
  name: featured
  params:
    alt: null
    attr: null
    attrlink: null
- src: null
  name: null
  params:
    alt: null
    attr: null
    attrlink: null
draft: true
---

**Placeholder**: Put your own summary paragraph here. It may contain inline markup but links are impossible.
{.p-first}
<!--more-->

## Second

### Third

{{< begin "container" >}}

![](bigsplash?posh=left)

#### Fourth

{{% pangram 5 %}}
{.placeholder data-pagefind-ignore="all"}
{{< end "container" >}}

{{< begin "test" >}}

#### Banana

{{% pangram 5 %}}
{.placeholder data-pagefind-ignore="all"}
{{< end "test" >}}

{{< begin "col2" >}}

#### Bananarama

{{% pangram 5 %}}
{.placeholder data-pagefind-ignore="all"}

#### Bananarama5

{{% pangram 5 %}}
{.placeholder data-pagefind-ignore="all"}
{{< end "col2" >}}
