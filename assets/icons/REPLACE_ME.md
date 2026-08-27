These four PNGs are rough placeholders (a solid ochre square) generated so
the app installs without a broken manifest reference. Replace them with
real MiCampeche icons before shipping:

- `icon-192.png`, `icon-512.png` — standard icons, safe to use the full canvas
- `icon-maskable-192.png`, `icon-maskable-512.png` — keep real content inside
  the center ~80% "safe zone"; Android crops these into circles/squircles/
  rounded squares depending on the launcher, and anything near the edge may
  get clipped

Delete this file once real icons are in place.
