---
title: VScode 插件路径修改
head:
  - - meta
    - name: description
      content: vscode自定义插件安装位置，VSCode如何修改扩展默认的下载目录。
icon: config
order: 1
category:
  - 后端指北
  - 开发工具
  - vscode
  - VScode 插件路径修改
tag:
  - VScode 插件路径修改
---

vscode插件默认的安装位置是
```
C:\Users\用户名\.vscode\extensions
```
看着C盘空间越来越少，忍不了要把默认插件安装位置迁出C盘。有两种方式来修改默认路径，==推荐第一种，第二种有坑==

**第一种**：

用管理员身份打开cmd，执行如下命令。usename改成你自己的，extensions地址改成自己要放的目录。
格式：mklink /D 要link的地址  extensions地址

```
mklink /D "C:\Users\{username}\.vscode\extensions" "D:\programFiles\programSoftware\vscode-extensions"
```
划重点：
C:\Users\{username}\.vscode\extensions不能已存在，否则link不成功。

![](https://oss.uuyang.cn/confluence/extensions-path1.png)
执行后效果如此，则已生效。

![](https://oss.uuyang.cn/confluence/extensions-path5.png)

这样你就可以在**多处使用**

#### 直接快捷键使用
![](https://oss.uuyang.cn/confluence/extensions-path2.png)
#### 右键打开使用
![](https://oss.uuyang.cn/confluence/extensions-path3.png)

**第二种**：

找到 vscode的快捷方式的图标，将目标 加入

--extensions-dir "D:\programFiles\programSoftware\vscode-extensions"

![](https://oss.uuyang.cn/confluence/extensions-path4.png)

==缺点就是你只能用 直接快捷键 使用，否则无效。==
#### 直接快捷键使用
![](https://oss.uuyang.cn/confluence/extensions-path2.png)