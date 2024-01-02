---
authors: [Georg Makowski]
title: 'Color Scheme'
description: "About the default color scheme and customization"
subtitle: false
date: 2024-01-02T01:55:01+01:00 
menu:
  doc:
    name: 'Color Scheme'
    parent: siteelem
    pre: palette
categories: [design]
tags: [color]
weight: 685
---

The theme ships with a WCAG-compliant color scheme for an environment-dependent light & dark mode.  
{.p-first}
<!--more-->

## Four base colors

The color scheme design for this theme uses four base colors.

Red
: to emphasize a current or intended navigational state.

Blue
: to emphasize internal links.

Green
: to emphasize external links.

Yellow
: to highlight local navigational elements.
{.dl-loose}

The specific color variations of these base colors follow the Hugo logo. The color scheme provides many color variations to structure the content and the navigation.

## WCAG compliance

The minimal contrast ratios between foreground and background colors follow the recommendations of the **W**eb **C**ontent **A**ccessibility **G**uidelines. They are an international standard of the **W**orld **W**ide **W**eb **C**onsortium (W3C).

## Custom color scheme

The file {$assets/css/color-default.css} in the theme folder holds the default color scheme. In case you would like to use another color scheme you can create the file {$assets/css/color.css} in your **project root**. Then, the theme will include this file instead of the default in the main stylesheet. This file needs to define all color variables and you may want to start with a copy of the default.

Creating a WCAG-compliant color scheme for this theme is non-trivial. There is no way to calculate all the needed shades of the four base colors automatically – as far as I know. To achieve a sufficient contrast ratio for all combinations often manual adjustments are necessary because the luminosity is a function of the specific color.
{.box-warn}
