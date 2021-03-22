function discraptionUI(){
  return`
  <div id= "discraption" style="
  height:700px;
  width:400px;
  font-size: 24px;
  font-family: Roboto;
  font-weight: 700;
  color: #818181;
  text-align: center;
  display:flex;
  flex-direction:column;
  align-items:flex-start;
  justify-content:space-around;
  margin-top:50px;
  
  opacity:1;
  " >
  <div> Concept-1  </div>
  <div style="text-align:left"> Idea:<br>The logo uses an eagle to imply your service is like an eagle can discover a piece of very detailed information on the sky.<br> </div>
  <div> Logo Size: 380px*170px  </div>
  <div > Logo Color:   <span id="logoColor">Black</span></div>
  <div> Font-family:  Roboto </div>
  <div> Font-size:84px </div>
  <div> Font-weight: 700 </div>
  <div > Color: <span id="fontColor">Black</span> </div>
  <div> Subtitle Font-family: Roboto </div>
  <div> Subtitle Font-size: 24px  </div>
  <div> Subtitle Font-weight: 100 </div>
  <div > Color: Black  </div>
  <div > Version: <span onclick="Horizontal()">Horizontal </span> | <span onclick="Vertical()"> Vertical </span></div>
  <div> Margin: 20px </div>

  </div>
  `
}
function Vertical(){
  var logo = document.querySelector("#logoidea_pic")
  logo.style.backgroundImage = "url('../assets/bird-logo-4.svg')";
  logo.style.width = "170px";
  logo.style.height = "330px";
  
}
function Horizontal(){
  var logo = document.querySelector("#logoidea_pic")
  logo.style.backgroundImage = "url('../assets/bird-logo-1.svg')";
  logo.style.width = "380px";
  logo.style.height = "170px";


}

// export  const discraption = discraptionUI();