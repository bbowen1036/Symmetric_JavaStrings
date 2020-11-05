
export const SidebarMenu = () => {
  let openBtn = document.getElementById('open-sidebar');
  let sunflowerMode = document.getElementById('spiro')
  
  
  sunflowerMode.onclick = () => {
    let options = document.getElementById('sunflower-options')

    if (sunflowerMode.checked) {
      options.style.display = 'block'
    } else {
      options.style.display = 'none'
    }
  }

  openBtn.onclick = () => {
    let canvas = document.getElementById('canvas');
    let sidebar = document.getElementById('hide-me');

    openBtn.classList.toggle("change");
    sidebar.classList.toggle('open')
    
    if ('selector-bar open' === sidebar.classList.value) {
      
      sidebar.style.width = '250px'
      sidebar.style.padding = '23px'
      canvas.style.marginLeft = "250px"

    } else {
      sidebar.style.width = '0'
      sidebar.style.padding = '0'
      canvas.style.marginLeft = "0"
    }
  }
};
