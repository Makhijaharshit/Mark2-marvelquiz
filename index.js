console.log("Today we are going to do a small marvel quiz ")
var readlineSync = require('readline-sync')
var userName= readlineSync.question('may i have your name ?')
console.log(userName);
var welcomeMessage = "Welcome "+userName;
console.log(welcomeMessage)
var score=0
function play(question,answer){
var userAnswer=readlineSync.question(question)
if (userAnswer===answer){
console.log("you are correct")
score=score+1
console.log("your score is: "+score)
}else{
  console.log("you are wrong")
  score=score-1
  console.log("your score is: "+score)
}
}
var questions=[{
question:"How many infinity stones are there? ",
answer:"6"
},{
  question:"Who was the first avenger? ",
  answer:"Captain America"
},{
question:"Who finished asgard? ",
answer:"Surter"
},{
  question:"Name of thors hammer? ",
  answer:"Mjolnir"
},{
  question:"real name of hulk? ",
  answer:"Bruce Banner"
}]
for(var i=0;i<questions.length;i++){
  currentQuestion=questions[i]
  play(currentQuestion.question, currentQuestion.answer)
}
console.log(userName+" your final score is "+ score)
