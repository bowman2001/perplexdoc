
Working now, so this example doesn’t anymore

## Apostrophe for omissions

English apostrophes are not only used for the possessive case or contractions. At the beginning and at the end of a word they can also indicate, that one or a few characters have been left out. The typographer extension has no chance to detect this meaning algorithmically and produces false punctuation or leaves a straight quote untouched.

When we type `rock 'n' roll` for example we get **rock 'n' roll**, which is wrong. The 'n' is not a quoted character, but a shortened version of 'and'. The ‘a’ and the ‘d’ are omitted.

To proper **rock ’n’ roll**, we need to use type the apostrophe or the corresponding HTML entity `&rsquo;`, which is the same as the English right single quotation mark.

[^ptapo]: This example is inspired by [Practical Typography](https://practicaltypography.com/apostrophes.html)
