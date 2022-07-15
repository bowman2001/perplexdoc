---
title: Accessible Fluid Typography
description: Is a view-port-based responsive design user-friendly? 
subtitle: false
date: 2022-07-12T22:38:10+02:00
weight: 1
featImg: logo/Accessibility_logo.svg
categories:
tags:
---

Some doubts are circulating about the accessibility of view-port-based typography — a.k.a. fluid typography. But to the contrary do websites with a responsive fluid layout behave especially user-friendly and accessible. This site is an example.
{.p-first} <!--more--> 

View-port-sized fonts alone actually pose a problem. When a user changes the zoom-factor of his browser, they are not affected at all, because they solely depend on the width of the browser window. That’s the reason, why web developers usually avoid them.

But when the design is responsive, fluid sizes can and should be too. Breakpoints depending on the ‘em’-unit will react to the zoom setting of the browser as expected and allow to change fluid sizes. 

A fluid layout won’t react to zoom changes until a breakpoint is reached, but the moment it is, the layout changes to a larger or smaller version in our favor. And not only the fonts but the size of all elements will change, when they are based on  ‘rem’ or ‘em’ units. We may have to change the zoom setting by a larger step, to make a layout change happen --- but that’s all.  

Give it a try with {#Ctrl} + {#+} and {#Ctrl} + {#-} or the zoom setting of your browser. You may be surprised how well this kind of layout meets accessibility demands.
