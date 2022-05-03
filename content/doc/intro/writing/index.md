---
author: Georg Makowski
date: "2021-09-07T21:02:57+02:00"
description: Structured Plain Text Files
featImg: img/Markdown-mark.svg
menu:
  doc:
    name: Markdown
    parent: intro
    pre: edit
subtitle: false
title: Markdown
weight: 10
resources:
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
---

**Markdown** has become the favored markup language for structuring text files. With good cause: Its syntax is easy and yet quite comprehensive.
{.p-lead} <!--more-->

_Markdown_ files are plain text files with the suffixes `.md`, `.mdown` or `.markdown`. They contain a small set of characters for the markup keeping them easy to read and to work on. After the [original specification][omd] had been released by John Gruber in 2004, many slightly different flavors emerged. To resolve their annoying incompatibilities and to create a dependable syntax, John Mc&hairsp;Farlane et al. proposed a strict  specification in 2011: [_CommonMark_][cmark]. This specification has been implemented in many _Markdown_ render engines since and important web-software providers thereby adhere to _CommonMark_. For a quick look at _CommonMark_ you can visit their crisp [one page overview](https://CommonMark.org/help).

## _Markdown_ for _Perplex_

_Perplex_ styles HTML, which is generated from extended _CommonMark_ by _Hugo’s_ default renderer [_Goldmark_][gmark]. Three extensions — the [_definition list_]({{< relref "definition-list" >}}), the [_footnote_]({{< relref "footnotes" >}}) and the [_typographer_]({{< relref "typographer" >}}) — have been adopted from [_PHP Markdown Extra_][phpmex]. Based on _CommonMark_, [_GitHub_](https://github.com) introduced _**G**itHub **F**lavored **M**arkdown (GFM)_ with the extensions [_table_]({{< relref "table" >}}), the [_task-list_]({{< relref "task-list">}}), [_strikethrough_]({{< relref "delins">}}) and _linkify_. They are defined in a [new specification][gfmspec] and are all available in _Goldmark_.

{{< sidenote up=20 >}}
**Blackfriday** is not fully _CommonMark_-compliant and has been deprecated by _Hugo_. _Black&shy;fri&shy;day_ generated HTML may be styled correctly most of the time in _Perplex_. But if you want to rely on _Perplex_, I strongly suggest switching to _Goldmark_.
{{< /sidenote >}}

Further extensions may join in the future, but probably only a few if any, because simplicity remains essential for _Markdown_.

This documentation includes short reviews of every syntax element in _Goldmark_ and shows examples of their standard layout and alternative styling options by _Perplex_:

[Basic Markdown Layout]({{< relref "basic" >}})
: covers the elements of the [_CommonMark specification_][cmark].

[Extended Markdown Layout]({{< relref "extended" >}})
: discusses the elements adopted from [_PHP Markdown Extra_][phpmex] and [_GFM_][gfmspec].

## Caveats and Opportunities

Two basic _Markdown_ elements are continuously creating confusion, because they are treated in somewhat ambiguous ways:

[Image][img]
: The _Markdown_ image element is syntactically meant to be placed inside a block element. But it’s also allowed to be used self-contained and gets **automatically wrapped** by an empty paragraph block, then.[^1]

[Line Break][lb]
: _CommonMark_ and _GFM_ are not fully compatible in regard to this one element. There are two different ways to handle line breaks inside of text blocks:
    1. Treat hard line wraps in _Markdown_ files as whitespace like _CommonMark_ does.
    2. Treat hard line wraps as hard line wraps like _GFM_.
{.dl-loose}

My following suggestions for the handling of these elements are short. Their issues are discussed in more detail on their pages.

[^1]: The corresponding  `<img/>` tag is an HTML inline element and needs an enclosing block element to become valid HTML 5.

### How to include images?

{{< figure splash />}}

There is one image element in _Markdown_ for embedding an image into a block element and no genuin element for a self-contained image, because the appropriate HTML tag `<figure>` is too complicated for simple markup. _Perplex_ provides the shortcode [_figure_]({{< relref "doc/shortcode/builtin/internal" >}}) for this purpose.

To surround every self-contained _Markdown_ image element with a paragraph — like _CommonMark_ proposes and _Hugo_ does — leads to a simple working solution, when the layout treats all images alike.

![splash](splash2) _Perplex_ styles the _Markdown_ image element always embedded in text blocks as a float. In contrast to them, the self-contained images should stand out. _Perplex_ also offers layout variations for both kinds of images. That's why _Perplex_ users need to use the  [figure]({{< relref "figure" >}})-shortcode for self-contained images and the _Markdown_ image element only for [embedded ones][img].

### How to wrap lines? {#wrap .clear}

When we start writing _Markdown_, this question may not come to mind, because we often decide habitually: But should we still manually wrap the lines after a certain amount of characters — or better not?

_My experience_ : No, these _hard line wraps_ cause us and collaborating authors a lot of unnecessary trouble in the long run. Almost all text editor programs are nowadays able to _softly wrap_ long lines. Maybe we have to turn on that option for _Markdown_, but it should definitely be there.

When we rely on soft line wrapping everyone can read and edit the _Markdown_ using a suitable line width. When we place manual wraps instead, everyone — including ourselves — has to deal with them again and again. They have to be moved or removed every time, when text is added or deleted.

{{< sidenote up=14 >}}
**GitHub** decided to treat all hard wraps as such on their platform a short while ago.
{{< /sidenote >}}

_Hugo_ can handle both ways perfectly. Which rule our _Markdown_ follows does only affect our editing experience and has no effect on the resulting pages.

#### How to break lines?

Our options here are tied to the way we wrap the _Markdown_.

With Hard Wraps
: When we us hard line wraps, to manually limit our _Markdown_ line length, we can’t use them to indicate _intentional_ line breaks inside of text blocks anymore. We need the special syntax _CommonMark_ provides.

With Soft Wraps
: If the lines are not wrapped, a line break is the intuitive way to place an _intentional_ one.
{.dl-loose}

See the page [Line Break][lb] for the configuration setting and the question of _CommonMark_-compliance.

## Special characters
All available characters—more general _glyphs_—can be used in _Markdown_, either directly as _Unicode_ or as _HTML entities_ (like `&para;` for &para;). The markup characters need to be escaped by a preceding backslash `\` to get treated litterally by the _Markdown_ renderer. See [Special Characters]({{< relref "specialchar#html-entities" >}}) for this topic.

{{< sidenote up=14 >}}
You can still get into trouble with glyphs, which are missing in the fonts for your website. But this is a general web-font issue independent of _Markdown_ rendering.
{{< /sidenote >}}

## File Encoding
The _Markdown_ syntax works with every encoding. But almost all modern websites stick to the de facto standard _UTF-8_ and _Perplex_ does, too. Your _Markdown_ files should have this encoding and if you never thought about it before, they probably already do. This also holds for other text resources you fetch data from.

{{< sidenote up=17 >}}
When you import strings from a JSON-file with _UTF-16_ encoding for example, the encoding outside the common ASCII set has a different meaning and leads to false and probably strange glyphs, when you use non-ASCII characters.
{{< /sidenote >}}

## Markdown Editors
Most programming editors and IDEs support _Markdown_ out of the box or provide plugins. There’s no need to search for a new editor, if you are already familiar with one.

Some special editors are designed exclusively for authoring _Markdown_. They usually offer a graphical user interface and other convenient features. But none of them is a perfect match for writing _Markdown_ for _Hugo_ and _Perplex_, because they don't support all kinds of attributes and don’t know about _Hugo_ shortcodes — as far as I know. They are dealing gracefully with these elements most of the time, but occasionally they don't.

Many of these editors offer a convenient separate _preview window_. With _Hugo_ you have an even better option: When you run it as a server on your local computer, it will render your Markdown and deliver it to your browser instantly (see [Using Hugo]({{< relref "hugo#server-mode"  >}})). My personal solution is either an IDE or a programming editor in conjunction with _Hugo’s_ server mode.

## Markdown Linting
_CommonMark_ is permissive to many small variations in the markup rules. To ensure a certain markup style in a team or a bigger project, we may use a linter. The node package [_Markdownlint_][mlint] for example is reliable and there are plugins for editors, which allow to use it directly while editing. For this project the default settings are modified in the configuration file [`.markdownlint.yaml`][mlintconf] at the content root. Some folders contain special configurations, which allow to use all the markup options of specific elements.  

[omd]: https://daringfireball.net/projects/markdown/ "Markdown project site by John Gruber"
[cmark]: https://CommonMark.org "CommonMark project site"
[gmark]: https://github.com/yuin/goldmark "Goldmark repository"
[phpmex]: https://michelf.ca/projects/php-markdown/extra/ "PHP Markdown Extra site"
[gfmspec]: https://github.github.com/gfm "GitHub Flavored Markdown Specification"
[mlint]: https://github.com/DavidAnson/markdownlint "Markdownlint"
[lb]: {{< relref "linebreak" >}}
[img]: {{< relref "image" >}}
[mlintconf]: {{< relref "markdownlint" >}}
