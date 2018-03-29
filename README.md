# [Eve](https://hpivanov.github.io/eve)

**A minimalist CSS framework.**

[![Build Status](https://travis-ci.org/hpivanov/eve.svg?branch=master)](https://travis-ci.org/hpivanov/eve)
[![npm](https://img.shields.io/npm/v/evecss.svg)](https://www.npmjs.com/package/evecss)
[![npm](https://img.shields.io/npm/dm/evecss.svg)](https://www.npmjs.com/package/evecss)

## Installation

There are 3 ways to install Eve. You can either install it via package managers, CDN, or manually.

### NPM

```sh
npm install evecss
```

### Yarn

```sh
yarn add evecss
```

### Unpkg

```html
<link rel="stylesheet" href="https://unpkg.com/evecss/dist/eve.min.css">
```

### Manually

Download the compiled and minified [Eve](https://github.com/hpivanov/eve/releases), and include `eve.css` or `eve.min.css` located in **/dist** inside your **&lt;head&gt;** tag.

```html
<link rel="stylesheet" href="eve.min.css">
```

## Icons

Eve is compatible with [Material Icons](https://material.io/icons/), [Font Awesome](https://fontawesome.com/) and [Ionicons](http://ionicons.com/).

```html
{{!-- Material Icons --}}
<link rel="stylesheet" href="https://fonts.googleapis.com/icon?family=Material+Icons">
```

```html
{{!-- Font Awesome --}}
<link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.0.9/css/all.css" integrity="sha384-5SOiIsAziJl6AWe0HWRKTXlfcSHKmYV4RBF18PPJ173Kzn7jzMyFuTtk8JA7QQG1" crossorigin="anonymous">
```

## Starter Template

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Hello World!</title>
    <link rel="stylesheet" href="https://unpkg.com/evecss/dist/eve.min.css">
</head>
<body>
    <h1>
        Hello World!
    </h1>
    <h2>
        This is my first project with <strong>Eve CSS</strong>
    </h2>
</body>
</html>
```

## Browser Support

Eve uses [Autoprefixer](https://github.com/postcss/autoprefixer) to make most css styles compatible with earlier browsers. According to [Can I use](https://caniuse.com), Eve is compatible with recent versions of:

- Chrome
- Firefox
- Safari
- Opera
- Edge

Internet Explorer (10+) is partially supported.
