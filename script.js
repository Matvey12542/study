window.onload = function() {
  //alert('123');
  alert (navigator.userAgent);
  createMatrix();

  var x = 0;
  var cyrs = 'left';
  setCell(x, true);

  function move()
  {
    setCell(x, false);

    switch (cyrs)
    {
      case 'left':
      x++;
      break;
      case 'right':
      x--;
      break;
     case 'up':
      x -= 20;
      break;
      case 'down':
      x += 20;
      break;
    }


    setCell(x, true);

  }

  setInterval(move, 400);

  document.onkeydown = function(e)
  {
    var keyCode = e.keyCode;
    //console.log(keyCode);

    switch(keyCode)
    {
      case 37:
      cyrs = 'right';
      break;
      case 38:
      cyrs = 'up';
      break;
      case 39:
      cyrs = 'left';
      break;
      case 40:
      cyrs = 'down';
      break;
    }
  }

}
