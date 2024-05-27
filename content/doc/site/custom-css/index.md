---
title: Custom CSS
description: Add your own CSS files
subtitle: false
date: 2024-01-04 20:00:43+01:00
weight: 695
authors:
- Georg Makowski
categories:
- design
tags:
- css
menu:
  doc:
    name: Custom CSS
    parent: siteelem
    pre: css
---

The theme can deliver your own additional CSS files if you need to add special instructions.
{.p-first}
<!--more-->

All CSS files in the folder `assets/css/custom` are bundled into a single `custom.css` file and minified.

This file gets included in the `<head>` after all other CSS files of the theme. So you can override theme classes or just add your own.

You can use additional CSS only for Markdown attributes directly. In case you want to add them to the template code, you need to overwrite the specific templates in the `layouts` folder of your project.

The fluid-responsive stylesheets for this theme follow a very specific concept and the layout is pre-calculated. If you need a completely new layout element, I suggest filing an issue with a feature request.
{.box-info}