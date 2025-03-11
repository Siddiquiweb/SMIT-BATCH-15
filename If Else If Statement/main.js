let userName="";
let userAge=10;
let userCountry="";
let userCity="";
let userGender="";
let userEducation="";


//get user input

userName=prompt("Enter your name: ");
userAge=parseInt(prompt("Enter your age: "));
userCountry=prompt("Enter your country: ");
userCity=prompt("Enter your city: ");
userGender=prompt("Enter your gender: ");
userEducation=prompt("Enter your education: ");

//check  if user input is valid

if(userAge>=18){
  alert("You are an adult");  
}
else if(userAge>=13){
  alert("You are a teenager");
}
else{
  alert("You are a child");
}

if(userCountry==""){
  alert("You are a"+userCountry);
}
else{
  alert("You are not a Pakistani");
}

if(userCity==""){
  alert("You are from "+userCity);
}
else{
  alert("You are not from Karachi");
}

if(userGender ==""){
  alert
  ("You are a "+userGender); 
}
else{
  alert("You are a female");
}
if(userEducation==""){
  alert("You are a student ' "+userEducation);
}
else if(userEducation=="Intermediate"){
  alert("You are an Intermediate student");
}
else if(userEducation=="Bachelors"){
  alert("You are a Bachelors student");
}

else{
  alert("You are not a student");
}

///check user console


console.log("Name: "+userName);
console.log("Age: "+userAge);
console.log("Country: "+userCountry);
console.log("City: "+userCity);
console.log ("Gender: "+userGender);
console.log("Education: "+userEducation);



///check user interface 

document.write("Name: "+userName+"<br>");
document.write("Age: "+userAge+"<br>");
document.write("Country: "+userCountry+"<br>");
document.write("City: "+userCity+"<br>");
document.write("Gender: "+userGender+"<br>");
document.write("Education: "+userEducation+"<br>");
 