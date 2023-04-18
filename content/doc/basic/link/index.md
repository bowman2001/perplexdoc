---
author: Georg Makowski
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

The easiest way to create a link is to write an URL (**U**niform **R**esource **L**ocator) directly into the text and let it be handled **automatically**. Sometimes we may want to explicitly show an URL like this, but often we prefer to **name** them. To achieve this, we need to connect the name with the reference.

### Automatic links from URLs

CommonMark transforms **marked** URLs into full HTML references. With the **linkify** extension we can even omit the marks and write raw URLs.

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
{.col2 .box}

{{< mnote up=10 >}}
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

{{< mnote up=8 >}}
The link hook is based on Joe Mooring’s implementation which you can find in his excellent [article on Veriphor](https://www.veriphor.com/articles/link-and-image-render-hooks/) about link and image render hooks.
{{< /mnote >}}

The default configuration throws a warning if a page can’t be found and ignores missing fragments.

```yaml
render_hooks:
  link:
    errorLevel: warning  # ignore, warning (default), or error
  fragments:
    errorLevel: ignore  # ignore (default), warning

```

The reason for ignoring missing fragments by default is the following: Only headings and their identifiers got an additional data structure in Hugo recently. When a link references other less common identifiers --- manual [anchors](anchor) or line numbers in code blocks for example --- the link hook invalidates them falsely because there is no way to find them in a template. Should you have a lot of these, you may want to leave the error level for fragments set to {$ignore} most of the time. But the warning level of the hook proves to be very valuable for letting it report missing heading links. Now you know which warnings you can just ignore.

There is no possibility to throw an error for missing fragments because not all fragments are recognizable in Hugo. Valid content shouldn’t be able to stop a site from getting rendered (see [Anchor](anchor)).

If you want to rigorously check all your links --- even external ones --- you need to install additional software that validates a local build of your site.

## Relref shortcode {.h-info}

Many Hugo users like to use the shortcode {$relref} to generate the full relative path for internal links. With `{{</* relref "unique-page-name" */>}}` Hugo produces the relative path to the unique page from the root as the correct reference. But the render-link hook of this theme can’t process shortcodes and may throw the infamous `HAHAHUGO...` error. So we need to abandon the shortcode for the sake of this advanced hook. But this is not a problem and more of a chance: The render-link hook can also handle links like `[link](unique-page-name)`! If a page cannot be found another way it calls the {$relref} function internally.

Because Hugo’s default to throw an error and stop the build if {$relref} can’t find a page is quite harsh, the theme sets the parameter `refLinksErrorLevel: warning` in its configuration file. This leads to the only drawback as far as I can see for now: We get two warnings in case of a non-existing page name in a link reference. One from {$relref} and one from the hook.
