# 柴犬うんちスクープ — Codex Data Pack

This folder contains **data-first** JSON files for the game:
**柴犬うんちスクープ (Shibainu Unchi Sukūpu) / Shiba Poop Scoop**.

## What’s included

- `data/items.json` — equipment definitions (scoopers, shoes, bags, hats, charms)
- `data/powerups.json` — power-up definitions
- `data/levels/*.json` — 30 level definitions (tile grid + rules)
- `data/levels/index.json` — list of all levels and their file paths
- `data/strings/en.json`, `data/strings/ja.json` — basic localization strings
- `data/balance/*.json` — global tuning knobs (poop types, chapter curves)
- `data/schema/*.schema.json` — optional JSON schemas

## How to load in Phaser 3

Option A — Phaser Loader:
- In `preload()` call `this.load.json('items', 'data/items.json')`, etc.
- In `create()` read with `this.cache.json.get('items')`.

Option B — Fetch (works with Vite):
- Put this pack under your Vite `/public` folder.
- Use `fetch('/data/items.json')`.

## Coordinate system

Levels use a **tile grid**:
- (0,0) is the top-left of the `grid[]`.
- Each string in `grid[]` is a row.
- Use `tileSize` (e.g., 16) to convert to pixels: `px = x * tileSize`.

## Legend

Each level includes a `tileLegend` mapping. Common tiles:
- `#` wall/building (blocked)
- `.` path (walkable)
- `,` grass (walkable, optional slow)
- `~` water (blocked unless bridged)
- `=` bridge (walkable)
- `G` gate (interactive obstacle)
- `B` bin (deposit point)
- `P` power-up spawn
- `T` Shiba waypoint / poop hotspot
- `N` crowd/NPC obstacle spawn
- `S` shrine marker

## Notes

All numbers are intended as **starting defaults**. You can rebalance per playtest.
