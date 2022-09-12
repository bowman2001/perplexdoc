---
author: Georg Makowski
title: Resource Organization
description: Page description placeholder
subtitle: false
date: 2022-09-11T14:58:46+02:00 
weight: 45
menu:
  doc:
    name: Resources
    parent: workflow 
    pre: collections
categories: [Workflow, Theme]
tags: [Hugo]
---

This theme expects local resources. All additional files like images need to be placed in page bundles. Page resources from parent sections or taxonomies can be conveniently re-used.
{.p-first} <!--more-->

## Hugo’s possibilities {#resources}

There are generally three options to store and retrieve resources (like images) for Hugo:

Page specific
: We can save them in the folder of a page bundle and access them with a short relative path. We can register the resources in the front-matter of the corresponding Markdown file and add meta-data.

Site specific
: We can save them in the {$assets} folder and can use them for every page of our project. The [favorite icon]({{< relref "doc/site/favicon" >}}) is a typical case.

Remote
: Resources may also be retrieved via URL or API. This powerful feature has been introduced recently. No remote connectors ship with Perplex at the moment.
{.dl-loose}

## Resources in Perplex

TODO