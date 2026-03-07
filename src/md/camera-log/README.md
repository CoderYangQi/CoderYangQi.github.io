---
title: 钙荧光显微成像项目 整理中，将在假期完结
index: false
icon: laptop-code
category:
  - 自我介绍
  - 专业技能
  - 项目经验
---
## 钙荧光显微成像应用

- 核心技术：Ardunio、FPGA、SCARA机器臂、视频运动追踪算法
- 项目描述：利用合作者开发的[TINIscope头戴设备](https://academic.oup.com/nsr/article/doi/10.1093/nsr/nwad294/7438875)观察小鼠交活动时的脑区。为了方便小鼠大范围的活动，需要使用将头戴设备的连接线和SCARA机器臂绑定，并跟随小鼠移动，同时记录下小鼠活动视频和脑区钙荧光成像的视频，进行行为学分析解释。
- 核心职责：
    - 部署SLEAP算法，实现对视频流的Motion Tracking
    - 根据小鼠位置信息，使用Arduino控制SCARA机器臂的移动，提升头戴设备悬挂着的数据线的移动范围
