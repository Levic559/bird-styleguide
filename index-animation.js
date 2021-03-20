function myFunction() {
  var LogoUI = document.getElementById("main");
  LogoUI.style.WebkitAnimation = "logomove 1.5s linear";
  LogoUI.style.top = "350px";
  LogoUI.style.opacity= "1";
}
function showSubtitle(){
  var subtitle = document.getElementById("subtitle")
  subtitle.style.opacity="1";
  subtitle.style.WebkitAnimation=".5s";
}

function flyBird(){
   var Bird = document.getElementById("Bird");
   Bird.style.WebkitAnimation = "flyBird 2s linear";
   Bird.style.opacity= "1";

}
function swipwind1(){
  var wind1 = document.getElementById("wind1");
  wind1.style.WebkitAnimation = "swipwind1 1s linear 10";
}
function swipwind2(){
  var wind2 = document.getElementById("wind2");
  wind2.style.WebkitAnimation = "swipwind2 1s linear 10";
}
myFunction()

swipwind1()
swipwind2()
setTimeout(showSubtitle,1500)
setTimeout(flyBird,2000)
onload = myFunction