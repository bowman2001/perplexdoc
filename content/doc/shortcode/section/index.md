---
authors: [Georg Makowski]
title: Section
description: Wrap a Markdown section with an arbitrary class
subtitle: false
date: 2023-08-02T09:58:25+02:00 
menu:
  doc:
    identifier: section 
    name: Section
    parent: shortcode
    pre: remove
resources: 
  - src:
    name: featured
    params:
      alt:
      attr:
      attrlink:
  - src: 
    name: 
    params:
      alt:
      attr: 
      attrlink:
categories: []
tags: []
weight: 9999
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
{{< end "container" >}}

{{< begin "test" >}}

#### Banana

{{% pangram 5 %}}
{{< end "test" >}}

{{< begin "col2" >}}

#### Bananarama

{{% pangram 5 %}}

#### Bananarama5

{{% pangram 5 %}}
{{< end "col2" >}}
