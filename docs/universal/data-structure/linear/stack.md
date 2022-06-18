---
title: 栈
head:
  - - meta
    - name: description
      content: 栈，双栈结构，浏览器的前进后退。
icon: config
order: 4
category:
  - 数据结构
  - 栈
tag:
  - 栈
---

### **定义**
栈是一种特殊的线性表，仅能在线性表的一端操作，栈顶允许操作，栈底不允许操作。栈的特点是：先进后出，或者说是后进先出，从栈顶放入元素的操作叫入栈，取出元素叫出栈。

### **用途**
- 实现递归功能方面的场景。
- 斐波那契数列。
- 浏览器的前进后退。

### **栈的实现**
```ts
/** 单向链表节点定义 */
class LinkedNode<T> {
  /** 节点值 */
  value: T;
  /** 节点的下一个节点 */
  next: LinkedNode<T> | null;

  constructor(value: T, next: LinkedNode<T> | null = null) {
    this.value = value;
    this.next = next;
  }
}

/** 基于单向链表实现栈结构 */
export class Stack<T> {
  /** 栈出口处节点 */
  private node: LinkedNode<T> | null = null;
  /** 节点总数 */
  size: number = 0;

  /** 入栈 */
  public push(value: T) {
    if (!value) return;
    const newNode = new LinkedNode(value);
    if (!this.node) {
      /** 空栈的情况 */
      this.node = newNode;
    } else {
      newNode.next = this.node;
      this.node = newNode;
    }
    this.size++;
  }

  /** 出栈 */
  public pop(): T | null {
    if (!this.node) {
      return null;
    }
    const value = this.node.value;
    this.node = this.node.next;
    this.size--;
    return value;
  }
}
```
### **使用双栈结构实现浏览器的前进后退**
```ts
/** 使用双栈结构实现浏览器的前进后退 */
class Browser<T> {
  /** 存放后退的所有历史url */
  private backStack: Stack<T>;
  /** 存放前进的所有url */
  private forwardStack: Stack<T>;
  /** 当前节点*/
  private current: T;

  constructor(current: T) {
    this.backStack = new Stack<T>();
    this.forwardStack = new Stack<T>();
    this.current = current;
  }

  /** 浏览器回退*/
  public back(): T | null {
    if (this.backStack.size > 0) {
      this.forwardStack.push(this.current);
      this.current = this.backStack.pop()!;
      return this.getCurrentPage();
    }
    return null;
  }

  /** 浏览器前进*/
  public forward(): T | null {
    if (this.forwardStack.size > 0) {
      this.backStack.push(this.current);
      this.current = this.forwardStack.pop()!;
      return this.getCurrentPage();
    }
    return null;
  }

  /**
   * 在网页上点击一个链接
   * @param value
   */
  public linkUrl(value: T) {
    this.current && this.backStack.push(this.current);
    this.current = value;
  }

  /** 获取当前页*/
  public getCurrentPage(): T {
    return this.current;
  }
}
```
测试代码
```ts
const browser = new Browser("www.baidu.com");
browser.linkUrl("confluence.uuyang.cn/zh");
browser.linkUrl("github.com/lcp-code/code-base");

console.log(browser.getCurrentPage()); // github.com/lcp-code/code-base
browser.back();
console.log(browser.getCurrentPage()); // confluence.uuyang.cn/zh
browser.back();
console.log(browser.getCurrentPage()); // www.baidu.com
browser.back();
console.log(browser.getCurrentPage()); // www.baidu.com
browser.forward();
console.log(browser.getCurrentPage()); // confluence.uuyang.cn/zh
browser.forward();
console.log(browser.getCurrentPage()); // github.com/lcp-code/code-base
```

本文地址：
- https://confluence.uuyang.cn/universal/data-structure/linear/stack.html

参考
- https://github.com/lcp-code/code-base/blob/main/typescript/08_stack/StackAndBrowser.ts
- https://blog.csdn.net/yeyazhishang/article/details/82353846

相关文章推荐
- [缓存淘汰算法](../../algorithm/faq/lru.md)
- [深拷贝deepClone详解](../faq/deep-clone.md)
- [手写debounce、throttle](../faq/debounce-throttle.md)
- [数组](./array.md)
- [链表](./linked.md)
- [队列](./queue.md)
- [c、c++、java、go、python、javascript等各语言特性，薪资分布](../../../universal/lang/lang-feature.md)
