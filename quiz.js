var readLineSync=require('readline-sync');
var score=0;
var hScore=[
  {
    names:"Bob",
    scores:20
  },
  {
    names:"Don",
    scores:16
  }
]
var chalk=require('chalk');
var round_1=[
  {
    question:"What is Elena Brother Name:",
    answer:"JEREMY"
  },
  {
    question:"What is Elena Doppelganger Name:",
    answer:"KATHERINE"
  },
  {
    question:"What is Stefan Brother Name:",
    answer:"DAMON"
  },
  {
    question:"Who is Elena best Freind:",
    answer:"BONNIE"
  },
  {
    question:"What is Elena Full Name:",
    answer:"ELENA GILBERT"
  },
  {
    question:"What is Elena Favourite Food:",
    answer:"PASTA"
  },
  {
    question:"What is Elena real life Name:",
    answer:"NINA"
  }
]
var round_2=[
  {
    question:"What is Damon Brother Name:",
    answer:"STEFAN"
  },
  {
    question:"What is Stefan Doppelganger Name:",
    answer:"SILAS"
  },
  {
    question:"What is Stefan Brother Name:",
    answer:"DAMON"
  },
  {
    question:"Who is Stefan best Freind:",
    answer:"CAROLINE"
  },
  {
    question:"What is Stefan Full Name:",
    answer:"STEFAN SALVATORE"
  },
  {
    question:"What is Stefan Favourite drink:",
    answer:"BOURBON"
  },
  {
    question:"What is Stefan real life Name:",
    answer:"PAUL"
  }
]
var round_3=[
  {
    question:"What is  Caroline real life Name:",
    answer:"CANDICE"
  },
  {
    question:"What is Caroline Husband Name:",
    answer:"STEFAN"
  },
  {
    question:"What is Caroline Mother Name:",
    answer:"LIZ"
  },
  {
    question:"Who is Caroline best Freind:",
    answer:"ELENA"
  },
  {
    question:"What is Caroline Full Name:",
    answer:"CAROLINE FORBES"
  },
  {
    question:"What is Caroline Favourite Food:",
    answer:"PASTA"
  },
  {
    question:"What is DAMON real life Name:",
    answer:"IAN"
  }
];
function quiz(question,answer){
  var uAnswer=readLineSync.question(question).toUpperCase();
  if(uAnswer==answer){
    console.log("Correct");
    score++;
  }
  else{
    console.log("Wrong");
    if(score==0){
      score=0
    }
    else{
      score--;
    }
  }
}
console.log(chalk.blue.bgRed.bold('Quiz...'));
var name=readLineSync.question(chalk.bgRed("May I know Your Name:"));
for(var i=0;i<round_1.length;i++){
  quiz(round_1[i].question,round_1[i].answer);
}
console.log(chalk.blue.bgRed.bold('Bonus Question..'))
  animals = ['Lion', 'Elephant', 'Crocodile', 'Giraffe', 'Hippo'];
  var index = readLineSync.keyInSelect(animals, 'Which animal does Elena Like?');
if(index+1==4){
  console.log(chalk.blue("Correct"));
  score=score+2;
  readLineSync.question();
}
else{
  console.log("Wrong...");
  readLineSync.question();
}
console.log(chalk.red('Score:')+score);
if(score>=5){
  console.log('Round-2')
  for(var i=0;i<round_2.length;i++){
  quiz(round_2[i].question,round_2[i].answer);
}
}
else{
  console.log("Not Eligible for Round-2");
}
console.log(chalk.yellow('Score:')+score);
if(score>=10){
  console.log('Round-3')
  for(var i=0;i<round_3.length;i++){
  quiz(round_3[i].question,round_3[i].answer);
}
}
else{
  console.log("Not Eligible for Round-3");
}
for(var i=0;i<hScore.length;i++){
  if(hScore[i].scores <score){
    hScore[i].names=name;
  }
}
console.log("Highest scores:");
for(var i=0;i<hScore.length;i++){
  console.log(hScore[i].names+":"+hScore[i].scores);
}
console.log("If you are here ping me:aabc@gmail.com");
console.log(chalk.green(' Your Score:')+score);