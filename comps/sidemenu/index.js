function sideMenuUI(){
  return`
  <div id= "sideMenu" style="
  height:500px;
  font-size: 18px;
  font-family: Roboto;
  font-weight: 700;
  color: #818181;
  text-align: center;
  display:flex;
  flex-direction:column;
  align-items:space-around;
  justify-content:space-around;
  margin:20px;
  opacity:0;
  " >
<div onmouseover="sideMenuUI.HandleMouseover(this)"; 
onmouseout="sideMenuUI.HandleMouseout(this)" onclick = "location.href='../index/index.html'">Home</div>
<div onmouseover="sideMenuUI.HandleMouseover(this)"; 
onmouseout="sideMenuUI.HandleMouseout(this)" ; onclick = "location.href='../logo/logo.html'">Logo</div>
<div onmouseover="sideMenuUI.HandleMouseover(this)"; 
onmouseout="sideMenuUI.HandleMouseout(this)" ; onclick = "location.href='../color/color.html'">Color Palette</div>
<div onmouseover="sideMenuUI.HandleMouseover(this)"; 
onmouseout="sideMenuUI.HandleMouseout(this)">Typography</div>
<div onmouseover="sideMenuUI.HandleMouseover(this)"; 
onmouseout="sideMenuUI.HandleMouseout(this)">Imagery</div>
<div onmouseover="sideMenuUI.HandleMouseover(this)"; 
onmouseout="sideMenuUI.HandleMouseout(this)">Prototype</div>
<div onmouseover="sideMenuUI.HandleMouseover(this)"; 
onmouseout="sideMenuUI.HandleMouseout(this)";
onclick="closesideMenu(this)">Close</div>
  </div>
  `
}
sideMenuUI.HandleMouseover = (el) =>{
  el.style.opacity = 0.5;
}

sideMenuUI.HandleMouseout = (el) =>{
  el.style.opacity = 1;
}
function closesideMenu  () {
  var sideMenu = document.querySelector("#sideMenu")
  sideMenu.style.opacity = "0";
  var menu = document.getElementById("menu")
  menu.style.backgroundColor = "#c4c4c4";
}

// export  const sideMenu = sideMenuUI();