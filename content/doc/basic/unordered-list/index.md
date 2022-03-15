---
date: "2021-03-24T21:44:41+01:00"
description: List marked with a bullet
image:
  featured: torbjorn-helgesen-dz35efCT3ZA-unsplash.jpg
menu:
  doc:
    name: Bullet list
    parent: basic
    pre: format_list_bulleted
subtitle: false
title: Bullet List
weight: 25
---

An unordered list groups a set of related items. Any item may contain a sub-list. The longer a list is getting, the more it looses its purpose: To show a clear structure.
{.p-lead} <!--more-->

## Syntax

We can use `-`, `+` or `*` to mark the items of an unordered list. We have to stick to the one we started with in every list. There a two kinds of lists, *tight* and *loose* ones. And a list with one or more sub-lists is called *nested*.

### Tight
```md {class="col-left"}
- The minus sign `-`
- The plus sign `+`
- The asterisk `*`
```
When there is not a single blank line between the items, we have a *tight* list.

### Loose
```md
- A loose list may contain more than one paragraph. You only have to keep the
intendation on the same level.

  Like this. Here we have separated paragraph inside of the same list item.

- Here we are again after a blank line and we are still inside our list.
```

The items of a loose list are separated by a blank line. The items may span across some paragraphs. A subsequent paragraph has to be indented at least as far as the first character of its predecessor:

### Nested
```md {.left}
- To start a sub-list
  - we have to indent the item
    - By two spaces
    - Or one tabulator
  - We may use a different marker
    + but that's not important
    + the correct indentation
- is all that matters
```
To start a sublist inside a list item, the markers of the sublist have to be indented by two spaces or a tabulator. For your convenience you may switch the list marker for a new list level, but the indentation is all that matters.

## Layout

Perplex is styling *tight*, *loose* and *nested* lists of both kinds. As additional option, you may enforce a smaller indentation on tight lists with a class attribute. 

### Tight

The short tight list from above looks like this:

- The minus sign `-`
- The plus sign `+`
- The asterisk `*`

### Loose

The loose items from above together with a few more look like this:

+ A loose list may contain more than one paragraph. You only have to keep   the indentation on the same level.

  Like this. Here we have separated paragraph inside of the same list item.

+ Here we are again after a blank line and we are still inside our list.

  ###### By the way:
  It is not possible to mix tight and loose lists. Even if there is only one blank line between the items, the list is treated by _Goldmark_ as a loose list.

+ If you would change the marking symbol inside a list, _Goldmark_ will begin a new list, even if there a no blank lines. To use this intentionally to separate lists would be confusing.

Every unindented markdown content closes the list.

### Nested

#### Thight

Tight lists are vertically spaced like normal paragraphs:

- To mark your list items you could also use
  + the asterisk `*`
    - the asterisk is usually used to mark *emphasized text*
    - therefore its use as a list marker may be confusing.
  + Better stay with
    - the plus sign `+` or
    - the minus sign `-`
- And back to the first level

As you can see, a tight nested list tends to look a cramped. Maybe we are always better off with loose nested lists, even if the items are short. Or we may try a *smaller indentation*.

On mobile screens the indentation of list items is already smaller. To enforce the smaller indentation on all screens, we add the *attribute* `{.smallindent}`.

- To mark your list items you could also use
  - the asterisk `*`
    - the asterisk is usually used to mark *emphasized text*
    - therefore its use as a list marker may be confusing.
  - Better stay with
    - the plus sign `+` or
    - the minus sign `-`
- And back to the first level
{.smallindent}

#### Loose

If there is at least one empty line between the items of a list and every sublist, the result looks like this:

+ A loose list may contain more than one paragraph. You only have to keep the indentation on the same level.

  Like this. Here we have separated paragraph inside of the same list item. And we can explain and explain until we don't know what to write any more. And we can even start a nested list.

  + Here we have the first item of our new loose sub-list. There may be a lot of content inside of such an item. A new sub-list for example:

    - the asterisk is often used to mark *emphasized text*

    - therefore its use as a list marker may be confusing.

  + Here we have the second item of our first sub-list. There may be a lot of content inside of such an item.

+ Here we are again after a blank line and we are still inside our list.
  By the way: It is not possible to mix tight and loose lists. Even if there is only one blank line between the items, the list is treated by _Goldmark_ as a loose list.

+ If you change the marking symbol, _Goldmark_ starts a new list even if the
  markdown items are tight. But it may be a bad idea to use this as a way of separating two lists.

Every unindented paragraph or other unindented block element results in the definitive end of every list.
