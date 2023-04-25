---
authors: [gm]
editors: [gm]
title: Math API 
description: External service for SVG Math
subtitle: false
date: 2023-03-29T11:56:16+02:00 
weight: 750
menu:
  doc:
    name: Mathapi
    parent: plugin 
    pre: functions
categories: [Markdown]
tags: [diagram]
draft: true
---

Include Math diagrams as SVG graphics from a remote service.
{.p-first}
<!--more-->

The [Math API website](https://math.vercel.app/home) offers a the nice service to render LaTeX Equations into SVG diagrams via API request while generating the static site. This approach does’t need client side rendering by a Javascript library.

[Joe Mooring from Veriphor](https://www.veriphor.com/articles/mathematical-expressions/) implemented a hook to generate those SVGs from LaTeX inside a **code block** and a shortcode for **inline code**. Their options are also documented on the Veriphor site.

## Code Block

{{< playground "and gets rendered to" >}}
```math
$$
\frac{1}{\Gamma(s)}\int_{0}^{\infty}\frac{u^{s-1}}{e^{u}-1}\mathrm{d}u
$$
```
{{< /playground >}}

Complicated formulas get also handled:

```math
$$
\begin{array} {lcl}
  L(p,w_i) &=& \dfrac{1}{N}\Sigma_{i=1}^N(\underbrace{f_r(x_2
  \rightarrow x_1
  \rightarrow x_0)G(x_1
  \longleftrightarrow x_2)f_r(x_3
  \rightarrow x_2
  \rightarrow x_1)}_{sample\, radiance\, evaluation\, in\, stage2}
  \\\\\\ &=&
  \prod_{i=3}^{k-1}(\underbrace{\dfrac{f_r(x_{i+1}
  \rightarrow x_i
  \rightarrow x_{i-1})G(x_i
  \longleftrightarrow x_{i-1})}{p_a(x_{i-1})}}_{stored\,in\,vertex\, during\,light\, path\, tracing\, in\, stage1})\dfrac{G(x_k
  \longleftrightarrow x_{k-1})L_e(x_k
  \rightarrow x_{k-1})}{p_a(x_{k-1})p_a(x_k)})
\end{array}
$$
```

## Inline

An inline {{< math >}}${(x+y)}^2${{< /math >}} expression.

