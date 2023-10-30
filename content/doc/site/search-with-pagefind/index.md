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
categories: [template]
tags: [search, site]
weight: 680
---

The theme is prepared to get indexed by {=Pagefind} for a site-wide search and offers its UI on a separate search page.
{.p-first}
<!--more-->

[Pagefind](https://pagefind.app) is a static search library that scales for large sites. The search indices for **self-hosting** are extracted from the generated HTML content.

The library is available as a node package (install with something like `npm i pagefind`). The indexing engine needs to run every time after Hugo has generated the site to be up to date. It project root run `npx pagefind` with options or a configuration file. This call generates all a new {$pagefind} directory for the site (usually in the {$public} folder). This folder contains the indices, the Javascript API, and the user interface.

The theme template in the folder {$layouts/search} will call the user interface.
