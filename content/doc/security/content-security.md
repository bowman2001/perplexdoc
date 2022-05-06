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

When we start to include content from unknown sources, we need to worry about the remaining possibilities to inject malicious code in Markdown files.
{.p-lead} <!--more-->

The possibility to extend _Markdown_ with HTML attributes and even with raw HTML may be purely beneficial{^\*} as long as we have full control of the content. But as soon as we include external content, we have to consider destructive intentions. The following suggestions should help to thwart them.

{{< sidenote star=1 up=5 >}}
_Hugo_ provides the parameter [`unsafe`]({{< relref "markup#24" >}}) for _Goldmark_ to accomplish this.
{{< /sidenote >}}

## Don’t allow raw HTML

There already is a reason for _Goldmark_ to discard all HTML in _Markdown_ by default: _The whole purpose of **Markdown** is to get rid of coding HTML directly_.

The security concern is simply: Raw HTML allows to inject all kinds of malicious code into a website – to call external Javascript routines in a `<script>`-tag would be only the most obvious one.

## Alternatives

_Hugo_ offers two ways to extend _Markdown_ more securely. By injecting [HTML attributes]({{< relref "attribute">}}) or with [shortcodes]({{< relref "shortcode" >}}), which are provided by the theme or the project maintainers.

{{< sidenote up=11 >}}
_Hugo_ can also render _inline shortcodes_, which every content editor could program as she or he pleases. Because they allow basically the same kind of attacks as raw HTML, they are [prohibited by default]({{< relref "securityyaml#5" >}}).
{{< /sidenote >}}

It’s still theoretically possible to inject malicious code via HTML attributes. But _Hugo_ discards event attributes and other more complicated attempts are definitely easier to spot than raw HTML attacks. Correct attributes are short and constrained to simple syntax – deviations are immediately suspicious.

_Perplex_ offers many attributes to achieve different styles and encourages to use them. One way to contain their remaining vulnerability could be to allow only trusted editors to apply them.

## Maximum security

When you need the tightest security _Hugo_ can offer for your content, you need to let got of attributes and disable them completely.

Blocks,
Headings (title)
: The attributes for these two element groups can be disabled in the `goldmark.parser.attribute` section of the configuration file [markup.yaml]({{< relref "markup#19">}}).

Fenced code blocks
: Besides a few special highlighting attributes _Hugo_ also allows to add custom attributes to fenced code blocks. To disable this possibility, you need to disable their automatic highlighting in the section `goldmark.highlight` of [markup.yaml]({{< relref "markup#32">}}). To use _Hugo’s_ internal highlighting you can alternatively use the shortcode `{{</* highlight */>}}`, which offers the same options as code fences with a slightly different syntax.
{.dl-loose}
