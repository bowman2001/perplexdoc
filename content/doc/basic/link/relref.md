---
title: not used
---

## Relref in render link hook

This is not a problem and more of a chance: The render-link hook can also handle `[link](unique-page-name)`! If a page cannot be found in any other way it calls the {$relref} function as a last resort. We don’t need the shortcode anymore.[^2]

Because Hugo’s default to throw an error and stop the build if {$relref} can’t find a page is quite harsh, the theme sets the parameter `refLinksErrorLevel: warning` in its configuration file. You can change it in your project configuration.

[^2]: There is one drawback: In case of a non-existing page we get a warning from {$relref} and we may get an additional warning, an error, or nothing from the hook depending on its configuration.
