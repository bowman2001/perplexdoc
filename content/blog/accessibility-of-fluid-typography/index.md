---
title: Accessible Fluid Design
description: Is a view-port-based responsive design user-friendly? 
subtitle: false
date: 2022-07-12T22:38:10+02:00
weight: 1
featImg: logo/Accessibility_logo.svg
tags: [Fluid Design]
---

Some doubts have been raised about the accessibility of fluid typography. But websites with a responsive fluid design can behave especially user-friendly and accessible. This site is an example.
{.p-first} <!--more-->

Fluid fonts depend on the view-port width of the browser and they would pose a problem if they would be used unchanged on every screen size. They are not some kind of magic bullet delivering the right size on every screen by itself. When a user changes the zoom-factor of his browser, they are not affected at all, because they solely depend on the width of the browser window. Fluid typography is also not suitable on mobile devices, because text-sizes are already optimized for legibility there.

But when the design is responsive, a fluid design is beneficial on larger screens. Breakpoints depending on the ’em’-unit are reacting to the zoom setting as usual and allow to resize fluid sizes to fit the current layout precisely.

A responsive fluid layout changes to a larger or smaller version in our favor as soon as a breakpoint is reached. And this is working wether we change our screen width or our zoom setting. And not only the fonts but the size of all elements will change, when they consequently rely on ‘rem’ or ‘em’ units. So we may have to change the zoom setting by a larger step, to make a layout change happen --- but that’s all there is to it.  

Just give it a try with {#Ctrl} + {#+} and {#Ctrl} + {#-} or the zoom setting of your desktop browser. You will be surprised how well you can zoom in or out with this layout.
