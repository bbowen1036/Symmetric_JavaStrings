
export const SidebarMenu = () => {
  let closeBtn = document.getElementById("close-sidebar");
  let openBtn = document.getElementById('open-sidebar');

  
  openBtn.onclick = () => {
    let canvas = document.getElementById('canvas');
    let sidebar = document.getElementById('hide-me');
    
    sidebar.style.width = '250px'
    sidebar.style.padding = '23px'
    
    canvas.style.marginLeft = "250px"
  }

  closeBtn.onclick = () => {
    let canvas = document.getElementById('canvas');
    let sidebar = document.getElementById('hide-me');
    
    sidebar.style.width = '0'
    sidebar.style.padding = '0'

    canvas.style.marginLeft = "0"
  }

  
};
