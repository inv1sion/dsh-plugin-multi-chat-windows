# dsh-plugin-multi-chat-windows

A DeepSeek Harness (DSH) Web GUI plugin that adds a "split window" entry to every chat in the
sidebar. Each window is a **real, native conversation** (composer, model selection, Chat/Trajectory
view tabs) docked beside the main chat — open several side by side.

中文: [README.md](./README.md)

## Features

- **Native conversations**: every window renders the official `conversation.content` factory slot
  through `SessionProvider` + `mcw.conversation` (same composition the ui-subagent sidebar chat
  uses), so the window body is the real thing, not a replica.
- **Non-overlapping by default**: windows snap beside the main conversation and follow its layout;
  dragging the title bar detaches them, the dock button re-snaps.
- **Free resize**: left edge (width), bottom edge (height), bottom-left corner (both). Hit-testing
  runs at document capture level, so page content can never cover the handles. Geometry is
  remembered in localStorage and restored on refresh.
- **Tile all ⊞**: lay every open window out side by side, tops aligned, equal height, adjacent.
- **Minimize to the bottom dock ˅**: shrink windows into a bottom dock while their Session stays
  live (retained). Chips show a live status dot (running / needs confirmation / idle). Click a chip
  to restore; the × on the chip closes the window.
- **Pop out into a browser window ↗**: opens a full DSH window with a `#mcw-popout=<id>` deep link;
  the plugin in the new instance focuses that session via `uiWorkspace.openSession` (with retries
  against boot-time restore races). Browser-only: Electron shells block `window.open`, so the
  button hides there automatically (UA detection).
- **Lifecycle**: sessions are retained with `sessions.retain` and released on close/unload;
  deleted sessions auto-close their windows.

## Install

From npm / the DSH plugin market — search `dsh-plugin-multi-chat-windows` in the Plugins page, or:

```sh
dsh plugin --profile web install dsh-plugin-multi-chat-windows
```

From a local directory, use the Plugins page with a `file:` spec, e.g.
`file:/Users/<you>/.../dsh-multi-chat-windows`, or the CLI equivalent above.

## Known limitations

- Each window is a full conversation instance: memory grows with window count; 2–4 windows is a
  comfortable range.
- Floating host plugins (e.g. a token dock) appear inside windows too.
- Pop-out requires a real browser; it is unavailable inside the DSH desktop shell.

## Versioning

See [CHANGELOG.md](./CHANGELOG.md).

## License

[MIT](./LICENSE)
