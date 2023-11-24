---
authors: [Georg Makowski, Test Author]
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
tags: [taxonomies, site, related, author]
---

Taxonomies allow the creation of site-wide arbitrary groups of content with joint taxonomy terms.
{.p-first} <!--more-->

## What are taxonomies and their terms?

Technically, taxonomy terms are the third type of content structure after [single pages](/doc/intro/workflow/content#single-pages) and [list pages](/doc/intro/workflow/content#branch-bundles).

List pages present an overview of the contents that are grouped together in their folder. Taxonomy terms don’t have a folder (in the beginning) and are instead added to the frontmatter of pages. Every set of pages with the same taxonomy term then belongs to a new arbitrarily formed group. There is no technical limit to the number of taxonomy terms a page may belong to. The taxonomy term pages present an overview of all pages belonging to their groups. (&rightarrow; [Hugo documentation for taxonomies][hugotaxo]) 

As regards content, taxonomy terms should describe an actual **relation between their pages**. There are a few well-established taxonomies to create specific types of content relations as their terms:

Categories
: form a general classification of the contents. They aim to be mutually exclusive to separate the contents into distinguishable parts &rightarrow; every page should get only one category. These category groups should be of a roughly similar size. In practice, these goals are often not so easy to reach.

Tags
: are labels describing one aspect or property of the content &rightarrow; every page may have a few tags. As the content grows we should check for tags that contain only one page. This often happens in the beginning but is a good reason to remove tags in the long run.
And when we end up adding a tag to the majority of our pages, we should consider using more fine-grained labels instead.

Series:
: are pages that are tied directly together – postings about the exactly same topic for example or a long article split into a few parts.
{.dl-loose}

We can define new taxonomies to establish other types of relations (&rightarrow; [Hugo documentation for taxonomies][hugotaxo]).
{.inline}

{{< mnote >}}**Author pages** are usually not understood as taxonomy terms but to be an author is a relation. The author templates for this theme are taxonomy templates and `authors` is defined as taxonomy.{{< /mnote >}}

## Related content

Many templates for single pages generate a small section of related content (See also …). The pages in this short list are selected by the highest number of joint taxonomy terms. We can control these relations in the section `related` of the site configuration:

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

The key `indices` contains the list of taxonomies that are used to calculate the strength of the relation as a score. They all have a `weight` to determine their importance.

The parameter `threshold` contains the minimum relation score which is included in the list of related pages. This is necessary because there is theoretically an infinite number of relations between a finite number of pages.

If `includeNewer` is set to `false` the related list excludes content with a date after the current one.

## How to add taxonomy terms?

The [introduction to page generation](/doc/intro/workflow/content) describes how to add taxonomy terms and how to generate content files for taxonomy term pages.

## How to generate an overview for taxonomies?

Every taxonomy has its content section and there is always a list view for them. This list view shows small cards with the featured image of the terms and the number of pages they contain.

We can create an explicit content file for this list view with a command like:

```sh {.left-in}
hugo new tags/_index.md
```

As for the single taxonomy terms, there is usually not much content to add. We can provide the `description` as a subtitle and a featured image as usual which may be used as a fallback for taxonomy terms without one.

Every taxonomy overview also includes automatically a conveniently small list of all taxonomies and their terms at the bottom or the side.

[hugotaxo]: https://gohugo.io/content-management/taxonomies/
[hugotaxonew]: https://gohugo.io/content-management/taxonomies#configure-taxonomies
