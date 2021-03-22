function logoideaUI( id="logoidea_pic",url="url(../assets/bird-logo-1.svg)",width="380px",height="170px",
funcTion1="changeColor1()",funcTion2="changeColor2()",funcTion3="changeColor3()",funcTion4="changeColor4()"
,optionButton="optionButton1",optionButton2="optionButton2"){
  return`
  <div id= "logoidea" style="
  height:600px;
  width:800px;
  display:flex;
  flex-direction:row;
  align-items:center;
  justify-content:center;
  " >
  <div id= "${id}" 
  style="
  background-image:${url} ;
  background-image: no-repeat;
 width:${width};height:${height}">  </div>
  
  </div>
  <div id="${optionButton}"  style="
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
  " onclick="${funcTion1}";
  onmouseover="logoideaUI.HandleMouseover(this)";
  onmouseout="logoideaUI.HandleMouseout(this)"></div>   
  <div style="
  width:20px;
  height:20px;
  border-radius:50%;
  background-color: #CC6666;
  border: 0.5px solid grey;
  " onclick="${funcTion2}";
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
   
   <div id="${optionButton2}"  style="
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
  " onclick="${funcTion3}";
  onmouseover="logoideaUI.HandleMouseover(this)";
  onmouseout="logoideaUI.HandleMouseout(this)"></div>   
  <div style="
  width:20px;
  height:20px;
  border-radius:50%;
  background-color: #CC6666;
  border: 0.5px solid grey;
  " onclick="${funcTion4}";
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
function changeColor1_2(){
  var logo = document.querySelector("#logoidea_pic_2")
  logo.style.backgroundImage = "url('../assets/bird-logo-7.svg')";
  var logoColor = document.querySelector("#logoColor2")
  logoColor.innerHTML="black";
  var logoColor = document.querySelector("#fontColo2r")
  logoColor.innerHTML="black";
  
}
function changeColor1_3(){
  var logo = document.querySelector("#logoidea_pic_3")
  logo.style.backgroundImage = "url('../assets/bird-logo-9.svg')";
  var logoColor = document.querySelector("#logoColor3")
  logoColor.innerHTML="black";
  var logoColor = document.querySelector("#fontColor3")
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
function changeColor2_2(){
  var logo = document.querySelector("#logoidea_pic_2")
  logo.style.backgroundImage = "url('../assets/bird-logo-8.svg')";
  var logoColor = document.querySelector("#logoColor2")
  logoColor.innerHTML="#FF3300";
  var logoColor = document.querySelector("#fontColor2")
  logoColor.innerHTML="#FF3300"
  
}
function changeColor2_3(){
  var logo = document.querySelector("#logoidea_pic_3")
  logo.style.backgroundImage = "url('../assets/bird-logo-10.svg')";
  var logoColor = document.querySelector("#logoColor3")
  logoColor.innerHTML="#993333";
  var logoColor = document.querySelector("#fontColor3")
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
function changeColor4_2(){
  var logo = document.querySelector("#logoidea_pic_2")
  logo.style.backgroundImage = "url('../assets/bird-logo-6.svg')";
  var logoColor = document.querySelector("#logoColor2")
  logoColor.innerHTML="#FF3300";
  var logoColor = document.querySelector("#fontColor2")
  logoColor.innerHTML="#FF3300"
  
}
function changeColor4_3(){
  var logo = document.querySelector("#logoidea_pic_3")
  logo.style.backgroundImage = "url('../assets/bird-logo-12.svg')";
  var logoColor = document.querySelector("#logoColor3")
  logoColor.innerHTML="#993333";
  var logoColor = document.querySelector("#fontColor3")
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
function changeColor3_2(){
  var logo = document.querySelector("#logoidea_pic_2")
  logo.style.backgroundImage = "url('../assets/bird-logo-5.svg')";
  var logoColor = document.querySelector("#logoColor2")
  logoColor.innerHTML="black";
  var logoColor = document.querySelector("#fontColor2")
  logoColor.innerHTML="black"
  
}
function changeColor3_3(){
  var logo = document.querySelector("#logoidea_pic_3")
  logo.style.backgroundImage = "url('../assets/bird-logo-11.svg')";
  var logoColor = document.querySelector("#logoColor3")
  logoColor.innerHTML="black";
  var logoColor = document.querySelector("#fontColor3")
  logoColor.innerHTML="black"
  
}
function changeBgcColor1(){
  var BgcColor = document.querySelector(".logoarea")
  BgcColor.style.backgroundColor=" black"
}
function changeBgcColor2(){
  var BgcColor = document.querySelector(".logoarea")
  BgcColor.style.backgroundColor=" #ecececec"
}
logoideaUI.HandleMouseover = (el) =>{
  el.style.opacity = 0.75;
}

logoideaUI.HandleMouseout = (el) =>{
  el.style.opacity = 1;
}

// export  const logoidea =logoideaUI();