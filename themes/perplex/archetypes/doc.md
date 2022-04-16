---
author:
title: {{ replace .Name "-" " " | title }}
description: Page description placeholder
subtitle: false
date: {{ .Date }} 
weight: 999
featImg:
menu:
  doc:
    name: {{ replace .Name "-" " " | title }}
    identifier: {{ .Name }}
    parent: 
    pre: remove
draft: true
---

Place your lead paragraph here. If you don't need special styling, remove the attribute. The *more-tag* marks the paragraph as the content *summary* for this page.
{.p-lead} <!--more-->
