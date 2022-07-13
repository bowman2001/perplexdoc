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

Some doubts are circulating about the accessibility of view-port-based typography --- a.k.a. fluid typography. But combined with a responsive fluid layout, web-pages are especially user-friendly and accessible. This site is an example.
{.p-first} <!--more--> 

View-port-sized fonts alone would actually pose a problem and that’s why developers usually avoid them. When a user changes the zoom-factor of his browser, they are not affected at all, because they solely depend on the width of the browser window.

But when the design is responsive, fluid sizes need to be, too. Breakpoints depending on the ‘em’-unit will react to the zoom setting of the browser as expected and change fluid sizes. 

A fluid layout won’t react until a breakpoint is reached, but the moment it is, the layout changes to a larger or smaller version in our favor. And not only the fonts but all elements change, because they depend on ‘rem’ or ‘em’ units. We may have to change the zoom setting by a larger step, to make it happen --- that’s all.  

Just try with {#Ctrl} + {#+} and {#Ctrl} + {#-} or the zoom setting of your browser! You may be surprised how well this layout meets accessibility demands.
