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

LaTeX is the most popular typesetting system for the natural sciences, its syntax has been established as a quasi-standard for complex mathematical formulas in print and web layout.
{.p-first} <!--more-->

## Syntax

You can enable the render engine for LaTeX included in Perplex — called [KaTeX][katex] --- by setting the parameter `latex` to `true`: Either in the main configuration file for all pages or in the front-matter for specific pages.

{{< mnote up=11 >}}
There is another excellent LaTeX render engine for the Web: [MathJax](https://www.mathjax.org/). I chose KaTeX for performance reasons, which may not be the best reason under all circumstances.
{{< /mnote >}}

### Inline

Inline LaTeX needs to be surrounded by doubly escaped parens like `\\(\frac{1}{5}\\)` or single dollars like `$E = mc^2$`. But because the LaTeX is processed by Hugo’s Markdown renderer before the KateX scripts are applied by browsers, there are two caveats:

- The rendering may falsely interpret some LaTeX markup as Markdown markup. This can distort the equations and we would need to escape every Markdown markup character to prevent this.

- Single dollars are markup for KateX and this is not always wanted.

Therefore, we have a simple shortcode to shield inline LaTeX from Markdown rendering:

```md
{{</* katex */>}}Z_n = X_n + Y_n\quad X_n,Y_n,Z_n\in\mathbf{R}{{</* /katex */>}}
```

### Block

LaTeX formulas need to be surrounded by doubly escaped square brackets `\\[` and `\\]` or two dollar signs `$$`. The problem with the markup overlap may also occur here and we have the additional problem, that we can’t use new lines inside a formula block. The solution is to enclose stand-alone formulas by a special code block with the identifier `katex`.

{{< mnote up=17 >}}
Hugo usually highlights code blocks according to the identifier after the first fence. And `latex` is one option. We can easily confuse the identifiers `katex` and `latex` with very different results.
{{< /mnote >}}

The following two formulas represent the reverse Fourier transformation and an equation with infinite nested fractions, which I can’t comprehend.

```latex
`‍‍``katex
\begin{equation}
f(x) = \int_{-\infty}^\infty\hat f(\xi)\, e^{2 \pi i \xi x}\,d\xi
\end{equation}
‍```
```

```latex {.semi-large}
```katex
\begin{equation}
\frac{1}{\Bigl(\sqrt{\phi \sqrt{5}}-\phi\Bigr) e^{\frac25 \pi}} = \\
1+\frac{e^{-2\pi}} {1+\frac{e^{-4\pi}} {1+\frac{e^{-6\pi}} {1+\frac{e^{-8\pi}} {1+\cdots}}}}
\end{equation}
‍```
```

## Layout

KaTeX rendering happens in the browser. An alternative would be to include pre-rendered SVGs, but I don’t know of a way to align them with the proportions of the surrounding text.

KaTeX is very compact, reliable, and fast --- I see no urgent need to replace the Javascript solution.

### Inline

Short expressions like \\(\frac{1}{5}\\) or formulas like $E = mc^2$ can be embedded in the text. To get rid of markup distortions we use the {$katex} shortcode:
{{< katex >}}X_n + Y_n = Z_n\quad X_n,Y_n,Z_n\in\mathbf{R}{{< /katex >}}.

### Block
Both examples are looking good, whether we can grasp their meaning or not:

```katex
\begin{equation}
f(x) = \int_{-\infty}^\infty\hat f(\xi)\, e^{2 \pi i \xi x}\,d\xi
\end{equation}
```

```katex
\begin{equation}
\frac{1}{\Bigl(\sqrt{\phi \sqrt{5}}-\phi\Bigr) e^{\frac25 \pi}} = \\
1+\frac{e^{-2\pi}} {1+\frac{e^{-4\pi}} {1+\frac{e^{-6\pi}} {1+\frac{e^{-8\pi}} {1+\cdots}}}}
\end{equation}
```

[katex]: https://katex.org
