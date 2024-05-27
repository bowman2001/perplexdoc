---
title: Color Scheme
description: About the default color scheme and customization
subtitle: false
date: 2024-01-02 01:55:01+01:00
weight: 685
authors:
- Georg Makowski
categories:
- design
tags:
- color
- accessible
menu:
  doc:
    name: Color Scheme
    parent: siteelem
    pre: palette
---

The theme includes a WCAG-compliant color scheme that switches between a **light** and a **dark** mode when the OS environment does.  
{.p-first}
<!--more-->

## Four base colors

The color scheme design is based on four colors with a clear purpose:

Red
: marks a current or intended navigational state.

Blue
: emphasizes internal links.

Green
: emphasizes external links.

Yellow
: highlights page- or element-specific navigational elements.
{.dl-loose}

The specific color variations of these base colors follow the Hugo logo. The color scheme provides many color variations to structure the content and the navigation.

## WCAG compliance

The minimal contrast ratios between foreground and background colors of the default color scheme follow the recommendations of the **W**eb **C**ontent **A**ccessibility **G**uidelines. They are an international standard of the **W**orld **W**ide **W**eb **C**onsortium (W3C).

## Information colors

The pure colors red, yellow, blue, and green are also used to highlight [annotations in boxes](/doc/enhancing/attribute/box) or [headings](/doc/basic/headings#highlighted-headings). Their shade differs notably from the theme colors and they have a well-known different meaning.

In case we create a custom color scheme for this theme, these information colors should **not** change.
{.box-info}

## Custom color scheme

The file {$assets/css/color-default.css} in the theme folder holds the default color scheme. In case you would like to use another color scheme you can create the file {$assets/css/color.css} in your **project root**. Then, the theme will include this file instead of the default in the main stylesheet. This file needs to define all color variables and you may want to start with a copy of the default.

Creating a WCAG-compliant color scheme for this theme is non-trivial. There is no easy way to calculate all the correct shades of the four base colors automatically – as far as I know. To achieve sufficient contrast ratios for all combinations manual adjustments are necessary because the luminosity is a function of the color.
{.box-warn}

## Code highlighting

The color variables for highlighting code blocks with Chroma follow the light and dark theme from GitHub which are (mostly) WCAG compliant.
