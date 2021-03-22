function BtnStartUI(){
  return`
  <div id="BtnStart" style=" 
  width:175px;
  height:55px;
  border-radius: 27.5px;
  font-size:20px;
  line-height: 55px;
  text-align: center;
  font-weight:700;
  font-family: Roboto;
  background-color:#818181;
  color:#454545;
  z-index:5;
  margin-top:300px;
  "
  onmouseover="BtnStartUI.mouseover(this)";
  onmouseout="BtnStartUI.mouseout(this)";
  onclick="location.href = '../logo/logo.html'";
  
  >Let's start</div>
  
  `
}
BtnStartUI.mouseover = (el) =>{
  el.style.opacity = 0.75;
}

BtnStartUI.mouseout = (el) =>{
  el.style.opacity = 1;
}



// export  const BtnStart = BtnStartUI();