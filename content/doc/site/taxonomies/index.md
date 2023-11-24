---
authors: [Georg Makowski]
title: Taxonomies
description: Create site-wide groups of content
subtitle: false
date: 2022-09-07T22:47:33+02:00 
weight: 670
menu:
  doc:
    name: Taxonomies
    parent: siteelem
    pre: category
categories: [template]
tags: [taxonomies, site]
---

Taxonomies allow to create site-wide arbitrary groups of content.
{.p-first} <!--more-->

## What are taxonomies?

Technically, taxonomies are the third type of content structure after [single pages](/doc/intro/workflow/content#single-pages) and [list pages](/doc/intro/workflow/content#branch-bundles).

List pages present an overview of the contents that are grouped together in their folder. Taxonomies don’t have a folder (in the beginning) and are instead added to the frontmatter of pages. Every set of pages with the same taxonomy then belongs to a new arbitrarily formed group. There is no technical limit to the number of taxonomy groups a page may belong to. And the taxonomy pages present an overview of all pages belonging to their groups.

As regards content, taxonomies are a **relation between their pages**. And there are a few well-established types of taxonomies to create content relations:

Categories
: form a general classification of the contents. They aim to be mutually exclusive to separate the contents into distinguishable parts &Rightarrow; every page should get only one category. These category groups should be of a roughly similar size. In practice these goals are often not so easy to reach.

Tags
: are labels describing one aspect or property of the content &Rightarrow; every page may have a few tags. As the content grows we should check for tags which contain only one page. This often happens in the beginning but is a good reason to remove tags in the long run.
And when we end up adding a tag to the majority of our pages, we should consider to use more fine-grained labels instead.

Series:
: are names for pages that belong directly together – consecutive postings about the same topic for example.
{.dl-loose}

## Related content

Many templates for single pages generate a small section of related content (See also …). The pages in this short list are selected by the number of their joint taxonomies. We can control these relations in the section `related` of the site configuration:

```yaml {.left-in}
threshold: 30
includeNewer: true
toLower: false

indices:
  - name: categories
    weight: 30
  - name: tags
    weight: 40
  - name: series
    weight: 30
```

The key `indices` contains the list of taxonomies that are used to calculate the strength score of the relation. They all have a `weight` to determine their importance.

The parameter `threshold` contains the minimum relation score which is included in the list of related pages. This is necessary, because there is theoretically an infinite number of relations between a finite number of pages.

If `includeNewer` is set to `false` the related list excludes content with a date after the current one.

## How to add taxonomies

The [introduction into the page generation](/doc/intro/workflow/content) describes how to add taxonomies and how to generate taxonomy pages.
