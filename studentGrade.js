//const promptInput = prompt("Please enter");
//const myprompt = reqire("prompt-sync")({ sigint: true});
const grade = prompt("Enter grade");
userGrade(grade);

//var holds the user input
//A > 79, B - 60 to 79, C -  49 to 59, D - 40 to 49, E - less 40.
//functiom(userInput)
//verify if 0-100
//if
//return userGrade

function userGrade(userInput) {
    let finalGrade = "E";
    if (userInput >=0 && userInput < 40) { //from 0 to 39
          finalGrade = "E";    
    }else if (userInput >=40 && userInput <49){ //from 40 to 48
        finalGrade = "D";
    }else if (userInput >=49 && userInput <=59){ //from 49 to 59
        finalGrade = "C";
    }else if (userInput >=60 && userInput <=79){ //from 60 to 79
        finalGrade = "B";
    }else if (userInput >79 && userInput <=100){ //from 80 to 100
        finalGrade = "A";
    
}
document.getElementById("response").innerText = finalGrade;
}
