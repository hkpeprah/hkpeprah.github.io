(function() {
  var currentScript = document.currentScript;
  var container = document.getElementsByClassName('random')[0];

  function generateYT(id) {
    return '<iframe src="//www.youtube.com/embed/' + id +
      '?autoplay=1&iv_load_policy=3&rel=0" frameborder="0" allowfullscreen></iframe>';
  }

  function shuffle(lst) {
    var tmp;
    var index;
    var currentIndex = lst.length;
    while (currentIndex > 0) {
      index = Math.floor(Math.random() * currentIndex);
      currentIndex--;
      tmp = lst[currentIndex];
      lst[currentIndex] = lst[index];
      lst[index] = tmp;
    }
    return lst;
  }

  function rand(callback) {
    var target = document.getElementsByClassName('random')[0];
    var queries = [
      'ZZ5LpwO-An4', // He-Man
      'm9P4trNWxYk', // Tribunal: Dubbed
      'wo_81xQb2GA', // Touch Your Gun
      'utLWiscq8d4', // Cowboy Bebop Fight Scene
      'yz5BU44_h74', // Pop it, Don't drop it
      'n049JQaXAPE', // Sentry Knockback
      'foXTsDKvRgc', // Clock Tower
      'Y9jgxn8I2U0', // Stop it you ninny
      'F0TEvK-mjlg'  // Inner Frat Boy
    ];
    var id = shuffle(queries)[0];
    target.innerHTML = generateYT(id);
    callback();
  }

  window.onload = (function() {
    rand(function() {
      currentScript
        .parentNode
        .removeChild(currentScript);
    });
  });
})();
