let basicNumbers = {
    'M': 1000,
    'CM': 900,
    'D': 500,
    'CD': 400,
    'C': 100,
    'XC': 90,
    'L': 50,
    'XL': 40,
    'X': 10,
    'IX': 9,
    'V': 5,
    'IV': 4,
    'I': 1
  };
 
 function convertToRoman(num) {
  let result = "Roman: ";
  const numbers = Object.entries(basicNumbers);
  for(const [roman, arabic] of numbers) {
    while(num >= arabic) {
      num -= arabic;
      result += roman;
    }
  }
  return result;
 }
 
 function check() {
   var input = document.getElementById("input").value;
   var answer = document.getElementById("answer");
   if(input === ""){
     answer.innerText = "The input is empty!";
   }
   else if(input <= 0 || input > 3999){
     answer.innerText = "The number must be from 1 to 3999!";
   }
   else{
     answer.innerText = convertToRoman(input);
   }
 }
 
 function clearAll() {
   document.getElementById("input").value = "";
   document.getElementById("answer").innerText = "";
 }