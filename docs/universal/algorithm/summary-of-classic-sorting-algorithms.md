---
title: 经典排序算法总结
head:
  - - meta
    - name: description
      content: 经典排序算法总结、经典排序算法一句话总结、冒泡排序、选择排序、插入排序、希尔排序、归并排序、快速排序。
icon: config
order: 2
category:
  - 算法
  - 经典排序算法一句话总结
tag:
  - 经典排序算法一句话总结
---

经典排序算法一句话总结

### **冒泡排序**
```js
// 冒泡排序  时间复杂度O(n^2)：两轮循环，未冒泡的j与j+1交换冒泡
const bubbleSort = (arr) => {
  if (arr.length <= 1) return;
  for (let i = 0; i < arr.length; i++) {
    let hasChange = false;
    for (let j = 0; j < arr.length - i - 1; j++) {
      if (arr[j] > arr[j + 1]) {
        // j 和 j+1交换
        const temp = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = temp;
        hasChange = true;
      }
    }
    // 如果false 说明所有元素已经到位
    if (!hasChange) break;
  }
  return arr;
};
const test = [4, 5, 6, 3, 2, 1];
console.log("bubbleSort", bubbleSort(test));
```

### **选择排序**
```js
// 选择排序 时间复杂度O(n^2)：两轮循环，找到最小值，剩余项的当前值与最小值交换
const selectionSort = (arr) => {
  if (arr.length <= 1) return;
  // 需要注意这里的边界, 因为需要在内层进行 i+1后的循环，所以外层需要 数组长度-1
  for (let i = 0; i < arr.length - 1; i++) {
    let minIndex = i;
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[j] < arr[minIndex]) {
        minIndex = j; // 找到整个数组的最小值
      }
    }
    // i 和 minIndex交换
    const temp = arr[i];
    arr[i] = arr[minIndex];
    arr[minIndex] = temp;
  }
  return arr;
};

const testSelect = [4, 8, 6, 3, 2, 1, 0, 12];
console.log("selectionSort", selectionSort(testSelect));
```

### **插入排序**
```js
// 插入排序 时间复杂度O(n^2)  两轮循环，对未排序的从后向前扫描，找到大于的新元素，将该元素移到下一位置
const insertSort = (arr) => {
  for (i = 1; i < arr.length; i++) {
    const temp = arr[i];
    let j = i - 1;
    for (j; j >= 0; j--) {
      if (arr[j] > temp) {
        arr[j + 1] = arr[j];
      } else {
        break;
      }
    }
    arr[j + 1] = temp;
  }
  return arr;
};

const testSort = [4, 1, 6, 3, 2, 1];
console.log("insertSort", insertSort(testSort));
```

### **希尔排序**
利用插入排序的两大特性
1. 当待排序的原序列中大多数元素都已有序的情况下，此时进行的元素比较和移动的次数较少；
2. 当原序列的长度很小时，即便它的所有元素都是无序的，此时进行的元素比较和移动的次数还是很少。
是简单插入排序的改进版，通过分组+插入
```js
// 希尔排序：时间复杂度O(n^1.3)  按3动态定义间隔序列，在每个序列的间隔gap到len之间循环比较间隔的前后数据比较，如果大于则相互交换
const shellSort = (arr) => {
  let len = arr.length,
    gap = 1;
  // 按3动态定义间隔序列
  while (gap < len / 3) {
    gap = gap * 3 + 1;
  }
  for (; gap > 0; gap = Math.floor(gap / 3)) {
    // 在每个序列的间隔gap到len之间循环比较
    for (let i = gap; i < len; i++) {
      const temp = arr[i];
      let j = i - gap;
      // 间隔的前后数据比较，如果大于则相互交换
      for (; j >= 0 && arr[j] > temp; j -= gap) {
        arr[j + gap] = arr[j];
      }
      arr[j + gap] = temp;
    }
  }
  return arr;
};
const arr = [2, 113, 1, 4, 5, 1];
console.log("shellSort", shellSort(arr));
```

### **归并排序**
```js
// 判断2个数组中元素大小，依次插入数组，合并多余数组
const mergeArr = (left, right) => {
  let temp = [];
  let leftIndex = 0;
  let rightIndex = 0;
  // 判断2个数组中元素大小，依次插入数组
  while (leftIndex < left.length && rightIndex < right.length) {
    if (left[leftIndex] <= right[rightIndex]) {
      temp.push(left[leftIndex]);
      leftIndex++;
    } else {
      temp.push(right[rightIndex]);
      rightIndex++;
    }
  }
  // 合并 多余数组
  return temp.concat(left.slice(leftIndex)).concat(right.slice(rightIndex));
};
// 归并排序 时间复杂度O(nlogn)  2-路归并, 分成2个子序列分别用归并排序，再把排好的合并成一个,
const mergeSort = (arr) => {
  if (arr.length <= 1) return arr;
  const middle = Math.floor(arr.length / 2);
  const left = arr.slice(0, middle);
  const right = arr.slice(middle);
  // 递归 分解 合并
  return mergeArr(mergeSort(left), mergeSort(right));
};
console.log("mergeSort", mergeSort(testSort));
```

### **快速排序**
```js
const swap = (arr, i, j) => {
  const temp = arr[i];
  arr[i] = arr[j];
  arr[j] = temp;
};
// 从左边第一个开始作为基准值，所有比基准值小的放基准前面，大的放后面
const partition = (arr, left, right) => {
  const pivot = left;
  let index = pivot + 1;
  for (i = index; i <= right; i++) {
    if (arr[i] < arr[pivot]) {
      swap(arr, i, index);
      index++;
    }
  }
  swap(arr, pivot, index - 1);
  return index - 1;
};

// 快速排序 时间复杂度O(nlogn): 分为两个子串分别递归快排，从左边第一个开始作为基准值，所有比基准值小的放基准前面，大的放后面
const quickSort = (arr, left, right) => {
  let len = arr.length;
  let partitionIndex;
  left = typeof left === "number" ? left : 0;
  right = typeof right === "number" ? right : len - 1;
  if (left < right) {
    partitionIndex = partition(arr, left, right);
    quickSort(arr, left, partitionIndex - 1);
    quickSort(arr, partitionIndex + 1, right);
  }
};

const arr = [2, 113, 1, 4, 5, 1];
quickSort(arr);
console.log("quickSort", arr);
```