(function () {
  var variants = [
    ['v-atelier.html', 'Atelier'],
    ['v-coral.html', 'Coral'],
    ['v-arcade.html', 'Arcade'],
    ['v-blueprint.html', 'Blueprint'],
    ['v-ink.html', 'Ink'],
  ];

  var here = location.pathname.split('/').pop() || 'index.html';
  var nav = document.createElement('nav');
  nav.id = 'variant-switcher';
  nav.setAttribute('aria-label', 'Elegir variante de diseño');

  var rail = document.createElement('div');
  variants.forEach(function (v) {
    var a = document.createElement('a');
    a.href = v[0];
    a.textContent = v[1];
    if (v[0] === here) a.setAttribute('aria-current', 'page');
    rail.appendChild(a);
  });

  nav.appendChild(rail);
  document.body.appendChild(nav);
})();
