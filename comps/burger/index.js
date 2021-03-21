function burGerUI(){
  return`
  <div  onmouseover="burGerUI.HandleMouseover(this)"; 
  onmouseout="burGerUI.HandleMouseout(this)";
  onclick="burGerOpen()"
  ;>
  <div style=" 
  width:50px;
  height:7.5px;
  background-color:#8d8d8d;
  margin:5px;
  border-radius:2.5px;
  "></div>
  <div style=" 
  width:50px;
  height:7.5px;
  background-color:#8d8d8d;
  margin:5px;
  border-radius:2.5px;
  "></div>
  <div id=" lastburGer " style=" 
  width:50px;
  height:7.5px;
  background-color:#8d8d8d;
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
  if(sideMenu.style.opacity == "0"){
  sideMenu.style.opacity = "1";
  var menu = document.getElementById("menu")
  menu.style.backgroundColor = "lightgrey";

  }
  else if(sideMenu.style.opacity == "1"){
    sideMenu.style.opacity = "0";
    var menu = document.getElementById("menu")
    menu.style.backgroundColor = "#c4c4c4";
  }
}
// export  const burGer = burGerUI();