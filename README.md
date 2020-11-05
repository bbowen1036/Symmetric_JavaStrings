
# Symmetric JavaStrings
A browser based drawing application, allowing users to create fun and unsual symmetrical patterns. By using radial symmetry and mathematical principles, you can create beautiful designs with minimal effort.

![screenshot](assets/img/screenshot.png)

## Features
 + Stylus color selection
 + Background color selection
 + Canvas reset
 + Pen width adjustment
 + Radial mode with size selector
 + Responsive Sidebar

## Technologies

<img src="assets/img/html.png" height="85px"> <img src="assets/img/node-js-icon-11.jpg" height="85px"> <img src="assets/img/css.png" height="85px"> <img src="assets/img/js.png" height="85px"> <img src="assets/img/canvas.png" height="85px">
  
## Implementation 

A `Canvas` is rendered with preset settings when the browser is loaded.

```javascript
// canvas.js
class Canvas {
  constructor() {
    this.canvas = document.getElementById("canvas");           // canvas element
    this.clear = document.getElementById("clear");             // clear button
    this.color = document.getElementById('stylus-color');      // drawing color
    this.bgColor = document.getElementById('background-color');// background color
    this.penWidth = document.getElementById('pen-width');      // pen width
    this.spiro = document.getElementById('spiro');             // radial selector
    this.slicer = document.getElementById('divisions');        // radial divisions

    //canvas setting
    this.canvas.width = window.innerWidth - 250;            
    this.canvas.height = window.innerHeight - 100;
    this.ctx = this.canvas.getContext("2d");
  }
}
```

Event Listeners are set on `onpointermove`, `onpointerdown`, `onpointerup`, and `onpointerout` to track mouse movement and clicks on `Canvas`

```javascript
// canvas.js
    this.canvas.onpointermove = this.handleMove.bind(this);  
    this.canvas.onpointerdown = this.handleDown.bind(this);
    this.canvas.onpointerup = this.stopDrawing.bind(this);  
    this.canvas.onpointerout = this.stopDrawing.bind(this);
```


