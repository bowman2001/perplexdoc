---
author: Georg Makowski
date: "2021-09-07T21:02:57+02:00"
description: Structured Plain Text Files
menu:
  doc:
    name: Markdown
    parent: intro
    pre: edit
subtitle: false
title: Markdown
weight: 15
resources:
resources:
- src: Markdown.svg
  name: featured
  params:
    alt: Markdown logo
    container: "no"
- src: erda-estremera-eMX1aIAp9Nw-unsplash.jpg
  name: splash
  params:
    alt: A splashing drop of water
    size: normal
    caption: Stand-alone image
- src: mulyadi-JJMoAiVl9jA-unsplash.jpg
  name: splash2
  params:
    caption: Embedded image
    alt: Another splashing water drop
categories: [Getting started, Markdown]
tags: [Linebreak, Image]  
---

Markdown has become the favored markup language to structure text files. With good cause: Markdown syntax is relatively intuitive and can be rendered into several layout formats.
{.p-first} <!--more-->

Markdown files consist of plain text marked up with a small set of ASCII signs. We can read and change them with any text editor. They usually end with the suffix ›{$md}‹.

{{< mnote up=5 >}}
The suffixes ›{$mdown}‹ and ›{$markdown}‹ also indicate Markdown, but are rarely used nowadays.
{{< /mnote >}}

After the [original specification][omd] had been released by John Gruber in 2004, many slightly different flavors of Markdown emerged.

To resolve their incompatibilities and to create a dependable basic syntax, John Mc&hairsp;Farlane et al. proposed a strict specification in 2011: [CommonMark][cmark]. This specification has been implemented by many Markdown render engines since and important web-software providers thereby adhere to CommonMark as a kind of standard. For a quick look at the syntax you can visit their crisp [one page overview](https://CommonMark.org/help).

## Markdown for Perplex

Perplex styles HTML, which is generated from extended [CommonMark][cmark] by Hugo’s default renderer [Goldmark][gmark]. Three extensions — the [definition list][dl], the [footnote][fnote] and the [typographer][typo] — have been adopted from [PHP Markdown Extra][phpmex]. Based on CommonMark, [GitHub](https://github.com) introduced **G**itHub **F**lavored **M**arkdown (GFM) with the four extensions [table][table], the [task-list][task], [strikethrough][strike] and linkify. They are defined in a [new specification][gfmspec].

{{< mnote up=20 >}}
Hugo’s deprecated **Blackfriday** renderer is not fully CommonMark-compliant. Black&shy;fri&shy;day generated HTML may be styled correctly most of the time. But if you want to rely on Perplex or any other recent theme, I strongly suggest switching to Goldmark and a recent Hugo version.
{{< /mnote >}}

Further extensions may join in the future, but probably only a few if any, because simplicity is Markdown’s essential characteristic.

This documentation includes a short review of every syntax element known to Goldmark and shows examples of their standard layout in Perplex and alternative styling options the theme provides:

[Basic Markdown Layout]({{< relref "basic" >}})
: covers the elements of the [CommonMark specification][cmark].

[Extended Markdown Layout]({{< relref "extended" >}})
: discusses the elements adopted from [PHP Markdown Extra][phpmex] and [GFM][gfmspec].

## Caveats and Opportunities

Two basic Markdown elements are continuously creating confusion, because they are treated in somewhat ambiguous ways:

[Image][img]
: The CommonMark image element is syntactically meant to be placed inside a block element. But it’s also allowed to be used stand-alone and gets automatically enclosed by a paragraph then.[^1]

[Line Break][lb]
: CommonMark and GFM are not fully compatible in regard to this one element. There are two different ways to handle line breaks inside of text blocks:
    1. Treat hard line wraps in Markdown files as whitespace like CommonMark does.
    2. Treat hard line wraps as hard line wraps like GFM.
{.dl-loose}

The following suggestions for these elements are short. Their issues are discussed in more detail on their own pages.

[^1]: The corresponding  `<img/>` tag is an HTML inline element and demands an enclosing block element in HTML 5.

### How to include images?

There is one image element in CommonMark for embedding an image into a block element and no genuine element for a stand-alone image, because the appropriate HTML tag `<figure>` is too complicated for simple markup. Hugo and Perplex provide the shortcode [{$figure}][fig] for this purpose. 

{{< figure splash />}}

To surround every stand-alone Markdown image element with a paragraph — like CommonMark proposes and Hugo does — leads to a simple working solution, when the layout treats all images alike.

![splash](splash2) Perplex styles the Markdown image element as a float by default. Perplex also offers layout variations for both kinds of images. That's why you should use the  [figure]({{< relref "figure" >}})-shortcode for stand-alone images and the Markdown image element only for [embedded ones][img], when you start fresh. Because of the widespread use of the Markdown image-element for stand-alone images, Perplex offers a [fallback-parameter](/doc/basic/image#fallback) to show them in full text width.

### How to wrap lines? {#wrap .clear}

When we start writing Markdown, this question may not come to mind, because we often decide habitually: But should we still manually wrap the lines after a certain amount of characters — or better not?

Hard line wraps cause us and collaborating authors a lot of unnecessary trouble in the long run --- that’s my impression. Almost all text editor programs are nowadays able to **softly wrap** long lines. Maybe we have to turn on that option for Markdown, but it should definitely be there.

When we rely on soft line wrapping everyone can read and edit the Markdown using a suitable line width. When we place manual wraps, everyone — including ourselves — has to deal with them again and again. They have to be moved or removed every time, when text is added or deleted.

{{< mnote up=14 >}}
**GitHub** decided to treat all hard wraps as such on their platform a while ago.
{{< /mnote >}}

How to handle hard line wraps remains your choice without any repercussions. Hugo can handle both ways perfectly, the decision only affects the editing experience.

#### How to break lines?

Our options here are tied to the way we wrap Markdown lines.

With Hard Wraps
: When we us hard line wraps, to manually limit the line length, we can’t use them to indicate _intentional_ line breaks inside of text blocks anymore. We need the special syntax CommonMark provides.

With Soft Wraps
: If the lines are not wrapped, a line break is the intuitive way to place an _intentional_ one.
{.dl-loose}

See the page [Line Break][lb] for the configuration and the question of CommonMark-compliance.

## Special characters
All available characters—more general _glyphs_—can be used in Markdown, either directly as Unicode or as HTML entities (like `&para;` for &para;). The markup characters need to be escaped by a preceding backslash `\` to get treated literally by the Markdown renderer. See [Special Characters]({{< relref "specialchar#html-entities" >}}) for more information about this topic.

{{< mnote up=14 >}}
You can still get into trouble with glyphs, which are missing in the fonts of your website. But this is a general issue independent of Markdown rendering.
{{< /mnote >}}

## File Encoding
The Markdown syntax works with every encoding. But almost all modern websites stick to the de facto standard **UTF-8** and Perplex does, too. Your Markdown files should be encoded in UTF-8 and if you never thought about it before, they probably already are. This also holds for other text resources you may fetch data from.

{{< mnote up=17 >}}
When you import strings from a JSON-file with UTF-16 encoding for example, the encoding outside the common ASCII set has a different meaning and leads to false and probably strange glyphs, when you use non-ASCII characters.
{{< /mnote >}}

## Markdown Editors
Most programming editors and IDEs support Markdown out of the box or provide plugins. There’s no need to search for a new editor, if you are already satisfied with yours.

Some special editors are designed exclusively for authoring Markdown. They usually offer a graphical user interface and other convenient features. But none of them is a perfect match for writing Markdown for Hugo and Perplex, because they don’t support all kinds of attributes and can’t handle Hugo shortcodes — as far as I know (a few of them are progressing fast). They are dealing gracefully with these elements most of the time, but occasionally they don't.

### Consider Hugo’s server mode for local previews {.h-tip}

Many of the special Markdown editors offer a separate preview window. With Hugo you have an even **better option**: When you run Hugo in its web-server mode on the local machine you’re writing your Markdown on, it will render your files and deliver the result to your browser instantly (see [Using Hugo](/doc/intro/workflow/local-server). My preferred solution is either an IDE or a programming editor in conjunction with Hugo’s server mode.

## Markdown Linter
CommonMark is permissive to small variations in the markup rules. To ensure a certain set of rules for a team or a bigger project, we may use a linter. The node package [Markdownlint][mlint] for example is reliable and there are plugins for editors, which allow to use it directly while editing.

{{< mnote up=14 >}}
For this project the default settings are modified in the configuration file [`.markdownlint.yaml`]({{< relref "markdownlint" >}}) at the content root. Some folders contain special configurations, which allow to use all the markup options of specific elements.
{{< /mnote >}}  

[omd]: https://daringfireball.net/projects/markdown/ "Markdown project site by John Gruber"
[cmark]: https://commonmark.org "CommonMark project site"
[gmark]: https://github.com/yuin/goldmark "Goldmark repository"
[phpmex]: https://michelf.ca/projects/php-markdown/extra/ "PHP Markdown Extra site"
[gfmspec]: https://github.github.com/gfm "GitHub Flavored Markdown Specification"
[mlint]: https://github.com/DavidAnson/markdownlint "Markdownlint"
[lb]: /doc/basic/linebreak
[img]: /doc/basic/image
[dl]: {{< relref "doc/extended/definition-list" >}}
[fig]: {{< relref "doc/shortcode/internal" >}}
[fnote]: {{< relref "doc/extended/footnotes" >}}
[typo]: {{< relref "doc/extended/typographer" >}}
[table]: {{< relref "doc/extended/table" >}}
[task]: {{< relref "doc/extended/task-list">}}
[strike]: {{< relref "delins">}}
