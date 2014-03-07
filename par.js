window.onload = function()
{
  var matrix = document.getElementById('matrix');
  var n = 4 * 4;

  for(var i = 0; i < n; i++)
  {
    var div = document.createElement('div');
    div.className = 'cell';
    div.style.backgroundImage = 'url(img/1.jpeg)';
    matrix.appendChild(div);
  }

  function getRandomArbitary(min, max)
  {
    return Math.random() * (max - min) + min;
  }


}
