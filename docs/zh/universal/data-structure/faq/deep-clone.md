---
title: 深拷贝deepClone详解
head:
  - - meta
    - name: description
      content: 深克隆 深拷贝 deepClone 详解。
icon: config
order: 2
category:
  - 数据结构
  - 数据结构常见问题
  - 深拷贝deepClone详解
tag:
  - 深拷贝deepClone详解
---

在上一篇已经讲了深复制和浅复制的区别，就是引用复制和值复制的区别。见[数组](../linear/array.md)。
- 基本数据类型的特点：数据直接存储在栈(stack)内存中
- 引用数据类型的特点：在栈中存储的是该对象引用，真实的数据存放在堆内存里

### **实现方式一：借助JSON方法，不能深拷贝函数**
JSON.stringify()：用于将 JavaScript 值转换为 JSON 字符串
JSON.parse()：用于将一个 JSON 字符串转换为对象。

```js
let arr1 = [{ value: 1}, { value: 2}, 'str'];
let arr2 = JSON.parse(JSON.stringify(arr1));
arr1[0].value = 3;
console.log(arr1) // [{ value: 3}, { value: 2}, 'str']
console.log(arr2) // [{ value: 1}, { value: 2}, 'str']
```

### **实现方式二：手写函数实现**

要深拷贝实现值复制，就是不得不判断值的类型（getType见[类型判断的几种方式](./get-type.md)），以进一步选择赋值方式。==核心思想：递归遍历数组、对象做值复制==
- 非引用复制，直接赋值
- 引用赋值，遍历递归赋值

```js
const deepClone = (data) => {
  let type = getType(data);
  let tempValue;
  if(!(type === 'array' || type === 'object')) return data;
  if(type === 'array') {
    tempValue = [];
    data.forEach((item) => {
      tempValue.push(deepClone(item));
    })
    return tempValue;
  } else if(type === 'object') {
    tempValue = {};
    for(const key in data) {
      if (data.hasOwnProperty(key)) {
        tempValue[key] = deepClone(data[key]);
      }
    }
    return tempValue;
  }
}
```
虽然大概意思实现了，但是在生产环境建议使用underscore或lodash，他们考虑了更加完整的情况，比如function、Map、Set的处理等。

附加浅拷贝的实现方式
- Object.assign
- Array.prototype.concat
- Array.prototype.slice


参考
- underscore的实现 https://github.com/jashkenas/underscore
- lodash的实现 https://github.com/lodash/lodash
- https://zhuanlan.zhihu.com/p/56741046


相关文章推荐
- [js数据类型判断的几种方式](./get-type.md)
- [手写debounce、throttle](./debounce-throttle.md)