class Canvas {
  constructor() {
    this.canvasEl = document.getElementById("canvas");
    this.canvasEl.width = window.innerWidth;
    this.canvasEl.height = window.innerHeight;
  
    this.ctx = this.canvasEl.getContext("2d");
   
    this.ctx.fillStyle = "yellow";
    this.ctx.fillRect(590, 90, 600, 700);
  

  }
};

export default Canvas;