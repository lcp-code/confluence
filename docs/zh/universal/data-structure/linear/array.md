---
title: 数组
head:
  - - meta
    - name: description
      content: 数组，数组的常见操作，数组的用途，数组的优缺点，数组的浅复制、深复制，数组的引用复制和值复制，数组的常见用途。
icon: config
order: 1
category:
  - 数据结构
tag:
  - 数组
---

数组是一种类列表对象，它的原型中提供了遍历和修改元素的相关操作。JavaScript 数组的长度和元素类型都是非固定的。因为数组的长度可随时改变，并且其数据在内存中也可以不连续。

我们可以用元素的索引（index）来获取数组的项。数组对象的属性和数组元素列表是分开存储的。

### **用途**
存储列表型数据，可以是单类型数组，也可以是对象数组。
- 可以用来管理list数据
- 可以借助数组来实现队列、栈等数据结构。
- 可以用二维数组实现excel数据存取。
- 数组和对象结合实现DSL数据结构。
- 适用于频繁查询，对存储空间要求不大，很少增加和删除的情况。

### **优缺点**

优点：
按照索引查询元素速度快；
按照索引遍历数组方便。

缺点：
数组的大小固定后就无法扩容了(js没有这个要求)；
数组只能存储一种类型的数据(js没有这个要求)；
添加，删除的操作慢，因为要移动其他的元素。

### **常见操作**

#### 创建数组
```js
let people = ['小明', '小强']

console.log(people.length)
```

#### 通过索引访问数组元素
```js
let first = people[0]
// 小明

let last = people[people.length - 1]
// 小强
```

#### 遍历数组
```js
people.forEach(function(item, index, array) {
  console.log(item, index)
})
// 小明 0
// 小强 1
```

#### 添加元素到数组的末尾
```js
let newLength = people.push('小小')
// ["小明", "小强", "小小"]
```

#### 删除数组末尾的元素
```js
let first = people.shift()
// ["小强"]
```

#### 添加元素到数组的头部
```js
let newLength = people.unshift('笑笑')
// ["笑笑", "小明", "小强"]
```

#### 找出某个元素在数组中的索引
```js
people.push('笑笑')
// ["小明", "小强", "笑笑"]

let pos = people.indexOf('小强')
// 1
```

#### 通过索引删除某个元素
```js
let removedItem = people.splice(pos, 1)

// ["小明", "小强"]
```

#### 从一个索引位置删除多个元素
```js
let people = ['小明', '小强', '小小', '笑笑']
console.log(people)
// ["小明", "小强", "小小", "笑笑"]

let pos = 1
let n = 2

let removedItems = people.splice(pos, n)

console.log(people)
// ["小明", "笑笑"] (原数组被改变)

console.log(removedItems)
// ["小强", "小小"]
```

#### 复制一个数组
只对第一层做值复制，其他层若有数组或对象，只是引用复制
```js
let shallowCopy = people.slice()
// ["小明", "小强"]
```

#### 访问数组元素
JavaScript 数组的索引是从 0 开始的，第一个元素的索引为 0，最后一个元素的索引等于该数组的 长度 减 1。

如果指定的索引是一个无效值，JavaScript 数组并不会报错，而是会返回 undefined。
```js
let arr = ['小明', '小强', '小小', ]
console.log(arr[0])              // logs '小明'
console.log(arr[1])              // logs '小强'
console.log(arr[arr.length - 1]) // logs '小小'
console.log(arr[arr.length]) // logs undefined
```

#### **数组的浅复制与深复制**
数组的浅复制是引用复制，修改时，新旧数组都会变。
```js
// 浅复制
let arr = [1,2,3,4,5,6];
let newArr = arr;
newArr[0] = 12;
console.log(newArr[0]);  // 12
console.log(arr[0]);  // 12
```
深复制会创建一个新的数组，是值复制，修改数据时，相互之间不影响。
```js
// 深复制
const copy = (arr1,arr2) => {
  for(let i = 0; i < arr1.length; i++){
    arr2[i] = arr1[i];
  }
}
let arr = [1,2,3,4,5,6];
let newAr = [];
copy(arr,newArr);
newArr[0] = 12;
console.log(newArr[0]);    // 12
console.log(arr[0]);    // 1
```

#### **对象数组结合的深拷贝**
见[深拷贝deepClone详解](../faq/deep-clone.md)

可再次复习下数组的[用途](./array.md#数组的用途)

参考
- https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Array
- https://blog.csdn.net/yeyazhishang/article/details/82353846

相关文章推荐
- [缓存淘汰算法](../../algorithm/faq/lru.md)
- [深拷贝deepClone详解](../faq/deep-clone.md)
- [手写debounce、throttle](../faq/debounce-throttle.md)
- [链表](./linked.md)
- [队列](./queue.md)
- [栈](./stack.md)
- [使用双栈结构实现浏览器的前进后退](./stack.md#使用双栈结构实现浏览器的前进后退)
