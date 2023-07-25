---
authors: [Georg Makowski]
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

As a website creator, you like to get an impression of your audience and want to know how much attention your pages get. And when you start some kind of campaign, you may want to measure its success.

## Google Analytics 4

Google offers its own widely used [analytics service](https://analytics.google.com). Many of its capabilities are free of charge.

When you place your **Google Measurement ID** in the [main configuration file][gparam] like `googleAnalytics: G-MEASUREMENT_ID` the internal template provided by Hugo gets included in the `<head>` of all your pages.
{.inline}

{{< mnote >}}
Because Google collects specific data from website visitors with this software, many sites are obligated to inform their visitors about their service and need to ask them for explicit permission.
{{< /mnote >}}

## Fathom Analytics

[Fathom Analytics][fathomref]{^\*} is privacy-focused and needs to be paid because it doesn’t monetize data from visitors. It doesn’t collect any individual data at all and is a merely statistical service for website operators. With Fathom you don’t need to force your visitors to decide about data they would like to share. 
{.inline}

{{< mnote star=1 >}}
This is an affiliate link. Should you subscribe to Fathom’s service, I would appreciate it if you could do so by following [this link](https://usefathom.com/ref/CENRRH). You can save 10 bucks this way.
{{< /mnote >}}

**In short**: With this service, there is no need for another annoying pop-up!

This advantage comes at a (reasonable) price after a short tryout period. Fathom doesn’t offer as much information and as many tools as Google. But if you don’t need all this anyway, you will probably like their clear and simple backend.

You can place the Fathom-ID for your site like `fathomSiteID: ABCDEFG` in the [parameter section][fid] of your configuration.

[gparam]: /doc/appendix/config/hugoyaml#19
[fathomref]: https://usefathom.com/ref/CENRRH
[fid]: /doc/appendix/config/paramsyaml#18
