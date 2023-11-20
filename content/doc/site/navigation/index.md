---
authors: [Georg Makowski]
title: Site Navigation
description: The primary menus
subtitle: false
date: 2022-09-07T15:24:13+02:00 
weight: 660
menu:
  doc:
    identifier: sitenav
    name: Navigation
    parent: siteelem
    pre: menu
categories: [template]
tags: [navigation, site]
draft: true
---

The general navigation includes a main menu and a social menu for links to external sites.
{.p-first} <!--more-->

The most important concept we have to bear in mind for all menus: 
There is **no central menu configuration** for pages!
{.box-info}

We add the menu entry for a page in its frontmatter like in a similar way as we have discussed in the [workflow introduction for documentation pages](/doc/intro/workflow/content#documentation-pages):

```yaml {.left-in}
menu:
  main:
    name: Blog
    identifier: blog
    weight: 30
```

With this frontmatter section, we add a top-level menu entry to the `main` menu. Top-level because it has no `parent`. To determine the place of the entry we add menu `weight`.

We may use pages that are ordered by the general page weight inside their sections and appear also in the main menu. That’s why we should always use the special menu weight for site menus.

It’s also possible to add menu entries in the menu section of the site configuration. This is kind of a central menu configuration but this option is meant only for entries without a page: Mostly external links.

## Main Menu

## Social Icons and Links
