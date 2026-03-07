import { sidebar } from "vuepress-theme-hope";

export const zhSidebar = sidebar({
  "/md/": [
    "resume",
    {
      text: "项目专题",
      icon: "laptop-code",
      children: [
        "dev-log/README.md",
        "method-log/README.md",
        "camera-log/README.md",
        "study-log/README.md",
      ],
    },
  ],
});

export const enSidebar = sidebar({
  "/en/md/": [
    "/en/md/resume.md",
    {
      text: "Project Notes",
      icon: "laptop-code",
      children: [
        "/en/md/dev-log/README.md",
        "/en/md/method-log/README.md",
        "/en/md/camera-log/README.md",
        "/en/md/study-log/README.md",
      ],
    },
  ],
});
