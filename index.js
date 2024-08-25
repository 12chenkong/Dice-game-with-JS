//player1
function player1(){
  var ranNum= Math.random()*6;
  return Math.floor(ranNum)+1;
}
// palyer 2
function player2() {
  var ranNum = Math.random() * 6;
  return Math.floor(ranNum) + 1;
}
 var num1=player1();
 var num2=player2();
 
 console.log(num1);
 console.log(num2);
var pic1;
var pic2;
var win;
if(num1>num2){
   pic1=`dice${num1}.png`;
   pic2=`dice${num2}.png`;
   document.querySelector(".congrat").innerHTML="Player 1 win!"
  console.log("Play 1 winn");
  console.log("player 1:"+num1);
  console.log("paly 2:"+num2);
}else if(num1<num2){
  document.querySelector(".congrat").innerHTML = "Player 2 win!";
   pic1 = `dice${num1}.png`;
   pic2 = `dice${num2}.png`;
  console.log("play 2 winn");
  console.log("player 1:" + num1);
  console.log("paly 2:" + num2);
}else{
   pic1 = `dice${num1}.png`;
   pic2 = `dice${num2}.png`;
   document.querySelector(".congrat").innerHTML = "Draw!!";
  console.log("both players are draw");
  console.log("player 1:"+num1);
  console.log("paly 2:"+num2);
}
// Chnanging the image based random number
document.getElementById("dice1").src = pic1;
document.getElementById("dice2").src = pic2;

