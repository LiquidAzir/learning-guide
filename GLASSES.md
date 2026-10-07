# Display glasses reader

`/glasses/` is a separate, lightweight reader for Meta Ray-Ban Display. Open
`/glasses/setup.html` on a phone for the add-to-Meta-AI link and manual instructions.
Hosting must use public HTTPS. The URL is derived from the current host, so previews
and production do not silently point to one another.

The regular build emits the reader plus chapter and published-research JSON files.
It never imports `research/reviewed/` or `.research/`. Chapter content is fetched on
demand; the initial document contains only the subject/chapter catalog and reader.
There are no web fonts, new runtime dependencies, sensors, logins or paid APIs.

Navigation: up/down moves button focus, Enter/pinch activates, left/right turns
reading pages. Left returns from menus; Escape/Backspace also goes back. Touch and
mouse work for phone/desktop previews. Text sizes are 26, 30 and 34 CSS pixels.
Reading position uses block/token anchors so changing text size preserves position.
Storage is local to the current device and is guarded when unavailable. Network
errors offer retry/back; opening new chapters requires a connection.

Prose is paginated using measured DOM ranges, retaining inline markup and MathML.
Tables become labelled rows. Figures are fitted to the available width, with
captions retained; complex figures and very wide equations remain better suited to
the regular guide. This is a display adaptation, not an AI summary of the chapters.

`npm test` checks emitted content against the original compiled guide and the
service-worker boundary, alongside existing tests. Browser checks should cover a
600×600 viewport, arrow/Enter-only navigation, all text sizes, resumed reading,
research limits, loading errors and a phone viewport. Physical-device testing is
still needed for real-world contrast, comfort and gesture mappings.

Platform references checked October 7, 2026:
- https://developers.meta.com/wearables/web-apps/
- https://developers.meta.com/wearables/faq/
- https://github.com/facebook/meta-wearables-webapp
- The official publisher script documents the `fb-viewapp://web_app_deep_link`
  scheme with URL-encoded `appName` and `appUrl` parameters. The setup page also
  offers manual URL entry because phone deep-link handling varies.

The regular site's service worker bypasses `/glasses/`. A device holding an older
worker may need to reopen/reload the regular guide once to activate its update.
