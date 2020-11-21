var discrimination=["Discrimination based on caste","Discrimination based on gender","Discrimination based on financial status"]


var i;
var x = "";


var button1=document.getElementById("bats");
  for(i=0;i<discrimination.length;i++){
    x+=discrimination[i]+"<br>";
  }
  document.getElementById("list1").innerHTML = x ; 

  document.getElementById("list1").style.display="none"; 
button1.onclick=()=>{
  button1.style.display="none";
  document.getElementById("list1").style.display="inherit"; 
}


