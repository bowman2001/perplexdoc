---
title     : page bundle for site-wide images
_build    :
  list      : false
  render    : false
resources :
  - src       : Perplex.svg
    name      : featured
    params    :
      alt       : Perplex logo
      link      : https://perplex.desider.at
      container : "no"
  - src       : Hugo.png
    name      : hugo
    params    :
      link      : https://gohugo.io
      alt       : Hugo logo
      container : "no"
  - name   : splash
    src    : mulyadi-JJMoAiVl9jA-unsplash.jpg
    params :
      alt    : Splashing ring of water
  - src    : erda-estremera-eMX1aIAp9Nw-unsplash.jpg
    name   : bigsplash
    params :
      alt    : A splashing drop of water
  - src: fig/tiny_text.svg
    name: tiny
    params:
      alt: Placeholder image, tiny size
      size: tiny
      posh: left
      caption: Tiny figure
      attr: gm
  - src: fig/small_text.svg
    name: small
    params:
      alt: Placeholder image, small size
      size: small 
      posh: left
      caption: Small figure
      attr: gm
  - name: small-portrait
    src: fig/small_portrait_text.svg
    params:
      alt: Placeholder image, small portrait size
      caption: Small portrait figure
      size: small
      posh: right
      attr: gm
  - src: fig/medium_text.svg
    name: medium
    params:
      alt: Placeholder image, medium size
      caption: Medium figure – this size is a good choice for a landscape ratio. 
      size: medium 
      posh: right
      attr: gm
  - src: fig/normal_text.svg
    name: normal
    params:
      alt: Placeholder image, normal size
      caption: The **default** normal size occupies the full text width. If the margin is available, the caption is placed there.
      size: normal
      posh: left
      attr: gm
  - src: fig/large_text.svg
    name: large
    params:
      alt: Placeholder image, large size
      caption: The large size fills the text width and the right margin on documenation pages. The text of the caption is constrained to the text width. The attribution is placed in the right margin an on the right as usual.
      size: large
      attr: gm
  - src: fig/extra-large_text.svg
    name: xlarge
    params:
      size: xlarge
      alt: Placeholder image, extra large size
      caption: The size of an extra large image will only show in blog and article pages. It’s treated here like a large image, because the sidebar occupies the left margin.
      attr: gm
---
