function sideMenuUI(){
  return`
  <div  onmouseover="sideMenuUI.HandleMouseover(this)"; 
  onmouseout="sideMenuUI.HandleMouseout(this)">
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
sideMenuUI.HandleMouseover = (el) =>{
  el.style.opacity = 0.75;
}

sideMenuUI.HandleMouseout = (el) =>{
  el.style.opacity = 1;
}


// export  const sideMenu = sideMenuUI();