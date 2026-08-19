---
title: 个人简历
index: false
icon: laptop-code
category:
  - 自我介绍
  - 专业技能
  - 项目经验
---

<img src="/yangqi2.jpg" alt="杨琦个人照片" width="200"/>

> 英文版：[Resume in English](/en/md/resume.html)

## 个人信息

- 姓名：杨琦
- 电话：13672221869
- 邮箱：yangqiustc@mail.ustc.edu.cn
- 当前工作：宝钢中央研究院｜自动化助理研究员（2025.07 至今）

## 教育背景

- **中国科学技术大学｜软件工程硕士**
  - **时间**：2022.09–2025.06
  - **研究方向**：三维显微图像配准、重构与软件开发
  - **主要课程**：C/C++、Java、算法导论、高级软件工程、高级计算机网络

- **安徽大学｜电子信息工程学士**
  - **时间**：2018.09–2022.06
  - **主要课程**：信号与系统、单片机原理、数字信号处理、数字图像处理

## 学术论文

### 1. [High-speed mapping of whole-mouse peripheral nerves at subcellular resolution](https://doi.org/10.1016/j.cell.2025.06.011)

- **作者**：Mei-Yu Shi<sup>†</sup>, Yuchen Yao<sup>†</sup>, Miao Wang<sup>†</sup>, **Qi Yang**<sup>†</sup>, Lufeng Ding, Rui Li, Yuanyuan Li, Haimeng Huang, Chao-Yu Yang, Zhao Zhou, Zhenxiang Zhu, Pengjie Wen, Fangling Dai, Xiaohui Zeng, Ke-Ming Zhang, Yuhong Guo, Zi-An Sun, Huanhuan Xia, Zhenhua Ren, Yusuf Ozgur Cakmak, Ming Zhang, Fuqiang Xu, Lei Qu, Qingyuan Zhu, Pak-Ming Lau, Cheng Xu, Guo-Qiang Bi
- **期刊**：*Cell*, 2025, 188(14): 3897–3915.e20
- **作者身份**：共同第一作者（Co-first Author / Equal Contribution）
- **个人贡献**：主要负责三维显微图像配准与重构方法的实现及代码开发，参与构建大规模显微图像处理与三维重构流程，为 TB 级全鼠周围神经数据的高精度重构提供算法与工程支持。

### 2. [Extraction of soybean planting area based on feature fusion technology of multi-source low altitude unmanned aerial vehicle images](https://doi.org/10.1016/j.ecoinf.2022.101715)

- **作者**：**Qi Yang**, Bao She, Linsheng Huang, Yuying Yang, Gan Zhang, Mai Zhang, Qi Hong, Dongyan Zhang
- **期刊**：*Ecological Informatics*, 2022, 70: 101715
- **作者身份**：第一作者（First Author）
- **个人贡献**：负责研究方案设计、算法与软件实现及论文初稿撰写；构建基于植被指数特征融合与 U-Net 语义分割的大豆种植区域提取方法，并完成不同传感器与算法方案的对比实验。

## 荣誉奖项

- [**宝钢优秀学生特等奖**](https://dy.ahu.edu.cn/2021/1220/c11063a277406/page.htm)
- **国家奖学金**
- “互联网+”大学生创新创业大赛省级银奖
- “挑战杯”创业计划大赛省级银奖
- iCAN 国际创新创业大赛国家级三等奖

## 专业技能

- 熟练使用 `Python`、`C/C++`、`Java`，具备算法实现、工程开发及跨语言接口联调能力。
- 熟练使用 `PyTorch`、`TensorFlow`，具备目标检测、图像分割、运动追踪、图像配准及自监督学习等算法开发经验。
- 熟悉 `STM32`、`FreeRTOS`、`Arduino`、树莓派等嵌入式与软硬件协同开发，具备实时任务设计、传感器集成、`PID` 运动控制、无线通信及 `C/C++` 系统开发经验。
- 熟悉 `Docker`、Linux 常用命令及 `Nginx` 反向代理、负载均衡、动静分离等部署技术。
- 熟练使用 `PyCharm`、`IntelliJ IDEA`、`Visual Studio Code`、`Git`、`Maven` 等开发工具。

## 实习经历

### 科大讯飞｜IoT 助理工程师实习生

- 面向 `CSK6` 芯片开发二维码检测与解码接口，完成检测模型推理、算法接口封装及 `C/C++` 工程集成。
- 打通模型量化、端侧推理、二维码定位与解码的完整处理链路。

### 商汤科技｜算法工程师实习生

- 参与双目棋子目标检测与工程化部署，负责 `MMYOLO` 框架下 `YOLOv8` 模型的训练、推理与工程化改造。
- 完成模型轻量化、`ONNX` 推理适配及 `C++` 工程部署，并将模型部署至 `RV1126` 平台。

## 项目经验

### 1. 三维显微图像重构算法开发

- **技术栈**：`Python`、`PyQt`、`Elastix`、`PyTorch`、`B-Spline FFD`、`3D Swin-Transformer`
- **项目概述**：面向 TB 级三维显微图像数据，解决切片未对齐、光学形变及片间非刚性配准等问题，构建覆盖片内拼接、通道对齐、片间配准和三维可视化的完整重构流程。
- **核心工作**：
  - 结合 `Elastix` 与自研 `PyTorch` 配准优化算法实现非刚性配准，支撑大尺度生物样本的三维图像重构。
  - 设计双级联 `DUST（Dual U-Net with Swin-Transformer）` 模型，逐级优化形变场，提升配准精度与稳定性。
  - 使用 `PyQt` 开发三维重构软件工具，推动大规模图像处理流程工程化落地。
- **项目成果**：
  - 开发支持 TB 级图像数据处理的高效三维重构工具。[重构算法代码](https://github.com/CoderYangQi/Whole-body_Reconstruction)
  - 以共同第一作者身份发表 *Cell* 论文，主要负责相关方法实现与代码开发。
  - 获得发明专利授权：三维生物样本显微图像重构方法（`CN118115694A`）。

### 2. 钙荧光显微成像随动系统

- **技术栈**：`Arduino`、`SCARA` 机械臂、运动控制器、`DeepLabCut`、视频运动追踪
- **项目概述**：面向小鼠大范围自由活动场景下的钙荧光成像，搭建头戴成像设备、数据线解旋装置与机械臂联动系统，同步采集行为视频和脑区成像数据，为后续行为学分析提供数据基础。
- **核心工作**：
  - 部署 `DeepLabCut` 目标追踪算法，实现视频流中的实时运动追踪。[GitHub 代码](https://github.com/CoderYangQi/Live_Tracking)；[Gitee 代码](https://gitee.com/yqustc/MotionDetection)
  - 根据小鼠位置信息，使用 `Arduino` 控制电机运动与数据线解旋，扩大头戴设备支持的有效活动范围。
  - 融合钙荧光成像信号与行为关键点信息，开展小鼠行为编码与分类分析。

### 3. 四旋翼无人机飞控与遥控系统

- **技术栈**：`STM32F103C8T6`、`FreeRTOS`、`MPU6050`、`VL53L1X`、串级 `PID`、`SI24R1`、`OLED`、`C`
- **项目概述**：完成一套由飞行端与手持遥控端组成的四旋翼嵌入式工程实践，覆盖姿态采集与解算、电机控制、激光定高、无线指令、安全状态管理以及遥控输入与显示。
- **核心工作**：
  - 实现 `6 ms` 周期（约 `166.7 Hz`）的飞控闭环，完成 MPU6050 数据采集与滤波、四元数姿态解算、姿态角/角速度串级 `PID`、四电机混控及 `18 kHz` PWM 输出。
  - 集成 `VL53L1X` 激光测距与定高控制，构建待机、正常飞行、定高和失联保护等飞行状态；在无线失联后执行电机降速保护。
  - 基于 `SI24R1` 构建 `2.4 GHz` 控制链路，以 `6 ms` 周期发送固定 `17` 字节控制帧；通过 `ADC + DMA` 采集双摇杆，并实现按键校准、模式切换及 OLED 控制量显示。
  - 使用 `FreeRTOS` 将飞控、通信、传感器、按键、摇杆、显示和电源管理组织为不同优先级的实时任务。

### 4. CSK6 端侧二维码检测与解码

- **技术栈**：`RTMDet-tiny`、`Linger`、`Thinker`、`C/C++`、`Quirc`
- **项目概述**：面向 `CSK6` 芯片构建端侧二维码检测与解码方案，利用目标检测模型定位二维码区域，并结合 `Quirc` 完成解码。
- **核心工作**：
  - 选用 `MMDetection` 中的 `RTMDet-tiny` 作为二维码检测模型。
  - 通过 `Linger` 完成模型量化，并使用 `Thinker` 进行端侧推理部署，将模型压缩至约 `100 KB`。
  - 使用 `C/C++` 完成算法接口封装与工程集成，打通二维码检测、定位与解码链路。
- **方案记录**：[方案细节记录](https://smart-brain.feishu.cn/docx/QtcXdvoQToKLd9xCT7BcTX4XnSb?from=from_copylink)

### 5. 无人机影像大豆种植面积估算

- **技术栈**：图像语义分割、植被指数融合、`U-Net`
- **项目概述**：构建基于植被指数特征融合与改进 `U-Net` 的语义分割方法，从多源低空无人机影像中提取大豆种植区域并估算种植面积。
- **项目成果**：以第一作者身份在 *Ecological Informatics* 发表论文。[查看论文](https://doi.org/10.1016/j.ecoinf.2022.101715)
