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
onmouseout="sideMenuUI.HandleMouseout(this)">Home</div>
<div onmouseover="sideMenuUI.HandleMouseover(this)"; 
onmouseout="sideMenuUI.HandleMouseout(this)">Color Palette</div>
<div onmouseover="sideMenuUI.HandleMouseover(this)"; 
onmouseout="sideMenuUI.HandleMouseout(this)">Typography</div>
<div onmouseover="sideMenuUI.HandleMouseover(this)"; 
onmouseout="sideMenuUI.HandleMouseout(this)">Imagery</div>
<div onmouseover="sideMenuUI.HandleMouseover(this)"; 
onmouseout="sideMenuUI.HandleMouseout(this)">Prototype</div>
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