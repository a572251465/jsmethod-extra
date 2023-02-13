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

### startCut

cut front character string

- params
  - value: string
  - len: number

**Typescript Type**

```ts
type startCut = (value: string, len: number) => string;
```

**Example**

```js
startCut("test", 1); // => 't'
startCut("test", 2); // => 'te'
startCut("test", 10); // => 'test'
startCut("test", 0); // => 'test'
startCut("test", -1); // => 'test'
```

### endCut

cut ending character string

- params
  - value: string
  - len: number

**Typescript Type**

```ts
type endCut = (value: string, len: number) => string;
```

**Example**

```js
endCut("test", 1); // => 't'
endCut("test", 2); // => 'st'
endCut("test", 10); // => 'test'
endCut("test", 0); // => 'test'
endCut("test", -1); // => 'test'
```

### mergePathOnSymbol

splice strings according to characters

- params
  - sign: string
  - args1: string
  - args2: string
  - ...

**Typescript Type**

```ts
type mergePathOnSymbol = (sign: string, ...args: string[]) => string;
```

**Example**

```js
mergePathOnSymbol("/", "a", "b", "c"); // => 'a/b/c'
mergePathOnSymbol("/", "a/", "/b", "c"); // => 'a/b/c'
mergePathOnSymbol("/", "https://random.com/", "/home"); // => 'https://random.com/home'
```

### normal type check

- isString
- isEmpty
- isFunction
- isNumber

**Typescript Type**

```ts
type isString = (value: unknown) => boolean;
type isEmpty = (value: unknown) => boolean;
type isFunction = (value: unknown) => boolean;
type isNumber = (value: unknown) => boolean;
```
