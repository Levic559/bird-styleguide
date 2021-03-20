function OptionsUI(id="Options", url=" https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ-r0CpT8B8c18zhR_QILDHZY-ElmV3FZ3vZQ&usqp=CAU", Site="../Covid-19_Options/covid-19_options.html" 
,text="Covid-19"){
return`
<div id="${id}" style="
width:180px;
height:130px;
border-radius:20px;
overflow:hidden;
display:flex;
flex-direction: column;
"
onclick="location.href = '${Site}'";
onmouseover="OptionsUI.mouseover(this)";
onmouseout="OptionsUI.mouseout(this)";
> 
<div style=" 
height:20px;
width:180px;
text-align:center;
font-family:Roboto;
font-weight:400;
font-size:16px;
Background-color: lightgrey;
line-hight:20px;
z-index:1;
">${text}</div>

<img style="
  height:100%;
  weight:100%;
  object-fit:cover;
 "
  src="${url}"/>

  
<div>

`

}
    
OptionsUI.mouseover = (el) =>{
  el.style.opacity = 0.5;
}

OptionsUI.mouseout = (el) =>{
  el.style.opacity = 1;
}


// export  const Options = OptionsUI();