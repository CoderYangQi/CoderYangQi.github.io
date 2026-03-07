---
title: Resume
index: false
icon: laptop-code
category:
  - About Me
  - Technical Skills
  - Project Experience
---

<img src="/yangqi2.jpg" alt="Portrait of Yang Qi" width="200"/>

> Chinese version: [查看中文简历](/md/resume.html)

## Personal Information

- Name: Yang Qi
- Phone: 13672221869
- Email: yangqiustc@mail.ustc.edu.cn
- Political Affiliation: Member of the Communist Party of China

## Education

- **University of Science and Technology of China | M.Eng. in Software Engineering**
  - Graduation: 2025.07
  - Research Focus: 3D microscopic image registration, reconstruction, and software development
  - Core Courses: C/C++, Java, Introduction to Algorithms, Advanced Software Engineering, Advanced Computer Networks

- **Anhui University | B.Eng. in Electronic Information Engineering**
  - Period: 2018.09 ~ 2022.07
  - Core Courses: Signals and Systems, Microcontroller Principles, Digital Signal Processing, Digital Image Processing

## Honors and Awards

- [**Baosteel Outstanding Student Special Prize**](https://dy.ahu.edu.cn/2021/1220/c11063a277406/page.htm)
- **National Scholarship**
- Provincial Silver Award, "Internet+" Innovation and Entrepreneurship Competition
- Provincial Silver Award, "Challenge Cup" Business Plan Competition
- National Third Prize, iCAN International Innovation and Entrepreneurship Competition

## Technical Skills

- Proficient in `Python`, `C/C++`, and `Java`, with hands-on experience in algorithm implementation, engineering development, and cross-language system integration.
- Proficient in `PyTorch` and `TensorFlow`, with experience in image detection, image segmentation, motion tracking, image registration, and self-supervised learning.
- Familiar with `Arduino`, Raspberry Pi, and hardware-software co-development, including device control, data processing, and upper-computer integration using `C/C++`.
- Strong understanding of `Spring Boot`, common Java design patterns, and `DDD`-based architecture for building scalable and maintainable backend services.
- Familiar with `Docker`, common Linux operations, and `Nginx` deployment practices including reverse proxy, load balancing, and static/dynamic resource separation.
- Experienced with `PyCharm`, `IntelliJ IDEA`, `Visual Studio Code`, `Git`, and `Maven`.

## Internship Experience

### iFLYTEK

- Position: IoT Assistant Engineer Intern
- Responsibilities: Developed QR code detection and decoding interfaces for the `CSK6` chip, including model inference, algorithm interface packaging, and `C/C++` engineering integration.

### SenseTime

- Position: Algorithm Engineer Intern
- Project: Binocular chess-piece target detection and deployment
- Core Technologies: Target detection, model lightweighting, `ONNX` inference, and `C++` engineering deployment
- Responsibilities: Trained, inferred, and productionized the `MMYOLOv8` model, then deployed it to the `RV1126` platform.

## Project Experience

### 1. 3D Microscopic Image Reconstruction

- Tech Stack: `Python`, `PyQt`, `Elastix`, `PyTorch`, `B-Spline FFD`, `3D Swin-Transformer`
- Project Description:
  - Built a full reconstruction pipeline for `TB`-scale 3D microscopic image data to address slice misalignment, optical distortion, and non-rigid registration across sections, covering intra-slice stitching, cross-channel alignment, inter-slice registration, and 3D visualization.
- Key Contributions:
  - Implemented non-rigid registration with `Elastix` together with a self-developed `PyTorch` registration optimization algorithm.
  - Iterated the solution to the dual-stage `DUST (Dual U-Net with Swin-Transformer)` model, which progressively refines the deformation field to improve registration accuracy and stability.
  - Developed a `PyQt`-based reconstruction tool to support large-scale image processing workflows.
- Outcomes:
  - Developed a high-efficiency reconstruction tool capable of processing `TB`-scale image data. [Reconstruction Code](https://github.com/CoderYangQi/Whole-body_Reconstruction)
  - Co-first author of a ***Cell*** paper, with primary responsibility for method implementation and code development. [High-speed mapping of whole-mouse peripheral nerves at subcellular resolution](http://dx.doi.org/10.1016/j.cell.2025.06.011)
  - Granted invention patent for a 3D biological sample microscopic image reconstruction method (`CN118115694A`).

### 2. Calcium Imaging Tracking Device Application

- Tech Stack: `Arduino`, `FPGA`, `SCARA` robotic arm, `SLEAP`, and video motion tracking
- Project Description: Built a coordinated system linking a head-mounted imaging device, cable untwisting mechanism, and robotic arm to support calcium imaging in freely moving mice, while synchronously collecting behavioral video and brain-region imaging data for downstream analysis.
- Responsibilities:
  - Deployed a motion tracking algorithm for real-time video analysis. [GitHub Code](https://github.com/CoderYangQi/Live_Tracking); [Gitee Code](https://gitee.com/yqustc/MotionDetection)
  - Used `Arduino` to control motor movement and cable untwisting based on mouse position, expanding the effective movement range of the tethered head-mounted device.
  - Combined calcium imaging signals with behavioral keypoints for behavior encoding and classification analysis.

### 3. QR Code Detection Function

- Tech Stack: `RTMDet-tiny`, `Linger`, `Thinker`, `C/C++`, `Quirc`
- Project Description: Built a QR code solution for the `CSK6` chip by first detecting the QR code region and then decoding it with the `Quirc` library.
- Key Contributions:
  - Used `RTMDet-tiny` from `MMDetection` as the QR code detector.
  - Applied `Linger` quantization and `Thinker` inference deployment to compress the model to roughly `100 KB`.
  - Implemented the algorithm interfaces and engineering integration in `C/C++`, completing the end-to-end detection and decoding pipeline.
- Solution Notes:
  - [Solution Notes](https://smart-brain.feishu.cn/docx/QtcXdvoQToKLd9xCT7BcTX4XnSb?from=from_copylink)

### 4. UAV-Based Soybean Area Estimation

- Tech Stack: Semantic segmentation, vegetation index fusion, and `U-Net`
- Project Description: Applied an improved `U-Net` model to fused UAV imagery for soybean planting area estimation.
- Outcomes: First-author `SCI` paper (IF 5.1), [Extraction of soybean planting area based on feature fusion technology of multi-source low altitude unmanned aerial vehicle images](https://doi.org/10.1016/j.ecoinf.2022.101715)

### 5. OpenAI Application Service for Workflow Efficiency

- Tech Stack: `Spring Boot`, `MyBatis`, `OKHttp3`, `OpenAI SDK/API`, `React`, `TypeScript`
- Project Description: Designed an AI application service based on microservices and `DDD`, supporting `OpenAI SDK / API` integration, WeChat public account authentication, and frontend application access.
- Key Contributions:
  - Split the system into modules such as `OpenAI SDK`, `OpenAI API`, and application services, and designed a configurable scenario integration approach.
  - Encapsulated multi-model invocation, session management, and backend service APIs to support fast integration across business scenarios.
  - Built the `React` frontend and integrated it with backend services to provide a practical AI-assisted productivity tool.
