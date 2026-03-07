---
title: 个人简历
index: false
icon: laptop-code
category:
  - 自我介绍
  - 专业技能
  - 项目经验
---

[//]: # (![by iPhone13 pro 原图]&#40;/yangqi.jpg&#41;)
<img src="/yangqi2.jpg" alt="by iPhone13 pro 原图" width="200"/>

> 英文版: [Resume in English](/en/md/resume.html)

## 个人信息

- 姓名：杨琦
- 电话：13672221869
- 邮箱：yangqiustc@mail.ustc.edu.cn
- 政治面貌：中共党员

[//]: # (- Github：https://github.com/fuzhengwei)

[//]: # (- 开源项目：[vo2dto]&#40;https://bugstack.cn/md/product/idea-plugin/vo2dto.html&#41; - IDEA Plugin 自动转换对象插件，5.4k 下载使用)

## 教育背景

- **中国科学技术大学 | 软件工程硕士**
  - **毕业时间**：2025.07
  - **研究方向**：三维显微图像配准、重构与软件开发
  - **主要课程**：C/C++、Java、算法导论、高级软件工程、高级计算机网络

- **安徽大学 | 电子信息工程学士**
  - **时间**：2018.09 ~ 2022.07
  - **主要课程**：信号与系统、单片机原理、数字信号处理、数字图像处理

## 荣誉奖项

- [**宝钢优秀学生特等奖**](https://dy.ahu.edu.cn/2021/1220/c11063a277406/page.htm)
- **国家奖学金**
- “互联网+”创新创业大学省级银奖
- “挑战杯”创业计划大赛省级银奖
- iCAN国际创新创业大赛国家级三等奖

## 专业技能

- 熟练使用 `Python`、`C/C++`、`Java`，具备算法实现、工程开发与跨语言接口联调能力。
- 熟练使用 `PyTorch`、`TensorFlow`，具备图像检测、图像分割、运动追踪、图像配准、自监督学习等算法开发经验。
- 熟悉 `Arduino`、树莓派等软硬件协同开发，能够使用 `C/C++` 完成设备控制、数据处理及与上位机系统对接。
- 深入理解 `Spring Boot`、常见 Java 设计模式与 `DDD` 领域驱动设计，能够构建可扩展、易维护的后端服务。
- 熟悉 `Docker`、Linux 常用命令以及 `Nginx` 反向代理、负载均衡、动静分离等部署能力。
- 熟练使用 `PyCharm`、`IntelliJ IDEA`、`Visual Studio Code`、`Git`、`Maven` 等开发工具。

## 工作经历（实习）

### 科大讯飞

- 岗位：IoT 助理工程师实习生
- 工作内容：基于 `CSK6` 芯片开发二维码检测与解码接口，完成检测模型推理、算法接口封装及 `C/C++` 工程集成。

### 商汤科技

- 岗位：算法工程师实习生
- 项目：双目棋子目标检测与工程化部署
- 核心技术：目标检测、模型轻量化、`ONNX` 推理、`C++` 工程化部署
- 工作内容：负责 `MMYOLOv8` 模型训练、推理与工程化改造，并部署到 `RV1126` 平台。

## 项目经验

### 1. 三维显微图像重构算法开发

- 技术栈：`Python`、`PyQt`、`Elastix`、`PyTorch`、`B-Spline FFD`、`3D Swin-Transformer`
- 项目描述：
  - 面向 `TB` 级三维显微图像数据，解决切片间未对齐、光学形变和非刚性配准等问题，构建片内拼接、通道对齐、片间配准和三维可视化的完整重构流程。
- 核心工作：
  - 基于 `Elastix` 与自研 `PyTorch` 配准优化算法完成非刚性配准，实现大样本三维图像重构。
  - 迭代改进为双级联 `DUST (Dual U-Net with Swin-Transformer)` 模型，逐级优化形变场，提高配准精度与稳定性。
  - 使用 `PyQt` 开发重构软件工具，支持大规模图像处理流程落地。
- 项目成果：
  - 开发高效三维重构工具，支撑 `TB` 级图像数据处理。[重构算法代码](https://github.com/CoderYangQi/Whole-body_Reconstruction)
  - 以共同一作身份参与 ***Cell*** 期刊论文工作，负责代码与方法实现的核心贡献。[High-speed mapping of whole-mouse peripheral nerves at subcellular resolution](http://dx.doi.org/10.1016/j.cell.2025.06.011)
  - 发明专利已授权：三维生物样本显微图像重构方法（`CN118115694A`）

### 2. 钙荧光显微成像随动装置应用

- 技术栈：`Arduino`、`FPGA`、`SCARA` 机械臂、`SLEAP`、视频运动追踪
- 项目描述：为支持小鼠大范围自由活动场景下的钙荧光成像，搭建头戴设备、数据线解旋装置与机械臂联动系统，并同步采集行为视频与脑区成像数据，用于后续行为学分析。
- 核心职责：
  - 部署目标追踪算法，实现视频流 `Motion Tracking`。[GitHub代码](https://github.com/CoderYangQi/Live_Tracking)；[Gitee代码](https://gitee.com/yqustc/MotionDetection)
  - 基于小鼠位置信息使用 `Arduino` 控制电机移动与数据线解旋，扩大头戴设备的有效活动范围。
  - 结合钙荧光成像信号与行为 `KeyPoint` 信息，对小鼠行为进行编码与分类分析。

### 3. 二维码检测功能

- 技术栈：`RTMDet-tiny`、`Linger`、`Thinker`、`C/C++`、`Quirc`
- 项目描述：面向 `CSK6` 芯片场景，先使用图像检测算法定位二维码区域，再结合 `Quirc` 库完成解码。
- 核心工作：
  - 使用 `MMDetection` 的 `RTMDet-tiny` 作为二维码检测模型。
  - 通过 `Linger` 量化与 `Thinker` 推理部署，将模型压缩至约 `100KB` 级别。
  - 使用 `C/C++` 实现算法接口封装与工程集成，完成检测与解码链路打通。
- 方案记录：
  - [方案细节记录](https://smart-brain.feishu.cn/docx/QtcXdvoQToKLd9xCT7BcTX4XnSb?from=from_copylink)

### 4. UAV 大豆种植面积估算研究

- 技术栈：图像语义分割、植被指数融合、`U-Net`
- 项目描述：利用改进的 `U-Net` 算法对无人机融合图像进行语义分割，实现大豆种植面积估算。
- 项目成果：`SCI` 一作论文（IF 5.1），[Extraction of soybean planting area based on feature fusion technology of multi-source low altitude unmanned aerial vehicle images](https://doi.org/10.1016/j.ecoinf.2022.101715)

### 5. OpenAI 应用服务 - 辅助工作提效工具开发

- 技术栈：`Spring Boot`、`MyBatis`、`OKHttp3`、`OpenAI SDK/API`、`React`、`TypeScript`
- 项目描述：基于微服务与 `DDD` 架构设计 AI 应用服务，支持 `OpenAI SDK / API` 接入、公众号鉴权及前端应用对接。
- 核心工作：
  - 拆分 `OpenAI SDK`、`OpenAI API`、应用服务等模块，设计可配置化的场景接入方式。
  - 封装多模型调用、会话管理与后端服务接口，支撑不同业务场景快速集成。
  - 搭建 `React` 前端页面与后端服务联动，实现 AI 辅助工作提效的基础能力。
