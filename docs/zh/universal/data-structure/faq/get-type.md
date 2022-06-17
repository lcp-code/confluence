---
title: js数据类型判断的几种方式
head:
  - - meta
    - name: description
      content: js数据类型判断的几种方式，及区别。
icon: config
order: 1
category:
  - 数据结构
  - 数据结构常见问题
  - js数据类型判断的几种方式
tag:
  - js数据类型判断的几种方式
---

js数据类型判断的几种方式，==推荐第四种，最全最准确==
### **实现方式一：使用typeof**
仅能返回几种判断类型：string，number，bigint，boolean，undefined，object，function，symbol
```js
const getType = (value) => {
    return typeof value;
}
```
### **实现方式一：使用instanceof**
判断一个实例是否属于某种类型：如：Object，Array，Function，Date，RegExp，构造函数的实例、类的实例等。
主要是通过原型链来判断：只要右边变量的 prototype 在左边变量的原型链上即可。
```js
const getType = (value1, Type) => {
    return value1 instanceof Type;
}

// 简单实现一个instanceof
const myInstanceof = (left, right) => {
    // 左侧参数非对象直接返回false
    if (Object(left) !== left) return false;
    const rightType = typeof right
    // 对于右侧参数可以认为只能为函数或对象且不能没有Prototype属性
    if ((rightType !== 'function' || rightType !== 'object') || !right.prototype) throw new TypeError("Right-hand side of 'instanceof' is not an object");
    const rightPrototype = right.prototype;
    let leftProto = left.__proto__;
    while(true) {
        if (left === null) return false;
        if (leftProto === rightPrototype) return true;
        leftProto = leftProto.__proto__; // 遍历左边原型链，直到找到右边的prototype
    }
 }
```

### **实现方式三：使用constructor**
有构造函数的类型都可以通过此判断，稳定性不足。
注意点：
- 纯数字、null、undefined是不可以的
- 重写prototype后，constructor会默认为Object
```js
const getType = (value) => {
  const type = typeof value;
  if (type === 'undefined' || type === 'number' || value === null) return type;
  if (value.constructor === String) return 'string';
  if (value.constructor === Boolean) return 'boolean';
  if (value.constructor === Object) return 'object';
  if (value.constructor === Function) return 'function';
  if (value.constructor === AsyncFunction) return 'asyncFunction';
  if (value.constructor === GeneratorFunction) return 'generatorFunction';
  if (value.constructor === Symbol) return 'symbol';
  if (value.constructor === Array) return 'array';
  if (value.constructor === Date) return 'date';
  if (value.constructor === RegExp) return 'regExp';
  if (value.constructor === Map) return 'map';
  if (value.constructor === WeakMap) return 'weakMap';
  if (value.constructor === Set) return 'set';
  if (value.constructor === WeakSet) return 'weakSet';
  if (value.constructor === Blob) return 'blob';
  if (value.constructor === Uint8Array) return 'uint8Array';
  if (value.constructor === Error) return 'error';
  //   还有更多
}
```

### **实现方式四：使用Object.prototype.toString.call**
Object.prototype.toString.call(value) 的返回格式为[object,Type]，Type是具体的数据类型。
```js
const getType = (value) => {
  //   枚举部分类型
  //   const map = {
  //     '[object String]': 'string',
  //     '[object Number]': 'number'
  //     '[object Boolean]': 'boolean',
  //     '[object Undefined]': 'undefined',
  //     '[object Object]': 'object',
  //     '[object Function]': 'function',
  //     '[object AsyncFunction]': 'asyncFunction',
  //     '[object GeneratorFunction]': 'generatorFunction',
  //     '[object Symbol]': 'symbol',
  //     '[object Null]': 'null',
  //     '[object Array]': 'array',
  //     '[object Date]': 'date',
  //     '[object RegExp]': 'regExp',
  //     '[object Map]': 'map',
  //     '[object WeakMap]': 'weakMap',
  //     '[object Set]': 'set',
  //     '[object WeakSet]': 'weakSet',
  //     '[object Blob]': 'blob',
  //     '[object HTMLDocument]': 'document',
  //     '[object Uint8Array]': 'uint8Array',
  //     '[object Error]': 'error'
  //   };
  //   还有更多
  return Object.prototype.toString.call(value).replace(/^\[object (\S+)\]$/, '$1').toLowerCase();
}
```

参考
- https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Operators/typeof
- https://blog.csdn.net/mozuncangtianbaxue/article/details/77151598
- https://juejin.cn/post/6844903613584654344

相关文章推荐
- [深拷贝deepClone详解](./deep-clone.md)
- [手写debounce、throttle](./debounce-throttle.md)