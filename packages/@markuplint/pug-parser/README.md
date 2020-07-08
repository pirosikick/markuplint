# @markuplint/pug-parser

[![npm version](https://badge.fury.io/js/%40markuplint%2Fpug-parser.svg)](https://www.npmjs.com/package/@markuplint/pug-parser)
[![Build Status](https://travis-ci.org/markuplint/markuplint.svg?branch=next)](https://travis-ci.org/markuplint/markuplint)
[![Coverage Status](https://coveralls.io/repos/github/markuplint/markuplint/badge.svg?branch=next)](https://coveralls.io/github/markuplint/markuplint?branch=next)

## Install

Prerequisites: [Node.js](https://nodejs.org) (Version 12.4.0 or later)

```sh
$ npm install @markuplint/pug-parser

$ yarn add @markuplint/pug-parser
```

## Usage

Add `parser` option into your `.eslintrc.*` file.

```json
{
	"extends": "@markuplint/html-ls",
	"parser": {
		".{pug,jade}$": "@markuplint/pug-parser"
	}
}
```

## Contributing

```
$ git clone git@github.com:markuplint/markuplint.git -b next
$ yarn
$ yarn build
$ yarn test
```

---

Copyright &copy; 2020 markuplint. Under the MIT License.