
 let input_value1=document.querySelector('.inp1');
 let input_value2=document.querySelector('.inp2');
 let ans =document.getElementById("ans");
//  let ansh1=document.getElementById("ans");


 function calculate(){
  //  if((input_value1==input_value2) && (input_value2=="")){
  //   alert("Please Enter The Temprature");
  //  }
if(input_value1.value !=""){
     console.log((input_value1).value);
     input_value1=((input_value1).value*9/5)+32;
     console.log(input_value1)
     ans.value=(input_value1)+"°F";
     ans.style.display="block"
     document.getElementById("reset").style.display="block"
   }
   else if(input_value2.value !=""){
    console.log((input_value2).value);
    input_value2=(input_value2.value-32)*5/9;
    ans.value=input_value2+"°C";
    ans.style.display="block";
    document.getElementById("reset").style.display="block"

   }
   else{
    ans.style.display="block";
    document.getElementById("reset").style.display="block"
   }
   
 }
 function reset(){
 location.reload();

 }
