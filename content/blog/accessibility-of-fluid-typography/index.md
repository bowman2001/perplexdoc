---
author: Georg Makowski
title: Accessible Fluid Design
description: Is a view-port-based responsive design user-friendly? 
subtitle: false
date: 2022-07-12T22:38:10+02:00
weight: 1
categories: [Theme]
tags: [Accessible, Fluid, Responsive]
---

There are some doubts about the accessibility of fluid typography among web developers. But websites with a responsive fluid design can behave especially user-friendly and accessible. This site is an example.
{.p-first} <!--more-->

Just give it a try with {#Ctrl} + {#+} and {#Ctrl} + {#-} or the zoom setting of your desktop browser. You will be surprised how well you can zoom in or out of this layout. Even the images get reloaded in a higher resolution, if necessary.
{.p-big}

Fluid fonts solely depend on the width of the browser window or the view-port width of the mobile device. When a user changes the zoom-factor of his browser or his device, they are not affected at all. That’s the problem with fluid sized fonts. The solution is obvious: We need to change their value accordingly, when we change the layout responsively.

{{< mnote up=17 >}}
A while ago the CSS function {$clamp} has been introduced to use a single view-port dependent size within min-max constraints. For a completely fluid layout two constraints aren’t enough and breakpoints are the only way to go known to me.
{{< /mnote >}}

Fluid fonts are not suitable for every screen width. For various reasons we shouldn’t deviate to much from the default browser font-size on mobile devices. Responsive fluid design is beneficial on larger screens --- tablet sizes and up. Breakpoints depending on the ‘em’-unit allow to fit our fluid text precisely into the variants of our responsive layout. On large desktop screens we need to stop the fluid growth again, because their height is usually more restricted than their width.

A responsive fluid layout changes to a larger or smaller version in our favor as soon as a breakpoint is reached --- wether we change the width or change our zoom setting. And not only the fonts but the size of all elements will change accordingly, if they consequently rely on the same fluid base font-size. We may have to change the zoom setting by a larger step sometimes, to make a layout change happen---but that’s all there is to it.  

