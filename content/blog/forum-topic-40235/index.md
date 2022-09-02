---
title: Nested Definition List
description: Demo for topic 40235 in the Hugo-Forum
subtitle: false
date: 2022-08-27T15:01:18+02:00
weight: 999
categories: [Markdown]
tags: [Blockquote, Definition List]
series: [Demo]
resources:
- src: romain-vignes-ywqa9IZB-dU-unsplash.jpg
  name: featured
---

A definition list inside a blockquote with a sublist in one of its items is an interesting case for Markdown and its layout.
{.p-first}<!--more-->

The problem came up in the [Hugo-forum](https://discourse.gohugo.io/t/list-as-a-definition-list-item/40235) and it was not clear to at first. So I created two demos. The original question was not about the layout, only about the resulting HTML code.\*

{{< mnote star=1 down=2 >}}
I did not include the resulting code, you can inspect it as usual with your browser-tool.
{{< /mnote >}}

## Bullet list inside of definition list

### Version 1
{{< playground >}}
> He adds up:
> : - The cost of raw materials to be processed
>   - The wages
>   - The consumption of the machines, their wear and tear and the interest on the money they cost him:
>     - The selling expenses: transport. brokerage. discounts.
>     - The general expenses: administration, rents, taxes. insurance etc.
> {.dl-loose}
{{< /playground >}}

### Version 2
{{< playground >}}
> He adds up:
> : The cost of raw materials to be processed
> : The wages
> : The consumption of the machines, their wear and tear and the interest on the money they cost him:
>   - The selling expenses: transport. brokerage. discounts.
>   - The general expenses: administration, rents, taxes. insurance etc.
> {.dl-loose}
{{< /playground >}}

Markdown is very sensitive to indentation, when combining various formatting signs and [attributes]({{< relref "/doc/attribute" >}}). We need to align our code perfectly.

The HTML code is the expected one, which markup fits the content in the best way is a matter of taste. The layout of the theme is alright in both cases.

Nested definition lists are tricky and another request for the opposite problem came up after that.

## Definition list nested inside a bullet list

This time without a surrounding blockquote.

{{< playground >}}
- **1980**
  : blablabl
- **1988**
  : blabla
  : blabla
{{< /playground >}}

And again the correct indentation leads to correct HTML.

I don’t know the context, but maybe a simpler solution without the bullets could serve the same purpose:

{{< playground >}}
1980
: blablabl

1988
: blabla
: blabla
{{< /playground >}}
