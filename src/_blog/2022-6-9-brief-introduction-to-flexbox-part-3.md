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
title: Flexbox - [Part 3] Flex item properties
description: Flexbox - [Part 3] Flex item properties
summary: Flexbox - [Part 3] Flex item properties
thumb: https://res.cloudinary.com/hqe/image/upload/c_scale,h_300/v1657428453/github-nguyenhy-hp/sky-9.jpg
bigThumb: https://res.cloudinary.com/hqe/image/upload/c_scale,h_600/v1657428453/github-nguyenhy-hp/sky-9.jpg
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
    content: Flexbox - [Part 3] Flex item properties
  - name: description
    content: Flexbox - [Part 3] Flex item properties

    # og tag
  - name: og:type
    content: website
  - name: og:title
    content: Flexbox - [Part 3] Flex item properties
  - name: og:description
    content: Flexbox - [Part 3] Flex item properties
  - name: og:image
    content: https://res.cloudinary.com/hqe/image/upload/c_scale,h_300/v1657428453/github-nguyenhy-hp/sky-9.jpg
  - name: og:url
    content: https://nguyenhy.github.io/2022/06/09/brief-introduction-to-flexbox-part-3/

    # twitter tag
  - property: twitter:url
    content: https://nguyenhy.github.io/2022/06/09/brief-introduction-to-flexbox-part-3/
  - property: twitter:title
    content: Introduction To Web Development
  - property: twitter:description
    content: Simple introduction to web development for absolutely beginner
  - property: twitter:image
    content: https://res.cloudinary.com/hqe/image/upload/c_scale,h_800/v1657428453/github-nguyenhy-hp/sky-9.jpg
---
### Parts
- [Parts 1: Basic understand about Flexbox](/2022/06/09/brief-introduction-to-flexbox-part-1/)
- [Parts 2: Flex container properties](/2022/06/09/brief-introduction-to-flexbox-part-2/)
- [Parts 3: Flex item properties](/2022/06/09/brief-introduction-to-flexbox-part-3/) - here we are

#### Flex item
##### order
By default, the order of items is follow by the order of the source order.
However, we can controls this order of item using `order` property inside flex container
Note that, if two or more items share the same `order` value, then it will follow source order.
```css
.item {
  order: 5; /* default: 0 */
}
```
<br>
<p class="codepen" data-height="300" data-default-tab="html,result" data-slug-hash="mdxEyRQ" data-editable="true" data-user="nguyenhy" style="height: 300px; box-sizing: border-box; display: flex; align-items: center; justify-content: center; border: 2px solid; margin: 1em 0; padding: 1em;">
<span>See the Pen <a href="https://codepen.io/nguyenhy/pen/mdxEyRQ">
  Flex item order</a> by nguyen (<a href="https://codepen.io/nguyenhy">@nguyenhy</a>)
  on <a href="https://codepen.io">CodePen</a>.</span>
</p>
<script async src="https://cpwebassets.codepen.io/assets/embed/ei.js"></script>
<br>

##### flex-grow
define the ability to fill the empty space if necessary.
the `flex-grow` accept the unitless value that serve as proportion of the space it about to fill.
```css
.item {
  flex-grow: 1; /* default: 0 */
}
```
<br>
<p class="codepen" data-height="300" data-default-tab="html,result" data-slug-hash="poLbveg" data-editable="true" data-user="nguyenhy" style="height: 300px; box-sizing: border-box; display: flex; align-items: center; justify-content: center; border: 2px solid; margin: 1em 0; padding: 1em;">
  <span>See the Pen <a href="https://codepen.io/nguyenhy/pen/poLbveg">
  Untitled</a> by nguyen (<a href="https://codepen.io/nguyenhy">@nguyenhy</a>)
  on <a href="https://codepen.io">CodePen</a>.</span>
</p>
<script async src="https://cpwebassets.codepen.io/assets/embed/ei.js"></script>
<br>

##### flex-shrink
define the ability to shrink down its own size if necessary.
```css
.item {
  flex-shrink: 1; /* default: 1 */
}
```
<br>
<p class="codepen" data-height="300" data-default-tab="html,result" data-slug-hash="oNqLgZd" data-editable="true" data-user="nguyenhy" style="height: 300px; box-sizing: border-box; display: flex; align-items: center; justify-content: center; border: 2px solid; margin: 1em 0; padding: 1em;">
  <span>See the Pen <a href="https://codepen.io/nguyenhy/pen/oNqLgZd">
  Untitled</a> by nguyen (<a href="https://codepen.io/nguyenhy">@nguyenhy</a>)
  on <a href="https://codepen.io">CodePen</a>.</span>
</p>
<script async src="https://cpwebassets.codepen.io/assets/embed/ei.js"></script>
<br>

##### flex-basis
define the default size of an element before it shrink or grow due to it's container size.
```css
.item {
  flex-basis: length | auto;
}
```
- `length`: value in px, rem, em, %...
- `auto`  : use default width/height of element

<br>
<p class="codepen" data-height="300" data-default-tab="html,result" data-slug-hash="QWmEwgb" data-editable="true" data-user="nguyenhy" style="height: 300px; box-sizing: border-box; display: flex; align-items: center; justify-content: center; border: 2px solid; margin: 1em 0; padding: 1em;">
  <span>See the Pen <a href="https://codepen.io/nguyenhy/pen/QWmEwgb">
  Untitled</a> by nguyen (<a href="https://codepen.io/nguyenhy">@nguyenhy</a>)
  on <a href="https://codepen.io">CodePen</a>.</span>
</p>
<script async src="https://cpwebassets.codepen.io/assets/embed/ei.js"></script>
<br>

##### flex
shorthand, combine for `<flex-grow>`, `<flex-shrink>`, `<flex-basis>`.
```css
.item {
  flex: <flex-grow> <flex-shrink> <flex-basis>;
}
```

##### align-self
allow item to override the default alignment of flex container's `align-items`
```css
.item {
  align-self: stretch | flex-start | flex-end | center | baseline | start | end | self-start | self-end;
}
```
Take a look at [align-items](/2022/06/09/brief-introduction-to-flexbox-part-2/#align-items) to understand the available values for `align-self`

<br>
<p class="codepen" data-height="300" data-default-tab="html,result" data-slug-hash="poLbveg" data-editable="true" data-user="nguyenhy" style="height: 300px; box-sizing: border-box; display: flex; align-items: center; justify-content: center; border: 2px solid; margin: 1em 0; padding: 1em;">
  <span>See the Pen <a href="https://codepen.io/nguyenhy/pen/poLbveg">
  Untitled</a> by nguyen (<a href="https://codepen.io/nguyenhy">@nguyenhy</a>)
  on <a href="https://codepen.io">CodePen</a>.</span>
</p>
<script async src="https://cpwebassets.codepen.io/assets/embed/ei.js"></script>
<br>