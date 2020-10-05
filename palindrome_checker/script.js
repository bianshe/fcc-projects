function isPalindrome(str) {
    var result = str.match(/[a-z0-9]/gi);
    for(var i = 0; i < result.length / 2; i++) {
      if(result[i].toLowerCase() !== result[result.length - i - 1].toLowerCase()) {
        return false;
      }
    }
    return true;
  }
  
  function check() {
    var input = document.getElementById("input").value;
    var answer = document.getElementById("answer");
    if(input === ""){
      answer.innerText = "The input is empty!";
      return;
    }
    
    if(isPalindrome(input)) {
      answer.innerText = "It's a palindrome!";
    }
    else {
      answer.innerText = "It's not a palindrome!";
    }
  }
  
  function clearAll() {
    document.getElementById("input").value = "";
    document.getElementById("answer").innerText = "";
  }