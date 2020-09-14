function loginSite() {
  const login = document.getElementById('telaLogin');
  if (login.style.display == 'none') {
    login.style.display = 'block';
  } else {
    login.style.display = 'none';
  }
  window.onclick = function(event) {
    if (event.target == login) {
      login.style.display = "none";
    }
  }
}