---
authors: [Georg Makowski]
title: Resources in Data Files
date: 2023-09-05T00:02:59+02:00
categories: [module]
tags: [resources]
---

The theme offers a new possibility to store local parameters for resources. Data files allow to associate local meta-data with global or remote resources.  
{.p-first}
<!--more-->

Hugo allows to append arbitrary meta-data parameters to page resources. They are available for [local resources](https://gohugo.io/content-management/page-resources/#page-resources-metadata) in page bundles as an arbitrary list under `params:`. We can retrieve an image and its meta-data for example with Hugo’s `.Resources.GetMatch` already like this:

```yaml
resources:
  - src: hebert-kostan-y6UEUCq2RHw-unsplash.jpg
    name: tiger
    params: 
      caption: none
      width: small
      posh: left
```

Depending on the content structure of your project, you may want to store some resources in the global {$assets} folder or on a remote server. Hugo can retrieve these resources, but there is (currently) no native mechanism to associate them also with meta-data parameters. This is where this module comes in handy.

![global tiger](global)

This image is stored in the {$assets} folder and gets referenced in a local data file. This way, we can re-use global assets repeatedly and store meta-data relevant for the local content in a file like {$global.yaml}: 

```yaml
src: img/tiger/hebert-kostan-y6UEUCq2RHw-unsplash.jpg
caption: none
width: small
posh: left
```

The extra parameter keys are the same as the ones above. There is no new name for the resource, we use it with `![global tiger](global.yaml)`. We can also use TOML or JSON files and enter a remote URL as source.

The module is available on [GitHub](https://github.com/bowman2001/hugo-mod-resource) and still under development.
