function ageCalculate(){
   var inputDate=document.getElementById('inputDate')
   console.log(inputDate.value)
   var birthDate=new Date(inputDate.value)

var birthYear= birthDate.getFullYear();
   console.log(birthYear)

   var birthMonth= birthDate.getMonth();
   console.log(birthMonth)
   
   var birthday= birthDate.getDate();
   console.log(birthday)
   
   var today= new Date()
   
   let age = today.getFullYear() - birthDate.getFullYear();
   console.log(age)
   const monthDifference = today.getMonth() - birthDate.getMonth();
   console.log(monthDifference)
    const dayDifference = today.getDate() - birthDate.getDate();
    console.log(dayDifference)
}