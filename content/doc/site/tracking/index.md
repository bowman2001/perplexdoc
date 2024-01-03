---
authors: [Georg Makowski]
title: Tracking
description: Let tracking services generate detailed usage statistics 
subtitle: false
date: 2022-11-17T10:23:41+01:00 
weight: 690
menu:
  doc:
    name: Tracking
    parent: siteelem
    pre: analytics
categories: [template]
tags: [tracking]
---

Perplex offers configuration parameters to include site-wide scripts for tracking services. Currently **Fathom** and **Google** Analytics (GA4) are directly supported.
{.p-first} <!--more-->

As a website creator, you generally like to get an impression of your audience and want to know what kind of and how much attention your pages get. And when you start some kind of campaign, you often want to measure its success.

## Google Analytics 4

Google offers its own widely used [analytics service](https://analytics.google.com). Many of its capabilities are free of charge.

When you place your **Google Measurement ID** in the [main configuration file][gparam] like `googleAnalytics: G-MEASUREMENT_ID` the internal template provided by Hugo gets included in the `<head>` of all your pages.
{.inline}

{{< mnote >}}
Because Google collects user-specific data from website visitors with this software, many sites have to inform their visitors about their services and need to ask for explicit permission if they have to comply with the **G**eneral **D**ata **P**rotection **R**egulation of the European Union.
{{< /mnote >}}

## Fathom Analytics

[Fathom Analytics][fathomref]{^\*} is privacy-focused and wants to get paid because it doesn’t monetize data from visitors. It doesn’t collect any individual data at all and is a merely statistical service for website operators. With Fathom your vistors don’t need to know about the service and don’t need to decide what kind of data they would like to share. **&rightarrow;** No need for a pop-up window!
{.inline}

{{< mnote star=1 >}}
This is an affiliate link. Should you subscribe to Fathom’s service, I would appreciate it if you could do so by following [this link](https://usefathom.com/ref/CENRRH). You can save 10 bucks this way.
{{< /mnote >}}

This advantage comes at a (reasonable) price after a short tryout period. Fathom doesn’t offer as much information and as many tools as Google. But if you don’t need all this anyway, you will probably like their clear and simple backend.

You can place the Fathom-ID for your site like `fathomSiteID: ABCDEFG` in the [parameter section][fid] of your configuration.

[gparam]: /doc/appendix/config/hugoyaml#19
[fathomref]: https://usefathom.com/ref/CENRRH
[fid]: /doc/appendix/config/paramsyaml#18
