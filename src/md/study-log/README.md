---
title: 实习日志 整理中，假期完结
index: false
icon: laptop-code
category:
  - 自我介绍
  - 专业技能
  - 项目经验
---
## 二维码检测功能

- 核心技术：图像检测算法、模型量化、模型推理、二维码解码
- 项目描述：首先使用图像检测算法识别二维码位置，然后使用Quire库进行解码。
    - 检测模型使用mmdet的RTMDet-tiny
    - 将模型通过linger量化 和 thinker推理，得到100kb级别的模型
    - 使用C/C++语言编写算法接口和调用，然后再整合Quire库进行二维码解码
    - [方案细节记录](https://smart-brain.feishu.cn/docx/QtcXdvoQToKLd9xCT7BcTX4XnSb?from=from_copylink)


[//]: # (- [day01.md]&#40;day01.md&#41;)