# One React Component: button

<p align="center"><img width="150" src="https://cdn.rawgit.com/one-react/assets/master/logo%402x.png" alt="logo"></p>

[![TravisCI Build](https://img.shields.io/travis/one-react/button.svg)](https://travis-ci.org/one-react/button)
[![CircieCI Build](https://img.shields.io/circleci/project/github/one-react/button.svg)](https://circleci.com/gh/one-react/button)
[![Coverage](https://img.shields.io/codecov/c/github/one-react/button.svg)](https://codecov.io/gh/one-react/button) 
[![Version](https://img.shields.io/npm/v/or-button.svg)](https://www.npmjs.com/package/or-button)
[![Chat](https://img.shields.io/gitter/room/one-react-org/Lobby.svg)](https://gitter.im/one-react-org/Lobby)
[![License: MIT](https://img.shields.io/badge/License-MIT-brightgreen.svg)](https://opensource.org/licenses/MIT)
[![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)
[![Greenkeeper badge](https://badges.greenkeeper.io/one-react/button.svg)](https://greenkeeper.io/) 

## Installation
```
// with npm
npm install or-button

// with yarn
yarn add or-button
```

## Usage
- Config webpack `sass-loader` if you are using webpack.

```js
// webpack.config.js
{
  test: /\.scss$/,
  use: [
    'style-loader',
    'css-loader',
    'sass-loader'
  ],
  include: [
    /node_modules\/or\-\w+/ //include or-components
  ]
}
```

## Basic Example

```js
import Button from 'or-button'

<Button className="hello" type="primary" onClick={handleClick}>ADD TO CART</Button>
<Button type="warning" size="small" onClick={handleClick}>DELETE</Button>
```

## API
[see](https://one-react.github.io/button)

## Customize Theme
**Customize in webpack**

The following variables can be overridden:

```scss
$or-btn-primary-color: $or-primary-color !default;
$or-btn-warning-color: $or-warning-color !default;
$or-btn-disabled-color: $or-disabled-color !default;
$or-btn-default-color: $or-gray8 !default;
...
```
For more variables, see [here](https://github.com/one-react/button/blob/master/src/styles.scss).

First you should create a `theme.scss` file to declare the variables you want to override.

Then use the [data](https://github.com/webpack-contrib/sass-loader#environment-variables)  option provided by `sass-loader` to override the default values of the variables.

We take a typical `webpack.config.js` file as example to customize it's sass-loader options.

```js
// webpack.config.js
{
  test: /\.scss$/,
  use: [
    'style-loader',
    'css-loader',
    {
      loader: 'sass-loader',
      options: {
        data: fs.readFileSync(path.resolve(__dirname, 'theme.scss')) // pass theme.scss to sass-loader
      }
    }
  ],
  include: [
    /node_modules\/or\-\w+/ //include or-components
  ]
}
```

## Demos and Docs
> powered by [storybook](https://storybook.js.org/)

[Click Here](https://one-react.github.io/button)

## License

MIT &copy; foryuki
