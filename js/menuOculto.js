function menuOculto() {
  const tela = document.getElementById('tela-oculta');
  if (tela.style.display == 'none') {
    tela.style.display = 'block';
  } else {
    tela.style.display = 'none';
  }
  window.onclick = function(event) {
    if (event.target == tela) {
      tela.style.display = "none";
    }
  }
  
}