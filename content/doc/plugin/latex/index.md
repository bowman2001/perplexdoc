---
authors: [Georg Makowski]
title: LaTeX
date: "2021-05-18T10:15:06+02:00"
description: Render mathematical expressions inside Markdown
subtitle: false
menu:
  doc:
    name: LaTeX
    parent: plugin
    pre: functions
weight: 710
resources:
  - src: LaTeX_logo.svg
    name: featured
    params:
      alt: LateX logo
      container: "no"
categories: [Markdown]
tags: [latex]
---

LaTeX is the most popular typesetting system for the natural sciences. The syntax has been established as a quasi-standard for complex mathematical formulas in print and web layouts.
{.p-first} <!--more-->

## Syntax

The render engine for LaTeX in Perplex is [KaTeX][katex] and gets included on demand into pages with at least one shortcode {$katex} or one code block with the identifier `katex`. If you already have many working LaTeX expressions in your Markdown — maybe with carefully escaped markup — you can also set the parameter `katex: true` in the front-matter.

{{< mnote up=11 >}}
There is another LaTeX render engine for the Web: [MathJax](https://www.mathjax.org/). I chose KaTeX for performance reasons.
{{< /mnote >}}

### Inline

Inline LaTeX needs to be surrounded by single dollars like `$E = mc^2$` (or doubly escaped parenthesis like `\\(\frac{1}{5}\\)` ). Because the content is processed by Hugo’s Markdown renderer before the KateX scripts are applied, there are two caveats:

- The rendering may falsely interpret some LaTeX markup as Markdown markup. There is unfortunately some syntax overlap. This can distort the equations and we would need to escape every Markdown markup character to prevent this.

- Single dollars are markup for KateX and this is not always wanted. But we can use the dollar as a currency, of course: `100$` &rarr; 100$. KaTeX expects whitespace before the first delimiter.

Therefore, we have a simple shortcode to mark inline LaTeX and shield it from Markdown rendering. We can and need to omit the KaTeX delimiters, then, they are already included in the shortcode:

```md
{{</* katex */>}}Z_n = X_n + Y_n\quad X_n,Y_n,Z_n\in\mathbf{R}{{</* /katex */>}}
```

### Block

LaTeX formulas need to be surrounded by two dollar signs `$$` or doubly escaped square brackets `\\[` and `\\]`. The problem with the markup overlap may occur here, too. And we have the additional problem, that we can’t use new lines inside a formula block. The solution is to enclose stand-alone formulas by a special code block with the identifier `katex`.

{{< mnote up=17 >}}
Hugo highlights code blocks according to the identifier after the first fence. The identifier `latex` is one option and prettifies the included LaTeX code. Only `katex` does render the code.
{{< /mnote >}}

The following three formulas are shown above and represent the discrete Binomial distribution, the reverse Fourier transformation, and an equation for infinite nested fractions, which I can’t comprehend (I’m a physicist and can only suspect a mathematician has carefully proven this. :wink:).

```latex
‍```katex
\begin{equation}
B_{n,p}(k) = {n \choose k} p^k (1-p)^{n-k}
\end{equation}
‍```
```

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

Short expressions like $E = mc^2$ or \\(\frac{1}{5}\\) can be embedded in the text. To get rid of eventual markup distortions we use the {$katex} shortcode:
{{< katex >}}X_n + Y_n = Z_n\quad X_n,Y_n,Z_n\in\mathbf{R}{{< /katex >}}.

### Block
All examples are looking good, whether we can grasp their meaning or not:

```katex
\begin{equation}
B_{n,p}(k) = {n \choose k} p^k (1-p)^{n-k}
\end{equation}
```

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
