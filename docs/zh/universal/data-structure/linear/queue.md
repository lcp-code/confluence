---
title: 队列
head:
  - - meta
    - name: description
      content: 数组，数组的常见操作，数组的用途，数组的优缺点，数组的浅复制、深复制，数组的引用复制和值复制，数组的常见用途。
icon: config
order: 3
category:
  - 数据结构
tag:
  - 队列
---

### **定义**
队列可以在一端添加元素，在另一端取出元素，也就是：先进先出。

### **用途**
- 在多线程阻塞队列管理中非常适用。
- 漏桶算法。

### **队列的实现**
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

/** 使用链表实现简单队列 */
class SimpleQueue<T> {
  /** 头节点 */
  private head: LinkedNode<T> | null = null;
  /** 尾节点 */
  private tail: LinkedNode<T> | null = null;

  /**
   * 入队,插入队尾
   * @param value
   */
  public enqueue(value: T) {
    if (!this.tail) {
      this.head = this.tail = new LinkedNode<T>(value);
    } else {
      const newNode = new LinkedNode<T>(value);
      this.tail.next = newNode;
      this.tail = newNode;
    }
  }

  /**
   * 出队,在队头删除
   */
  public dequeue(): T | null {
    if (!this.head) return null;
    const value = this.head.value;
    this.head = this.head.next;
    return value;
  }

  public printAll(): string {
    let p = this.head;
    let res = "";
    while (p) {
      res = `${res} ${p.value}`;
      p = p.next;
    }
    return res;
  }
}
```

测试代码
```ts
const queue = new SimpleQueue();
queue.enqueue(1);
queue.enqueue(2);
queue.enqueue(3);
queue.dequeue();
queue.dequeue();
console.log(queue.printAll());
```

参考
- https://github.com/lcp-code/code-base/blob/main/typescript/09_queue/SimpleQueue.ts
- https://blog.csdn.net/yeyazhishang/article/details/82353846

相关文章推荐
- [缓存淘汰算法](../../algorithm/faq/lru.md)
- [深拷贝deepClone详解](../faq/deep-clone.md)
- [手写debounce、throttle](../faq/debounce-throttle.md)
- [数组](./array.md)
- [链表](./linked.md)
- [栈](./stack.md)
- [使用双栈结构实现浏览器的前进后退](./stack.md#使用双栈结构实现浏览器的前进后退)