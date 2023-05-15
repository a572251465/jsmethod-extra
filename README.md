## jsmethod-extra

> Extra methods for JavaScript

简体中文 | [English](https://github.com/a572251465/jsmethod-extra.md)

### 选择理由

- [x] 100% test coverage
- [x] support TypeScript
- [x] multiple packaging formats(esm, cjs, iife)
- [x] node API make compatible
- [x] support tree shaking
- [x] support browser and nodejs
- [x] support import and require
- [x] support npm and yarn and pnpm

### 下载

```shell
npm install jsmethod-extra -S
```

```shell
yarn add jsmethod-extra -S
```

```shell
pnpm install jsmethod-extra -S
```

### API

- [addPrefix](#addPrefix)
- [isEmpty](#isEmpty)
- [isNotEmpty](#isNotEmpty)
- [isEmptyObject](#isEmptyObject)
- [isEmptyString](#isEmptyString)
- [isObject](#isObject)
- [isPlainObject](#isPlainObject)
- [getTypes](#getTypes)
- [isFullObject](#isFullObject)
- [equals](#equals)
- [slice](#slice)
- [isBlankEmpty](#isBlankEmpty)
- [valueOrDefault](#valueOrDefault)
- [isHas](#isHas)
- [timeFormatting](#timeFormatting)
- [other api](#simple-api)

#### addPrefix

使用案例

```js
import { addPrefix } from "jsmethod-extra";
const baseUrl = "/queryUserInfo";
const prefix = "/api";

// /api/queryUserInfo
addPrefix(baseUrl, prefix);
// /api/queryUserInfo
addPrefix(baseUrl, "/api/");
// /api-/queryUserInfo
addPrefix(baseUrl, prefix, "-");
```

类型

```ts
export type addPrefix<T> = {
  (value: string, prefix: string, splitSymbol = "/"): string;
};
```

#### isEmpty

```js
import { isEmpty } from "jsmethod-extra";
// true
isEmpty(null);
// true
isEmpty(undefined);
// true
isEmpty("");
// false
isEmpty(0);
```

#### isNotEmpty

```js
import { isNotEmpty } from "jsmethod-extra";
// false
isNotEmpty(null);
// false
isNotEmpty(undefined);
// false
isNotEmpty("");
// true
isNotEmpty(0);
```

#### isEmptyObject

```js
import { isEmptyObject } from "jsmethod-extra";

// true
isEmptyObject({});
// false
isEmptyObject({ name: xx });
// false
isEmptyObject([]);
```

#### isEmptyString

```js
import { isEmptyString } from "jsmethod-extra";
// true
isEmptyString("");
// false
isEmptyString(false);
// false
isEmptyString(0);
```

#### isObject

```js
import { isObject } from "jsmethod-extra";
// true
isObject({});
// true
isObject([]);
// true
isObject(null);
// false
isObject(1);
```

#### isPlainObject

```js
import { isPlainObject } from "jsmethod-extra";
// true
isPlainObject({});
// true
isPlainObject({ age: 20 });
// false
isPlainObject([]);
// false
isPlainObject(null);
// false
isPlainObject(1);
```

#### getTypes

使用案例

```js
import { getTypes } from "jsmethod-extra";
// []
getTypes();
// ["number"]
getTypes(1);
// ["boolean", "string"]
getTypes([true, "11"]);
```

类型

```ts
export type getTypes = {
  (value: unknown | unknown[]): string[];
};
```

#### isFullObject

> 非空对象 && 是否满足某些属性存在。

##### field

- value 判断的对象，必须输入
- fields 存在的属性，必须是数组，但是不一定要存在
- isAll 是否要满足 fields 中的值 在对象 value 中存在

使用案例

```js
import { isFullObject } from "jsmethod-extra";

const info = { nam: "lihh", age: 20, address: "info" };
console.log(isFullObject(info)); // true
console.log(isFullObject(info, ["test"])); // false
console.log(isFullObject(info, ["age"])); // true
console.log(isFullObject(info, ["age"], true)); // true
console.log(isFullObject(info, ["age,", "age1"], true)); // false
```

类型

```ts
export type isFullObject = (
  value: Record<string, unknown>,
  fields?: string[],
  isAll?: boolean
) => boolean;
```

#### equals

使用案例

```js
import { equals } from "jsmethod-extra";

console.log(equals(1, 1, 2)); // false
console.log(equals({}, [], [])); // false
const a = {};
console.log(equals(a, a, a)); // true
console.log(equals("200", 200, 200)); // true
console.log(equals(null, undefined)); // true
```

类型

```ts
type equals = (...args: unknown[]) => boolean;
```

#### slice

如果有符号存在，被截取的部分跟符号一致才会截取，反之不截取。
如果没有符号存在，功能类似于 String.prototype.slice

use example

```js
import { slice } from "jsmethod-extra";

console.log(slice("/myScreen", 1, "/")); // myScreen
console.log(slice("/myScreen", 1, -1)); // myScree   = String.prototype.Slice
console.log(slice("/myScreen/", 1, -1, "/")); // myScreen
```

type

```ts
function slice(value: string, start: number): string;
function slice(value: string, start: number, end: string | number): string;
function slice(
  value: string,
  start: number,
  end: number,
  symbols: string
): string;
function slice(
  value: string,
  start: number,
  end?: number | string,
  symbols?: string
): string {
  // todo
}
```

#### isBlankEmpty

```js
import { isBlankEmpty } from "jsmethod-extra";
// true
isBlankEmpty(null);
// true
isBlankEmpty(undefined);
// true
isBlankEmpty("");
// true    isEmpty(0) === false
isBlankEmpty(0);
```

#### valueOrDefault

- use

```js
import { valueOrDefault, isEmpty } from "jsmethod-extra";
// 1
valueOrDefault("", "1");
// 10
valueOrDefault(10, 20);
// 10
valueOrDefault(0, 10);
// 0
valueOrDefault(0, 10, isEmpty);
```

- type

```ts
type valueOrDefault = <T>(
  value: T,
  replaceValue: T,
  judgeFn = isBlankEmpty
) => boolean;
```

#### isHas

```js
import { isHas } from "jsmethod-extra";
const person = { name: "lihh", age: 20 };
// true
isHas(person, "name");
// true
isHas(person, "age");
// false
isHas(person, "address");
```

#### timeFormatting

- use

```js
import { timeFormatting, TimeType } from "jsmethod-extra";
const baseTime = "2023/05/15 17:09:09";
timeFormatting(baseTime, TimeType.THREE); // "2023-05-15 17:09"
timeFormatting(baseTime, TimeType.SEVEN); // 2023年05月15日
// ...
```

- type

```ts
export const enum TimeType {
  ONE = "YYYY-MM-DD",
  TWO = "YYYY-MM-DD HH:mm:ss",
  THREE = "YYYY-MM-DD HH:mm",
  FOUR = "YYYY/MM/DD",
  FIVE = "YYYY/MM/DD HH:mm:ss",
  SIX = "YYYY/MM/DD HH:mm",
  SEVEN = "YYYY年MM月DD日",
  EIGHT = "YYYY年MM月DD日 HH时mm分ss秒",
  NINE = "YYYY年MM月DD日 HH时mm分",
  TEN = "YYYY年MM月DD日 HH:mm:ss",
  ELEVEN = "YYYY年MM月DD日 HH:mm",
  TWELVE = "YYYY年MM月",
  THIRTEEN = "MM月DD日",
  FOURTEEN = "MM月DD日 HH时mm分ss秒",
  FIFTEEN = "MM月DD日 HH时mm分",
  SIXTEEN = "MM月DD日 HH:mm:ss",
  SEVENTEEN = "MM月DD日 HH:mm",
}

export declare function timeFormatting(date: string, type: TimeType): string;
export declare function timeFormatting(date: Date, type: TimeType): string;
export declare function timeFormatting(date: TimeType): string;
```

#### simple api

- isDate
- isError
- isFormData
- isMath
- isRegExp
- isSymbol
- isMap
- isSet
- isString
- isUndefined
- isNumber
- isNull
- isFunction
- isArray

## 更新记录

> 无版本说明, 更新 README file

- 1.0.0 大升级后，第一次发版
- 1.0.2 添加方法【isHas】声明类型
- 1.0.3 添加方法【valueOrDefault】 推断类型
- 1.0.4 添加方法【timeFormatting】
- 1.0.5 修改【timeFormatting】导出类型
