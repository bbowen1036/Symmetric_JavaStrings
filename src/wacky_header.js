export const wackyHeader = () => {
  const header = document.getElementById('wacky-header');
  const canvas = document.getElementById('canvas');

  canvas.addEventListener('mousemove', (e) => {
    header.style.backgroundColor = `rgb(${e.offsetX % (255 *2 )}, ${e.offsetY % (255 * 2) }, ${e.clientX % 225})`;

  })
}