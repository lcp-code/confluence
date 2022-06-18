---
title: 缓存淘汰算法
head:
  - - meta
    - name: description
      content: 缓存淘汰算法，LRU, 双向链表实现。
icon: config
order: 1
category:
  - 算法
  - 算法常见问题
  - 缓存淘汰算法
tag:
  - 缓存淘汰算法
---

### **定义**
最近使用的数据是热门数据，下一次很大概率将会再次被使用。而最近很少被使用的数据，很大概率下一次不再用到。当缓存容量的满时候，优先淘汰最近很少使用的数据。

### **算法步骤**
1. 新数据直接插入到链表尾部
2. 缓存数据被命中，将数据移动到链表尾部
3. 缓存已满的时候，移除链表头部数据。

### **用途**
- Redis、Guava中有使用

### **算法实现**
```ts
/** 链表节点定义 */
class LinkedListNode<K, V> {
  key: K;
  value: V;
  next: LinkedListNode<K, V> | null;
  prev: LinkedListNode<K, V> | null;

  constructor(
    key: K,
    value: V,
    next: LinkedListNode<K, V> | null = null,
    prev: LinkedListNode<K, V> | null = null
  ) {
    this.key = key;
    this.value = value;
    this.next = next;
    this.prev = prev;
  }
}

/** 算法实现 */
class LRUCache<K, V> {
  /** 缓存键值 */
  private cacheMap: Map<K, LinkedListNode<K, V>>;
  /** 最大缓存数量 */
  private readonly limit: number;
  /** 头部节点 */
  private head: LinkedListNode<K, V> | null = null;
  /** 尾部节点 */
  private tail: LinkedListNode<K, V> | null = null;

  constructor(limit: number) {
    if (limit <= 0) throw new Error("limit of cache must > 0");
    this.cacheMap = new Map();
    this.limit = limit;
  }

  public get(key: K): V | null {
    const node = this.cacheMap.get(key);
    if (!node) return null;
    this.refreshNode(node);
    return node.value;
  }

  public put(key: K, value: V) {
    const node = this.cacheMap.get(key);
    // 原缓存不存在则加入到队尾
    if (!node) {
      // 大于规定的size则删除最不常用的
      if (this.cacheMap.size >= this.limit) {
        const oldKey = this.removeNode(this.head!);
        this.cacheMap.delete(oldKey);
      }
      // 在队尾添加
      const newNode = new LinkedListNode(key, value);
      this.addNode(newNode);
      this.cacheMap.set(key, newNode);
    } else {
      // 存在则更新值，刷新节点位置
      node.value = value;
      this.refreshNode(node);
    }
  }

  /** 缓存数据被命中，将数据移动到链表尾部 */
  private refreshNode(node: LinkedListNode<K, V>) {
    if (node === this.tail) return;
    this.removeNode(node);
    this.addNode(node);
  }

  /** 删除节点 */
  private removeNode(node: LinkedListNode<K, V>): K {
    if (node === this.tail) {
      // 尾节点
      this.tail = this.tail.prev;
    } else if (node === this.head) {
      // 头节点
      this.head = this.head.next;
    } else {
      // 中间节点
      node.prev!.next = node.next;
      node.next!.prev = node.prev;
    }
    return node.key;
  }

  /**
   * 这里向尾部追加节点
   * @param node
   */
  private addNode(node: LinkedListNode<K, V>) {
    if (this.tail) {
      this.tail.next = node;
      node.prev = this.tail;
    }
    this.tail = node;
    if (this.head === null) {
      this.head = node;
    }
    // 消除之前的节点的下一个引用对象,防止无限循环
    node.next = null;
  }
}
```

测试代码
```ts
const cache = new LRUCache<string, string>(3);
cache.put("key1", "data1");
cache.put("key2", "data2");
cache.put("key3", "data3");
cache.put("key4", "data4");
cache.put("key5", "data5");

console.log(cache);
```
本文地址：
- https://confluence.uuyang.cn/universal/algorithm/faq/lru.html

参考
- https://github.com/lcp-code/code-base/blob/main/typescript/06_linkedlist/LRUCache.ts
- https://blog.csdn.net/weixin_41231928/article/details/120593579


相关文章推荐
- [js数据类型判断的几种方式](../../data-structure/faq/get-type.md)
- [手写debounce、throttle](../../data-structure/faq/debounce-throttle.md)
- [c、c++、java、go、python、javascript等各语言特性，薪资分布](../../../universal/lang/lang-feature.md)
