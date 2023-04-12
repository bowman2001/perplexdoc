---
title: security.yaml
description: Hugo runtime Security Configuration
subtitle: false
date: 2022-01-25T14:09:06+01:00 
weight: 1040
menu:
  doc:
    name: security.yaml
    parent: config
    pre: security
categories: [Hugo]
tags: [Security, Configuration]
---

The security configuration file in {$config/&zwnj;_default} contains the runtime security settings for Hugo.
{.p-first} <!--more-->

The general concept is to restrict Hugo’s access to its surrounding environment --- a.k.a. sand-boxing.
{.clear}


{{< highlight yaml "linenos=true" >}}
{{< readfile file="/config/_default/security.yaml" >}}
{{< /highlight >}}
