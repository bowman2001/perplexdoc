---
title: Search
description: Full-text search with Pagefind
date: 2023-07-04 18:18:12+02:00
authors:
- Georg Makowski
categories:
- Design
tags:
- search
---

The theme is now prepared for **{=Pagefind}**, a fast open-source full-text search engine for self-hosting.
{.p-first}
<!--more-->

The [Pagefind project](https://pagefind.app) is under active development, heading towards its first major version. Its capabilities are impressive, already. Indexing this site takes only a fraction of a second.

To offer the search, we need to install the [node package pagefind](https://npm.io/package/pagefind) and let it process our HTML after every generation. For a short tutorial see [Search with pagefind][search].

[search]: https://perplex.desider.at/doc/site/search-with-pagefind