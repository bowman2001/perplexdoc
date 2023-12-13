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
tags: [navigation, site, menu]
---

The general navigation includes a main menu and a social menu.
{.p-first} <!--more-->

There is **no need for a central menu configuration** for local pages!
{.box-info}

## Main menu

The entries in the main (or primary) menu lead to its sections and optionally to related sites.

Similar to the way shown in the [workflow introduction for documentation pages](/doc/intro/workflow/content#documentation-pages), we add a section menu entry in the frontmatter of its branch bundle:

```yaml {.left-in}
menu:
  main:
    name: Blog
    identifier: blog
    weight: 30
```

We get a top-level entry in the `main` menu because the entry has no `parent`. To determine the place of the entry we add menu `weight`.

We may use pages that are ordered by the general page weight inside their sections and appear also in the main menu. That’s why we should always use the special menu weight for site menus.

It’s also possible to add menu entries in the menu section of the site configuration. This is the central menu configuration but I would recommend this option only for entries without a page: Usually external absolute URLs.

## Main social menu (with icons)

This menu is solely determined by the site configuration because it's meant only for external links represented by icons.

The `main_social` menu in the `menu` section of the site configuration may look like this:

```yaml
main_social:
  - name: GitHub
    pre: github
    url: "https://github.com/bowman2001/perplex"
    weight: 1
```

List entries start with a dash and contain the `name` of the entry, the `url` to the social network, the icon name as the `pre` value, and a `weight` to determine the order of the entries from left to right.

This example has only one entry, but you may add as many as you can reasonably fit into the layout.

You can use any icon name from [Simple Icons](https://simpleicons.org) as a value for the `pre` parameter. You can place additional icons in the new folder `assets/svg/simple-icons` in your project root. They are included with their base filename as a value for `pre`.

### Icon design {.h-p .h-info}
The Simple Icons project follows specific layout principles which additional icons should also adhere to:

- They are always quadratic (`viewBox="0 0 24 24"`).

- They don’t have a default padding and may fill their view box.

- They are silhouettes without any implicit color for easy styling.
