---
title: Internship Log
index: false
icon: laptop-code
category:
  - Internship
  - Embedded Vision
  - Project Notes
---

> 中文版: [实习日志](/md/study-log/)

## QR Code Detection Function

- Core Technologies: Image detection algorithms, model quantization, model inference, and QR code decoding
- Project Description: The solution first detects the QR code position and then decodes it with the Quirc library.
  - The detection model uses RTMDet-tiny from MMDetection
  - The model is quantized with Linger and inferred with Thinker, reducing it to roughly 100 KB
  - The algorithm interface and integration were implemented in C/C++, and then connected with the Quirc decoder
  - [Detailed Solution Notes](https://smart-brain.feishu.cn/docx/QtcXdvoQToKLd9xCT7BcTX4XnSb?from=from_copylink)
