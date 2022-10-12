---
title: Mermaid
description: Page description placeholder
subtitle: false
date: 2022-01-22T18:05:56+01:00 
weight: 730
menu:
  doc:
    name: Mermaid
    parent: plugin
    pre: account_tree
mermaid: true
categories: [Markdown]
tags: [Diagram]
resources:
  - name: featured
    src: emily-goodhart-vu1BlBAZ_RU-unsplash.jpg
    params:
      alt: A woman with a big mono-fin swimming in a pool
---

You can place your own lead paragraph here before the attribute _.p-first_ and the _more tag_. If you don't want to use special styling, just remove the attribute.
{.p-first} <!--more-->

```mermaid
graph TD
A[Christmas]  -->|Get money| B(Go shopping)
B --> C{Let me think}
C -->|One| D[Laptop]
C -->|Two| E[iPhone]
C -->|Three| F[fa:fa-car Car]
```
