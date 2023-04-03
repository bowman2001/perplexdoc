---
author: Georg Makowski
title: Accessible fluid Design
date: 2022-07-12T22:38:10+02:00
weight: 1
categories: [Design]
tags: [Accessible, Fluid-responsive]
---

Websites with a fluid-responsive design can behave especially user-friendly and accessible. This site is an example.
{.p-first}
<!--more-->

Fluid fonts solely depend on the width of the browser window or the view-port width of the mobile device. When a user changes the zoom-factor of his browser or his device, they are not affected at all. That’s the problem with a fixed fluid size. The solution is obvious: We need to change the fluid size accordingly, when we change the layout responsively.

{{< mnote up=8 >}}
The CSS function {$clamp} has been introduced to allow a single view-port dependent size within min-max constraints. For a layout with different fluid states like this one two constraints aren’t enough and breakpoints are the only way to go.
{{< /mnote >}}

Just give it a try with {%Ctrl} + {%+} and {%Ctrl} + {%-} or the zoom setting of your desktop browser. You may have to take a few zoom steps, before the layout changes.
{.p-big}

Fluid fonts are not suitable for every screen width. For various reasons we shouldn’t deviate to much from the default browser font-size on mobile devices. Responsive fluid design is mostly beneficial on larger screens --- tablet sizes and up. Breakpoints depending on the ‘em’-unit allow to fit our fluid text precisely into the variants of our responsive layout. On large desktop screens we need to stop the fluid growth again, because their height is usually more restricted than their width.

This theme does not only use fluid sizes for fonts. All elements rely on the same fluid base font-size. If necessary, images get reloaded in a higher resolution, too.
