function toggleTheme() {
    var body = document.querySelector('body');
    body.classList.toggle('dark-mode');
  }
  
  var buttonVariable = document.getElementById('toggleButton');
  buttonVariable.onclick = toggleTheme;
  