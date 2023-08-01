---
authors: [Georg Makowski]
title: Search with Pagefind
description: Index and search your **full** text with this fast search library
subtitle: false
date: 2023-07-04T18:47:09+02:00 
menu:
  doc:
    identifier: search-with-pagefind 
    name: Search
    parent: siteelem
    pre: search
categories: [external]
tags: [search]
weight: 680
---

The theme is prepared to get indexed by {=Pagefind} and offers its UI on a search page.
{.p-first}
<!--more-->

[Pagefind](https://pagefind.app) is a static search library that scales for large sites and requires no additional hosting. The search indices for self-hosting are generated directly from the HTML content.

The library is available as a node package (install with `npm i pagefind`). The indexer needs to run every time after Hugo has generated the site. In the project root run `npx pagefind` with options or a configuration file. This call generates the indices and adds a {$pagefind} directory to our site in the {$public} folder. This folder contains the indices, the Javascript API, and the user interface.

The theme template in the folder {$layouts/search} calls this user interface.
