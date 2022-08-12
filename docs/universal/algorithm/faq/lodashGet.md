---
title: 重写lodashGet方法
head:
  - - meta
    - name: description
      content: 重写lodashGet方法，兼容多种格式、'a.b[0].c'和'a.b.0.c'。
icon: config
category:
  - 算法
  - 算法常见问题
  - 重写lodashGet方法
tag:
  - 重写lodashGet方法
---

### **定义**
通过keyPath取值，兼容两种格式'a.b[0].c'和'a.b.0.c'。

### **算法步骤**
1. obj格式校验，keyPath格式校验
2. 把两种格式的keyPath 'a.b[0].c'和'a.b.0.c'都转成统一的数组格式
3. 循环数组取值。

### **用途**
- 安全的通过keyPath取值

### **算法实现**
```js
const getType = (value) =>
  Object.prototype.toString
    .call(value)
    .replace(/^\[object (\w+)\]$/, "$1")
    .toLowerCase();
const isObjectLike = (value) =>
  getType(value) === "object" || getType(value) === "array";
/**
 * @param  {object|array} obj
 * @param  {string} keyPath 同时兼容两种格式'a.b[0].c'和'a.b.0.c'
 * @param  {any} defaultValue
 */
const lodashGet = (obj, keyPath, defaultValue) => {
  if (!isObjectLike(obj)) {
    console.error("obj格式有误");
    return defaultValue;
  }
  if (getType(keyPath) !== "string" || !keyPath) {
    console.error("keyPath格式有误");
    return defaultValue;
  }
  const keyArr = keyPath.split(".");
  const nextKeyArr = [];
  for (let j = 0; j < keyArr.length; j++) {
    const item = keyArr[j];
    if (~item?.indexOf("[")) {
      if (/^[\W\w_\d]*\[\d+\]$/.test(item)) {
        const itemMatch = item.match(/([\W\w_\d]*)\[(\d+)\]/);
        const key1 = itemMatch[1];
        if (key1) {
          nextKeyArr.push(key1);
        }
        const key2 = itemMatch[2];
        if (key2) {
          nextKeyArr.push(Number(key2));
        }
      } else {
        console.error("keyPath格式有误");
        return defaultValue;
      }
    } else {
      nextKeyArr.push(item);
    }
  }
  const len = nextKeyArr.length;
  let resValue = obj;
  let isError;
  for (let i = 0; i < len; i++) {
    if (isObjectLike(resValue)) {
      resValue = resValue[nextKeyArr[i]];
    }
    if (!isObjectLike(resValue)) {
      if (i < len - 1) {
        // 非类对象再取值
        console.error("取值有误");
        isError = true;
      }
      break;
    }
  }
  return resValue === undefined || isError ? defaultValue : resValue;
};
```

测试代码
```js
const test1 = { a: { b: [{ c: 1 }] }, a1: 22 };
const test2 = [{ c: 1 }];
console.log("test1 格式1", lodashGet(test1, "a.b[0].c", "defaultValue"));
console.log("test1 格式2", lodashGet(test1, "a.b.0.c", "defaultValue"));
console.log("test2 格式1", lodashGet(test2, "[0].c", "defaultValue"));
console.log("test2 格式2", lodashGet(test2, "0.c", "defaultValue"));
```