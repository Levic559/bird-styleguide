function burGerUI(){
  return`
  <div  onmouseover="burGerUI.HandleMouseover(this)"; 
  onmouseout="burGerUI.HandleMouseout(this)";
  onclick="burGerOpen()"
  ;>
  <div style=" 
  width:75px;
  height:12.5px;
  background-color:#C4C4C4;
  margin:5px;
  border-radius:2.5px;
  "></div>
  <div style=" 
  width:75px;
  height:12.5px;
  background-color:#C4C4C4;
  margin:5px;
  border-radius:2.5px;
  "></div>
  <div id=" lastburGer " style=" 
  width:75px;
  height:12.5px;
  background-color:#C4C4C4;
  margin:5px;
  border-radius:2.5px;
  "></div>
  </div>
  `
}
burGerUI.HandleMouseover = (el) =>{
  el.style.opacity = 0.75;
}

burGerUI.HandleMouseout = (el) =>{
  el.style.opacity = 1;
}
function burGerOpen (){
var sideMenu = document.getElementById("sideMenu")
sideMenu.style.opacity = "1";
var lastburGer = document.getElementById("lastburGer")
lastburGer.style.opacity="0";
}


// export  const burGer = burGerUI();