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
- src: Markdown.svg
  name: featured
- src: erda-estremera-eMX1aIAp9Nw-unsplash.jpg
  name: splash
  params:
    class: large
    caption: A self-contained image
    attr: Erda Estremera/Unsplash
    attrlink: "https://unsplash.com/photos/eMX1aIAp9Nw"
- src: mulyadi-JJMoAiVl9jA-unsplash.jpg
  name: splash2
  params:
    caption: An embedded image
    attr: Mulyadi/Unsplash
    attrlink: https://unsplash.com/photos/JJMoAiVl9jA
categories: [Workflow, Markdown]
tags: [Linebreak, Image, Editor, Linter]  
---

Markdown has become the favored markup language for structuring text files. With good cause: The syntax is intuitive and yet quite comprehensive.
{.p-first} <!--more-->

Markdown consists of plain text marked up with a small set of ASCII signs. Its easy to read without special software and we can write Markdown in any text editor. Markdown files end with the suffix {$.md}.

{{< mnote up=5 >}}
The suffixes {$.mdown} and {$.markdown} also indicate Markdown, but are rarely used nowadays.
{{< /mnote >}}

After the [original specification][omd] had been released by John Gruber in 2004, many slightly different flavors emerged.

To resolve their incompatibilities and to create a more general dependable syntax, John Mc&hairsp;Farlane et al. proposed a strict  specification in 2011: [CommonMark][cmark]. This specification has been implemented by many Markdown render engines since and important web-software providers thereby adhere to CommonMark as a kind of standard. For a quick look at the syntax you can visit their crisp [one page overview](https://CommonMark.org/help).

## Markdown for Perplex

Perplex styles HTML, which is generated from extended [CommonMark][cmark] by Hugo’s default renderer [Goldmark][gmark]. Three extensions — the [definition list]({{< relref "doc/extended/definition-list" >}}), the [footnote]({{< relref "doc/extended/footnotes" >}}) and the [typographer]({{< relref "doc/extended/typographer" >}}) — have been adopted from [PHP Markdown Extra][phpmex]. Based on CommonMark, [GitHub](https://github.com) introduced **G**itHub **F**lavored **M**arkdown (GFM) with the four extensions [table]({{< relref "doc/extended/table" >}}), the [task-list]({{< relref "doc/extended/task-list">}}), [strikethrough]({{< relref "delins">}}) and linkify. They are defined in a [new specification][gfmspec].

{{< mnote up=20 >}}
The deprecated **Blackfriday** renderer is not fully CommonMark-compliant. Black&shy;fri&shy;day generated HTML may be styled correctly most of the time by Perplex. But if you want to rely on Perplex, I strongly suggest switching to Goldmark.
{{< /mnote >}}

Further extensions may join in the future, but probably only a few if any, because simplicity is essential for Markdown.

This documentation includes a short review of every syntax element in Goldmark and shows an example of its standard layout and alternative styling options with Perplex:

[Basic Markdown Layout]({{< relref "basic" >}})
: covers the elements of the [CommonMark specification][cmark].

[Extended Markdown Layout]({{< relref "extended" >}})
: discusses the elements adopted from [PHP Markdown Extra][phpmex] and [GFM][gfmspec].

## Caveats and Opportunities

Two basic Markdown elements are continuously creating confusion, because they are treated in somewhat ambiguous ways:

[Image][img]
: The Markdown image element is syntactically meant to be placed inside a block element. But it’s also allowed to be used self-contained and gets automatically enclosed by a paragraph then.[^1]

[Line Break][lb]
: CommonMark and GFM are not fully compatible in regard to this one element. There are two different ways to handle line breaks inside of text blocks:
    1. Treat hard line wraps in Markdown files as whitespace like CommonMark does.
    2. Treat hard line wraps as hard line wraps like GFM.
{.dl-loose}

[^TODO]: Explain this continuation indent for description lists.

The following suggestions for these elements are short. Their issues are discussed in more detail on their own pages.

[^1]: The corresponding  `<img/>` tag is an HTML inline element and needs an enclosing block element to become valid HTML 5.

### How to include images?

There is one image element in Markdown for embedding an image into a block element and no genuine element for a self-contained image, because the appropriate HTML tag `<figure>` is too complicated for simple markup. Perplex provides the shortcode [{$figure}]({{< relref "doc/shortcode/internal" >}}) for this purpose.

{{< figure splash />}}

To surround every self-contained Markdown image element with a paragraph — like CommonMark proposes and Hugo does — leads to a simple working solution, when the layout treats all images alike.

![splash](splash2) But Perplex styles the Markdown image element embedded in text blocks as a float by default. Perplex also offers layout variations for both kinds of images. That's why you should use the  [figure]({{< relref "figure" >}})-shortcode for self-contained images and the Markdown image element only for [embedded ones][img], if you start fresh with Perplex. For users with existing content, which relies on the img-element for all pictures, there is a fallback parameter [TODO].

### How to wrap lines? {#wrap .clear}

When we start writing Markdown, this question may not come to mind, because we often decide habitually: But should we still manually wrap the lines after a certain amount of characters — or better not?

_My experience_ : No, these _hard line wraps_ cause us and collaborating authors a lot of unnecessary trouble in the long run. Almost all text editor programs are nowadays able to _softly wrap_ long lines. Maybe we have to turn on that option for Markdown, but it should definitely be there.

When we rely on soft line wrapping everyone can read and edit the Markdown using a suitable line width. When we place manual wraps instead, everyone — including ourselves — has to deal with them again and again. They have to be moved or removed every time, when text is added or deleted.

{{< mnote up=14 >}}
**GitHub** decided to treat all hard wraps as such on their platform a short while ago.
{{< /mnote >}}

Hugo can handle both ways perfectly, the decision only affects our editing experience.

#### How to break lines?

Our options here are tied to the way we wrap Markdown lines.

With Hard Wraps
: When we us hard line wraps, to manually limit the line length, we can’t use them to indicate _intentional_ line breaks inside of text blocks anymore. We need the special syntax CommonMark provides.

With Soft Wraps
: If the lines are not wrapped, a line break is the intuitive way to place an _intentional_ one.
{.dl-loose}

See the page [Line Break][lb] for the configuration and the question of CommonMark-compliance.

## Special characters
All available characters—more general _glyphs_—can be used in Markdown, either directly as _Unicode_ or as _HTML entities_ (like `&para;` for &para;). The markup characters need to be escaped by a preceding backslash `\` to get treated literally by the Markdown renderer. See [Special Characters]({{< relref "specialchar#html-entities" >}}) for this topic.

{{< mnote up=14 >}}
You can still get into trouble with glyphs, which are missing in the fonts of your website. But this is a general issue independent of Markdown rendering.
{{< /mnote >}}

## File Encoding
The Markdown syntax works with every encoding. But almost all modern websites stick to the de facto standard _UTF-8_ and Perplex does, too. Your Markdown files should be encoded in _UTF-8_ and if you never thought about it before, they probably already are. This also holds for other text resources you fetch data from.

{{< mnote up=17 >}}
When you import strings from a JSON-file with _UTF-16_ encoding for example, the encoding outside the common ASCII set has a different meaning and leads to false and probably strange glyphs, when you use non-ASCII characters.
{{< /mnote >}}

## Markdown Editors
Most programming editors and IDEs support Markdown out of the box or provide plugins. There’s no need to search for a new editor, if you are already satisfied with yours.

Some special editors are designed exclusively for authoring Markdown. They usually offer a graphical user interface and other convenient features. But none of them is a perfect match for writing Markdown for Hugo and Perplex, because they don’t support all kinds of attributes and can’t handle Hugo shortcodes — as far as I know. They are dealing gracefully with these elements most of the time, but occasionally they don't.

Many of these editors offer a convenient separate _preview window_. With Hugo you have an even better option: When you run it as a server on your local computer, it will render your Markdown and deliver it to your browser instantly (see [Using Hugo](/doc/intro/hugo#server-mode). My personal solution is either an IDE or a programming editor in conjunction with Hugo’s server mode.

## Markdown Linter
CommonMark is permissive to small variations in the markup rules. To ensure a certain set of rules for a team or a bigger project, we may use a linter. The node package [Markdownlint][mlint] for example is reliable and there are plugins for editors, which allow to use it directly while editing. For this project the default settings are modified in the configuration file [`.markdownlint.yaml`][mlintconf] at the content root. Some folders contain special configurations, which allow to use all the markup options of specific elements.  

[omd]: https://daringfireball.net/projects/markdown/ "Markdown project site by John Gruber"
[cmark]: https://commonmark.org "CommonMark project site"
[gmark]: https://github.com/yuin/goldmark "Goldmark repository"
[phpmex]: https://michelf.ca/projects/php-markdown/extra/ "PHP Markdown Extra site"
[gfmspec]: https://github.github.com/gfm "GitHub Flavored Markdown Specification"
[mlint]: https://github.com/DavidAnson/markdownlint "Markdownlint"
[lb]: /doc/basic/linebreak
[img]: /doc/basic/image
[mlintconf]: {{< relref "markdownlint" >}}
