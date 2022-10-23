
const btn=document.querySelector('button');
const body=document.querySelector('body');

const colores=['blue', 'yellow', 'green', 'black', 'aliceblue','antiquewhite','aqua', 'brown','cadetblue', 'coral', 'chocolate', 'cornflowerblue', 'cornsilk', 'crimson', 'cyan', 'darkgoldenrod', 'darkkhaki', 'darkmagenta', 'darkolivegreen', 'darkorchid', 'darkred', 'darkseagreen', 'darkslategray', 'darkslategrey', 'darkturquoise', 'hotpink', 'honeydew', 'khaki', 'lavender', 'lavenderblush', 'lawngreen', 'lemonchiffon', 'lightblue', 'lightcoral', 'lightcyan', 'lightgoldenrodyellow', 'lightgray', 'lightgreen', 'lightgrey', 'lightpink', 'lightsalmon', 'lightseagreen', 'lightskyblue', 'lightslategray', 'lightslategrey', 'lightsteelblue', 'limegreen', 'linen', 'mediumaquamarine', 'mediumturquoise', 'mediumspringgreen', 'mistyrose', 'navajowhite', 'oldlace'];

btn.addEventListener('click', fondo)

function fondo() {
  var indice=parseInt(Math.random()*colores.length);
  body.style.backgroundColor=colores[indice];
  document.getElementById("color").innerHTML= colores[indice];
  
}