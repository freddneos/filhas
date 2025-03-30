document.addEventListener('DOMContentLoaded', function() {
  // Inicialização do sidenav (menu mobile)
  var elems = document.querySelectorAll('.sidenav');
  var instances = M.Sidenav.init(elems);
  
  // Adiciona event listeners aos links do menu mobile para fechar o menu após clicar
  document.querySelectorAll('.sidenav a').forEach(function(link) {
    link.addEventListener('click', function() {
      var sidenavInstance = M.Sidenav.getInstance(document.getElementById('nav-mobile'));
      if (sidenavInstance) {
        sidenavInstance.close();
      }
    });
  });
});