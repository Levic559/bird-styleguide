function logoideaUI(){
  return`
  <div id= "logoidea" style="
  height:600px;
  width:800px;
  display:flex;
  flex-direction:row;
  align-items:center;
  justify-content:center;
  " >
  <div id= "logoidea_pic" 
  style="
  background-image:url(../assets/bird-logo-1.svg) ;
  background-image: no-repeat;
  width:380px;height:170px">  </div>
  
  </div>
  <div id="optionButton1"  style="
  display:flex;
  flex-direction:row;
  justify-content:space-between;
  width:120px;
  ">  
  <div style="
  width:20px;
  height:20px;
  border-radius:50%;
  background-color: black;
  border: 0.5px solid grey;
  " onclick="changeColor1()";
  onmouseover="logoideaUI.HandleMouseover(this)";
  onmouseout="logoideaUI.HandleMouseout(this)"></div>   
  <div style="
  width:20px;
  height:20px;
  border-radius:50%;
  background-color: #CC6666;
  border: 0.5px solid grey;
  " onclick="changeColor2()";
  onmouseover="logoideaUI.HandleMouseover(this)";
  onmouseout="logoideaUI.HandleMouseout(this)"
  ></div> 
  <div style="
  width:20px;
  height:20px;
  border-radius:50%;
  background-color: Black;
  border: 0.5px solid grey;
  " onclick="changeBgcColor1()";
  onmouseover="logoideaUI.HandleMouseover(this)";
  onmouseout="logoideaUI.HandleMouseout(this)"
  ></div>  
  <div style="
  width:20px;
  height:20px;
  border-radius:50%;
  background-color:  #ecececec;
  border: 0.5px solid grey;
  " onclick="changeBgcColor2()";
  onmouseover="logoideaUI.HandleMouseover(this)";
  onmouseout="logoideaUI.HandleMouseout(this)"
  ></div>  
   </div>
   
   <div id="optionButton2"  style="
  display:flex;
  flex-direction:row;
  justify-content:space-between;
  width:120px;
  display:none;
  ">  
  <div style="
  width:20px;
  height:20px;
  border-radius:50%;
  background-color: black;
  border: 0.5px solid grey;
  " onclick="changeColor3()";
  onmouseover="logoideaUI.HandleMouseover(this)";
  onmouseout="logoideaUI.HandleMouseout(this)"></div>   
  <div style="
  width:20px;
  height:20px;
  border-radius:50%;
  background-color: #CC6666;
  border: 0.5px solid grey;
  " onclick="changeColor4()";
  onmouseover="logoideaUI.HandleMouseover(this)";
  onmouseout="logoideaUI.HandleMouseout(this)"
  ></div> 
  <div style="
  width:20px;
  height:20px;
  border-radius:50%;
  background-color: Black;
  border: 0.5px solid grey;
  " onclick="changeBgcColor1()";
  onmouseover="logoideaUI.HandleMouseover(this)";
  onmouseout="logoideaUI.HandleMouseout(this)"
  ></div>  
  <div style="
  width:20px;
  height:20px;
  border-radius:50%;
  background-color:  #ecececec;
  border: 0.5px solid grey;
  " onclick="changeBgcColor2()";
  onmouseover="logoideaUI.HandleMouseover(this)";
  onmouseout="logoideaUI.HandleMouseout(this)"
  ></div>  
   </div>
  `
}
function changeColor1(){
  var logo = document.querySelector("#logoidea_pic")
  logo.style.backgroundImage = "url('../assets/bird-logo-1.svg')";
  var logoColor = document.querySelector("#logoColor")
  logoColor.innerHTML="black";
  var logoColor = document.querySelector("#fontColor")
  logoColor.innerHTML="black";
  
}
function changeColor2(){
  var logo = document.querySelector("#logoidea_pic")
  logo.style.backgroundImage = "url('../assets/bird-logo-2.svg')";
  var logoColor = document.querySelector("#logoColor")
  logoColor.innerHTML="#CC6666";
  var logoColor = document.querySelector("#fontColor")
  logoColor.innerHTML="#993333"
  
}
function changeColor4(){
  var logo = document.querySelector("#logoidea_pic")
  logo.style.backgroundImage = "url('../assets/bird-logo-3.svg')";
  var logoColor = document.querySelector("#logoColor")
  logoColor.innerHTML="#CC6666";
  var logoColor = document.querySelector("#fontColor")
  logoColor.innerHTML="#993333"
  
}
function changeColor3(){
  var logo = document.querySelector("#logoidea_pic")
  logo.style.backgroundImage = "url('../assets/bird-logo-4.svg')";
  var logoColor = document.querySelector("#logoColor")
  logoColor.innerHTML="black";
  var logoColor = document.querySelector("#fontColor")
  logoColor.innerHTML="black"
  
}
function changeBgcColor1(){
  var BgcColor = document.querySelector(".content")
  BgcColor.style.backgroundColor=" black"
}
function changeBgcColor2(){
  var BgcColor = document.querySelector(".content")
  BgcColor.style.backgroundColor=" #ecececec"
}
logoideaUI.HandleMouseover = (el) =>{
  el.style.opacity = 0.75;
}

logoideaUI.HandleMouseout = (el) =>{
  el.style.opacity = 1;
}

// export  const logoidea =logoideaUI();