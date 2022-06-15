---
# 这是文章的标题
title: 如何讲解一门技术
head:
  - - meta
    - name: description
      content: 如何讲解一门技术
# 这是页面的图标
icon: page
# 这是侧边栏的顺序
order: 2
# 设置作者
author: 低码汇
# 设置写作时间
date: 2022-06-10
# 一个页面可以有多个分类
category:
  - 计算机通用
# 一个页面可以有多个标签
tag:
  - 如何讲解一门技术
# 此页面会在文章列表置顶
sticky: true
# 此页面会出现在文章收藏中
star: true
---

#### **技术讲解万能公式**：
1. 如果是英文词汇就先翻译成中文
2. 一句话描述该技术的用途
3. 描述该技术的核心概念或运作流程
4. 口述该技术的代码书写思路
5. 该技术的优点
6. 该技术的缺点
7. 如何弥补缺点

#### **以AJAX的原理为例**：
请问 AJAX 的原理是什么？
1. AJAX Asynchronous JavaScript and XML就是异步的 JS 和 XML 的缩写，目前我们一般用 JSON 代替 XML。
2. AJAX 主要用于在不刷新页面的情况下向浏览器发起请求并接受响应，最后局部更新页面。
3. 该技术最核心概念是 XMLHttpRequest 对象，该对象可发起 HTTP 请求，我们可以监听其 readystate 的变化获得响应。
4. 具体代码是这样的 xxxxxxxx
5. 优点刚才说了，无刷新请求。
6. 缺点是被浏览器限制不能跨域。
7. 想要跨越就要用到 JSONP 或 CORS 了。

