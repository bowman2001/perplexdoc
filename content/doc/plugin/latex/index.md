---
author: Georg Makowski
title: LaTeX
date: "2021-05-18T10:15:06+02:00"
description: Render Math inside Markdown
subtitle: false
menu:
  doc:
    name: LaTeX
    parent: plugin
    pre: functions
weight: 710
latex: true
resources:
  - src: LaTeX_logo.svg
    name: featured
    params:
      alt: LateX logo
      container: "no"
categories: [Markdown]
tags: [latex]
---

LaTeX is the most popular typesetting system for the natural sciences, its syntax has been established as a quasi-standard to format complex mathematical formulas for print and web layout.
{.p-first} <!--more-->

## Syntax

You can enable the render engine for LaTeX included in Perplex — called [KaTeX][katex] --- by setting the parameter `latex` to `true`: Either in the main configuration file for all pages or in the front-matter for specific pages.

{{< mnote up=11 >}}
There is another excellent LaTeX render engine for the Web: [MathJax](https://www.mathjax.org/). I chose KaTeX for performance reasons, which may not be the best reason under all circumstances.
{{< /mnote >}}

### Inline

Inline LaTeX needs to be surrounded by doubly escaped parenthesis `\\(` and `\\)` like `\\(\frac{1}{5}\\)` or single dollars `$` like `$E = mc^2$`.

{{< mnote up=8 >}}
Single dollars may interfere with other formatting. The only solution for that would be a configuration parameter to turn them off.
{{< /mnote >}}

### Block

LaTeX formulas need to be surrounded by doubly escaped square brackets `\\[` and `\\]` or two dollar signs `$$`.

The following two formulas represent the reverse Fourier transformation and an equation with infinite nested fractions, which I can’t comprehend. There are **no line breaks** allowed.

```latex
f(x) = \int_{-\infty}^\infty\hat f(\xi)\\, e^{2 \pi i \xi x}\\,d\xi

\frac{1}{\Bigl(\sqrt{\phi \sqrt{5}}-\phi\Bigr) e^{\frac25 \pi}} = 1+\frac{e^{-2\pi}} {1+\frac{e^{-4\pi}} {1+\frac{e^{-6\pi}} {1+\frac{e^{-8\pi}} {1+\cdots} } } }
```

## Layout

### Inline

Short expressions like \\(\frac{1}{5}\\) or formulas like $E = mc^2$ can be embedded in the text.

### Block

Both examples are looking good, wether we can grasp their meaning or not:

$$\begin{equation}f(x) = \int_{-\infty}^\infty\hat f(\xi)\\, e^{2 \pi i \xi x}\\,d\xi\end{equation}$$

$$\begin{equation}\frac{1}{\Bigl(\sqrt{\phi \sqrt{5}}-\phi\Bigr) e^{\frac25 \pi}} = 1+\frac{e^{-2\pi}} {1+\frac{e^{-4\pi}} {1+\frac{e^{-6\pi}} {1+\frac{e^{-8\pi}} {1+\cdots} } } }\end{equation}$$

[katex]: https://katex.org
