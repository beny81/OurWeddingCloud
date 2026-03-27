# Lessons

## Bootstrap Offcanvas Scroll Lock on Navigation

### The Problem

When using Bootstrap's offcanvas as a mobile navigation menu with Vue Router, navigating to a new page via a `<router-link>` inside the offcanvas leaves the page **completely unscrollable** until the user refreshes.

**Root cause:** Bootstrap's `ScrollBarHelper` locks the body scroll when the offcanvas opens. It sets 3 things:
1. `document.body.style.overflow = 'hidden'`
2. `document.body.style.paddingRight = '<scrollbar width>px'`
3. `paddingRight` on every `.fixed-top` / `.fixed-bottom` element in the DOM

Bootstrap normally resets all of this when the offcanvas is closed via its own UI (close button or backdrop click). But when a `<router-link>` navigates away, Bootstrap's close animation never runs and `scrollBar.reset()` never fires — leaving the scroll lock permanently active.

**Why a Vue watcher doesn't reliably fix it:**
A `watch(() => route.path, ...)` with default flush `'pre'` runs as a microtask — the URL hash can change (and Playwright/the browser can see it) *before* the watcher callback executes. Using `flush: 'sync'` helps, but the actual `instance.hide()` call is still inside an async `import('bootstrap').then(...)`, so Bootstrap's full cleanup is never guaranteed to complete synchronously.

### The Solution

Reset Bootstrap's scroll lock in `router.afterEach()`. This hook fires synchronously at the end of every navigation — before the URL is committed — and is completely independent of Bootstrap's animation lifecycle.

**`src/router/index.js`:**
```js
router.afterEach(() => {
  document.body.style.overflow = ''
  document.body.style.paddingRight = ''
  document.querySelectorAll('.fixed-top, .fixed-bottom, .sticky-top').forEach((el) => {
    el.style.paddingRight = ''
    el.style.marginRight = ''
  })
})
```

Keep the Vue watcher in `SmallNavBar.vue` only for closing the offcanvas visually — not for scroll management.

### Rule

> Whenever Bootstrap modals, offcanvases, or drawers are used alongside a SPA router:
> **Always reset Bootstrap's body scroll lock in `router.afterEach()`**, not in a component watcher.
> Component watchers have async flush timing that can race against the browser's URL update.
