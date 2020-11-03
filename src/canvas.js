class Canvas {
  constructor() {
    this.canvas = document.getElementById("canvas");
    this.clear = document.getElementById("clear");      //clear button
    this.color = document.getElementById('stylus-color');  // drawing color
    this.bgColor = document.getElementById('background-color');
    this.penWidth = document.getElementById('pen-width');

    this.canvas.width = window.innerWidth;
    this.canvas.height = window.innerHeight;
    this.ctx = this.canvas.getContext("2d");
 
    this.colorChoice = this.color.jscolor;
    this.bgColorChoice = this.bgColor.jscolor;
    this.width = this.canvas.width;
    this.height = this.canvas.height;
    [this.startX, this.startY] = [0, 0]; //initializing coordinates
    [this.endX, this.endY] = [0, 0];
    this.draw = false;

    this.canvas.onpointermove = this.handleMove.bind(this);  //handles pointer clicking and dragging
    this.canvas.onpointerdown = this.handleDown.bind(this);
    this.canvas.onpointerup = this.stopDrawing.bind(this);   // stops drawing when no click/drag
    this.canvas.onpointerout = this.stopDrawing.bind(this);
    this.clear.onclick = this.handleClear.bind(this);   //clear the screen
    this.color.onclick = this.colorSelect.bind(this);
    this.bgColor.onclick = this.bgColorSelect.bind(this);
    this.penWidth.onchange = this.widthPicker.bind(this);
  }

  drawLine(startX = this.startX, startY = this.startY, endX= this.endX, endY = this.endY){
    this.ctx.beginPath();
    this.ctx.lineWidth = this.widthPicker();
    this.ctx.strokeStyle = this.colorChoice;
    this.ctx.lineCap = "round";
    this.ctx.moveTo(startX , startY );  
    this.ctx.lineTo(endX, endY);
    this.ctx.stroke();
    this.ctx.closePath();
    this.ctx.restore();  

  }

  handleMove(e) { 

    if (this.draw) {
      this.getCoordinates(e);
      this.drawLine();
    } 
  }

  handleDown(e) {
    this.getCoordinates(e);
    this.draw = true;
    this.canvas.style.backgroundColor = this.bgColor.jscolor

    if(e.shiftKey) {
      // this.getCoordinates(e);
      // this.draw = true;
      // this.canvas.style.backgroundColor = this.bgColor.jscolor
      this.ctx.shadowColor = '#7fff00';
      this.ctx.shadowBlur = 10;
      this.ctx.shadowOffsetX = 2;
      this.ctx.shadowOffsetY = 2;
    } else {
      // this.getCoordinates(e);
      // this.draw = true;
      // this.canvas.style.backgroundColor = this.bgColor.jscolor
      this.ctx.shadowColor = "";
      this.ctx.shadowBlur = 0;
      this.ctx.shadowOffsetX = 0;
      this.ctx.shadowOffsetY = 0;
    }
  }

  handleClear() {
    this.ctx.clearRect(0,0,this.width, this.height)
  }

  stopDrawing() {
    this.draw = false;
  }

  getCoordinates(e){
    [this.startX, this.startY] = [this.endX , this.endY];
    this.endX = e.clientX - this.canvas.offsetLeft;
    this.endY = e.clientY - this.canvas.offsetTop;
  }

  widthPicker(){
    return this.penWidth.value;
  }

  colorSelect() {
    this.colorChoice = this.color.jscolor
  }

  bgColorSelect() {
    this.bgColorChoice = this.bgColor.jscolor
  }

};

export default Canvas;