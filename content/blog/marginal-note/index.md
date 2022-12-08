---
title: The Beauty of Marginal Notes
description: Demo for the marginal note shortcode
date: 2022-07-04T22:18:04+02:00
weight: 1
categories: [Shortcode]
tags: [Note]
series: [Demo]
resources:
- name: featured
  src: Diophantus-II-8-Fermat_cut.jpg
  params:
    alt: Reprint of Diophantus
    hint: text
    attr: PD
    caption: Reprint of Diophantus arithmetica including Fermat’s theorem
- src: 810px-Andrew_wiles1-3.jpg
  name: wiles
  params:
    alt: Portrait of Sir Andrew John Wiles
    size: tiny
    posh: left 
    caption: Sir Andrew John Wiles
    attr: "&copy; C. J. Mozzochi, Princeton&nbsp;N.J"
---

Marginal notes allow to add further information in an elegant and unobtrusive way. We can glance over them and stay with the main text or zone out for a while, when they pique our curiosity.
{.p-first} <!--more-->

The famous mathematician Fermat wrote his last conjecture around 1637 in the marginal column besides an ancient Greek proof by Diophantus. The “marvelous proof” Fermat mentioned there has never been uncovered and his note kept mathematicians wondering for over 350 years.

{{< figure wiles />}}

A proof has been considered generally inaccessible until Sir Andrew John Wiles announced to have found one in 1993 after years of ground-breaking work. A few mathematicians were able to follow him and pointed out some flaws in his first preliminary version. Wiley finally published a convincing version in 1995 — a break-through in number theory which won him a few prizes.  

Wiley’s proof is so advanced, that its still inaccessible to almost everyone. But the initial problems — Diophantus’ successful method for the second power and Fermat’s conjecture for higher powers — are relatively easy to follow:  

> To divide a given square into a sum of two squares.
>
> To divide 16 into a sum of two squares.
>
> Let the first summand be x{^2}, and thus the second 16 -- x{^2}. The latter is to be a square. I form the square of the difference of an arbitrary multiple of x diminished by the root of 16, that is, diminished by 4. I form, for example, the square of 2x -- 4. It is 4x{^2} + 16 -- 16x. I put this expression equal to 16 -- x{^2}. I add to both sides x{^2} + 16x and subtract 16. In this way I obtain 5x{^2} = 16x, hence x = {^16}&frasl;{_5}
>
> Thus one number is {^256}&frasl;{_25} and the other {^144}&frasl;{_25}. The sum of these numbers is 16 and each summand is a square.

{{< mnote up=24 >}}
It is impossible to separate a cube into two cubes, or a fourth power into two fourth powers, or in general, any power higher than the second, into two like powers. I have discovered a truly marvelous proof of this, which this margin is too narrow to contain. --- _Pierre de Fermat_
{{< /mnote >}}

---

Like to use marginal notes? Have a look at the shortcode [{$mnote}]({{< relref "mnote" >}}).
