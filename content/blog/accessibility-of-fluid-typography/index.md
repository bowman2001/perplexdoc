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

Many developers have doubts about the accessibility of view-port based typography — a.k.a. fluid typography. But websites with a _responsive_ fluid design behave especially user-friendly and accessible. This site is an example.
{.p-first} <!--more-->

View-port sized fonts alone actually pose a problem. When a user changes the zoom-factor of his browser, they are not affected at all, because they solely depend on the width of the browser window. 

But when the design is responsive, fluid sizes can be, too. . Breakpoints depending on the ‘em’-unit are reacting to the zoom setting as usual and allow to change fluid sizes.

A fluid layout still won’t react to zoom changes until a breakpoint is reached. But the moment it is, the layout changes to a larger or smaller version in our favor. And not only the fonts but the size of all elements will change, when they consequently rely on  ‘rem’ or ‘em’ units. So we may have to change the zoom setting by a larger step, to make a layout change happen --- but that’s all there is to it.  

Give it a try with {#Ctrl} + {#+} and {#Ctrl} + {#-} or the zoom setting of your browser. You will be surprised how well this kind of layout meets accessibility demands.
