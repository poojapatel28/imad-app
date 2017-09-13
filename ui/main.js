console.log('Loaded!');
var element=document.getElementById('main-text');
element.innerHTML='new value';

var img=document.getElementById('img');
var marginLeft=0;
function moveRight()
{
    marginLeft=marginLeft+10;
    img.style.marginLeft=marginleft+'px';
};
img.onClick=function()
{
    var interval=setInterval(moveRight,50);
   
};