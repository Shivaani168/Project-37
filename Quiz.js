class Quiz {
constructor(){}

getState(){
var gameStateRef  = database.ref('gameState');
gameStateRef.on("value",function(data){
gameState = data.val();
})
}

update(state){
database.ref('/').update({
gameState: state
});
}

async start(){
if(gameState === 0){
contestant = new Contestant();
var contestantCountRef = await database.ref('contestantCount').once("value");
if(contestantCountRef.exists()){
contestantCount = contestantCountRef.val();
contestant.getCount();
}
var question = new Question()
question.display();
}
}

play(){
//question.hide();
background("Yellow")
textSize(30)
text("Result of the Quiz",340,50)
Contestant.getPlayerInfo();
if(allContestants!==undefined){
var contestants_display=230;
fill("Blue")
textSize(20)
text("Note: Contestants who answered correctly are highlighted in green colour.",130,230)
for(var plr in allContestants){
var correctAns="3"
if(correctAns===allContestants[plr].answer){
fill("Green")
}
else {
fill("Red")
}
contestants_display+=30
textSize(20)
text(allContestants[plr].name+":"+allContestants[plr].answer,250,contestants_display)
}
}
}
}