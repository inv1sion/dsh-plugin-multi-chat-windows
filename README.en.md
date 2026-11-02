# dsh-plugin-multi-chat-windows (话分两头 · side-by-side AI chat)

> Stop switching between chats. Put them side by side — talk here, then talk there.
> Every window is a **real, native** DSH conversation, not a preview.

中文: [README.md](./README.md) ｜ Changelog: [CHANGELOG.md](./CHANGELOG.md)

![Annotated demo](https://github.com/yuna78/dsh-plugin-multi-chat-windows/raw/main/docs/demo-annotated.png)

## The pain

You watch session A grind through a task, remember something for session B, switch over —
and coming back means re-reading half a screen just to re-enter context. Do that a few
hundred times a day.

**This plugin turns chats into floating mini-windows**: every sidebar session opens beside
your main chat as the real thing — composer, model picker, Chat/Trajectory tabs. You refuel
one window while others run; a bottom dock keeps the runners visible.

## What you get

- 🪟 **Session = window** — hover any chat row, click ⧉. Snap beside the main conversation or
  drag anywhere; geometry is remembered per session.

  Where is the entry? Hover a sidebar row and hit the colored **split-window button** on the
  right, or use the “⋯” menu (also offers a “pop out by default” toggle):

  ![Entry guide](https://github.com/yuna78/dsh-plugin-multi-chat-windows/raw/main/docs/demo-entry.png)
- 🎯 **Tile with one click** — every open window laid out side by side, tops aligned, equal height.
- 📌 **Minimize, not disappear** — windows shrink into a bottom dock while their Session keeps
  running; chips show a **live status dot**: ⏳ running (spinner) · 🟢 done (new messages) ·
  🟡 needs approval · ⚪ idle. Click a chip to restore instantly.
- ↗️ **Pop out into a browser window** (real browsers) — deep-link opens a full DSH window that
  auto-focuses that session. Hidden automatically inside Electron shells, which block popups.
- 🇨🇳/🇬🇧 Native zh/en locale, localStorage persistence, safe lifecycle via `sessions.retain`.

## Install (30 seconds)

```sh
dsh plugin --profile web install dsh-plugin-multi-chat-windows
```

Or: DSH **Plugins** page → Add plugin → search `dsh-plugin-multi-chat-windows`.

Local directory: Plugins page → Install → `file:/path/to/dsh-multi-chat-windows`.

## Honest limitations

- Each window is a full conversation instance — 2–4 concurrent windows is the sweet spot.
- Pop-out requires a browser that allows `window.open`; unavailable inside the DSH desktop shell.
- Composed on DSH client internals (`slots`/`sessions`/`locale`/`uiWorkspace`); major DSH
  upgrades may need adaptation.

## Versioning

`engines.dsh >=0.2.1-rc.2 <0.3.0` ｜ MIT ｜ [CHANGELOG.md](./CHANGELOG.md)
