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

    this.colorChoice = 'white' || this.color.jscolor;
    this.bgColorChoice = this.bgColor.jscolor;
    this.width = this.canvas.width;
    this.height = this.canvas.height;
    [this.startX, this.startY] = [this.width/ 2, this.height/ 2 - 100]; //initializing coordinates
    [this.endX, this.endY] = [this.width/ 2, this.height/ 2];
    this.draw = false;

    //mandala test
    this.slices = 24;
    this._angle = 360 / this.slices;
    this._start = 0;
    this.center = {x: this.width / 2 , y: this.height / 2};

    this.canvas.onpointermove = this.handleMove.bind(this);  //handles pointer clicking and dragging
    this.canvas.onpointerdown = this.handleDown.bind(this);
    this.canvas.onpointerup = this.stopDrawing.bind(this);   // stops drawing when no click/drag
    this.canvas.onpointerout = this.stopDrawing.bind(this);
    this.clear.onclick = this.handleClear.bind(this);   //clear the screen
    this.color.onclick = this.colorSelect.bind(this);
    this.bgColor.onclick = this.bgColorSelect.bind(this);
    this.penWidth.onchange = this.widthPicker.bind(this);
  }

  spiralDraw(start, end, width, color) {
    this.ctx.lineWidth = width;
    this.ctx.beginPath();
    this.ctx.strokeStyle = color;
    this.ctx.moveTo(start.x, start.y);
    this.ctx.lineTo(end.x, end.y);
    this.ctx.stroke();
  }

  d2r(deg) {
    return deg * Math.PI/180;
  }

  sliceCount() {
    return this.slicer.value
  }

  rotate(p1, p2, a) {
    a = this.d2r(a);
    let xr = (p1.x - p2.x) * Math.cos(a) - (p1.y - p2.y) * Math.sin(a) + p2.x;
    let yr = (p1.x - p2.x) * Math.sin(a) + (p1.y - p2.y) * Math.cos(a) + p2.y;
    return {x : xr, y : yr};
  }

  drawLine(startX = this.startX, startY = this.startY, endX= this.endX, endY = this.endY) {
    
    let lineWidth = this.widthPicker();
    let strokeStyle = this.colorChoice;
    
    if (this.spiroClick()) {
      let sliced = this.sliceCount()
      for(let i = 2; i <= sliced ; i++) {
        this._start += 360 / sliced;
        let rP = this.rotate({x: startX, y: startY}, this.center, this._start);
        let rC = this.rotate({x: endX, y: endY}, this.center, this._start);
        this.spiralDraw(rP, rC, lineWidth, strokeStyle);

      }
    } else {

    this.ctx.beginPath();
    this.ctx.lineWidth = this.widthPicker();
    this.ctx.strokeStyle = this.colorChoice;
    this.ctx.lineCap = "round";

    this.ctx.moveTo(startX , startY );  
    this.ctx.lineTo(endX, endY);

    // reflect X axis
    let a_ = startX, 
        b_ = this.height - startY, 
        c_ = endX,
        d_ = this.height - endY
    this.ctx.moveTo(a_,b_)
    this.ctx.lineTo(c_,d_);

    // refect Y axis
    a_ = this.width - startX; 
    b_ = startY;
    c_ = this.width - endX; 
    d_ = endY; 
    this.ctx.moveTo(a_, b_);
    this.ctx.lineTo(c_, d_);

    //reflected Y across X axis
    a_ = this.width - startX; b_ = this.height - startY;
    c_ = this.width - endX; d_ = this.height - endY;
    this.ctx.moveTo(a_, b_);
    this.ctx.lineTo(c_, d_);

    //'inverse' X quadrant bottom
    a_ = this.width / 2 + this.height / 2 - startY; 
    b_ = this.width / 2 + this.height / 2 - startX;
    c_ = this.width / 2 + this.height / 2 - endY; 
    d_ = this.width / 2 + this.height / 2 - endX;
    this.ctx.moveTo(a_, b_);
    this.ctx.lineTo(c_, d_);

    //'inverse' X quadrant top
    a_ = this.width / 2 + this.height / 2 - startY; 
    b_ = this.height / 2 - this.width / 2 + startX;
    c_ = this.width / 2 + this.height / 2 - endY; 
    d_ = this.height / 2 - this.width / 2 + endX;
    this.ctx.moveTo(a_, b_);
    this.ctx.lineTo(c_, d_);

    // inverse Y quadrant bottom
    a_ = this.width / 2 - this.height / 2 + startY; 
    b_ = this.width / 2 + this.height / 2 - startX;
    c_ = this.width / 2 - this.height / 2 + endY; 
    d_ = this.width / 2 + this.height / 2 - endX;
    this.ctx.moveTo(a_, b_);
    this.ctx.lineTo(c_, d_);
  
    // inverse Y quadrant top
    a_ = this.width / 2 - this.height / 2 + startY; 
    b_ = this.height / 2 - this.width / 2 + startX;
    c_ = this.width / 2 - this.height / 2 + endY; 
    d_ = this.height / 2 - this.width / 2 + endX;
    this.ctx.moveTo(a_, b_);
    this.ctx.lineTo(c_, d_);
  
    this.ctx.stroke();
    this.ctx.closePath();
    this.ctx.restore();    

    }
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
      this.ctx.shadowColor = '#7fff00';
      this.ctx.shadowBlur = 10;
      this.ctx.shadowOffsetX = 2;
      this.ctx.shadowOffsetY = 2;
    } else {
      this.ctx.shadowColor = "";
      this.ctx.shadowBlur = 0;
      this.ctx.shadowOffsetX = 0;
      this.ctx.shadowOffsetY = 0;
    }
  }

  handleClear() {
    const clearme = confirm('Start over?')
    if (clearme) {
      this.ctx.clearRect(0,0,this.width, this.height)
    }
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
    return this.bgColorChoice = this.bgColor.jscolor
  }

  spiroClick() {
    return this.spiro.checked
  }

};

export default Canvas;