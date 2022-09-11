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

Place your lead paragraph here. If you don't need special styling, remove the attribute `{.p-first}`. The **more**-tag marks this placeholder paragraph as the content summary for this page. It’s an introduction for your readers and provides information to search engines. 
{.p-first} <!--more-->

### Page Resources {#resources}

There are three options to store and retrieve resources (like images) for Hugo:

Page specific
: We can save them in the folder of a page bundle and access them there with the shortest possible path.

Site specific
: We save them most suitably in the `assets` folder and can use them on every page of our project. We may have to create a folder structure in `assets` to organize them.

Remote
: Resources may also be retrieved via URL or API. This powerful but complex feature has been introduced recently. No remote connectors ship with Perplex at the moment.
{.dl-loose}
