---
title: 链表
head:
  - - meta
    - name: description
      content: 链表，链表的常见操作，链表的用途， 链表的优缺点，单链表，双向链表，循环链表。
icon: config
order: 2
category:
  - 数据结构
tag:
  - 链表
---

### **定义**
每个节点包含数据和指向后续节点的指针。

### **类型**
根据指针的指向，链表能形成不同的结构，例如单链表，双向链表，循环链表等。

### **用途**
- 实现文件系统、哈希表、邻接表。
- 适用于数据量较小，需要频繁增加，删除操作的场景。

### **优缺点**
优点：
链表是很常用的一种数据结构，不需要初始化容量，可以任意加减元素；
添加或者删除元素时只需要改变前后两个元素结点的指针域指向地址即可，所以添加，删除很快。

缺点：
因为含有大量的指针域，占用空间较大；
查找元素需要遍历链表来查找，非常耗时。

### **常见操作**

List表接口定义
```ts
interface List<T> {
  /** 根据值查找 */
  findByValue(value: T): any
  /** 根据index查找 */
  findByIndex(index: number): any
  /** 插入到头部 */
  insertToHead(value: T): void
  /** 插入到尾部 */
  insertToTail(value: T): void
  /**
   * 在指定的index后面插入节点
   * @param value 节点的值
   * @param index 指定的位置
   */
  insertToIndex(value: T, index: number): void
  /** 根据值移除 */
  remove(value: T): boolean
  /** 转字符串 */
  toString(): string
}
```

### **双向链表实现**
```ts
/** 链表节点定义 */
class LinkedListNode<T> {
  /** 节点值 */
  value: T;
  /** 节点的下一个节点 */
  next: LinkedListNode<T> | null;
  /** 节点的上一个节点 */
  prev: LinkedListNode<T> | null;

  constructor(
    value: T,
    next: LinkedListNode<T> | null = null,
    prev: LinkedListNode<T> | null = null
  ) {
    this.value = value;
    this.next = next;
    this.prev = prev;
  }
}

/** 链表实现 */
class LinkedList<T> implements List<T> {
  /** 节点总数 */
  size: number = 0;
  /** 链表头节点 */
  private head: LinkedListNode<T> | null = null;
  /** 链表尾节点 */
  private tail: LinkedListNode<T> | null = null;

  findByIndex(index: number): LinkedListNode<T> | null {
    // 从头开始往下找，所以查询效率低
    let p = this.head;
    let pos = 0;
    while (p && pos !== index) {
      p = p.next;
      pos++;
    }
    return p;
  }

  findByValue(value: T): LinkedListNode<T> | null {
    // 从头开始往下找，所以查询效率低
    let p = this.head;
    while (p && p.value !== value) {
      p = p.next;
    }
    return p;
  }

  insertToHead(value: T): void {
    let p = this.head;
    const newNode = new LinkedListNode(value);
    if (!p) {
      // 空链表插入新节点，头和尾同一个节点
      this.tail = this.head = newNode;
    } else {
      // 新节点成为头节点，把指向调整下
      p.prev = newNode;
      newNode.next = p;
      this.head = newNode;
    }
    this.size++;
  }

  insertToTail(value: T): void {
    let p = this.tail;
    const newNode = new LinkedListNode(value);
    if (p === null) {
      // 空链表插入新节点，头和尾同一个节点
      this.head = this.tail = newNode;
    } else {
      // 新节点成为尾节点，把指向调整下
      p.next = newNode;
      newNode.prev = p;
      this.tail = newNode;
    }

    this.size++;
  }

  insertToIndex(value: T, index: number): void {
    let p = this.head;
    let pos = 0;
    const newNode = new LinkedListNode(value);
    // 根据index找到节点
    while (p !== null && pos !== index) {
      p = p.next;
      pos++;
    }
    if (p === null) return;
    if (p.prev === null) {
      // 此时通过index查询到的p节点为头节点
      this.insertToHead(value);
      return;
    }
    if (p.next === null) {
      // 此时通过index查询到的p节点为尾节点
      this.insertToTail(value);
      return;
    }
    newNode.next = p.next;
    p.next = newNode;
    newNode.prev = p;
    this.size++;
  }

  remove(value: T): boolean {
    /** 根据值查找 */
    let p = this.findByValue(value);
    if (!p) return false;
    // 上一个节点处理
    if (p.prev) {
      p.prev.next = p.next;
    } else {
      this.head = p.next;
    }
    // 下一个节点处理
    if (p.next) {
      p.next.prev = p.prev;
    } else {
      this.tail = p.prev;
    }
    this.size--;
    return true;
  }

  toString(): string {
    let ret: string = "";
    let p = this.head;
    // 从头节点开始，遍历节点拼接值
    while (p) {
      ret = `${ret} ${p.value} `;
      p = p.next;
    }
    return ret;
  }
}
```

测试代码
```ts
const linkedList = new LinkedList();
linkedList.insertToHead('aaa');
linkedList.insertToHead('bbb');
linkedList.insertToTail('ccc');
linkedList.insertToIndex('dddd', 0);
linkedList.remove('dddd');
console.log(linkedList.toString());
```

### **单向链表的实现**
```ts
/** 链表节点定义 */
class SingleNode<T> {
  /** 节点值 */
  public value: T;
  /** 节点的下一个节点 */
  public next: SingleNode<T> | null;
  constructor(value: T, next: SingleNode<T> | null = null) {
    this.value = value;
    this.next = next;
  }
}
```

```ts
/** 链表实现 */
class SingleLinkedList<T> implements List<T> {
  /** 节点总数: 不算哨兵节点 */
  size: number = 0;
  /** 哨兵头节点: 不算数据节点，value为null */
  private readonly head: SingleNode<T>;
  constructor() {
    this.head = new SingleNode<any>(null);
  }

  public findByValue(value: T): SingleNode<T> | null {
    // 从头开始往下找，所以查询效率低
    let p = this.head;
    while (p.next !== null) {
      if (p.next.value === value) return p.next;
      p = p.next;
    }
    return p.next;
  }

  public findByIndex(index: number): SingleNode<T> | null {
    // 从头开始往下找，所以查询效率低
    let p = this.head;
    let pos = 0;
    while (p.next !== null && pos !== index) {
      p = p.next;
      pos++;
    }
    return p.next;
  }

  /**
   * 向指定的位置插入节点
   * @param value
   * @param index
   */
  public insertToIndex(value: T, index: number): void {
    const newNode = new SingleNode(value);
    let p = this.findByIndex(index);
    if (p == null) return;
    newNode.next = p.next;
    p.next = newNode;
    this.size++;
  }

  /**
   * 根据值删除节点
   * @param value
   */
  public remove(value: T): boolean {
    let p = this.head;
    // 找该值节点
    while (p.next !== null) {
      if (p.next.value === value) break;
      p = p.next;
    }
    if (p.next === null) return false;
    p.next = p.next.next;
    this.size--;
    return true;
  }

  public insertToHead(value: T): void {
    const newNode = new SingleNode(value, null);
    this.insertNodeToHead(newNode);
  }

  private insertNodeToHead(node: SingleNode<T>): void {
    node.next = this.head.next;
    this.head.next = node;
    this.size++;
  }

  public insertToTail(value: T): void {
    const newNode = new SingleNode(value, null);
    this.insertNodeToTail(newNode);
  }

  /**
   * 单链表的尾插入比较费时，必须从头迭代到尾
   * @param newNode 插入的新节点
   */
  private insertNodeToTail(newNode: SingleNode<T>): void {
    let p = this.head;
    // 找到尾节点，尾节点next为null
    while (p.next !== null) {
      p = p.next;
    }
    p.next = newNode;
    this.size++;
  }

  public toString(): string {
    let ret: string = "";
    let p = this.head;
    while (p.next !== null) {
      ret = `${ret} ${p.next.value} `;
      p = p.next;
    }
    return ret;
  }
}
```

测试代码
```ts
const singleLinkedList = new SingleLinkedList<string>();
singleLinkedList.insertToTail('aaa');
singleLinkedList.insertToTail('bbb');
singleLinkedList.insertToIndex('ccc', 1);
singleLinkedList.remove('bbb');
console.log(singleLinkedList.toString());
```
参考
- https://github.com/lcp-code/code-base/blob/main/typescript/06_linkedlist/LinkedList.ts
- https://blog.csdn.net/yeyazhishang/article/details/82353846

相关文章推荐
- [缓存淘汰算法](../../algorithm/faq/lru.md)
- [深拷贝deepClone详解](../faq/deep-clone.md)
- [手写debounce、throttle](../faq/debounce-throttle.md)
- [数组](./array.md)
- [队列](./queue.md)
- [栈](./stack.md)
- [使用双栈结构实现浏览器的前进后退](./stack.md#使用双栈结构实现浏览器的前进后退)