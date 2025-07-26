# Leaflet.TileLayer.PouchDBCached
Updating this repo enough to work as a module with PouchDB bundled in

A Leaflet plugin that extends `L.TileLayer` to support offline tile caching using [PouchDB](https://pouchdb.com/) in the browser. Tiles are stored in local PouchDB databases, enabling offline maps, reduced bandwidth usage, and improved performance for web mapping applications.

---

## Features

* Offline tile caching with PouchDB
* Cache fallback when tiles are unavailable online
* Tile expiration based on `cacheMaxAge`
* Configurable save/load/cache behavior
* Seeding utility for pre-loading tiles by bounding box and zoom range
* Compatible with any standard Leaflet tile layer

---

## Installation

### npm
npm install github:MrRedBeard/Leaflet.TileLayer.PouchDBCached

Then import it:

```js
import 'leaflet';
import L from 'leaflet';
import 'leaflet-tilelayer-pouchdbcached';
```

### iife <script>

```html
<script src="path/to/leaflet.js"></script>
<script src="path/to/L.TileLayer.PouchDBCached.js"></script>
```

---

## Usage

```js
const map = L.map('map').setView([51.505, -0.09], 13);

L.tileLayer.pouchDBCached('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
  	useCache: true,
	saveToCache: true,
	useOnlyCache: false,
	cacheFormat: 'image/png',
	cacheMaxAge: 7 * 24 * 3600 * 1000, // 1 week
	cacheURLMask: /([?&]access_token=)[^&]+/, // Optional token stripper
	attribution: '&copy; OpenStreetMap contributors',
	crossOrigin: true
}).addTo(map);
```

### ESM Module
See dist/L.TileLayer.PouchDBCached.esm.js

### Vanilla JavaScript Usage
See L.TileLayer.PouchDBCached.iife.js

---

## Options

| Option         | Type    | Default            | Description                                      |
| -------------- | ------- | ------------------ | ------------------------------------------------ |
| `useCache`     | Boolean | `false`            | Enable caching using PouchDB                     |
| `saveToCache`  | Boolean | `true`             | Save new tiles to cache                          |
| `useOnlyCache` | Boolean | `false`            | Load only from cache, do not fetch from network  |
| `cacheFormat`  | String  | `'image/png'`      | Format used to store tile images                 |
| `cacheMaxAge`  | Number  | `86400000` (1 day) | Tile age before considered stale                 |
| `cacheURLMask` | RegExp  | `undefined`        | Regex to strip tokens or volatile parts from URL |

---

## Events

| Event           | Description                                  |
| --------------- | -------------------------------------------- |
| `tilecachehit`  | Fired when tile is loaded from cache         |
| `tilecachemiss` | Fired when tile was not found in cache       |
| `seedstart`     | Fired when `seed()` starts                   |
| `seedprogress`  | Fired on each tile processed during `seed()` |
| `seedend`       | Fired when `seed()` completes                |

---

## Development

### Build
```npm run build```

### Pack
```
npm run build
npm pack
```

## Credit

Maintained by [MrRedBeard](https://github.com/MrRedBeard). This is a modern fork with updated module support and Vite bundling compatibility.

From https://github.com/MazeMap/Leaflet.TileLayer.PouchDBCached.git which is now deprecated 

Original heavily inspired by https://github.com/tbicr/OfflineMap

## Contributing

Pull requests are welcome! Please:

* Keep code modular and readable
* Follow existing formatting and JSDoc-style comments
* Write meaningful commit messages

---

## TODO

* Add proper tile error fallback UI
* Add support for cleaning up old cache entries
* Improve seed queue throttling and progress feedback