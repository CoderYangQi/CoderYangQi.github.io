---
title: 3D Microscopic Image Reconstruction Log
index: false
icon: laptop-code
category:
  - Algorithms
  - Imaging
  - Project Notes
---

> 中文版: [三维显微图像重构算法日志](/md/method-log/)

## 3D Microscopic Image Reconstruction

- Project Stack: Python, PyQt, B-Spline based FFD, and self-developed registration algorithms
- Project Description:
  - New tissue clearing and staining methods can generate large transparent biological samples and enable rapid imaging with optical microscopes. However, the resulting slice data can reach terabyte scale and often contains optical distortion and misalignment between slices.
  - This project focused on building a practical 3D reconstruction solution for large biological samples, covering intra-slice stitching, cross-channel alignment, inter-slice registration, and 3D visualization.
  - The inter-slice registration stage was designed to extract interest points and feature descriptors with deep learning, perform feature matching, and further extend correspondences into a 3D deformation field.
  - To improve usability, a PyQt-based reconstruction tool was designed. It uses a workflow generator to split the process into subtasks and a task scheduler to coordinate algorithm modules and data I/O modules based on available compute resources.
- Outcomes:
  - Built an efficient 3D reconstruction tool capable of handling terabyte-scale image data
  - Developed a new 3D image registration method
  - Obtained an invention patent
  - Co-authored a high-level paper intended for a *Cell* sub-journal
