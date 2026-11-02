# Changelog

## 0.4.3 — 2026-11-02

- Bottom-dock chips: four-state live status dot — spinning ring while running,
  green after completion (new messages), yellow when an approval is pending,
  muted gray when idle. Labels via locale; state read straight from the session
  catalog (`running` / `pendingInteraction` / `completed`).

## 0.4.2 — 2026-11-02

First public release (npm + GitHub).

- Real native conversation windows docked beside the main chat (`SessionProvider` +
  `mcw.conversation`, session-scoped factory slot).
- Snap / drag to detach, free resize (left edge, bottom edge, bottom-left corner) with
  document-level hit-testing, per-session geometry persisted in localStorage.
- Tile-all button: horizontal adjacent layout with aligned tops and equal height.
- Minimize to a bottom dock with live session status dots (running / needs confirmation / idle);
  restore by clicking a chip, close via the chip's ×.
- Pop out a session into a separate browser window via `#mcw-popout=<id>` deep link +
  `uiWorkspace.openSession` auto-focus (browser-only; hidden inside Electron shells).
- Sidebar row hover button and "..." menu entries, including a "pop out by default" preference.
- English + Chinese locale (auto by UI language).
