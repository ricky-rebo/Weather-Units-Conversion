<h1 align="center">Welcome to weather-units-conversion 👋</h1>
<p>
  <a href="https://www.npmjs.com/package/weather-units-conversion" target="_blank">
    <img alt="Version" src="https://img.shields.io/npm/v/weather-units-conversion.svg">
  </a>
  <a href="https://github.com/ricky-rebo/Weather-Units-Conversion#readme" target="_blank">
    <img alt="Documentation" src="https://img.shields.io/badge/documentation-yes-brightgreen.svg" />
  </a>
  <a href="https://github.com/ricky-rebo/Weather-Units-Conversion/graphs/commit-activity" target="_blank">
    <img alt="Maintenance" src="https://img.shields.io/badge/Maintained%3F-yes-green.svg" />
  </a>
  <a href="https://twitter.com/ricky_rebo" target="_blank">
    <img alt="Twitter: ricky_rebo" src="https://img.shields.io/twitter/follow/ricky_rebo.svg?style=social" />
  </a>
</p>

> A simple utility package to convert weather data across various measure units

### 🏠 [Homepage](https://github.com/ricky-rebo/Weather-Units-Conversion#readme)

## Install

```sh
npm i weather-units-conversion
```

## Usage

```ts
import { c2f, km2miles } from "weather-units-conversion";

// Conversion from Celsius to Fahrenheit
let fahrenheit = c2f(23.6); 

// Conversion from KM to Miles, with 5 decimal positions
let miles = km2miles(11.67, 5);

// Every conversion function is in the format
// <fromUnit>2<toUnit>(val, precision?);
```

## Supported Units
#### Temperature
<ul>
  <li>Celsius (C)</li>
  <li>Fahrenheit (C)</li>
  <li>Kelvin (C)</li>
</ul>

#### Pressure
<ul>
  <li>HectoPascal (hpa)</li>
  <li>KiloPascal (kpa)</li>
  <li>Inches of Mercury (inhg)</li>
  <li>MilliBar (mb)</li>
</ul>

#### Lenght/Distance
<ul>
  <li>Millimeters (mm)</li>
  <li>Inches (in)</li>
  <br/>
  <li>Meters (m)</li>
  <li>Feet (ft)</li>
  <br/>
  <li>Kilometers (km)</li>
  <li>Miles (miles)</li>
  <li>Nautical Miles (nmiles)</li>
</ul>
<b>NOTE:</b> Lenght unit conversions are possible only between same order units! (mm/in, ft/m, km/miles/nmiles)

#### Speed 
<ul>
  <li>Meters per second (ms)</li>
  <li>Kilometers per hour (kmh)</li>
  <li>Miles per hour (mph)</li>
  <li>Knots (kts)</li>
</ul>

<hr/>

## Author

👤 **Riccardo Rebottini**

* Twitter: [@ricky_rebo](https://twitter.com/ricky_rebo)
* Github: [@ricky-rebo](https://github.com/ricky-rebo)

## 🤝 Contributing

Contributions, issues and feature requests are welcome!<br />Feel free to check [issues page](https://github.com/ricky-rebo/Weather-Units-Conversion/issues). 

## Show your support

Give a ⭐️ if this project helped you!

***
_This README was generated with ❤️ by [readme-md-generator](https://github.com/kefranabg/readme-md-generator)_