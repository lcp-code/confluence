---
title: 手写debounce、throttle
head:
  - - meta
    - name: description
      content: 手写debounce、throttle; 函数防抖和节流。
icon: config
order: 3
category:
  - 数据结构
  - 数据结构常见问题
  - 手写debounce、throttle
tag:
  - 手写debounce、throttle
---
防抖是控制次数，节流是控制频率。

### **debounce (防抖)**
防抖就是防止抖动，触发事件后在 n 秒内函数只能执行一次，如果在 n 秒内又触发了事件，则会重新计算函数执行时间。一直点击的话，函数会迟迟不执行。==核心思想：防抖是不断创建，又不断清空定时器暂存的过程==。
使用场景
- 输入框搜索
- 表单提交
- 数据查询
- resize

```js
/*
 * 防抖函数
 * @param  {Function}  callback       回调函数
 * @param  {Number}    wait           延迟时间（ms），不传默认400ms
 * @param  {Boolen}    immediate      触发时是否立即执行一次，默认不执行
 * @return {Function}                 返回新的防抖函数
 */
const debounce = (callback, wait = 400, immediate = false) => {
  // timeout实例
  let timerId;
  // 函数还需判断
  if (typeof callback !== 'function') {
    throw new TypeError('callback 必须是函数');
  }
  return function() {
    // 首次触发时是否立即执行
    if (immediate && timerId === undefined) callback.apply(this, arguments)
    // 清掉已有计时器
    if (timerId) clearTimeout(timerId)
    timerId = setTimeout(() => {
      // 外层函数的this和arguments参数
      callback.apply(this, arguments)
      // 执行后将timeout置为undefined
      timerId = undefined
    }, wait)
  }
}
```

### **throttle（节流）**
节流指连续触发事件但是在 n 秒中只执行一次函数。一直点击的话，在n秒后函数依然会执行一次。==核心思想：防抖是创建，执行后清空再创建定时器暂存的过程==。时间戳同理。
使用场景
- scroll
- mousemove

```js
/*
 * 节流函数
 * @param  {Function}  callback       回调函数
 * @param  {Number}    wait           延迟时间（ms），不传默认400ms
 * @param  {Boolen}    immediate      触发时是否立即执行第一次，默认不执行
 * @return {Function}                 返回新的节流函数
 */
const throttle = (callback, wait = 400, immediate = false) => {
  // timeout实例
  let timerId;
  // 函数还需判断
  if (typeof callback !== 'function') {
    throw new TypeError('callback 必须是函数');
  }
  return function() {
    // 方便调试immediate效果，打印immediate
    console.log("immediate", immediate);
    // 第一次触发时是否立即执行
    if (immediate && timerId === undefined) {
      // 立即执行
      callback.apply(this, arguments)
      // 执行后立即关闭
      immediate = false
    }
    if (timerId === undefined) {
      timerId = setTimeout(() => {
        // 外层函数的this和arguments对象
        callback.apply(this, arguments)
        // 执行后将timeout置为undefined
        timerId = undefined
      }, wait)
    }
  }
}
```
### **测试代码**
```js
// 节流测试代码
const sleep = async (time) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve();
    }, time);
  });
};
const consoleTest = throttle(
  async () => {
    console.log(+new Date());
  },
  400,
  true
);
const test = async () => {
  for (let i = 0; i < 10; i++) {
    // 模拟间隔100ms点击
    await sleep(100);
    consoleTest();
  }
};
test();
// 防抖的调试代码可以参考此代码
```
虽然大概意思实现了，但是在生产环境建议使用underscore或lodash，他们考虑了更加完整的情况，如cancel、flush、函数判断等。

参考
- underscore的实现 https://github.com/jashkenas/underscore
- lodash的实现 https://github.com/lodash/lodash
- https://www.jianshu.com/p/c8b86b09daf0
- https://juejin.cn/post/7032905194736189477
- https://github.com/mqyqingfeng/Blog/issues/22
- https://github.com/mqyqingfeng/Blog/issues/26


相关文章推荐
- [js数据类型判断的几种方式](./get-type.md)
- [深拷贝deepClone详解](./deep-clone.md)