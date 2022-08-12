---
# 这是文章的标题
title: 语言特性
head:
  - - meta
    - name: description
      content: 语言特性 AOT静态语言C、C++、Java、C#、Go、Rust、Objective-C、Swift、Dart，JIT动态语言，Python、PHP、Ruby、Lua、JavaScript、Dart，各类语言薪资分布图。
# 原创申明
isOriginal: true
# 这是页面的图标
icon: page
# 这是侧边栏的顺序
order: 1
# 设置作者
author: 低码汇
# 设置写作时间
date: 2022-06-10
# 一个页面可以有多个分类
category:
  - 计算机通用
# 一个页面可以有多个标签
tag:
  - 语言特性
# 此页面会在文章列表置顶
sticky: true
# 此页面会出现在文章收藏中
star: true
---

##### **计算机语言（Computer Language）**
指用于人与计算机之间通讯的语言。计算机系统的指令通过一种语言传达给机器。计算机语言等级划分为
- **机器语言**  是指一台计算机全部的指令集合，最终变成一串串由"0"和"1"组成的指令序列交由计算机执行。因此程序就是一个个的二进制文件。机器语言，是第一代计算机语言。
- **汇编语言**  作为机器语言的改进，用一些简洁的英文字母、符号串来替代一个特定的指令的二进制串，比如，用"ADD"代表加法，"MOV"代表数据传递等等。负责将这些符号翻译成二进制数的机器语言，这种翻译程序被称为**汇编程序**。其是第二代计算机语言。
- **高级语言**  高级语言主要是相对于汇编语言而言，它并不是特指某一种具体的语言，而是包括了很多编程语言。高级语言源程序可以用 **解释JIT（Just-in-time）**、**编译AOT（Ahead of time）** 两种方式执行，通常用后一种。

##### **编程语言的发展**
机器语言 -> 汇编语言 –> 面向过程语言(高级语言) -> 面向对象语言(高级语言)

> 😱再别吐槽api工程师了，你也好不到哪去，牛逼就写汇编或者机器语言，不服来干。干不过🤣？来，高级语言十八般武艺借你。
::: tip

**高级语言**
- 大量不常用的高级语言。。。
- **AOT静态语言** C、C++、Java、C#、Go、Rust、Objective-C、Swift、Dart
- **JIT动态语言** Python、PHP、Ruby、Lua、JavaScript、Dart
:::

在C语言诞生以前，系统软件主要是用汇编语言编写的，但一般的高级语言又难以实现对计算机硬件的直接操作（这正是汇编语言的优势），于是人们盼望有一种兼有汇编语言和高级语言特性的新语言——**C语言**🎉诞生。



当你编程时你在围绕什么打转？见 [语言通用性理念](./The-idea-of-​​language-universality.md)

##### **主要编程语言及用途一览**

| 编程语言                                                              | 主要用途                                                                                                                                                                                                                                                                        | github资源                                   |
| --------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------- |
| 汇编语言                                                              | 汇编语言是一门低级语言，它的执行效率非常高，但是开发效率非常，适用于效率和实时性要求极高的场景。主要用于操作系统内核、驱动、仪器仪表、工业控制等开发                                                                                                                            |
| C                                                                     | C语言是Dennis Ritchie在七十年代创建的面向过程语言, 主要用于操作系统，软件开发，硬件。                                                                                                                                                                                           | [资源](https://github.com/topics/c)          |
| [C++](https://isocpp.org/)                                            | C++ 由 Bjarne Stroustrup 于 1979 年在贝尔实验室开始设计开发的，在C语言的基础上发展起来的的高级语言。C++ 包含了C语言的所有内容。主要用于PC软件开发、Linux开发、游戏开发、单片机和嵌入式系统。                                                                                    | [资源](https://github.com/topics/cpp)        |
| [Java](https://www.java.com/zh-CN)                                    | Java 是由 Sun Microsystems 公司于 1995 年 5 月开发。由 C++发展而来的，保留了 C++ 的大部分内容，其编程方式类似于 C++，是一门通用型的语言。主要用于服务端、Android、视频游戏、PC软件、大数据领域开发。                                                                            | [资源](https://github.com/topics/java)       |
| C#                                                                    | C# 是微软开发的用来对抗 Java 的一门语言，实现机制和 Java 类似。主要用于 Windows 平台的软件开发，以及少量的网站后台开发。                                                                                                                                                        | [资源](https://github.com/topics/csharp)     |
| [Go](https://go.dev/)                                                 | Go语言是 2009 年由 Google 发布的一款编程语言，是生产力与性能结合得最好的语言。主要用于服务器端的编程，尤其适用于高性能分布式系统领域，它提供了海量并行的支持。                                                                                                                  | [资源](https://github.com/topics/go)         |
|                                                                       |
| [Rust](https://www.rust-lang.org/zh-CN)                               | Rust 语言由 Mozilla 开发，最早发布于 2014 年 9 月。少有的兼顾开发效率和执行效率的语言。用于构建工具、web应用、服务器、嵌入式开发。                                                                                                                                              | [资源](https://github.com/topics/rust)       |
| Objective-C Swift                                                     | Objective-C 和 Swift 都只能用于苹果产品的开发，包括 Mac、MacBook、iPhone、iPad、iWatch 等。                                                                                                                                                                                     | [资源](https://github.com/topics/swift)      |
| [Dart](https://www.dartcn.com/)                                       | Dart由Google主导开发，于2011年10月公开，目标在于成为下一代结构化Web开发语言。 主要用于为Android、iOS、Web、Windows、macOS、Linux Desktop、Google Fuchsia开发应用。                                                                                                              | [资源](https://github.com/topics/dart)       |
| [Python](https://www.python.org/)                                     | Python 是一门通用型的语言，主要用于系统运维、网站后台开发、视频游戏、数据分析、人工智能、云计算等领域。                                                                                                                                                                         | [资源](https://github.com/topics/python)     |
| [PHP](https://www.php.cn/)                                            | PHP 是一种服务器端脚本语言，语法借鉴吸收C语言、Java和Perl等流行计算机语言的特点。主要用于网站后台程序、包含数据库功能的页面开发。                                                                                                                                               | [资源](https://github.com/topics/php)        |
| [Ruby](https://www.ruby-lang.org/zh_cn/)                              | Ruby 是一种面向对象、指令式、函数式、动态的服务器端脚本语言，在20世纪90年代中期由日本计算机科学家松本行弘（Matz）设计并开发。主要用于web开发。                                                                                                                                  | [资源](https://github.com/topics/ruby)       |
| [Lua](http://www.lua.org/map.html)                                    | Lua 是1993年由罗伯托·耶鲁萨林斯希、Luiz Henrique de Figueiredo和Waldemar Celes用标准C语言编写的轻量小巧的脚本语言。主要用于嵌入应用程序中，为其提供灵活的扩展和定制功能。如游戏开发、安全系统、独立应用脚本、Web 应用脚本等，应用广泛。                                         | [资源](https://github.com/topics/lua)        |
| [JavaScript](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript) | JavaScript 是1993年由网景创建，后由ECMA（欧洲计算机制造商协会）标准化。主要用于浏览器上运行, Node.js问世后，让JavaScript也具有了一定的服务器功能，同时促使了web生态的繁荣。                                                                                                     | [资源](https://github.com/topics/javascript) |
| [Node.js](http://nodejs.cn/)并非一门语言                              | Node.js是2009年由美国软件工程师瑞安·达尔（Ryan Dahl）开发。采用 Google 开发的 V8 执行代码，以单线程执行，使用事件驱动、非阻塞和异步输入输出模型等技术来提高性能，既可以支持数以万计的并发连线，又不会因多线程本身的特点而带来麻烦。Node.js主要用于高并发服务开发和web生态基座。 | [资源](https://github.com/topics/nodejs)     |

> 注释：V8于2008年由Google开源，用C++写成，它将JavaScript源代码编译成本地机器码而不是解释执行。

##### **各类语言薪资分布图**
![](https://oss.uuyang.cn/confluence%2F%E5%90%84%E7%B1%BB%E8%AF%AD%E8%A8%80%E8%96%AA%E8%B5%84%E5%88%86%E5%B8%83%E5%9B%BE.png)

本文地址：
- https://confluence.uuyang.cn/universal/lang/lang-feature.html
##### 参考
* https://zh.wikipedia.org/wiki/Dart
* https://baike.baidu.com/item/%E8%AE%A1%E7%AE%97%E6%9C%BA%E8%AF%AD%E8%A8%80/4456504?fr=aladdin
* https://www.sohu.com/a/253166723_99978040
* https://www.dartcn.com/
* http://c.biancheng.net/view/1714.html

推荐阅读
- [各语言数据结构与算法实操](https://github.com/lcp-code/code-base)