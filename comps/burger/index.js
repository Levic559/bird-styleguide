function burGerUI(){
  return`
  <div  onmouseover="burGerUI.HandleMouseover(this)"; 
  onmouseout="burGerUI.HandleMouseout(this)";
  onclick="burGerOpen()"
  ;>
  <div style=" 
  width:60px;
  height:12.5px;
  background-color:#8d8d8d;
  margin:5px;
  border-radius:2.5px;
  "></div>
  <div style=" 
  width:60px;
  height:12.5px;
  background-color:#8d8d8d;
  margin:5px;
  border-radius:2.5px;
  "></div>
  <div id=" lastburGer " style=" 
  width:60px;
  height:12.5px;
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
  sideMenu.style.opacity = "1";
  
  
  
  var menu = document.getElementById("menu")
  menu.style.backgroundColor = "lightgrey";



  }

// export  const burGer = burGerUI();