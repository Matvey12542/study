function createMatrix()
{

  var matrix = document.getElementById('matrix');
  var n = 20 * 20;

  for (var i = 0; i < n; i++)
  {
    var div = document.createElement('div');
    div.className = 'cell';
    matrix.appendChild(div);
  }
}

function setCell(num, val)
{
  var matrix = document.getElementById('matrix');
  var cell = matrix.children[num];

  if (val)
  {
    cell.style.backgroundColor = 'red';
  }
  else
  {
    cell.style.backgroundColor = 'transparent';
  }
}
