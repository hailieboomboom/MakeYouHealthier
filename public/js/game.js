$(document).ready(function() {
    $("#ans1").on("click", start);
});

//the black blink
function alt(){
    $("#front").css('z-index', 4);
    function alter(){
        $("#front").css('z-index', 2);
    }
    setTimeout(alter,500);
}

// 1
function start(){
  $("#content").text("Claire needs help in learning how to manage her weight loss journey and we must help her.");

  $("#ans1").off("click", start);

  $("#ans1").text("Start the journey");
  $("#ans2").text("No, I’m not interested");

  $("#ans2").removeClass('hidden-form').addClass('answer-block');
  $("#ans3").removeClass('answer-block').addClass('hidden-form');
  $("#ans4").removeClass('answer-block').addClass('hidden-form');

  $("#ans1").on("click", select_food);
  $("#ans2").on("click", failed_1);

  $('#back').css('background-image', 'url("/assets/img/game/1.jpg")');
}

function failed_1() {
  $("#content").text("Claire is unhappy that you did not help her.");

  $("#ans1").off("click");
  $("#ans2").off("click");
  $("#ans3").off("click");
  $("#ans4").off("click");

  $("#ans1").text("Back to question");

  $("#ans1").removeClass('hidden-form').addClass('answer-block');
  $("#ans2").removeClass('answer-block').addClass('hidden-form');
  $("#ans3").removeClass('answer-block').addClass('hidden-form');
  $("#ans4").removeClass('answer-block').addClass('hidden-form');

  $("#ans1").on("click", start);

  $('#back').css('background-image', 'url("/assets/img/game/5_w1.jpg")');
}

// 2
function select_food() {
  $("#content").text("Q: What must Claire choose to follow a healthy diet which helps her fight obesity?");

  $("#ans1").off("click");
  $("#ans2").off("click");
  $("#ans3").off("click");
  $("#ans4").off("click");

  $("#ans1").text("Fried Chicken");
  $("#ans2").text("Hamburger");
  $("#ans3").text("Salads");
  $("#ans4").text("Chocolates");

  $("#ans1").removeClass('hidden-form').addClass('answer-block');
  $("#ans2").removeClass('hidden-form').addClass('answer-block');
  $("#ans3").removeClass('hidden-form').addClass('answer-block');
  $("#ans4").removeClass('hidden-form').addClass('answer-block');

  $("#ans1").on("click", failed_2);
  $("#ans2").on("click", failed_2_2);
  $("#ans3").on("click", free_time);
  $("#ans4").on("click", failed_2_3);

  $('#back').css('background-image', 'url("/assets/img/game/2.jpg")');
}

function failed_2() {
  $("#content").text("Wrong Answer, it might sound like a delicious idea but fried chicken has a lot of excess oils which negatively affect the body.");

  $("#ans1").off("click");
  $("#ans2").off("click");
  $("#ans3").off("click");
  $("#ans4").off("click");

  $("#ans1").text("Back to question");

  $("#ans1").removeClass('hidden-form').addClass('answer-block');
  $("#ans2").removeClass('answer-block').addClass('hidden-form');
  $("#ans3").removeClass('answer-block').addClass('hidden-form');
  $("#ans4").removeClass('answer-block').addClass('hidden-form');

  $("#ans1").on("click", select_food);

  $('#back').css('background-image', 'url("/assets/img/game/2_w1.jpg")');
}

function failed_2_2() {
  $("#content").text("Wrong Answer, it might sound like a delicious idea but hamburger has a lot of excess oils which negatively affect the body.");

  $("#ans1").off("click");
  $("#ans2").off("click");
  $("#ans3").off("click");
  $("#ans4").off("click");

  $("#ans1").text("Back to question");

  $("#ans1").removeClass('hidden-form').addClass('answer-block');
  $("#ans2").removeClass('answer-block').addClass('hidden-form');
  $("#ans3").removeClass('answer-block').addClass('hidden-form');
  $("#ans4").removeClass('answer-block').addClass('hidden-form');

  $("#ans1").on("click", select_food);

  $('#back').css('background-image', 'url("/assets/img/game/2_w1.jpg")');
}

function failed_2_3() {
  $("#content").text("Wrong Answer, they may seem like a sweet solution to the problem but they cause high levels of calorie intake in the body which may negatively affect the body.");

  $("#ans1").off("click");
  $("#ans2").off("click");
  $("#ans3").off("click");
  $("#ans4").off("click");

  $("#ans1").text("Back to question");

  $("#ans1").removeClass('hidden-form').addClass('answer-block');
  $("#ans2").removeClass('answer-block').addClass('hidden-form');
  $("#ans3").removeClass('answer-block').addClass('hidden-form');
  $("#ans4").removeClass('answer-block').addClass('hidden-form');

  $("#ans1").on("click", select_food);

  $('#back').css('background-image', 'url("/assets/img/game/2_w1.jpg")');
}

// 3
function free_time() {
  $("#content").html("Correct answer, Great Job! A salad will help gain the correct nutrients which help her fight obesity and also give natural fibre.<br><br> Q: Claire needs a change in lifestyle due to obesity, What do you recommend she does in her free time?");

  $("#ans1").off("click");
  $("#ans2").off("click");
  $("#ans3").off("click");
  $("#ans4").off("click");

  $("#ans1").text("Staying at home and playing video games");
  $("#ans2").text("Follow an exercise routine");
  $("#ans3").text("Be lazy and watch Netflix");

  $("#ans1").removeClass('hidden-form').addClass('answer-block');
  $("#ans2").removeClass('hidden-form').addClass('answer-block');
  $("#ans3").removeClass('hidden-form').addClass('answer-block');
  $("#ans4").removeClass('answer-block').addClass('hidden-form');

  $("#ans1").on("click", failed_3);
  $("#ans2").on("click", eat_schedule);
  $("#ans3").on("click", failed_3_2);

  $('#back').css('background-image', 'url("/assets/img/game/3.jpg")');
}

function failed_3() {
  $("#content").text("Wrong Answer,That may seem like a lovely Friday evening but it is essential to have a disciplined and exercise rich lifestyle to fight obesity.");

  $("#ans1").off("click");
  $("#ans2").off("click");
  $("#ans3").off("click");
  $("#ans4").off("click");

  $("#ans1").text("Back to question");

  $("#ans1").removeClass('hidden-form').addClass('answer-block');
  $("#ans2").removeClass('answer-block').addClass('hidden-form');
  $("#ans3").removeClass('answer-block').addClass('hidden-form');
  $("#ans4").removeClass('answer-block').addClass('hidden-form');

  $("#ans1").on("click", free_time);

  $('#back').css('background-image', 'url("/assets/img/game/3_w1.jpg")');
}

function failed_3_2() {
  $("#content").text("Wrong Answer, That may seem an ideal Friday evening but it is essential to have to have a disciplined and exercise rich lifestyle.");

  $("#ans1").off("click");
  $("#ans2").off("click");
  $("#ans3").off("click");
  $("#ans4").off("click");

  $("#ans1").text("Back to question");

  $("#ans1").removeClass('hidden-form').addClass('answer-block');
  $("#ans2").removeClass('answer-block').addClass('hidden-form');
  $("#ans3").removeClass('answer-block').addClass('hidden-form');
  $("#ans4").removeClass('answer-block').addClass('hidden-form');

  $("#ans1").on("click", free_time);

  $('#back').css('background-image', 'url("/assets/img/game/3_w1.jpg")');
}

// 4
function eat_schedule() {
  $("#content").html("Correct answer, Great job! Claire must regularly exercise and follow a disciplined routine to fight obesity.<br><br> Q: Having a well timed diet routine might be very important for Claire. What do you think she needs to keep in mind while deciding eating times?");

  $("#ans1").off("click");
  $("#ans2").off("click");
  $("#ans3").off("click");
  $("#ans4").off("click");

  $("#ans1").text("Have regularly timed meals with fixed gaps");
  $("#ans2").text("Eat constantly with shorter gaps");
  $("#ans3").text("Eat nothing for long hours with large gaps between meals");

  $("#ans1").removeClass('hidden-form').addClass('answer-block');
  $("#ans2").removeClass('hidden-form').addClass('answer-block');
  $("#ans3").removeClass('hidden-form').addClass('answer-block');
  $("#ans4").removeClass('answer-block').addClass('hidden-form');

  $("#ans1").on("click", exercise_type);
  $("#ans2").on("click", failed_4);
  $("#ans3").on("click", failed_4_2);

  $('#back').css('background-image', 'url("/assets/img/game/4.jpg")');
}

function failed_4() {
  $("#content").text("Wrong Answer, Sometimes Claire might feel like binging on food with irregular times, this would cause abnormal weight gain and further worsen her condition.");

  $("#ans1").off("click");
  $("#ans2").off("click");
  $("#ans3").off("click");
  $("#ans4").off("click");

  $("#ans1").text("Back to question");

  $("#ans1").removeClass('hidden-form').addClass('answer-block');
  $("#ans2").removeClass('answer-block').addClass('hidden-form');
  $("#ans3").removeClass('answer-block').addClass('hidden-form');
  $("#ans4").removeClass('answer-block').addClass('hidden-form');

  $("#ans1").on("click", eat_schedule);

  $('#back').css('background-image', 'url("/assets/img/game/4_w1.jpg")');
}

function failed_4_2() {
  $("#content").text("Wrong Answer, Studies have suggested that having abnormally long gaps between meals can cause substantial unhealthy weight gain.");

  $("#ans1").off("click");
  $("#ans2").off("click");
  $("#ans3").off("click");
  $("#ans4").off("click");

  $("#ans1").text("Back to question");

  $("#ans1").removeClass('hidden-form').addClass('answer-block');
  $("#ans2").removeClass('answer-block').addClass('hidden-form');
  $("#ans3").removeClass('answer-block').addClass('hidden-form');
  $("#ans4").removeClass('answer-block').addClass('hidden-form');

  $("#ans1").on("click", eat_schedule);

  $('#back').css('background-image', 'url("/assets/img/game/4_w1.jpg")');
}

// 5
function exercise_type() {
  $("#content").html("Correct answer, Great job! It is very important to follow discipled times to eat meals and not have abnormal gaps between meals.<br><br> Q: Considering that Claire has had a history of being affected by obesity, What would you recommend her to follow to stay fit and safe initially?");

  $("#ans1").off("click");
  $("#ans2").off("click");
  $("#ans3").off("click");
  $("#ans4").off("click");

  $("#ans1").text("High Impact sports such as Rugby or Wrestling");
  $("#ans2").text("A light exercise such as Running or Skipping");
  $("#ans3").text("Extremely low impact exercise like a 20 minute walk");

  $("#ans1").removeClass('hidden-form').addClass('answer-block');
  $("#ans2").removeClass('hidden-form').addClass('answer-block');
  $("#ans3").removeClass('hidden-form').addClass('answer-block');
  $("#ans4").removeClass('answer-block').addClass('hidden-form');

  $("#ans1").on("click", failed_5);
  $("#ans2").on("click", work_out);
  $("#ans3").on("click", failed_5_2);

  $('#back').css('background-image', 'url("/assets/img/game/5.jpg")');
}

function failed_5() {
  $("#content").text("Wrong Answer, Such sports need to have agility and they might cause an injury to Claire if she overexerts herself.");

  $("#ans1").off("click");
  $("#ans2").off("click");
  $("#ans3").off("click");
  $("#ans4").off("click");

  $("#ans1").text("Back to question");

  $("#ans1").removeClass('hidden-form').addClass('answer-block');
  $("#ans2").removeClass('answer-block').addClass('hidden-form');
  $("#ans3").removeClass('answer-block').addClass('hidden-form');
  $("#ans4").removeClass('answer-block').addClass('hidden-form');

  $("#ans1").on("click", exercise_type);

  $('#back').css('background-image', 'url("/assets/img/game/5_w1.jpg")');
}

function failed_5_2() {
  $("#content").text("Wrong answer, This may seem like a very good exercise for a casual afternoon but it is important to keep in mind that this might not impact her combat against obesity.");

  $("#ans1").off("click");
  $("#ans2").off("click");
  $("#ans3").off("click");
  $("#ans4").off("click");

  $("#ans1").text("Back to question");

  $("#ans1").removeClass('hidden-form').addClass('answer-block');
  $("#ans2").removeClass('answer-block').addClass('hidden-form');
  $("#ans3").removeClass('answer-block').addClass('hidden-form');
  $("#ans4").removeClass('answer-block').addClass('hidden-form');

  $("#ans1").on("click", exercise_type);

  $('#back').css('background-image', 'url("/assets/img/game/5_w1.jpg")');
}

// 6
function work_out() {
  $("#content").html("Correct answer, Great Job! To start her journey to losing unhealthy weight, Claire can go for brisk running sessions and follow skipping routines which will not cause serious harm or injury.<br><br> Q: Choose a motivating statement for Claire to get inspired and start her journey!");

  $("#ans1").off("click");
  $("#ans2").off("click");
  $("#ans3").off("click");
  $("#ans4").off("click");

  $("#ans1").text("You have to think about it before you can do it. The mind is what makes it all possible.");
  $("#ans2").text("Success is walking from failure to failure with no loss of enthusiasm.");
  $("#ans3").text("The difference between the impossible and the possible lies in a person’s determination.");
  $("#ans4").text("You’re only one workout away from a good mood.");

  $("#ans1").removeClass('hidden-form').addClass('answer-block');
  $("#ans2").removeClass('hidden-form').addClass('answer-block');
  $("#ans3").removeClass('hidden-form').addClass('answer-block');
  $("#ans4").removeClass('hidden-form').addClass('answer-block');

  $("#ans1").on("click", the_end_1);
  $("#ans2").on("click", the_end_2);
  $("#ans3").on("click", the_end_3);
  $("#ans4").on("click", the_end_4);

  $('#back').css('background-image', 'url("/assets/img/game/6.jpg")');
}

// The End
function the_end_1() {
  $("#content").html(`GREAT JOB! <strong>You have to think about it before you can do it. The mind is what makes it all possible.</strong><br/> Claire is now a young and energetic lady thanks to you! </br>` +
    `Claire has a healthy diet for each meal, has a good work and rest time and will be willing to exercise in free time, and maintain the number of exercises per week. </br>`);

  $("#ans1").off("click");
  $("#ans2").off("click");
  $("#ans3").off("click");
  $("#ans4").off("click");

  $("#ans1").text("Next");

  $("#ans1").removeClass('hidden-form').addClass('answer-block');
  $("#ans2").removeClass('answer-block').addClass('hidden-form');
  $("#ans3").removeClass('answer-block').addClass('hidden-form');
  $("#ans4").removeClass('answer-block').addClass('hidden-form');

  $("#ans1").on("click", the_end);

  $('#back').css('background-image', 'url("/assets/img/game/e_2.jpg")');
}

function the_end_2() {
  $("#content").html(`GREAT JOB! <strong>Success is walking from failure to failure with no loss of enthusiasm.</strong><br/> Claire is now a young and energetic lady thanks to you! </br>` +
    `Claire has a healthy diet for each meal, has a good work and rest time and will be willing to exercise in free time, and maintain the number of exercises per week. </br>`);

  $("#ans1").off("click");
  $("#ans2").off("click");
  $("#ans3").off("click");
  $("#ans4").off("click");

  $("#ans1").text("Next");

  $("#ans1").removeClass('hidden-form').addClass('answer-block');
  $("#ans2").removeClass('answer-block').addClass('hidden-form');
  $("#ans3").removeClass('answer-block').addClass('hidden-form');
  $("#ans4").removeClass('answer-block').addClass('hidden-form');

  $("#ans1").on("click", the_end);

  $('#back').css('background-image', 'url("/assets/img/game/e_2.jpg")');
}

function the_end_3() {
  $("#content").html(`GREAT JOB! <strong>The difference between the impossible and the possible lies in a person’s determination.</strong><br/> Claire is now a young and energetic lady thanks to you! </br>` +
    `Claire has a healthy diet for each meal, has a good work and rest time and will be willing to exercise in free time, and maintain the number of exercises per week. </br>`);

  $("#ans1").off("click");
  $("#ans2").off("click");
  $("#ans3").off("click");
  $("#ans4").off("click");

  $("#ans1").text("Next");

  $("#ans1").removeClass('hidden-form').addClass('answer-block');
  $("#ans2").removeClass('answer-block').addClass('hidden-form');
  $("#ans3").removeClass('answer-block').addClass('hidden-form');
  $("#ans4").removeClass('answer-block').addClass('hidden-form');

  $("#ans1").on("click", the_end);

  $('#back').css('background-image', 'url("/assets/img/game/e_2.jpg")');
}

function the_end_4() {
  $("#content").html(`GREAT JOB! <strong>YYou’re only one workout away from a good mood.</strong><br/> Claire is now a young and energetic lady thanks to you! </br>` +
    `Claire has a healthy diet for each meal, has a good work and rest time and will be willing to exercise in free time, and maintain the number of exercises per week. </br>`);

  $("#ans1").off("click");
  $("#ans2").off("click");
  $("#ans3").off("click");
  $("#ans4").off("click");

  $("#ans1").text("Next");

  $("#ans1").removeClass('hidden-form').addClass('answer-block');
  $("#ans2").removeClass('answer-block').addClass('hidden-form');
  $("#ans3").removeClass('answer-block').addClass('hidden-form');
  $("#ans4").removeClass('answer-block').addClass('hidden-form');

  $("#ans1").on("click", the_end);

  $('#back').css('background-image', 'url("/assets/img/game/e_2.jpg")');
}

function the_end() {
  $("#content").html(`Her fitness levels are impeccable and she can now wear all pretty clothes. </br>` +
    `She has successfully avoided the diseases caused by obesity, become more and more confident, engage with people </br>`);

  $("#ans1").off("click");
  $("#ans2").off("click");
  $("#ans3").off("click");
  $("#ans4").off("click");

  $("#ans1").text("Next");

  $("#ans1").removeClass('hidden-form').addClass('answer-block');
  $("#ans2").removeClass('answer-block').addClass('hidden-form');
  $("#ans3").removeClass('answer-block').addClass('hidden-form');
  $("#ans4").removeClass('answer-block').addClass('hidden-form');

  $("#ans1").on("click", your_turn);
}

function your_turn() {
  $("#content").html(`See, you just help this girl to achieve a successful weight-loss in the right way, It's not too hard! I am sure you can make it!! </br></br> THANK YOU! </br> It's your time to achieve the same goal as Claire!`);

  $("#ans1").off("click");
  $("#ans2").off("click");
  $("#ans3").off("click");
  $("#ans4").off("click");

  $("#ans1").html(`<form method="POST" action="/show-report" id='myform-diet'>
    <a onclick="document.getElementById('myform-map').submit(); return false;" style="color:white;" href="/show-report" target='_blank'>Get Your Diet Plan</a></form>`);
  $("#ans2").html(`<form method="POST" action="/show-map" id='myform-map'>
    <a onclick="document.getElementById('myform-map').submit(); return false;" style="color:white;" href='/show-map' target="_blank">Get Your Exercise Plan</a></form>`);
  $("#ans3").text("Play Again");

  $("#ans1").removeClass('hidden-form').addClass('answer-block');
  $("#ans2").removeClass('hidden-form').addClass('answer-block');
  $("#ans3").removeClass('hidden-form').addClass('answer-block');
  $("#ans4").removeClass('answer-block').addClass('hidden-form');

  $("#ans3").on("click", start);
}





//
//
//
//
//
//
//
//
//
//
//
//
//
// //1
// function eatout(){
//     alt()
//     $("#content").innerText = "Cook by yourself: What do you want to cook?";
//     $("#ans1").off('click', cook_by_yourself);
//     $("#ans2").off("click", eatout);
//     $("#ans1").innerText="Sandwich";
//     $("#ans2").innerText="Salad";
//     $("#ans3").innerText="Microwave meat pie";
//     $("#ans3").removeClass('hidden-form');
//     // $("#ans1").on("click",hide);
//     // $("#ans2").on("click",police2);
//     // $("#ans3").on("click",block);
//
// }
// function cook_by_yourself(){
//     alt();
//     $("#content").style.color="red";
//     $("#content").innerText="You did not go outside. You used all your supplies and you were too weak to find another supplies. In a world of Zombies, you die by hunger.";
//     $("#all").style.transform="scale(0)";
// }
//
// function goDown(){
//     //good one
//     alt();
//     $("#back").style.background="url(https://www.dropbox.com/s/8negnci79l5d6dy/Village_Street%2C_Thrintoft.jpg?dl=1)";
//     $("#back").style.backgroundSize="cover";
//     $("#back").style.backgroundPosition=" center"
//     $("#content").innerText="You took your knife, a backpack and went outside searching for supplies. There are a few zombies far behind you, stalking you. Is it a problem?";
//     $("#ans1").removeEventListener("click",jSleep);
//     $("#ans2").removeEventListener("click",police);
//     $("#ans3").removeEventListener("click",goDown);
//     $("#ans1").innerText="Just keep walking";
//     $("#ans2").innerText="Run, so they can't get to you";
//     $("#ans3").innerText="Try and kill them";
//     $("#ans1").addEventListener("click",hide);
//     $("#ans2").addEventListener("click",police2);
//     $("#ans3").addEventListener("click",block);
// }
// //end 1
//
//
// //2
// function police2(){
//     alt();
//     $("#content").style.color="red";
//     $("#content").innerText="You Ran as fast as you could, but more zombies heard you, and they surrounded you. You had no choice but to fight them. The zombies ate you alive.";
//     $("#all").style.transform="scale(0)";
// }
// function block(){
//     alt();
//     $("#content").style.color="red";
//     $("#content").innerText="You went to that horde of zombies, and fought them. Because of the noice, more zombies were coming, and you got surrounded by them. They got you, after a while.";
//     $("#all").style.transform="scale(0)";
// }
// function hide(){
//     //good one
//     alt();
//     $("#content").innerText="You walk as nothing happened. You notice more zombies in front of you, but they still don't know you are there. What to do? Think fast!";
//     $("#ans1").removeEventListener("click",hide);
//     $("#ans2").removeEventListener("click",police2);
//     $("#ans3").removeEventListener("click",block);
//     $("#ans1").innerText="Fight them";
//     $("#ans2").innerText="Hide inside a house";
//     $("#ans3").innerText="Run before they see you";
//     $("#ans1").addEventListener("click",bathroom);
//     $("#ans2").addEventListener("click",kitchen);
//     $("#ans3").addEventListener("click",bedroom);
// }
// //end 2
//
//
// //3
// function bathroom(){
//     alt();
//     $("#content").style.color="red";
//     $("#content").innerText="You fought like a hero, but they had the number. You survived but you got bitten. You turned into a zombie a few hours later. The End. ";
//     $("#all").style.transform="scale(0)";
// }
// function kitchen(){
//     //good one
//     alt();
//     $("#back").style.background="url(https://www.dropbox.com/s/buajpl660kcpj68/083c0115-9f9b-4dc2-8fab-2ad6677fe0c6-5-marioncarllfarmhouse-parlour.jpg?dl=1)";
//     $("#back").style.backgroundSize="cover";
//     $("#back").style.backgroundPosition=" center"
//     $("#content").innerText="You hide into the closest house you find. The zombies heard you and now they are at the door, trying to break in. What is your next move?";
//     $("#ans1").removeEventListener("click",bathroom);
//     $("#ans2").removeEventListener("click",kitchen);
//     $("#ans3").removeEventListener("click",bedroom);
//     $("#ans1").innerText="Block the door";
//     $("#ans2").innerText="Hide";
//     $("#ans3").innerText="Run outside through the back door";
//     $("#ans1").addEventListener("click",run);
//     $("#ans2").addEventListener("click",jump);
//     $("#ans3").addEventListener("click",fight);
// }
// function bedroom(){
//     alt();
//     $("#content").style.color="red";
//     $('#content').innerText="You ran back to your house. You did not got the supplies you needed, so you died by hunger.";
//     $("#all").style.transform="scale(0)";
// }
// //end 3
//
//
// //4
// function run(){
//     alt();
//     $("#content").style.color="red";
//     $("#content").innerText="You blocked the door, but they got in through the window and the back door. You were killed by Zombies.";
//     $("#all").style.transform="scale(0)";
// }
// function fight(){
//     //good one
//     $("#back").style.background="url(https://www.dropbox.com/s/84dlye5ym8c47un/511097_a75772eb.jpg?dl=1)";
//     $("#back").style.backgroundSize="cover";
//     $("#back").style.backgroundPosition=" center"
//     alt();
//     $("#content").innerText="You went outside through the back door, and now there are no zombies. You can go find the supplies you are looking for. There is a Supermarket at the left side of the street, a shop at the right side of the street, and a huge truck on the street. Where will you look for supplies?";
//     $("#ans1").removeEventListener("click",run);
//     $("#ans2").removeEventListener("click",jump);
//     $("#ans3").removeEventListener("click",fight);
//     $("#ans1").innerText="Small Shop";
//     $("#ans2").innerText="Supermarket";
//     $("#ans3").innerText="Truck";
//     $("#ans1").addEventListener("click",room);
//     $("#ans2").addEventListener("click",jumpWin);
//     $("#ans3").addEventListener("click",badGuy);
// }
// function jump(){
//     alt()
//     $("#content").style.color="red";
//     $("#content").innerText="You hid, but the zombies found you anyway. You are dead.";
//     $("#all").style.transform="scale(0)";
// }
// //end 4
//
//
// //5
// function badGuy(){
//     alt();
//     $("#content").style.color="red";
//     $("#content").innerText="You searched the truck, but you found nothing useful. Zombies heard the noice and came to you. You were surrounded, and the zombies ate you.";
//     $("#all").style.transform="scale(0)";
// }
// function room(){
//     //good one
//     alt();
//     $("#back").style.background="url(https://www.dropbox.com/s/3nc46g0gaeo7iln/Inside%20the%20Sweet%20Shop%20Kirkby%20Lonsdale.jpg?dl=1)";
//     $("#back").style.backgroundSize="cover";
//     $("#back").style.backgroundPosition=" center"
//     $("#content").innerText="You chose the small shop. There was noone inside. You had enough time to fill your backpack with supplies. There are zombies outside, but you can't run with such a heavy backpack. What do you do?";
//     $("#ans1").removeEventListener("click",room);
//     $("#ans2").removeEventListener("click",jumpWin);
//     $("#ans3").removeEventListener("click",badGuy);
//     $("#ans1").innerText="Just wait until they leave";
//     $("#ans2").innerText="Leave the backpack and Run";
//     $("#ans3").innerText="Try your luck and go outside.";
//     $("#ans1").addEventListener("click",thePhone);
//     $("#ans2").addEventListener("click",emptyweapon);
//     $("#ans3").addEventListener("click",keys);
// }
// function jumpWin(){
//     alt()
//     $("#content").style.color="red"
//     $("#content").innerText="You chose the supermarket. There were enough supplies for you, but it was full of zombies. You had no choice just to fight them. You fought like a hero, but they got you after all. You are dead.";
//     $("#all").style.transform="scale(0)";
// }
// //end 5
//
//
// //6
// function keys(){
//     alt()
//     $("#content").style.color="red";
//     $("#content").innerText="As expected, the backpack was too heavy, so the zombies catched you very fast. They ate you alive.";
//     $("#all").style.transform="scale(0)";
// }
// function emptyweapon(){
//     alt();
//     $("#content").style.color="red";
//     $("#content").innerText="You left the backpack with all yoir supplies behind, and ran. You survived but you had no supplies. In a world of zombies, you died by hunger.";
//     $("#all").style.transform="scale(0)";
// }
// function thePhone(){
//     //good one
//     alt();
//     $("#content").innerText="You wait for almost 2 hours until all zombies are gone. Now the street is empty and you can go home without a problem. Will you?";
//     $("#ans1").removeEventListener("click",thePhone);
//     $("#ans2").removeEventListener("click",emptyweapon);
//     $("#ans3").removeEventListener("click",keys);
//     $("#ans1").innerText="Just wait a little more";
//     $("#ans2").innerText="Go home,now";
//     $("#ans3").innerText="Eat something first";
//     $("#ans1").addEventListener("click",dead);
//     $("#ans2").addEventListener("click",alive);
//     $("#ans3").addEventListener("click",dead);
// }
// //end 6
//
//
// //7
// function alive(){
//     //good one
//     alt()
//     $("#back").style.background="url(https://www.dropbox.com/s/hz8nlxssvxfva2w/Old-House-with-two-doors.jpg?dl=1)";
//     $("#back").style.backgroundSize="cover";
//     $("#back").style.backgroundPosition="center";
//     $("#content").innerText="You are in front of your house, but you need your password to get in. Clue: Today date.";
//
//     $("#ans1").removeEventListener("click",alive);
//     $("#ans2").removeEventListener("click",dead);
//     $("#ans3").removeEventListener("click",dead);
//     $("#ans1").innerText="29.08.2019";
//     $("#ans2").innerText="14.07.2021";
//     $("#ans3").innerText="24.06.2012";
//     $("#ans1").addEventListener("click",ok);
//     $("#ans2").addEventListener("click",b);
//     $("#ans3").addEventListener("click",b);
// }
// function dead(){
//     alt()
//     $("#content").style.color="red";
//     $("#content").innerText="The zombies found you, break inside the shop, and killed you.";
//     $("#all").style.transform="scale(0)";
// }
// //end 7
//
// //8
// function ok(){
//     alt()
//     $("#content").style.color="#090";
//     $("#back").style.background="url(https://www.dropbox.com/s/b2ohzliwaguhply/ghost-rider250-highresscreenshot00001.jpg?dl=1)";
//     $("#back").style.backgroundSize="cover";
//     $("#back").style.backgroundPosition="center";
//     $("#all").style.display="none";
//     $("#content").innerText="You survived! Congratulations for surviving this day. Good luck with your next ones. ";
// }
// //end 8
//
// function b(){
//      alt()
//     $("#content").style.color="red";
//     $("#content").innerText="You do not know what day is inside the game, so I won't let you win. Try again. I am sure you can win next time!";
//     $("#all").style.transform="scale(0)";
// }
//
// //It was such a pain editing all this stuff...
