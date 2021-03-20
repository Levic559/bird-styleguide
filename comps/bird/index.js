function BirdUI(){
return`

<div id="Bird"
style ="
// width:250%;
// height:250%;
//  background-image:url(../assets/bird.svg);
background-repeat: no-repeat;
z-index:1;
margin-top: -400px;
margin-left:-25px;
Opacity:0; 
"
 >
 <div 
style ="
width:250px;
height:450px;
 background-image:url(../assets/body.svg);
background-repeat: no-repeat;
z-index:1;
Opacity:1; position:relative"
 >
 
</div>
<div id="wind1"
style  ="
width:275px;
height:450px;
 background-image:url(../assets/wind1.svg);
background-repeat: no-repeat;
z-index:2;
Opacity:1; position:relative;
margin-top: -547.5px;
margin-left:-60px;

"
 >
</div>
<div  id="wind2"
style ="
width:165px;
height:450px;
 background-image:url(../assets/wind2.svg);
background-repeat: no-repeat;
z-index:0;
Opacity:1; position:relative;
margin-top: -565px;
margin-left:105px;

"
 >
</div>
</div>

`

}

// export  const Bird = BirdUI();