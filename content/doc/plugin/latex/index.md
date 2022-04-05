---
title: LaTeX
date: "2021-05-18T10:15:06+02:00"
description: Render Math inside _Markdown_
subtitle: false
featImg: LaTeX_logo.svg
menu:
  doc:
    name: LaTeX
    parent: plugin
    pre: functions
    title: LaTeX
weight: 100
latex: true
---

**LaTeX** is the most popular typesetting system for the natural sciences, its syntax has been established as a quasi-standard to type complex formulas.
{.p-lead} <!--more-->

## Syntax

You need to enable the render engine for LaTeX — called [*KaTeX*][katex] --- by setting the parameter `latex` to `true`. You can do it either in the main configuration file for all pages or in the front-matter for specific pages. 

LaTeX’s formulas need to be surrounded by two dollar signs `$$` in _Hugo_. 

The following two formulas are the typesetting code for the reverse Fourier-transformation and an equation with infinite nested fractions, I can’t comprehend. There are **no line-breaks** allowed.
```latex
$$f(x) = \int_{-\infty}^\infty\hat f(\xi)\\, e^{2 \pi i \xi x}\\,d\xi$$

$$\frac{1}{\Bigl(\sqrt{\phi \sqrt{5}}-\phi\Bigr) e^{\frac25 \pi}} = 1+\frac{e^{-2\pi}} {1+\frac{e^{-4\pi}} {1+\frac{e^{-6\pi}} {1+\frac{e^{-8\pi}} {1+\cdots} } } }$$
```
## Layout

The examples are both looking good anyway:

$$f(x) = \int_{-\infty}^\infty\hat f(\xi)\\, e^{2 \pi i \xi x}\\,d\xi$$

$$\frac{1}{\Bigl(\sqrt{\phi \sqrt{5}}-\phi\Bigr) e^{\frac25 \pi}} = 1+\frac{e^{-2\pi}} {1+\frac{e^{-4\pi}} {1+\frac{e^{-6\pi}} {1+\frac{e^{-8\pi}} {1+\cdots} } } }$$

[katex]: https://katex.org
