# eslint-config-chisel

[![Greenkeeper badge](https://badges.greenkeeper.io/xfiveco/eslint-config-chisel.svg)](https://greenkeeper.io/)

Eslint config based on [Aribnb config](https://github.com/airbnb/javascript) you can use with ES6. Integrates with [Prettier](https://github.com/prettier/prettier).

## Prettier

You'll have to install Prettier on your own in order to use it. It won't be included by default when you install this package. Don't hesitate to add your own `.prettierrc` file to [customise code formatting](https://github.com/prettier/prettier#configuration-file).

## Installation

We recommend to use Yarn however you are free to use NPM. Snippet from the example below will install Eslint and Prettier as you'll need both of them to make use of this config.

```
yarn add --dev eslint prettier eslint-config-chisel
```

## Usage

Add this to your `.eslintrc`:

```json
{
    "extends": "chisel"
}
```

Note that the example above is in _JSON_. You may need to use YAML depending on your project setup:

```yml
  extends: chisel
```
