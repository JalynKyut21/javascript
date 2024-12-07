//DISPLAY NAME
function displayName(name) {
    document.write(name);
  }
  //BUTTON ALERT
  function buttonAlert() {
    alert("You clicked the button!");
  }
  function changeColor() {
    document.getElementById("color").style.color = "red";
  }
  function productOfTwoNumbers(firstNumber, secondNumber, outputDisplay) {
    var product = firstNumber * secondNumber;
    document.getElementById(outputDisplay).innerHTML = product;
  }
  function ComputeGrade(){
    let name = prompt("Enter your name");
    var totalItems = parseInt(prompt("Enter Total Items: "));
    var totalScore = parseInt(prompt("Enter Total Score: "));
    var result = formula(totalItems, totalScore).toFixed(2);
    alert( `Your Name Is: ${name} \nYour Score is: ${ result} \nResult: ${ checkResult(result)}`);
    console.log("Your name is: "+ name + "\n"+ "your score is: "+ result + "\n"+ "result: "+ checkResult(result));

    //for output at the web page
    document.write("<br>");
    document.write("<br>");
    document.write("Your name is: "+ name+"<br>your score is: "+ result + "<br>result: "+ checkResult(result));
    
}

function formula(totalItems, totalScore) {
    return -4 * (totalScore / totalItems) + 5;
}

function checkResult(result){
    if (result > 3.0) {
        return "You failed";
    } else {
        return "You passed";
    }
}