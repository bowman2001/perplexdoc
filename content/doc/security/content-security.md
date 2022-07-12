---
author:
title: Content
description: How to prevent injection of malicious code
subtitle: false
date: 2022-05-05T10:17:42+02:00 
weight: 860
featImg:
menu:
  doc:
    name: Content
    parent: security
    pre: article
---

When a project includes content from unknown sources, we need to worry about content security.
{.p-first} <!--more-->

The possibility to extend Markdown with raw HTML{^\*} poses no threat as long as we have full control of the content. But as soon as we include external content, we have to consider destructive intentions. The following suggestions should help to thwart them.

{{< mnote star=1 up=5 >}}
Hugo provides the parameter [`unsafe`]({{< relref "markup#24" >}}) for _Goldmark_ to allow this.
{{< /mnote >}}

## Don’t allow raw HTML

There already is a good reason for _Goldmark_ to discard all HTML in Markdown by default: _The whole purpose of **Markdown** is to get rid of coding HTML directly_.

The security concern is simple: Raw HTML allows to inject all kinds of malicious code into a website – to call external Javascript routines in a `<script>`-tag would be the most obvious one.

## Alternatives

Hugo offers two ways to extend Markdown more securely. By injecting [HTML attributes]({{< relref "attribute">}}) or with [shortcodes]({{< relref "shortcode" >}}), which are provided by the theme or the project maintainers.

{{< mnote up=11 >}}
Hugo can also render _inline shortcodes_, which every content editor could program as she or he pleases. Because they allow basically the same kind of attacks as raw HTML, they are [prohibited by default]({{< relref "securityyaml#5" >}}).
{{< /mnote >}}

It’s still possible to inject malicious code via HTML attributes. Hugo discards all event attributes. Other more complicated attempts remain possible, but they are easier to spot than raw HTML attacks. Correct attributes are constrained to simple syntax – deviations are immediately suspicious.

Perplex offers many attributes to achieve different styles and encourages to use them. One way to contain their remaining vulnerability could be to allow only trusted editors to apply them in the last step of content creation.

## Maximum security

When you need the tightest security Hugo can offer for your content, you need to let go of attributes and disable them completely.

Blocks,
Headings (title)
: The attributes for these two element groups can be disabled in the `goldmark.parser.attribute` section of the configuration file [markup.yaml]({{< relref "markup#19">}}).

Fenced code blocks
: Besides a few special highlighting attributes Hugo also allows to add custom attributes to fenced code blocks. To disable this possibility, you need to disable their automatic highlighting in the section `goldmark.highlight` of [markup.yaml]({{< relref "markup#32">}}). To use Hugo’s internal highlighting you can alternatively use the shortcode `{{</* highlight */>}}`, which offers the same options as code fences with a slightly different syntax.
{.dl-loose}
