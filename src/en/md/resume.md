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
- Current Position: Assistant Researcher in Automation, Baosteel Central Research Institute (July 2025–Present)

## Education

- **University of Science and Technology of China｜M.Eng. in Software Engineering**
  - **Period**: September 2022–June 2025
  - **Research Focus**: 3D microscopic image registration, reconstruction, and software development
  - **Core Courses**: C/C++, Java, Introduction to Algorithms, Advanced Software Engineering, Advanced Computer Networks

- **Anhui University｜B.Eng. in Electronic Information Engineering**
  - **Period**: September 2018–June 2022
  - **Core Courses**: Signals and Systems, Microcontroller Principles, Digital Signal Processing, Digital Image Processing

## Publications

### 1. [High-speed mapping of whole-mouse peripheral nerves at subcellular resolution](https://doi.org/10.1016/j.cell.2025.06.011)

- **Authors**: Mei-Yu Shi<sup>†</sup>, Yuchen Yao<sup>†</sup>, Miao Wang<sup>†</sup>, **Qi Yang**<sup>†</sup>, Lufeng Ding, Rui Li, Yuanyuan Li, Haimeng Huang, Chao-Yu Yang, Zhao Zhou, Zhenxiang Zhu, Pengjie Wen, Fangling Dai, Xiaohui Zeng, Ke-Ming Zhang, Yuhong Guo, Zi-An Sun, Huanhuan Xia, Zhenhua Ren, Yusuf Ozgur Cakmak, Ming Zhang, Fuqiang Xu, Lei Qu, Qingyuan Zhu, Pak-Ming Lau, Cheng Xu, Guo-Qiang Bi
- **Journal**: *Cell*, 2025, 188(14): 3897–3915.e20
- **Authorship**: Co-first Author / Equal Contribution
- **Contributions**: Led the implementation and code development of methods for 3D microscopic image registration and reconstruction. Contributed to the large-scale microscopy processing and reconstruction pipeline, providing algorithmic and engineering support for high-precision reconstruction of terabyte-scale whole-mouse peripheral nerve data.

### 2. [Extraction of soybean planting area based on feature fusion technology of multi-source low altitude unmanned aerial vehicle images](https://doi.org/10.1016/j.ecoinf.2022.101715)

- **Authors**: **Qi Yang**, Bao She, Linsheng Huang, Yuying Yang, Gan Zhang, Mai Zhang, Qi Hong, Dongyan Zhang
- **Journal**: *Ecological Informatics*, 2022, 70: 101715
- **Authorship**: First Author
- **Contributions**: Designed the research methodology, implemented the algorithms and software, and drafted the manuscript. Developed a soybean planting area extraction method based on vegetation-index feature fusion and U-Net semantic segmentation, and conducted comparative experiments across sensor and algorithm configurations.

## Honors and Awards

- [**Baosteel Outstanding Student Special Prize**](https://dy.ahu.edu.cn/2021/1220/c11063a277406/page.htm)
- **National Scholarship**
- Provincial Silver Award, “Internet+” College Student Innovation and Entrepreneurship Competition
- Provincial Silver Award, “Challenge Cup” Business Plan Competition
- National Third Prize, iCAN International Innovation and Entrepreneurship Competition

## Technical Skills

- Proficient in `Python`, `C/C++`, and `Java`, with experience in algorithm implementation, engineering development, and cross-language interface integration.
- Proficient in `PyTorch` and `TensorFlow`, with hands-on experience in object detection, image segmentation, motion tracking, image registration, and self-supervised learning.
- Experienced in hardware-software co-development with `Arduino` and Raspberry Pi, including motion control, data processing, and host-computer integration using `C/C++`.
- Familiar with `Docker`, common Linux operations, and `Nginx` deployment technologies, including reverse proxying, load balancing, and static/dynamic resource separation.
- Proficient with `PyCharm`, `IntelliJ IDEA`, `Visual Studio Code`, `Git`, and `Maven`.

## Internship Experience

### iFLYTEK｜IoT Assistant Engineer Intern

- Developed QR code detection and decoding interfaces for the `CSK6` chip, covering model inference, algorithm interface encapsulation, and `C/C++` engineering integration.
- Built an end-to-end pipeline spanning model quantization, on-device inference, QR code localization, and decoding.

### SenseTime｜Algorithm Engineer Intern

- Contributed to binocular chess-piece detection and deployment, with responsibility for training, inference, and engineering adaptation of a `YOLOv8` model within the `MMYOLO` framework.
- Completed model lightweighting, `ONNX` inference adaptation, and `C++` integration, and deployed the model to the `RV1126` platform.

## Project Experience

### 1. 3D Microscopic Image Reconstruction

- **Tech Stack**: `Python`, `PyQt`, `Elastix`, `PyTorch`, `B-Spline FFD`, `3D Swin-Transformer`
- **Overview**: Built a complete reconstruction pipeline for terabyte-scale 3D microscopic image data, addressing slice misalignment, optical distortion, and inter-slice non-rigid registration through intra-slice stitching, cross-channel alignment, inter-slice registration, and 3D visualization.
- **Key Contributions**:
  - Combined `Elastix` with a self-developed `PyTorch` registration optimization algorithm to implement non-rigid registration for large-scale biological sample reconstruction.
  - Designed the dual-stage `DUST (Dual U-Net with Swin-Transformer)` model to progressively refine deformation fields and improve registration accuracy and stability.
  - Developed a `PyQt`-based 3D reconstruction tool, enabling the large-scale image processing workflow to be used in practice.
- **Outcomes**:
  - Developed an efficient reconstruction tool supporting terabyte-scale image processing. [Reconstruction Code](https://github.com/CoderYangQi/Whole-body_Reconstruction)
  - Published a paper in *Cell* as a co-first author, with primary responsibility for the associated method implementation and code development.
  - Granted an invention patent for a 3D biological sample microscopic image reconstruction method (`CN118115694A`).

### 2. Calcium Imaging Motion-Following System

- **Tech Stack**: `Arduino`, `SCARA` robotic arm, motion controller, `DeepLabCut`, video motion tracking
- **Overview**: Built a coordinated system connecting a head-mounted imaging device, cable untwisting mechanism, and robotic arm to support calcium imaging of freely moving mice. Synchronously collected behavioral video and brain-region imaging data for downstream behavioral analysis.
- **Key Contributions**:
  - Deployed `DeepLabCut` for real-time motion tracking in video streams. [GitHub Code](https://github.com/CoderYangQi/Live_Tracking); [Gitee Code](https://gitee.com/yqustc/MotionDetection)
  - Used `Arduino` to control motor movement and cable untwisting based on mouse position, extending the effective movement range supported by the head-mounted device.
  - Combined calcium imaging signals with behavioral keypoints for mouse behavior encoding and classification.

### 3. On-Device QR Code Detection and Decoding for CSK6

- **Tech Stack**: `RTMDet-tiny`, `Linger`, `Thinker`, `C/C++`, `Quirc`
- **Overview**: Built an on-device QR code detection and decoding solution for the `CSK6` chip, using an object detector to localize QR code regions and `Quirc` for decoding.
- **Key Contributions**:
  - Selected `RTMDet-tiny` from `MMDetection` as the QR code detector.
  - Quantized the model with `Linger` and deployed it for on-device inference with `Thinker`, reducing the model size to approximately `100 KB`.
  - Implemented algorithm interfaces and engineering integration in `C/C++`, completing the QR code detection, localization, and decoding pipeline.
- **Solution Notes**: [Detailed Solution Notes](https://smart-brain.feishu.cn/docx/QtcXdvoQToKLd9xCT7BcTX4XnSb?from=from_copylink)

### 4. Soybean Planting Area Estimation from UAV Imagery

- **Tech Stack**: Semantic segmentation, vegetation-index fusion, `U-Net`
- **Overview**: Developed a semantic segmentation method based on vegetation-index feature fusion and an improved `U-Net` to extract soybean planting regions and estimate planting area from multi-source low-altitude UAV imagery.
- **Outcome**: Published the study in *Ecological Informatics* as the first author. [View Paper](https://doi.org/10.1016/j.ecoinf.2022.101715)
