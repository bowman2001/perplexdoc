---
title: Accessible Fluid Design
description: Is a view-port-based responsive design user-friendly? 
subtitle: false
date: 2022-07-12T22:38:10+02:00
weight: 1
featImg: logo/Accessibility_logo.svg
categories:
tags:
---

Many developers have doubts about the accessibility of fluid typography. But websites with a responsive fluid design behave especially user-friendly and accessible. This site is an example.
{.p-first} <!--more-->

View-port sized fonts alone actually pose a problem. When a user changes the zoom-factor of his browser, they are not affected at all, because they solely depend on the width of the browser window.

But when the design is responsive, fluid text sizes can and should be, too. Breakpoints depending on the ’em’-unit are reacting to the zoom setting as usual and allow to resize fluid text to fit the current layout precisely.

A fluid layout changes to a larger or smaller version in our favor as soon as a breakpoint is reached. And not only the fonts but the size of all elements will change, when they consequently rely on  ‘rem’ or ‘em’ units. So we may have to change the zoom setting by a larger step, to make a layout change happen --- but that’s all there is to it.  

Give it a try with {#Ctrl} + {#+} and {#Ctrl} + {#-} or the zoom setting of your desktop browser. You will be surprised how well this layout meets accessibility demands.

On mobile screens the font-sizes follow the text-size setting as usual, because they are not based on the view-port width.
