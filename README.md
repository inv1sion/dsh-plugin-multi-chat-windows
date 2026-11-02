# 话分两头 · 会话并排小窗

> **dsh-plugin-multi-chat-windows** — DSH Web GUI 插件
> 把你的 AI 对话从「切来切去」变成「并排开火」。

English: [README.en.md](./README.en.md) · Changelog: [CHANGELOG.md](./CHANGELOG.md)

---

## 🫤 你是不是也这样：一边等它写完，一边想跟另一个它说话

- 盯着会话 A 等 AI 跑任务，想起会话 B 那件事还没交代，切过去——回来一看，上下文滚到九霄云外，刚才 A 说到哪了？
- 左侧会话列表上上下下切来切去，一天几百次；切走再切回，每次都在“重新进入聊天状态”，最贵的就是这个重新进入的成本。
- 多查点资料就得再开一个 DSH 窗口？窗口之间互不相认，还得手动摆位置。

**话分两头：把它们并排放开。** 你这边对话完，那边接着对话；两边都是**真正的原生对话**——能输入、能选模型、能看 Chat / Trajectory，不是截图式的阉割视图。

![话分两头 · 试用说明](https://github.com/yuna78/dsh-plugin-multi-chat-windows/raw/main/docs/demo-annotated.png)

## 装上之后

### 🪟 会话 = 小窗，随点随开
左侧会话行悬停 ⧉ 一键把任何 chat 变成浮动小窗，贴在主对话旁边；拖走就自由摆放，位置宽高都帮你记住，下次打开原样回来。

### 🎯 一键平铺
开了一串小窗撒得满屏都是？标题栏 ⊞ 一按，全部**横向排开**：顶对齐、同高、紧贴——像看监控墙一样看你的所有 AI 任务。

### 📌 最小化 ≠ 消失
小窗缩进底部停靠条，**会话还在干活**（引用仍持有，不受影响）。chip 左边的状态点实时告诉你：

| 状态 | 点的样子 |
|---|---|
| 工作中 | 🔵 转圈 |
| 刚完成（有新消息） | 🟢 绿点 |
| 等你审批 | 🟡 黄点 |
| 空闲 | ⚪ 灰点 |

点 chip 一秒还原原窗口，不丢任何现场。

### ↗️ 扔到窗外去（浏览器）
在真浏览器里打开 DSH 时，小窗可以弹出成**独立的浏览器窗口**——拖到第二屏幕、和工作台并排，都行。深链直达那个会话，新窗口自动聚焦，不用二次寻找。
（Electron 桌面壳内会自动隐藏该按钮——壳层拦截弹窗，插件不装样子。）

## 30 秒安装

```sh
dsh plugin --profile web install dsh-plugin-multi-chat-windows
```

或在 DSH 的 **Plugins** 页 → Add plugin → 搜索 `dsh-plugin-multi-chat-windows`。

本地目录安装 / Desktop profile 安装见文末附录。装好即用，无需配置。

## 为什么值得装（三行说完）

1. **省的是“重新进入聊天状态”的时间**——并排不是花架子，是每天几百次的切换成本清零。
2. **多任务智理**：一个窗口喂 prompt、三五个窗口看进度，最小化 dock 的状态灯让你一眼知道哪个该回话。
3. **零迁移成本**：不是聊天记录复制粘贴，是**原会话本体**的第二个视图，你随时可以合回主界面。

## 已知限制（我们很诚实）

- 每个小窗是完整对话实例，内存随窗数增加——建议同时开 2–4 个，别把它当监控大屏。
- 「弹出」依赖浏览器放行 `window.open`；DSH 桌面应用（Electron 壳）内不可用（按钮自动隐藏），真浏览器里无此限制。
- 依赖 DSH 客户端内部 slot/service 组合（`slots` / `sessions` / `locale` / `uiWorkspace`），DSH 大版本升级可能需要适配。

## 引擎要求

`engines.dsh >=0.2.1-rc.2 <0.3.0` ｜ License MIT ｜ 版本与历史见 [CHANGELOG.md](./CHANGELOG.md)。

---

## 附录：本地安装

方法 A — Web 插件页：Install → 输入本目录的 `file:` 规格（例如 `file:/path/to/dsh-multi-chat-windows`），装完即启用；HMR 开启时立即生效，否则重启 DSH。

方法 B — CLI：`dsh plugin --profile web install file:/path/to/dsh-multi-chat-windows`

Desktop profile 由应用独占管理：GUI 插件页安装，或手动 `pnpm add link:<path>`（应用自带 pnpm 11）并把包名加入 `~/.dsh/profiles/desktop/package.json` 的 `dsh.profile.bundles`。
