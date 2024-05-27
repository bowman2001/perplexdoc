---
title: LaTeX
description: Render mathematical expressions inside Markdown
subtitle: false
date: '2021-05-18T10:15:06+02:00'
weight: 710
authors:
- Georg Makowski
categories:
- module
- markdown
tags:
- latex
menu:
  doc:
    name: LaTeX
    parent: plugin
    pre: functions
---

LaTeX is the most popular typesetting system for the natural sciences. The syntax has been established as a quasi-standard for complex mathematical formulas in print and web layouts.
{.p-first} <!--more-->

## Syntax

Perplex includes the render engine [\\(\KaTeX\\)][katex] on demand into pages with at least one of the shortcodes {$math} or {$chem} or code blocks with the identifiers `math` or `chem`. If you already have working mathematical or chemical expressions in your Markdown — maybe with carefully escaped markup — you can also set the parameters `math: true` or `chem: true` in the frontmatter.
{.inline}

{{< mnote >}}
There is another reliable LaTeX render engine for the Web: [MathJax](https://www.mathjax.org/). I chose KaTeX for performance reasons.
{{< /mnote >}}

### Inline

Inline LaTeX in Markdown is usually surrounded by single dollars like `$E = mc^2$` (or doubly escaped parenthesis like `\\(\frac{1}{5}\\)` ). Because the content is processed by Hugo’s Markdown renderer before the KateX scripts are applied, there are two caveats:

- The rendering may falsely interpret some LaTeX markup as Markdown markup. There is unfortunately some syntax overlap. This can distort the equations and we would need to escape every Markdown markup character to prevent this.

- Single dollars are markup for KateX and this is not always wanted. But we can use the dollar as a currency, of course: `100$` &rarr; 100$. KaTeX expects whitespace before the first delimiter.

The two shortcodes also mark inline LaTeX and shield it from Markdown rendering. We **need to omit** the KaTeX delimiters, they are already included in the shortcodes:

```md
{{</* math */>}}Z_n = X_n + Y_n\quad X_n,Y_n,Z_n\in\mathbf{R}{{</* /math */>}}
and 
{{</* chem */>}}H_{2}O(l){{</* /chem */>}}
```

### Block

LaTeX formulas are usually surrounded by two dollar signs `$$` or doubly escaped square brackets `\\[` and `\\]`. The problem with the markup overlap is the same as mentioned before. And we have the additional problem, that we can’t use new lines inside a formula block. Inside of the special code block with the identifier `math` these two problems are gone.

The following three formulas in code blocks represent the discrete Binomial distribution, the reverse Fourier transformation, and an equation for infinite nested fractions, which I can’t comprehend (I’m only a physicist and suspect mathematicians have proven this. :wink:).

```latex
‍```math
\begin{equation}
B_{n,p}(k) = {n \choose k} p^k (1-p)^{n-k}
\end{equation}
‍```
```

```latex
`‍‍``math
\begin{equation}
f(x) = \int_{-\infty}^\infty\hat f(\xi)\, e^{2 \pi i \xi x}\,d\xi
\end{equation}
‍```
```

```latex {.expand}
```math
\begin{equation}
\frac{1}{\Bigl(\sqrt{\phi \sqrt{5}}-\phi\Bigr) e^{\frac25 \pi}} = \\
1+\frac{e^{-2\pi}} {1+\frac{e^{-4\pi}} {1+\frac{e^{-6\pi}} {1+\frac{e^{-8\pi}} {1+\cdots}}}}
\end{equation}
‍```
```

And this is a chemical reaction between mercury and iodine ions:

```latex
```chem
\ce{Hg^2+ ->[I-] HgI2 ->[I-] [Hg^{II}I4]^2-}
‍```
```

## Layout

KaTeX rendering happens in the browser. An alternative would be to include pre-rendered SVGs, but I don’t know of a way to align them with the proportions of the surrounding text.

KaTeX is very compact, reliable, and fast --- I see no urgent need to replace the Javascript solution.

### Inline

Short expressions like $E = mc^2$ or \\(\frac{1}{5}\\) can be embedded in the text. To get rid of eventual markup distortions we use the {$math} or the {$chem} shortcode:
{{< math >}}X_n + Y_n = Z_n\;\text{with}\;X_n,Y_n,Z_n\in\mathbf{R}\quad{{< /math >}} or {{< chem >}}\quad\ce{H_{2}O(l)}{{< /chem >}}.

### Block
All examples are looking good, whether we can grasp their meaning or not:

```math
\begin{equation}
B_{n,p}(k) = {n \choose k} p^k (1-p)^{n-k}
\end{equation}
```

```math
\begin{equation}
f(x) = \int_{-\infty}^\infty\hat f(\xi)\, e^{2 \pi i \xi x}\,d\xi
\end{equation}
```

```math
\begin{equation}
\frac{1}{\Bigl(\sqrt{\phi \sqrt{5}}-\phi\Bigr) e^{\frac25 \pi}} = \\
1+\frac{e^{-2\pi}} {1+\frac{e^{-4\pi}} {1+\frac{e^{-6\pi}} {1+\frac{e^{-8\pi}} {1+\cdots}}}}
\end{equation}
```

The chemical reaction is also fine:

```chem
\ce{Hg^2+ ->[I-] HgI2 ->[I-] [Hg^{II}I4]^2-}
```

[katex]: https://katex.org "KaTeX"
