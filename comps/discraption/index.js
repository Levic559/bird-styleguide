function discraptionUI( Concept="Concept-1",onclick1="Horizontal()",onclick2="Vertical()", idea="The logo uses an eagle to imply your service is like an eagle can discover a piece of very detailed information on the sky."
,id_logoColor="logoColor",id_fontColor="fontColor"){
  return`
  <div id= "discraption" style="
  height:700px;
  width:400px;
  font-size: 24px;
  font-family: Roboto;
  font-weight: 400;
  color: #818181;
  text-align: center;
  display:flex;
  flex-direction:column;
  align-items:flex-start;
  justify-content:space-around;
  margin-top:50px;
  
  opacity:1;
  " >
  <div style=" font-size: 32px;"> ${Concept}  </div>
  <div style="text-align:left" id="Idea1"> Idea:<br>${idea}<br> </div>
  <div> Logo Size: 380px*170px  </div>
  <div > Logo Color:   <span id="${id_logoColor}">Black</span></div>
  <div> Font-family:  Roboto </div>
  <div> Font-size:84px </div>
  <div> Font-weight: 700 </div>
  <div > Color: <span id="${id_fontColor}">Black</span> </div>
  <div> Subtitle Font-family: Roboto </div>
  <div> Subtitle Font-size: 24px  </div>
  <div> Subtitle Font-weight: 100 </div>
  <div > Color: Black  </div>
  <div > Version: <span onclick="${onclick1}";
  onmouseover="Horizontal.HandleMouseover(this)";
  onmouseout="Horizontal.HandleMouseout(this)"
  
  
  
  >Horizontal </span> | <span onclick="${onclick2}";
  onmouseover="Vertical.HandleMouseover(this)";
  onmouseout="Vertical.HandleMouseout(this)"
  
  > Vertical </span></div>
  <div> Margin: 20px </div>

  </div>
  `
}
function Vertical(){
  var logo = document.querySelector("#logoidea_pic")
  logo.style.backgroundImage = "url('../assets/bird-logo-4.svg')";
  logo.style.width = "170px";
  logo.style.height = "330px";
  var optionButton1 = document.querySelector("#optionButton1")
  optionButton1.style.display="none";
  var optionButton2 = document.querySelector("#optionButton2")
  optionButton2.style.display="flex";

}function Vertical_2(){
  var logo = document.querySelector("#logoidea_pic_2")
  logo.style.backgroundImage = "url('../assets/bird-logo-5.svg')";
  logo.style.width = "380px";
  logo.style.height = "230px";
  var optionButton1 = document.querySelector("#optionButton1-2")
  optionButton1.style.display="none";
  var optionButton2 = document.querySelector("#optionButton2-2")
  optionButton2.style.display="flex";

}
function Vertical_3(){
  var logo = document.querySelector("#logoidea_pic_3")
  logo.style.backgroundImage = "url('../assets/bird-logo-11.svg')";
  logo.style.width = "200px";
  logo.style.height = "200px";
  var optionButton1 = document.querySelector("#optionButton1-3")
  optionButton1.style.display="none";
  var optionButton2 = document.querySelector("#optionButton2-3")
  optionButton2.style.display="flex";

}
function Horizontal(){
  var logo = document.querySelector("#logoidea_pic")
  logo.style.backgroundImage = "url('../assets/bird-logo-1.svg')";
  logo.style.width = "380px";
  logo.style.height = "170px";
  var optionButton1 = document.querySelector("#optionButton1")
  optionButton1.style.display="flex";
  var optionButton2 = document.querySelector("#optionButton2")
  optionButton2.style.display="none";
}
function Horizontal_2(){
  var logo = document.querySelector("#logoidea_pic_2")
  logo.style.backgroundImage = "url('../assets/bird-logo-7.svg')";
  logo.style.width = "370px";
  logo.style.height = "90px";
  var optionButton1 = document.querySelector("#optionButton1-2")
  optionButton1.style.display="flex";
  var optionButton2 = document.querySelector("#optionButton2-2")
  optionButton2.style.display="none";
}
function Horizontal_3(){
  var logo = document.querySelector("#logoidea_pic_3")
  logo.style.backgroundImage = "url('../assets/bird-logo-9.svg')";
  logo.style.width = "360px";
  logo.style.height = "105px";
  var optionButton1 = document.querySelector("#optionButton1-3")
  optionButton1.style.display="flex";
  var optionButton2 = document.querySelector("#optionButton2-3")
  optionButton2.style.display="none";
}
  Horizontal.HandleMouseover = (el) =>{
    el.style.fontWeight = "700";
  }
  Horizontal.HandleMouseout = (el) =>{
    el.style.fontWeight = "400";
  }
  Vertical.HandleMouseover = (el) =>{
    el.style.fontWeight = "700";
  }
  Vertical.HandleMouseout = (el) =>{
    el.style.fontWeight = "400";
  }


// export  const discraption = discraptionUI();