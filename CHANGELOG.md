# Eve Changelog

## 1.10.0 (2 November 2018)

### Added
- Add utility [Position](https://kanbanize.github.io/eve/documentation/#utilities/position)
- Add overflow utility classes:
    - ```.eve-overflow-auto```
    - ```.eve-overflow-scroll```
- Add text utility decorations:
    - ```.eve-text-line-through```
    - ```.eve-text-overline```
    - ```.eve-text-underline```

### Changed
- Change accordion line width
- Change table header height
- Change pagination box-shadow with border
- Change form help color and font size

### Fixed
- Fix normal avatar width and height
- Fix select width under Firefox
- Fix alignment checkbox, radio, and switch components
- Fix z-index of tooltip

### Removed

---

## 1.9.0 (27 August 2018)

### Added
- Add horizontal and vertical gaps | ([See Gap Utilities](https://kanbanize.github.io/eve/documentation/#utilities/gap))
- Add font-weight classes | ([See Text Utilities](https://kanbanize.github.io/eve/documentation/#utilities/text))
- Add input validation classes | ([See Input Component](https://kanbanize.github.io/eve/documentation/#components/input))
- Add multiline grid | ([See Grid Multiline](https://kanbanize.github.io/eve/documentation/#grid/multiline))

### Changed
- Change divider spacing from 1.5rem to 1rem

### Fixed
- Fix size of the ```svg``` icon in accordion header
- Fix input width under Firefox

### Removed
- Remove ```.eve-text-normal``` size

---

## 1.8.0 (04 July 2018)

### Added
- Add [Color Picker](https://kanbanize.github.io/eve/documentation/#components/color-picker) component

### Changed
- Change tooltip font-size from .875rem to .75rem

### Fixed
- Fix tooltip overflow

### Removed
- Remove ```.is-normal``` avatar

---

## 1.7.0 (15 June 2018)

### Added
- Add accordion with icon
- Add button with icon
- Add profile with icon
- Add ```.is-huge``` avatar

### Changed
- Change accordion visualization

### Fixed
- Fix grid columns responsiveness on small screens

---

## 1.6.0 (11 June 2018)

### Changed
- Change ```px``` to ```rem```

### Removed
- Remove ```.eve-avatar-x-tiny``` from avatars
- Remove ```.eve-avatar-x-large``` from avatars
- Remove ```.eve-text-tiny``` from text utilities

---

## 1.5.0 (8 June 2018)

### Added
- Add text utility ```.eve-text-justify```
- Add [Float](https://kanbanize.github.io/eve/documentation/#utilities/float) utility

### Changed
- Change accordion header color
- Change ```.eve-text-mute``` to ```.eve-text-muted```
- Change ```.eve-grid``` to ```.eve-row```
- Change ```.eve-cell``` to ```.eve-column```
- Change ```.eve-cell-{number}``` to `.eve-column.is-{number}`

```html
// Before
<div class="eve-grid">
    <div class="eve-cell-4"></div>
</div>

// After
<div class="eve-row">
    <div class="eve-column is-4"><div>
</div>
```

### Fixed
- Fix dropdown active element background color

### Removed
- Remove ```.eve-overflow-visible``` from overflow utilities
- Remove ```.eve-display-inline-flex``` from display utilities
- Remove ```.eve-display-flex``` from display utilities

---

## 1.4.5 (5 June 2018)

### Changed
- Change navigation items height

### Fixed
- Fix navigation item text overflow
- Fix select arrow in Internet Explorer
- Fix table word wrap
- Fix accordion header font size

### Removed
- Remove background color in navigation
- Remove background color in tabs
