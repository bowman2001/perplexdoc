---
author:
title: Tracking
description: Page description placeholder
subtitle: false
date: 2022-11-17T10:23:41+01:00 
weight: 690
menu:
  doc:
    name: Tracking
    parent: siteelem
    pre: analytics
categories: [Theme]
tags: [Tracking]
resources:
  - src: kobu-agency-ggrbi6quXQU-unsplash.jpg
    name: featured
    params:
      alt: Numbers on a geographical map
---

Perplex offers configuration parameters to easily include scripts for a tracking service. Currently **Fathom** and **Google** Analytics (GA4) are directly supported.
{.p-first} <!--more-->

Website creators like to get an impression of their audience and want to know how much attention their pages get. And when they start some kind of campaign, they usually want to measure its success.

## Google Analytics 4

Google offers its own widely used [analytics service](https://analytics.google.com). It’s free of charge for many of its extensive functions.

When you place your **Google Measurement ID** in the [main configuration file][gparam] like `googleAnalytics: G-MEASUREMENT_ID` the internal template provided by Hugo gets included into the `<head>` of all your pages.

There is some concern about Google collecting data from website visitors via its analytics software. And that’s why many sites are obligated to inform their visitors about this service and to ask them for an explicit permission to use it.

## Fathom Analytics

[Fathom Analytics][fathomref]\* is privacy-focused and paid, because it doesn’t monetize data from visitors. It doesn’t collect any individual data from visitors and is a merely statistical service for website operators. With Fathom you don’t need to force your visitors to decide upon which data they would like to share, before they can start to use your site. In short: There is no need for another annoying pop-up!

{{< mnote up=17 star=1 >}}
This is an affiliate link. Should you subscribe to Fathom’s service, I would appreciate if you could do so by following [this link](https://usefathom.com/ref/CENRRH). You can save 10 bucks this way.
{{< /mnote >}}

This advantage comes at a (reasonable) price after a short tryout period. Fathom doesn’t offer as many tools and information as Google. But if you don’t need all this anyway, you will probably like their clear and simple backend.

When you’ve gotten a fathom id for your site, place it like `fathomSiteID: ABCDEFG` in the [parameter section][fid] of your configuration. And when you are using their _custom domain_ you also need to provide the full link like `fathomCustomDomain: https://custom.yourdomain.com` also in [this section][fcustom].

[gparam]: /doc/appendix/config/configyaml#19
[fathomref]: https://usefathom.com/ref/CENRRH
[fid]: /doc/appendix/config/paramsyaml#21
[fcustom]: /doc/appendix/config/paramsyaml#22
