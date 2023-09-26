---
author:
title: Content
description: How to prevent injection of malicious code
subtitle: false
date: 2022-05-05T10:17:42+02:00 
weight: 810
menu:
  doc:
    name: Content
    parent: security
    pre: article
---

When a project includes content from unknown sources, we need to worry about content security.
{.p-first} <!--more-->

The possibility to extend Markdown with raw HTML{^\*} poses no threat as long as we have full control of the content. But as soon as we include external content, we have to consider bad intentions. The following suggestions should help to thwart them or make them at least more difficult.

{{< mnote star=1 up=5 >}}
Hugo provides the parameter [`unsafe`](/doc/appendix/config/markup#24) for _Goldmark_ to allow this.
{{< /mnote >}}

## Don’t allow raw HTML

There is one reason for Goldmark to discard all raw HTML in Markdown by default: The whole purpose of **Markdown** is to get rid of coding HTML directly.

The security concern is also obvious: Raw HTML allows to inject all kinds of malicious code into a website – to call external Javascript routines in a `<script>`-tag is the easiest one.

## Alternatives

Hugo offers two ways to extend Markdown more securely. By injecting [HTML attributes](/doc/enhancing/attribute) or configurable HTML snippets with [shortcodes](/doc/enhancing/shortcode). They are provided by theme developers or project maintainers whom you need to trust.

{{< mnote up=11 >}}
Hugo can also render _inline shortcodes_, so every content editor could introduce its own shortcodes directly in the Markdown. Because they allow basically the same kind of attacks as raw HTML, they are [prohibited by default](/doc/appendix/config/securityyaml#5).
{{< /mnote >}}

It’s still possible to inject malicious code via HTML attributes. Hugo discards all event attributes to make it harder. Other more complicated attempts remain possible. But they are easier to spot than attacks hidden in HTML. Correct attributes are constrained to simple syntax – deviations are immediately suspicious.

Perplex offers many attributes to achieve different styles and encourages to use them. One way to contain the remaining vulnerability by attribute attacks would be to allow only trusted editors to apply them in the last step of your content creation.

## Maximum security

When you need the tightest security Hugo can offer for loads of external and unsupervised content, you need to let go of attributes and disable them completely. You can still provide carefully crafted shortcodes, to achieve the same results.

Blocks,
Headings (title)
: The attributes for these two element groups can be disabled in the `goldmark.parser.attribute` section of the configuration file [markup.yaml](/doc/appendix/config/markup#19).

Fenced code blocks
: Besides a few special highlighting attributes Hugo also allows to add custom attributes to fenced code blocks. To disable this possibility, you need to disable their automatic highlighting in the section `goldmark.highlight` of [markup.yaml](/doc/appendix/config/markup#32). To use Hugo’s internal highlighting you can alternatively use the shortcode `{{</* highlight */>}}`, which offers the same options as code fences with only a slightly different syntax.
{.dl-loose}
