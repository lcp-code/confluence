---
title: 简单算法题
head:
  - - meta
    - name: description
      content: 简单算法题、数组拍平、数组去重、最小栈、获取随机整数、随机发红包、爬楼梯。
icon: config
order: 1
category:
  - 算法
  - 简单算法题
tag:
  - 简单算法题
---

简单算法题一句话总结

### **数组拍平**
```js
// 数组拍平：项为数组的递归拍平再连接，不为数组的直接push
const flatArr = (arr) => {
  let newArr = [];
  if (Array.isArray(arr)) {
    arr.forEach((item) => {
      if (Array.isArray(item)) {
        newArr.push(...flatArr(item));
      } else {
        newArr.push(item);
      }
    });
  }
  return newArr;
};
const arr = [22, [1, 2, [44, 55]], 33];
console.log("flatArr", flatArr(arr));
```

### **数组去重**
```js
// 数组去重：字典去重
const uniq = (arr) => {
  const mapDict = {};
  const newArr = [];
  if (Array.isArray(arr)) {
    arr.forEach((item) => {
      if (!mapDict[item]) {
        mapDict[item] = 1;
        newArr.push(item);
      }
    });
  }
  return newArr;
};

const arr = [22, 1, 1, 3, 4, 3, 33];
console.log(uniq(arr));
```

### **最小栈**
```js
// 最小栈：双栈分别存正常值和最小值
class MinStack {
  stack = [];
  minStack = [Infinity];
  push = (value) => {
    this.stack.push(value);
    this.minStack.push(
      Math.min(this.minStack[this.minStack.length - 1], value)
    );
  };
  pop = () => {
    this.stack.pop();
    this.minStack.pop();
  };
  top = () => {
    return this.stack[this.stack.length - 1];
  };
  getMin = () => {
    return this.minStack[this.minStack.length - 1];
  };
}

const stack = new MinStack();
stack.push(1);
stack.push(2);
stack.push(3);
stack.pop();
console.log(stack.getMin());
console.log(stack.top());
```

### **获取随机整数**
```js
// 获取随机整数: 范围内最大值减最小值，随机后再加上最小值
const getRandomInt = (num, range) => {
  const arr = [];
  for (let i = 0; i < num; i++) {
    const random = Math.random();
    const value = Math.floor(random * (range[1] - range[0])) + range[0];
    arr.push(value);
  }
  return arr;
};
```

### **随机发红包**
```js
// 随机发红包：循环一轮，在剩余的钱和数量中随机，减钱减数量，所有随机金额存入数组，最后剩余钱不随机直接放入。
// 公式： 每次抢到金额 = 随机区间(0, M/N)；【M：剩余金额，N：剩余红包个数】
const divide = (money, count) => {
  let leftMoney = money;
  let leftCount = count;
  const packetArr = [];
  for (let i = 0; i < count - 1; i++) {
    let currentMoney = parseFloat(
      (Math.random() * leftMoney) / leftCount + 0.01
    ).toFixed(2);
    packetArr.push(currentMoney);
    leftMoney -= currentMoney;
    leftCount--;
  }
  packetArr.push(parseFloat(leftMoney).toFixed(2));
  return packetArr;
};

console.log(
  "divide",
  divide(100, 10),
  divide(100, 10).reduce((pre, cur) => Number(pre) + Number(cur))
);
```

### **爬楼梯**
```js
// 爬楼梯：循环一轮，第三项等前两项之和
const climbStairs = (n) => {
  let p = 0,
    q = 0;
  r = 1;
  for (let i = 1; i <= n; i++) {
    p = q;
    q = r;
    r = p + q;
  }
  return r;
};
console.log(climbStairs(10));
```

```js
```