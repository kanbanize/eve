# [EveCSS](https://kanbanize.github.io/eve) 

A simple, minimal css framework

[![Build Status](https://travis-ci.org/kanbanize/eve.svg?branch=master)](https://travis-ci.org/kanbanize/eve)
[![npm version](https://img.shields.io/npm/v/evecss.svg)](https://www.npmjs.com/package/evecss)
[![npm](https://img.shields.io/npm/dm/evecss.svg)](https://www.npmjs.com/package/evecss)
[![](https://data.jsdelivr.com/v1/package/npm/evecss/badge?style=rounded)](https://www.jsdelivr.com/package/npm/evecss)

<a href="https://kanbanize.github.io/eve">
    <img src="https://raw.githubusercontent.com/kanbanize/eve/master/site/logo.png" alt="EveCSS" width="350" height="350">
</a>

## Why Eve?

Why Eve instead of all other big and well-known CSS Frameworks like Bootstrap, Foundation, Bulma, UIkit, Semantic UI?

Most CSS Frameworks use global resets like:

```
* {
     box-sizing: border-box;
}
```

```
h1,
h2,
h3,
h4,
h5,
h6,
p {
     margin: 0;
}
```

This is not good for several reasons:
* What if the project relies on box-sizing: content-box;?
* What if the project relies on the fact that the headings and paragraphs have margins?

**Eve allows you easy and seamless integration with any project, regardless of its stage of development, without overwriting any styles!**

## Quick Install

### NPM

```sh
npm install evecss
```

### Yarn

```sh
yarn add evecss
```

### jsDelivr

```html
<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/evecss/dist/eve.min.css">
```

## Documentation

#### Foundations

* [Colors](https://kanbanize.github.io/eve/docs/#foundations/colors)
* [Typography](https://kanbanize.github.io/eve/docs/#foundations/typography)

#### Grid

* [Base](https://kanbanize.github.io/eve/docs/#grid/base)
* [Alignment](https://kanbanize.github.io/eve/docs/#grid/alignment)
* [Gaps](https://kanbanize.github.io/eve/docs/#grid/gaps)
* [Nesting](https://kanbanize.github.io/eve/docs/#grid/nesting)

#### Components

* [Accordion](https://kanbanize.github.io/eve/docs/#components/accordion)
* [Avatar](https://kanbanize.github.io/eve/docs/#components/avatar)
* [Badge](https://kanbanize.github.io/eve/docs/#components/badge)
* [Breadcrumb](https://kanbanize.github.io/eve/docs/#components/breadcrumb)
* [Button](https://kanbanize.github.io/eve/docs/#components/button)
* [Checkbox](https://kanbanize.github.io/eve/docs/#components/checkbox)
* [Chip](https://kanbanize.github.io/eve/docs/#components/chip)
* [Dialog](https://kanbanize.github.io/eve/docs/#components/dialog)
* [Divider](https://kanbanize.github.io/eve/docs/#components/divider)
* [Dropdown](https://kanbanize.github.io/eve/docs/#components/dropdown)
* [Feedback](https://kanbanize.github.io/eve/docs/#components/feedback)
* [Form](https://kanbanize.github.io/eve/docs/#components/form)
* [Input](https://kanbanize.github.io/eve/docs/#components/input)
* [List](https://kanbanize.github.io/eve/docs/#components/list)
* [Navigation](https://kanbanize.github.io/eve/docs/#components/navigation)
* [Pagination](https://kanbanize.github.io/eve/docs/#components/pagination)
* [Progress](https://kanbanize.github.io/eve/docs/#components/progress)
* [Radio](https://kanbanize.github.io/eve/docs/#components/radio)
* [Select](https://kanbanize.github.io/eve/docs/#components/select)
* [Switch](https://kanbanize.github.io/eve/docs/#components/switch)
* [Table](https://kanbanize.github.io/eve/docs/#components/table)
* [Tabs](https://kanbanize.github.io/eve/docs/#components/tabs)
* [Tag](https://kanbanize.github.io/eve/docs/#components/tag)
* [Textarea](https://kanbanize.github.io/eve/docs/#components/textarea)
* [Tooltip](https://kanbanize.github.io/eve/docs/#components/tooltip)

#### Utilities

* [Cursor](https://kanbanize.github.io/eve/docs/#utilities/cursor)
* [Display](https://kanbanize.github.io/eve/docs/#utilities/display)
* [Gap](https://kanbanize.github.io/eve/docs/#utilities/gap)
* [Overflow](https://kanbanize.github.io/eve/docs/#utilities/overflow)
* [Text](https://kanbanize.github.io/eve/docs/#utilities/text)

## Browser Support

- Chrome
- Firefox
- Safari
- Opera
- MS Edge

Internet Explorer (10+) is partially supported.

## License

This project is licensed under the MIT License - see the [LICENSE.md](https://github.com/kanbanize/eve/blob/master/LICENSE) file for details
