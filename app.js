function ageCalculate() {
  var inputDate = document.getElementById("inputDate");
  console.log(inputDate.value);
  var birthDate = new Date(inputDate.value);

  var birthYear = birthDate.getFullYear();
  console.log(birthYear);

  var birthMonth = birthDate.getMonth();
  console.log(birthMonth);

  var birthday = birthDate.getDate();
  console.log(birthday);

  var today = new Date();

  let age = today.getFullYear() - birthDate.getFullYear();
  console.log(age);
  const monthDifference = today.getMonth() - birthDate.getMonth();
  console.log(monthDifference);
  const dayDifference = today.getDate() - birthDate.getDate();
  console.log(dayDifference);
  
var h1Year=document.getElementById('h1Year')
h1Year.textContent=age

 
var h1Month=document.getElementById('h1Months')
h1Month.textContent=monthDifference

 
var h1Days=document.getElementById('h1Days')
h1Days.textContent=dayDifference



}
