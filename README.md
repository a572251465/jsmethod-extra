<h1 align="center">jsmethod-extra</h1>

> Extra methods for JavaScript

## choice reason

- [x] 100% test coverage
- [x] support TypeScript
- [x] multiple packaging formats(esm, cjs, iife)
- [x] support tree shaking
- [x] support browser and nodejs
- [x] support import and require
- [x] support npm and yarn and pnpm
- [x] small packaging volume, less than 2kb

## Usage example

### esm

```js
import { addUrlPrefix } from "jsmethod-extra";

addUrlPrefix("test/001", "/"); // => '/test/001'
addUrlPrefix("/test/001", ""); // => '/test/001'
```

### cjs

```js
const { addUrlPrefix } = require("jsmethod-extra");

addUrlPrefix("test/001", "/"); // => '/test/001'
addUrlPrefix("/test/001", ""); // => '/test/001'
```

### iife

```js
jsMethods.addUrlPrefix("test/001", "/"); // => '/test/001'
jsMethods.addUrlPrefix("/test/001", ""); // => '/test/001'
```

## Install

```bash
npm install jsmethod-extra
yarn add jsmethod-extra
pnpm install jsmethod-extra
```

## API

### addUrlPrefix

add url prefix

- params
  - url: string
    - required url
  - prefix: string
    - no required prefix
    - default: '/'

**Typescript Type**

```ts
type addUrlPrefix = (url: string, prefix?: string) => string;
```

**Example**

```js
addUrlPrefix("test/001"); // => '/test/001'
addUrlPrefix("/test/001", "&"); // => '&/test/001'
```

### joinPathNoResolve

only multiple value splicing

- params
  - args1: string
  - args2: string
  - ...

**Typescript Type**

```ts
type joinPathNoResolve = <T = string>(...args: T[]) => string;
```

**Example**

```js
joinPathNoResolve("test", "001"); // => 'test001'
joinPathNoResolve("test", "/001"); // => 'test/001'
joinPathNoResolve("test", "/001", "002"); // => 'test/001002'
joinPathNoResolve([1, 2, 3]); // => '1,2,3'
```

### normal type check

- isString
- isEmpty
- isFunction

**Typescript Type**

```ts
type isString = (value: unknown) => boolean;
type isEmpty = (value: unknown) => boolean;
type isFunction = (value: unknown) => boolean;
```
