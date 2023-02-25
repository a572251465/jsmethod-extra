<h1 align="center">jsmethod-extra</h1>

> Extra methods for JavaScript

## choice reason

- [x] 100% test coverage
- [x] support TypeScript
- [x] multiple packaging formats(esm, cjs, iife)
- [x] node API make compatible
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

## Common API

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

### backPosCut

specify the number of digits after the string and intercept the specified length

- params
  - value
    - type: string
    - required: true
  - pos
    - type: number
    - required: true
  - len
    - type: number
    - required: no
  - ...

**Typescript Type**

```ts
type backPosCut = (value: string, pos: number, len?: number) => string;
```

**Example**

```js
backPosCut("123456", 3, 2); // => "45"
backPosCut("123456", -1, 2); // => "12"
backPosCut("123456", 5); // => "23456"
```

### normal type check

- isString
- isEmpty
- isFunction
- isNumber
- isUndefined
- isArray
- isObject

**Typescript Type**

```ts
type isString = (value: unknown) => boolean;
type isEmpty = (value: unknown) => boolean;
type isFunction = (value: unknown) => boolean;
type isNumber = (value: unknown) => boolean;
type isUndefined = (value: unknown) => boolean;
type isArray = (value: unknown) => boolean;
type isObject = (value: unknown) => boolean;
```

## Node API

### isFileExist

> Whether the file exists

- params
  - filePath: string
- return
  - boolean

**Typescript Type**

```ts
type isFileExist = (filePath: string) => boolean;
```

### isDirExist

> Whether the dir exists

- params
  - dirPath: string
- return
  - boolean

**Typescript Type**

```ts
type isDirExist = (dirPath: string) => boolean;
```

### exec

> child_process.exec function

- params
  - command: string
  - callback: function
  - options: object
    - cwd: string
- return
  - void

**Typescript Type**

```ts
type exec = (
  command: string,
  callback: Function,
  options: { cwd: string }
) => void;
```

### execSync

> child_process.exec async function

- params
  - command: string
  - options: object
    - cwd: string
- return
  - Promise<T>

**Typescript Type**

```ts
type execSync = <T>(command: string, options: { cwd: string }) => Promise<T>;
```

### currDirsCountAsync

> based on currPath, get the number of directories

- params
  - currPath: string
- return
  - Promise<number>

**Typescript Type**

```ts
type currDirsCountAsync = (currPath) => Promise<number>;
```

### currFilesCountAsync

> based on currPath, get the number of files

- params
  - currPath: string
- return
  - Promise<number>

**Typescript Type**

```ts
type currFilesCountAsync = (currPath) => Promise<number>;
```

### sureDirAsync

> Generate multilevel directory， if the directory exists, it will not be created。 example：mkdir -p a/b/c

- params
  - currPath: string
  - basePath: string
- return
  - Promise<void>

**Typescript Type**

```ts
type sureDirAsync = (currPath, basePath) => Promise<void>;
```
