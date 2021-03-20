function burGerUI(){
  return`
  <div  onmouseover="burGerUI.HandleMouseover(this)"; 
  onmouseout="burGerUI.HandleMouseout(this)"
  ;>
  <div style=" 
  width:80px;
  height:12.5px;
  background-color:#C4C4C4;
  margin:5px;
  border-radius:2.5px;
  "></div>
  <div style=" 
  width:80px;
  height:12.5px;
  background-color:#C4C4C4;
  margin:5px;
  border-radius:2.5px;
  "></div>
  <div style=" 
  width:80px;
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
function burGerClick (){
var sideMenu = document.getElementById("sideMenu")

if( sideMenu.style.opacity = "0"){
sideMenu.style.opacity = "1"
}
else  { 
  
  sideMenu.style.opacity = "0"
}
}

// export  const burGer = burGerUI();