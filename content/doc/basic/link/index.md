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

Irrespective of the way which type of link syntax we use, their layout looks the same. Perplex distinguishes only between **internal links** to our own website and **external links** to others by applying a different color for their decoration.

## Syntax

The easiest way to create a link is to write an URL directly into the text and let it be handled **automatically**. But most of the time we prefer to **name** them by connecting the name with the reference.

### Links from URLs

CommonMark transforms marked URLs into full HTML references. With the **linkify** extension we can omit the marks and write raw URLs.

#### Marked links

CommonMark URLs need to be enclosed in angled brackets like `<http://www.example.com>` and are rendered into <http://www.example.com>.

#### Raw URLs {#linkify}

Every URL starting with `http://` or `https://` is automatically transformed into a link by the **linkify** extension. If you want to stop this default behavior, you can set `linkify` to `false` in the [configuration](/doc/appendix/config/markup#9).  

### Named links

There are two ways to turn a phrase or word into a link. We can include them **inline** within the text, which is convenient but bloats the text, especially in the case of long URLs. The alternative is to write the URL into a separate **reference** like a footnote.

#### Inline link

The link inside of the text has to be enclosed by square brackets `[]` and the
URL and the optional title follow directly afterward in parens `()`. Like this:

```md
1. This is an [inline-style link](https://www.google.com)

2. This is an [inline-style link](https://www.google.com "Google's Homepage")
   with a title. Hover your mouse over it.
{.col2}
```

And the resulting links look like this:

1. This is an [inline-style link](https://www.google.com)

2. This is an [inline-style link](https://www.google.com "Google's Homepage") with a title. Hover your mouse over it.
{.col2 .inline}

{{< mnote up=1 >}}
The tooltip from the title is a nice feature. Because we can’t hover with the mouse over elements on a touch screen they won’t be available there.
{{< /mnote >}}

#### Reference link

A reference link is marked by a second set of square brackets with a short reference name inside. `[Link to Example][ref]` is again displayed as [Link to Example][ref] when we repeat the reference marker somewhere else in the file, followed by a colon `:`, the URL, and the optional title:

```md
[ref]: http://www.example.com "Example page"
```

This reference is never shown. Its URL and the title are just used as attributes for the link element.

[ref]: http://www.example.com "Example page"

## Validation
The link render hook of this theme checks the existence of internal links and link fragments that reference automatically generated heading identifiers.
{.inline}

{{< mnote >}}
The link hook is based on {=Joe Mooring’s implementation} which you can find in his excellent [article on Veriphor](https://www.veriphor.com/articles/link-and-image-render-hooks/) about link and image render hooks.
{{< /mnote >}}

Its default configuration throws a warning if a page can’t be found, but does not complain about missing fragments. Both --- pages and fragments --- are always rendered as they come if an error doesn’t stop the build. 

```yaml
render_hooks:
  link:
    errorLevel: warning  # ignore, warning (default), or error
  fragments:
    errorLevel: ignore  # ignore (default), warning

```

Missing fragments are **not** reported by default, because only headings and their identifiers got an additional data structure in Hugo recently. When a link references other less common identifiers --- manual [anchors](anchor) or line numbers in code blocks for example --- the link hook invalidates them falsely because there is no way to find them in a Hugo template.[^1] Should you have a lot of these, you may want to leave the error level for fragments set to {$ignore} most of the time. But the {$warning} level may still prove to be very valuable for reporting missing heading references at build time.
{.inline}

{{< mnote >}}
Hugo renders links to all existing identifiers (fragments) **completely fine**. It just doesn’t provide a data structure for all of them which is accessible in templates.
{{< /mnote >}}

[^1]: That’s also why there is no possibility to throw an error for missing fragments. Valid content shouldn’t be able to stop a site from getting rendered.

If you want to rigorously check all your links --- even external ones --- you need to install additional software that validates a full local build (see [publish](publish#use-your-own-hardware)) of your site. Tools like [html-proofer](https://github.com/gjtorikian/html-proofer) check all referenced URLs.

## No need for the {$relref} shortcode

Hugo’s built-in shortcode {$relref} automatically generates the relative path for pages with a unique page name. We could type `[relative link]({{</* relref "unique-page-name" */>}})` in the standard CommonMark link element and get the relative link without even knowing the actual path.
{.inline}

{{< mnote >}}
{$relref} is a convenience only as long as projects are small. As soon as the content grows more and more duplicate filenames will exist (taxonomy pages are always included!).
{{< /mnote >}}

But the render-link hook of this theme can’t process the shortcode and may throw the infamous `HAHAHUGO...` error. We need to abandon the shortcode once and for all for the sake of the advanced hook.

This is not a problem and more of a chance: The render-link hook can also handle `[link](unique-page-name)`! If a page cannot be found in any other way it calls the {$relref} function as a last resort. We don’t need the shortcode anymore.[^2]

Because Hugo’s default to throw an error and stop the build if {$relref} can’t find a page is quite harsh, the theme sets the parameter `refLinksErrorLevel: warning` in its configuration file. You can change it in your project configuration.

[^2]: There is one drawback: In case of a non-existing page we get a warning from {$relref} and we may get an additional warning, an error, or nothing from the hook depending on its configuration.
