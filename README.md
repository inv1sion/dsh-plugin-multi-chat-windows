# dsh-plugin-multi-chat-windows

DSH Web GUI 插件：在左侧会话列表为每个 chat 提供“并列窗口”入口，点开后在主对话旁边
多开一个**原生体验**的会话窗口（可输入聊天、模型选择、Chat/Trajectory 观测标签，
与主界面单一会话完全一致），多开即可并排显示。

English: [README.en.md](./README.en.md)

## 功能

- **原生对话**：每个窗口内用 `SessionProvider` + `mcw.conversation`（session 作用域）
  渲染 `conversation.content` 工厂槽（与 ui-subagent 侧栏聊天同一套官方组合），窗口里
  就是完整对话：输入框、模型选择、Chat/Trajectory 视图标签、工具视图全部原生。
- **不遮挡**：窗口默认吸附在主对话列右侧并跟随布局；拖动标题栏自由移动（即脱离吸附），
  标题栏的停靠按钮（悬浮提示显示当前吸附状态）重新吸附。
- **宽高可自定义**：左缘拖拽调宽、底边拖拽调高、左下角斜向同调；命中判定跑在 document
  捕获层，不会被窗口内的对话内容遮挡。每个会话的尺寸位置记忆在 localStorage，刷新自动恢复。
- **一键平铺 ⊞**：所有并列窗口横向排开，顶对齐、同高、相邻贴放，超出视口自动左移。
- **最小化到底部 ˅**：缩到 DSH 底部停靠条（Session 引用保留、会话不中断），chip 左侧
  显示实时工作状态点（运行中 / 需要确认 / 空闲），点 chip 还原、chip 上 × 关闭。
- **入口**：会话行悬停 ⧉ 按钮，或 "⋯" 菜单“在并列窗口打开 / 关闭并列窗口”；
  "⋯" 菜单还可勾选“默认弹出为独立窗口”。
- **弹出为独立浏览器窗口 ↗**：`window.open` 一个完整 DSH 窗口并附带 `#mcw-popout=<id>`
  深链，新实例里的插件自动把该会话聚焦到主视图（`uiWorkspace.openSession`，带重试防
  启动恢复竞态），页内窗口随之关闭。**仅真浏览器可用**：Electron 桌面壳会拦截
  `window.open`，桌面应用内自动隐藏该按钮（UA 检测）。
- **生命周期**：`sessions.retain` 持有引用，关闭窗口或卸载插件即释放；会话被删除自动关窗。

## 安装

方法 A — 从 npm / DSH 插件市场：

在 DSH Web GUI 左侧栏 **Plugins** 页（Add plugin）搜索包名 `dsh-plugin-multi-chat-windows`，
或 CLI：

```sh
dsh plugin --profile web install dsh-plugin-multi-chat-windows
```

方法 B — 本地目录：

1. 打开 DSH Web GUI 左侧栏 **Plugins** 页；
2. Install → 输入本目录绝对路径的 `file:` 规格，例如
   `file:/Users/<you>/.../dsh-plugin/dsh-multi-chat-windows`；
3. 安装完成即默认启用；HMR 开启时立即生效，否则重启 DSH。

CLI（web profile）：

```sh
dsh plugin --profile web install file:/path/to/dsh-multi-chat-windows
```

Desktop profile 由应用独占管理：直接在 GUI 的插件页安装，或手动
`pnpm add link:<path>`（使用应用自带 pnpm 11）并把包名加入
`~/.dsh/profiles/desktop/package.json` 的 `dsh.profile.bundles`。

## 已知限制

- 每个窗口内是完整对话实例（原生组件组合）：内存与连接数随窗口数增长；建议同时开 2–4 个。
- 窗口内是完整应用：主界面里启用的悬浮类插件（如 token dock）也会在窗口内出现。
- 弹出功能依赖浏览器允许 `window.open`；DSH 桌面应用（Electron 壳）内不可用。
- 依赖 DSH 客户端内部 slot/service（`slots`/`sessions`/`locale`/`uiWorkspace`）与
  工厂槽组合；DSH 大版本升级可能需要适配。

## 版本

见 [CHANGELOG.md](./CHANGELOG.md)。

## License

[MIT](./LICENSE)
