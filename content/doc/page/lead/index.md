---
title: Lead Paragraph
description: Introduce your page
subtitle: false
date: 2022-01-18T23:24:32+01:00 
weight: 20
featImg: philipp-berndt-5i0GnoTTjSE-unsplash.jpg
menu:
  doc:
    name: Lead Paragraph
    parent: special
    pre: short_text
draft: true
---

The lead paragraph — this one — contains a short introduction and is also included as meta-data for search optimization.
{.p-lead} <!--more-->

A lead paragraph for the _Markdown_ content is optional, but because I would like to encourage its use, every new _Markdown_ file generated with `hugo new` provides a placeholder.

## Syntax
The [attribute]({{< relref "attribute" >}}) `{.p-lead}` styles the paragraph, the *more tag* `<!--more-->` marks the paragraph as the content holder for a *summary* of the page. To encourage the use of this element, 

If you don't use the *more tag*, the `description` parameter from the front-matter becomes 
## Result
The first paragraph on this page is a lead paragraph. Because of the additional *more tag* its contents also gets included in the `<head>` of the HTML page as
```html {.full-width}
<meta name="description" content="The lead paragraph — this one — contains a short introduction and is also included as meta-data for search optimization.">
```
The big advantage of marking an introductory paragraph with the *more tag* lies in the formatting. If you don't provide it, _Hugo_ has no clue about the structure of the content and extracts a fixed amount of characters from your Markdown as pure text and automatically generates a *summary* of the page. All styling is stripped away. A paragraph marked with the *more tag* instead gets rendered, because then _Hugo_ can assume, that it's not a table etc.   
