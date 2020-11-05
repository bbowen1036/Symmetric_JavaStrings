import {SidebarMenu} from './sidebar';
import { wackyHeader } from './wacky_header';
import { saveAs } from 'file-saver';
import Canvas from './canvas';


document.addEventListener("DOMContentLoaded", function(){
  
  let save = document.getElementById('saveing')
  save.addEventListener('click', () => {
    let canvasSave = document.getElementById("canvas");
    canvasSave.toBlob(function(blob) {
      saveAs(blob, "my_AWESOME_drawing.jpg");
    });
    
  })

  wackyHeader()
  SidebarMenu();
  const canvas = new Canvas();
});