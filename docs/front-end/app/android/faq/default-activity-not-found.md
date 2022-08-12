---
title: android Studio项目运行时报错“Could not identify launch activity, Default Activity not found”
head:
  - - meta
    - name: description
      content: android Studio项目运行时报错“Could not identify launch activity, Default Activity not found”。
icon: config
order: 1
category:
  - android
  - android常见问题
  - 运行时报错
tag:
  - 运行时报错
---

Android Studio中出现Could not identify launch activity: Default Activity not found Error while Launching activity Failed
意为无法识别启动活动：未找到默认活动 启动活动时出错

检查AndroidManifest.xml中是否有如下设置。MainActivity为应用的初始场景。

```xml
  <application
    android:allowBackup="true"
    android:icon="@mipmap/ic_launcher"
    android:label="@string/app_name"
    android:supportsRtl="true"
    android:theme="@android:style/Theme.DeviceDefault">
    <activity
      android:name=".MainActivity"
      android:label="@string/app_name">
      <intent-filter>
        <action android:name="android.intent.action.MAIN" />
          <category android:name="android.intent.category.LAUNCHER" />
        </intent-filter>
    </activity>
  </application>
```

本文地址：
- https://confluence.uuyang.cn/front-end/app/android/faq/default-activity-not-found.html

参考
- https://www.cnblogs.com/mbp-study/p/5318459.html


相关文章推荐
- [js数据类型判断的几种方式](../../data-structure/faq/get-type.md)
- [手写debounce、throttle](../../data-structure/faq/debounce-throttle.md)
- [c、c++、java、go、python、javascript等各语言特性，薪资分布](../../../universal/lang/lang-feature.md)
