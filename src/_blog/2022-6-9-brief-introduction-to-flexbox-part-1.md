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
title: Flexbox - [Part 1] Introduction
description: Flexbox - [Part 1] Introduction
summary: Flexbox - [Part 1] Introduction
thumb: https://res.cloudinary.com/hqe/image/upload/c_scale,h_300/v1646454274/github-nguyenhy-hp/sky-7.jpg
bigThumb: https://res.cloudinary.com/hqe/image/upload/c_scale,h_600/v1646454274/github-nguyenhy-hp/sky-7.jpg
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
    content: Flexbox - [Part 1] Introduction
  - name: description
    content: Flexbox - [Part 1] Introduction

    # og tag
  - name: og:type
    content: website
  - name: og:title
    content: Flexbox - [Part 1] Introduction
  - name: og:description
    content: Flexbox - [Part 1] Introduction
  - name: og:image
    content: https://res.cloudinary.com/hqe/image/upload/c_scale,h_300/v1646454274/github-nguyenhy-hp/sky-7.jpg
  - name: og:url
    content: https://nguyenhy.github.io/2022/06/09/brief-introduction-to-flexbox-part-1/

    # twitter tag
  - property: twitter:url
    content: https://nguyenhy.github.io/2022/06/09/brief-introduction-to-flexbox-part-1/
  - property: twitter:title
    content: Flexbox - [Part 1] Introduction
  - property: twitter:description
    content: Simple Flexbox - [Part 1] Introduction
  - property: twitter:image
    content: https://res.cloudinary.com/hqe/image/upload/c_scale,h_800/v1646454274/github-nguyenhy-hp/sky-7.jpg
---
### Parts
- [Parts 1: Basic understand about Flexbox](/2022/06/09/brief-introduction-to-flexbox-part-1/) - here we are
- [Parts 2: Flex container properties](/2022/06/09/brief-introduction-to-flexbox-part-2/)
- [Parts 3: Flex item properties](/2022/06/09/brief-introduction-to-flexbox-part-3/)

### Prerequisites
- basic understand of CSS
- know how to write, read CSS rules

### Why Flexbox
- efficient way to layout, align and distribute space among items in container, even when their size is unknown.

### Basic understand
#### Idea
- The main idea behind `flexbox` is to provide the container ability to alter its items's width and height, order, alignment,... to best fill space in the efficient way.

#### Terminology
When working with flexbox, we need to think about its axis which `main axis` and `cross axis`.

The main axis is define by `flex-direction` and the cross axis is perpendicular to its.
Since flexbox was designed as a one-dimensional layout, almost everything we do with a flexbox layout is
refer back to these two axes;

##### Main axis
As mentioned above, the main axis is defined by `flex-direction`, which is has 4 values:
- row
- row-reverse
- column
- column-reverse

You should choose `row` or `row-reverse` if you want your layout to be row  - **in the inline direction**
and using `column` or `column-reverse` if your main axis go from top to bottom - **in the block direction**

<p class="codepen" data-height="300" data-default-tab="html,result" data-slug-hash="PoRNLGE" data-user="nguyenhy" style="height: 300px; box-sizing: border-box; display: flex; align-items: center; justify-content: center; border: 2px solid; margin: 1em 0; padding: 1em;">
  <span>See the Pen <a href="https://codepen.io/nguyenhy/pen/PoRNLGE">
  Untitled</a> by nguyen (<a href="https://codepen.io/nguyenhy">@nguyenhy</a>)
  on <a href="https://codepen.io">CodePen</a>.</span>
</p>
<script async src="https://cpwebassets.codepen.io/assets/embed/ei.js"></script>
<br>

##### Cross axis
The cross axis runs perpendicular to its main axis. So, if your main axis is `row` or `row-reverse`
then your cross axis will be `column` or `column-reverse`

##### Flex container
Flex container is an area of document using flexbox. To create a `flex container` we use set value for `display` of container
to `flex` or `inline-flex`. After set value, direct children of the `flex container` will become `flex item` and some initial value are 
defined.
