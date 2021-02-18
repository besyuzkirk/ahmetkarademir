//------------------------------THEME--------------------------------// 
function nightTheme() {
    document.body.style.backgroundImage = "radial-gradient(at 60% bottom, black,blue)";
}

function aTheme() {
    document.body.style.backgroundImage = "radial-gradient(at 60% bottom, yellow,red)";
}

function gTheme() {
    document.body.style.backgroundImage = "radial-gradient(at 10% bottom, blue,white)";
}
//--------------------------------------------------------------------//


//-------------------------HEADER HOVER-------------------------------// 
document.getElementById('header').onmouseover = function()  {mouseOver()};
document.getElementById('header').onmouseout = function()  {mouseOut()};

var fly1 = document.getElementById('middleCloudOne');
var fly2 = document.getElementById('smallestCloud');
var fly3 = document.getElementById('smallestCloudSecond');
var fly4 = document.getElementById('rightFlyingCloud');

function mouseOver() {
    fly1.style.animationPlayState = 'paused';
    fly2.style.animationPlayState = 'paused';
    fly3.style.animationPlayState = 'paused';
    fly4.style.animationPlayState = 'paused';
}

function mouseOut() {

    fly1.style.animationPlayState = 'running';
    fly2.style.animationPlayState = 'running';
    fly3.style.animationPlayState = 'running';
    fly4.style.animationPlayState = 'running';
}
//--------------------------------------------------------------------------//