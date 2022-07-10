---
date: 2022-6-9
tag: 
  - hyn
  - web
  - frontend
  - introduction
  - beginner
  - css
  - flexbox
  - html
  - y2022
  - m6
  - d9
  - y2022/m6
author: hyn
# post
title: Flexbox - [Part 2] Flex container properties
description: Flexbox - [Part 2] Flex container properties
summary: Flexbox - [Part 2] Flex container properties
thumb: https://res.cloudinary.com/hqe/image/upload/c_scale,h_300/v1657411176/github-nguyenhy-hp/sky-8.jpg
bigThumb: https://res.cloudinary.com/hqe/image/upload/c_scale,h_600/v1657411176/github-nguyenhy-hp/sky-8.jpg
thumbAlt: sky
# meta
meta:
  - name: keywords
    content:
    - hyn
    - web
    - blog
    - me
    - hyn
    - frontend
    - introduction
    - beginner
    - web development
    - HTML
    - flexbox
  - name: author
    content: nguyen hy
  - name: location
    content: Vietnam 
  - name: title
    content: Flexbox - [Part 2] Flex container properties
  - name: description
    content: Flexbox - [Part 2] Flex container properties

    # og tag
  - name: og:type
    content: website
  - name: og:title
    content: Flexbox - [Part 2] Flex container properties
  - name: og:description
    content: Flexbox - [Part 2] Flex container properties
  - name: og:image
    content: https://res.cloudinary.com/hqe/image/upload/c_scale,h_300/v1657411176/github-nguyenhy-hp/sky-8.jpg
  - name: og:url
    content: https://nguyenhy.github.io/2022/06/09/brief-introduction-to-flexbox-part-2/

    # twitter tag
  - property: twitter:url
    content: https://nguyenhy.github.io/2022/06/09/brief-introduction-to-flexbox-part-2/
  - property: twitter:title
    content: Introduction To Web Development
  - property: twitter:description
    content: Simple introduction to web development for absolutely beginner
  - property: twitter:image
    content: https://res.cloudinary.com/hqe/image/upload/c_scale,h_800/v1657411176/github-nguyenhy-hp/sky-8.jpg
---
### Parts
- [Parts 1: Basic understand about Flexbox](/2022/06/09/brief-introduction-to-flexbox-part-1/)
- [Parts 2: Flex container properties](/2022/06/09/brief-introduction-to-flexbox-part-2/) - here we are
- [Parts 3: Flex item properties](/2022/06/09/brief-introduction-to-flexbox-part-3/)

#### Flexbox properties
##### Flex container
###### display
define flex container, either inline or block
```css
.container {
  display: flex | inline-flex
}
```
###### flex-direction
define main axis for flexbox thus axis of flex items
```css
.container {
  flex-direction: row | row-reverse | column | column-reverse;
}
```
- `row` (default)  : items align as a row from left to right
- `row-reverse`    : items align as a row from right to left
- `column`         : items align as a column from top to bottom 
- `column-reverse` : items align as a column from bottom to top
###### flex-wrap
By default, flex item will try to fit in one line. By apply `flex-wrap` we can change how flex item should wrap
```css
.container {
  flex-direction: nowrap | wrap | wrap-reverse;
}
```
- `nowrap` (default): all flex item will be in one line
- `wrap`            : flex item will be wrap in multiple line from top to bottom
- `wrap-reverse`    : flex item will be wrap in multiple line from bottom to top

<br>
<p class="codepen" data-height="300" data-default-tab="html,result" data-slug-hash="PoRNgzL" data-editable="true" data-user="nguyenhy" style="height: 500px; box-sizing: border-box; display: flex; align-items: center; justify-content: center; border: 2px solid; margin: 1em 0; padding: 1em;">
  <span>See the Pen <a href="https://codepen.io/nguyenhy/pen/PoRNgzL">
  Flexbox demo flex-wrap</a> by nguyen (<a href="https://codepen.io/nguyenhy">@nguyenhy</a>)
  on <a href="https://codepen.io">CodePen</a>.</span>
</p>
<script async src="https://cpwebassets.codepen.io/assets/embed/ei.js"></script>
<br>

###### justify-content
define alignment along the main axis
```css
.container {
  justify-content: flex-start | flex-end | start | end | center | space-between | space-around | space-evenly;
}
```
- `flex-start` (default)  : items are packed at the `start` of `main axis`;
- `flex-end`              : items are packed at the `end` of `main axis`;
- `start`                : items are packed at the `start` of `writing-mode`; 
- `end`                  : items are packed at the `end` of `writing-mode`; 
- `center`               : items are centered along the main axis
- `space-between`        : left over space will be evenly distributed along the line
- `space-around`         : same as `space-between` but add one unit of space against the container edge, the space is not necessary equal
- `space-evenly`         : same as `space-around` but space between items is equal

<br>
<p class="codepen" data-height="300" data-default-tab="html,result" data-slug-hash="GRxqKVm" data-editable="true" data-user="nguyenhy" style="height: 300px; box-sizing: border-box; display: flex; align-items: center; justify-content: center; border: 2px solid; margin: 1em 0; padding: 1em;">
  <span>See the Pen <a href="https://codepen.io/nguyenhy/pen/GRxqKVm">
  Untitled</a> by nguyen (<a href="https://codepen.io/nguyenhy">@nguyenhy</a>)
  on <a href="https://codepen.io">CodePen</a>.</span>
</p>
<script async src="https://cpwebassets.codepen.io/assets/embed/ei.js"></script>
<br>

###### align-items
define how items are laid out along the cross axis. In fact, we can think this's is perpendicular version of `justify-content`
```css
.container {
  align-items: stretch | flex-start | flex-end | center | baseline | start | end | self-start | self-end;
}
```
- `stretch` (default)                    : items are stretch to fill the container
- `flex-start` / `start` / `self-start`   : items are packed at the start of the cross axis.
The different between it about affect of the rules `flex-direction` and `writing-mode` to its position
- `flex-end` / `end` / `self-end`         : same as above but items are packed at the end of cross axis
- `center`                               : items are centered in the cross axis
- `base-line`                            : items are aligned by their baselines align
<br>
<p class="codepen" data-height="300" data-default-tab="html,result" data-slug-hash="QWmEWLx" data-editable="true" data-user="nguyenhy" style="height: 300px; box-sizing: border-box; display: flex; align-items: center; justify-content: center; border: 2px solid; margin: 1em 0; padding: 1em;">
  <span>See the Pen <a href="https://codepen.io/nguyenhy/pen/QWmEWLx">
  Untitled</a> by nguyen (<a href="https://codepen.io/nguyenhy">@nguyenhy</a>)
  on <a href="https://codepen.io">CodePen</a>.</span>
</p>
<script async src="https://cpwebassets.codepen.io/assets/embed/ei.js"></script>
<br>

###### align-content
define alignment of items when there's extra space in the cross axis.
This property only work on `multiple lines` flex container where `flex-wrap` is set to either `wrap` or `wrap-reverse`
```css
.container {
  align-content: flex-start | flex-end | start | end | center | space-between | space-around | space-evenly;
}
```
Same as [justify-content](#justify-content) but for `cross axis`
<br>
<p class="codepen" data-height="300" data-default-tab="html,result" data-slug-hash="vYRKYOg" data-editable="true" data-user="nguyenhy" style="height: 300px; box-sizing: border-box; display: flex; align-items: center; justify-content: center; border: 2px solid; margin: 1em 0; padding: 1em;">
  <span>See the Pen <a href="https://codepen.io/nguyenhy/pen/vYRKYOg">
  Untitled</a> by nguyen (<a href="https://codepen.io/nguyenhy">@nguyenhy</a>)
  on <a href="https://codepen.io">CodePen</a>.</span>
</p>
<script async src="https://cpwebassets.codepen.io/assets/embed/ei.js"></script>
<br>

###### gap, row-gap, column-gap
controls space between flex item in the explicit manner.
```css
.container  {
  row-gap: 10px; /* add 10px  */
  gap: <r>
}
```

<br>
<p class="codepen" data-height="300" data-default-tab="html,result" data-slug-hash="abYZbvb" data-editable="true" data-user="nguyenhy" style="height: 300px; box-sizing: border-box; display: flex; align-items: center; justify-content: center; border: 2px solid; margin: 1em 0; padding: 1em;">
  <span>See the Pen <a href="https://codepen.io/nguyenhy/pen/abYZbvb">
  Untitled</a> by nguyen (<a href="https://codepen.io/nguyenhy">@nguyenhy</a>)
  on <a href="https://codepen.io">CodePen</a>.</span>
</p>
<script async src="https://cpwebassets.codepen.io/assets/embed/ei.js"></script>
<br>