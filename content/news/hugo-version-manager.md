---
authors: [Georg Makowski]
title: 'Hugo Version Manager (HVM)'
linktitle: HVM
description: "Simplify the installation and configuration of different Hugo versions in your development environment"
subtitle: false
date: 2023-12-18T20:42:44+01:00
categories: [Configuration]
tags: [hugo]
---

When we work on different Hugo projects, we may want to stick to older Hugo versions for mature projects and still use the recent version for the new ones.
{.p-first}
<!--more-->

Handling different versions of the same software package can get cumbersome. The installation of different versions may be complicated with our package manager so we need to install every version manually. And we may end up with duplicate installations on the same machine.

This is no fun and Joe Mooring has released the [**H**ugo **V**ersion **M**anager on GitHub](https://github.com/jmooring/hvm). It can handle a large number of multiple installations efficiently and was developed originally for comparing the behavior of different versions while tracking bugs.

After the installation of HVM and the configuration of our shell environment on MacOS, Linux, or Windows with the help of HVM, we can simply install (and change) versions in our projects with this slick Go command line tool. Besides that, it lets us also install (and easily update) a default version.
