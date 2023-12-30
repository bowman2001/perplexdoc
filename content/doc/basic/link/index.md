---
authors: [Georg Makowski]
date: "2021-03-23T22:11:38+01:00"
description: All types of references to a URL in our text
menu:
  doc:
    name: Links
    parent: basic
    pre: link
title: Links
categories: [Markdown]
tags: [Inline]
resources: 
  - name: featured
    src: edge2edge-media-t1OalCBUYRc-unsplash.jpg
    params:
      alt: A few chain links
weight: 145
---

Internet references or short “links” are the binding fabric of the web. Markdown encourages their use by providing a few{/}simple markup options.
{.p-first} <!--more-->

There are three ways to create a link in CommonMark Markdown:

1. We can place an absolute URL (starting with `http://` or `https://`) **explicitly** in the Markdown text.

2. We can **name** the link and provide the URL **inline**.

3. We can **name** the link and add a **reference** to the URL somewhere else.

Irrespective of the syntax the rendered result and the layout are the same. The theme distinguishes between **internal links** to the same domain and **external links** to others.

## Explicit links

CommonMark transforms **marked** absolute URLs into links and the **linkify** extension even allows omitting the mark and writing raw URLs.

### Marked

URLs enclosed in angled brackets like `<http://www.example.com>` are rendered into <http://www.example.com>.

### Raw {#linkify}

Every absolute URL like `https://www.example.com` is rendered into https://www.example.com. If you want to stop this default behavior, you can set `linkify` to `false` in the [markup configuration](/doc/appendix/config/markup#9).

## Named links

There are two ways to turn a phrase or word into a link.

1. We can include the URL **inline**, which is convenient but may bloat the text, especially in the case of very long URLs. 

2. The alternative is to write the URL into a separate **reference** like a footnote.

### Inline links

The link inside of the text has to be enclosed by square brackets `[]`. The
URL and the optional title follow in parens `()` like this:

```md
1. This is an [inline-style link](https://www.example.com)

2. This is an [inline-style link](https://www.example.com "Example site")
   with a title. Hover your mouse over it.
{.col2}
```

And the resulting links look like this:

1. An internal [link to a page fragment](/doc/basic/link#inline-links)

2. An internal [link to a file](dummy.pdf)

3. An external [link to an absolute URL](https://www.example.com)

4. An external [link with a title](https://www.example.com "Example domain"). Hover your mouse over it.

{{< mnote up=6 >}}
The tooltip from the title is a nice feature. Because we can’t hover with the mouse over elements on a touch screen it won’t be always available and shouldn’t contain essential information.
{{< /mnote >}}

### Reference links

A reference link is marked by a second set of square brackets with a usually short reference name inside.

`[Link to Example][ref]` is again displayed as [Link to Example][ref] when we repeat the reference marker somewhere else in the file, followed by a colon `:`, the URL, and the optional title:

```md
[ref]: http://www.example.com "Example page"
```

This reference is never shown directly. Its URL and the title are used as attributes for the link element.

[ref]: http://www.example.com "Example page"

## Validation
The link render hook of this theme checks the existence of internal links and link fragments that reference automatically generated heading identifiers.
{.inline}

{{< mnote >}}
The link hook is based on {=Joe Mooring’s implementation} which you can find in his excellent [article on Veriphor](https://www.veriphor.com/articles/link-and-image-render-hooks/) about link and image render hooks.
{{< /mnote >}}

Its default configuration throws a warning if a page can’t be found, but does not complain about missing fragments. Both --- pages and fragments --- are rendered as they come if an error is not configured to stop the build.

```yaml
render_hooks:
  link:
    errorLevel: warning  # ignore, warning (default), or error
  fragments:
    errorLevel: ignore  # ignore (default), warning

```

Missing fragments are **not** reported by default, because only headings and their identifiers got an additional data structure in Hugo recently. When a link references other less common identifiers --- manual [anchors](doc/enhancing/attribute/anchor) or line numbers in code blocks for example --- the link hook invalidates them falsely because there is no way to find them in a Hugo template.[^1] Should you have a lot of these, you may want to leave the error level for fragments set to {$ignore} most of the time. But the {$warning} level may still prove to be very valuable for reporting missing heading references at build time.
{.inline}

{{< mnote >}}
Hugo renders links to all existing identifiers (fragments) **completely fine**. It just doesn’t provide a data structure for all of them which is accessible in templates.
{{< /mnote >}}

[^1]: That’s also why there is no possibility to throw an error for missing fragments. Valid content shouldn’t be able to stop a site from getting rendered.

If you want to rigorously check all your links --- even external ones --- you need to install additional software that validates a build (see [publish](doc/intro/workflow/publish#use-your-own-hardware)) of your site. Tools like [html-proofer](https://github.com/gjtorikian/html-proofer) check all referenced URLs.

## The {$relref} shortcode is not supported {.h-danger}

Hugo’s built-in shortcode {$relref} automatically generates the relative path for pages with a unique page name. We could type `[relative link]({{</* relref "unique-page-name" */>}})` in the standard CommonMark link element and get the relative link without knowing the actual path.
{.inline}

{{< mnote >}}
{$relref} can be a convenience only as long as projects are small. As soon as the content grows more and more duplicate content filenames arise (taxonomy pages are also included!) and we need to give the full relative path anyway. Better to use full relative paths from the beginning. In case they change a site-wide search&replace for URLs is easy.
{{< /mnote >}}

But the render-link hook of this theme can’t process the shortcode and may throw the infamous `HAHAHUGO...` error. We need to abandon the shortcode once and for all for the sake of the advanced hook.
