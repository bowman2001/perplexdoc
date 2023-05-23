---
authors: [Georg Makowski]
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
    size: tiny
- src: erda-estremera-eMX1aIAp9Nw-unsplash.jpg
  name: bigsplash
  params:
    alt: A splashing drop of water
    caption: Default stand-alone image. To generate a caption like this, we need to register the image as a resource in the front-matter.
- src: mulyadi-JJMoAiVl9jA-unsplash.jpg
  name: splash
  params:
    caption: Embedded image
    alt: Another splashing water drop
categories: [Getting started, Markdown]
tags: [Linebreak, Image]  
---

Markdown has become the favored markup language to structure text files. With good cause: Markdown syntax is relatively intuitive and can be rendered into several layout formats.
{.p-first} <!--more-->

Markdown files consist of plain text marked up with a small set of ASCII signs. We can read and change them with any text editor. They usually end with the suffix ›{$md}‹.

{{< mnote up=11 >}}
The suffixes ›{$mdown}‹ and ›{$markdown}‹ also indicate Markdown, but are rarely used nowadays.
{{< /mnote >}}

After the [original specification][omd] had been released by John Gruber in 2004, many slightly different flavors of Markdown emerged.

To resolve their incompatibilities and to create a dependable basic syntax, John Mc&hairsp;Farlane et al. proposed a strict specification in 2011: [CommonMark][cmark]. This specification has been implemented by many Markdown render engines since and important web-software providers thereby adhere to CommonMark as a kind of standard. For a quick look at the syntax, you can visit their crisp [one page overview](https://CommonMark.org/help).

## Markdown for Perplex

Perplex styles HTML, which is generated from extended [CommonMark][cmark] by Hugo’s default renderer [Goldmark][gmark]. Three extensions — the [definition list][dl], the [footnote][fnote] and the [typographer][typo] — have been adopted from [PHP Markdown Extra][phpmex]. Based on CommonMark, [GitHub](https://github.com) introduced **G**itHub **F**lavored **M**arkdown (GFM) with the four extensions [table][table], the [task-list][task], [strikethrough][strike] and linkify. They are defined in a [new specification][gfmspec].

{{< mnote up=20 >}}
Hugo’s deprecated **Blackfriday** renderer is not fully CommonMark-compliant. Black&shy;fri&shy;day generated HTML may be styled correctly most of the time. But if you want to rely on Perplex or any other recent theme, I strongly suggest switching to Goldmark and a recent Hugo version.
{{< /mnote >}}

Further extensions may join in the future, but probably only a few if any, because simplicity is Markdown’s essential characteristic.

This documentation includes a short review of every syntax element of Goldmark and shows their standard layout and alternative styling options:

[Basic Markdown Layout](/doc/basic)
: covers the elements of the [CommonMark specification][cmark].

[Extended Markdown Layout](/doc/extended)
: discusses the elements adopted from [PHP Markdown Extra][phpmex] and [GFM][gfmspec].

## Caveats and Opportunities

Two CommonMark elements are continuously creating confusion because they are treated in somewhat ambiguous ways:

[Image][img]
: The CommonMark image element is syntactically meant to be placed inside a block element. But it’s also allowed to be used stand-alone and gets automatically enclosed by a paragraph then.[^1]

[Line Break][lb]
: CommonMark and GFM are not fully compatible regarding this one element. There are two different ways to handle line breaks inside of text blocks:
    1. Treat hard-line wraps in Markdown files as whitespace as CommonMark does.
    2. Treat hard-line wraps as hard-line wraps like GFM.
{.dl-loose}

The following suggestions for these elements are short. Their issues are discussed in more detail on their pages.

[^1]: The corresponding  `<img/>` tag is an HTML inline element and demands an enclosing block element in HTML 5.

### How to include images?

There is one image element in CommonMark for embedding an image into a block element and no genuine element for a stand-alone image. Thankfully, since version 0.108.0 Hugo can distinguish both types and allows to generate the appropriate image containers:

#### Stand-alone image

![](bigsplash)

Hugo and Perplex used to provide the shortcode [{$figure}][fig] for this purpose. It’s kept for backward compatibility in this theme. But the new solution is much more convenient and fits loads of already existing Markdown.

#### Embedded image

![splash](splash) Perplex styles the embedded Markdown image element as a float. The theme offers layout variations for both kinds of images. We can place embedded images on the left or right inside the text block. Small stand-alone images may appear in the margin of the following text block. Large ones stretch from the left margin to the right. Look into the section about [images](/doc/basic/image) for all the options.
{.clear}

### How do we wrap lines? {#wrap}

When we start writing Markdown, this question may not come to mind, because we often decide habitually: But should we still manually wrap the lines after a certain amount of characters — or better not?

The hard-line wraps cause us and collaborating authors a lot of unnecessary trouble in the long run --- that’s my impression. Almost all text editor programs are nowadays able to **softly wrap** long lines. Maybe we have to turn on that option for Markdown, but it should definitely be there.

When we rely on soft line wrapping everyone can read and edit the Markdown using a suitable line width. When we place manual wraps, everyone — including ourselves — has to deal with them again and again. They have to be moved or removed every time when text is added or deleted.

{{< mnote up=14 >}}
**GitHub** decided to treat all hard wraps as such on their platform a while ago.
{{< /mnote >}}

How to handle hard-line wraps remains your choice without any repercussions. Hugo can handle both ways perfectly, the decision only affects the editing experience.

### How to break lines?

Our options here are tied to the way we wrap Markdown lines.

With Hard Wraps
: When we enable hard-line wraps, to manually limit the line length, we can’t use them to indicate intentional line breaks anymore. We need the special syntax CommonMark provides.

With Soft Wraps
: If the lines are not wrapped, a line break is the intuitive way to place an intentional one.
{.dl-loose}

See the page [Line Break][lb] for the configuration and the question of CommonMark-compliance.

## Special characters
All available characters can be used in Markdown, either directly as Unicode or as HTML entities (like `&para;` for &para;). The markup characters need to be escaped by a preceding backslash `\` to get treated literally by the Markdown renderer. See [Special Characters](/doc/basic/specialchar#html-entities) for more information about this topic.

{{< mnote up=14 >}}
We still get into trouble with characters, which are missing in the fonts used on our website. But this is a general issue completely independent of Markdown.
{{< /mnote >}}

## File encoding
The Markdown syntax works with every encoding. But almost all modern websites stick to the de facto standard **UTF-8** and Perplex does, too. Your Markdown files should be encoded in UTF-8 and if you never thought about it before, they probably already are. This also holds for other text resources you may fetch data from.

{{< mnote up=17 >}}
When you import strings from a JSON file with UTF-16 encoding for example, the encoding outside the common ASCII set has a different meaning and leads to false and probably strange characters, when you use non-ASCII characters.
{{< /mnote >}}

## Markdown editors
Most programming editors and IDEs support Markdown out of the box or provide plugins. There’s no need to search for a new editor if you are already satisfied with yours.

### Specialized editors

Some editors are designed exclusively for authoring Markdown. They usually offer a graphical user interface and other convenient features. As of now, none of them is a perfect match for authoring Markdown for this theme, because they don’t support all kinds of attributes and can’t handle Hugo shortcodes — as far as I know (a few of them are progressing fast). They are dealing gracefully with these elements most of the time, but occasionally they don't.

### Use Hugo’s server mode for local previews {.h-tip}

Hugo offers a very convenient way of looking at your results instantly: When you run Hugo in its server mode on the local machine you’re writing your Markdown on, it will render your files and deliver the result to your browser (see [Using Hugo](/doc/intro/workflow/local-server). My workflow is like many others based on Visual Studio Code (VSCode) as a Markdown editor in conjunction with Hugo’s server mode.

### Front-Matter CMS {.h-info}

Front-Matter CMS is an exciting plugin for VSCode which offers many nice features. Unfortunately, I can’t recommend it right now for this theme, because it may change the front-matter in a way that alters the site structure. It’s also not capable of handling Hugo’s resource parameters out of the box. The plugin probably handles other projects very fine and I hope to use it in the future.

## Markdown Linter
CommonMark is permissive to small variations in the markup rules. To ensure a certain set of rules for a team or a bigger project, we may use a linter. The node package [Markdownlint][mlint] for example is reliable and there are plugins to use it directly while editing.

{{< mnote up=14 >}}
For this project the default settings are modified in the configuration file [`.markdownlint.yaml`](/doc/appendix/markdownlint) at the content root. Some folders contain special configurations, which allow using all the markup options of specific elements.
{{< /mnote >}}  

[omd]: https://daringfireball.net/projects/markdown/ "Markdown project site by John Gruber"
[cmark]: https://commonmark.org "CommonMark project site"
[gmark]: https://github.com/yuin/goldmark "Goldmark repository"
[phpmex]: https://michelf.ca/projects/php-markdown/extra/ "PHP Markdown Extra site"
[gfmspec]: https://github.github.com/gfm "GitHub Flavored Markdown Specification"
[mlint]: https://github.com/DavidAnson/markdownlint "Markdownlint"
[lb]: /doc/basic/linebreak "Linebreak"
[img]: /doc/basic/image "Image"
[dl]: /doc/extended/definition-list "Definition List"
[fig]: /doc/shortcode/internal "Internal shortcodes"
[fnote]: /doc/extended/footnotes "Footnotes"
[typo]: /doc/extended/typographer "Typographer"
[table]: /doc/extended/table "Table"
[task]: /doc/extended/task-list "Task list"
[strike]: /doc/extended/delins "Delete and insert"
