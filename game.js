var user_list = [];
var list = [];
var start = false;
var count = 0;
var colors = ['green', 'red', 'yellow', 'blue'];

$(document).keypress(function(){
    if(!start){
        go();
        start=true;
        $("h1").text("Your Level "+count);
    }
    
});


$("div[type='button']").click(function (event) {

    user_list.push(event.target.id);
    checkAnswer(user_list.length-1);
    playSound(event.target.id);
    animatePress(event.target.id);


});

function checkAnswer(clevel){

        if(user_list[clevel]===list[clevel]){
            if(user_list.length===list.length){
                setTimeout(function(){
                    go();
                    $("h1").text("Your Level "+count);
                },1000);
            }
            
        }

        else{
            start=false;
            count = 0;
            user_list = [];
            list = [];
            $("body").addClass("game-over");
            setTimeout(function () {
                $("body").removeClass("game-over");
            }, 100);
            $("h1").text("Game Over Press A Key to Start");
            playSound('wrong');
        }
}


function go() {
    user_list=[];
    count++;

    var rand = Math.floor(Math.random() * 4);
    setTimeout(function () {
        list.push(colors[rand]);
        $('#' + colors[rand]).fadeIn(100).fadeOut(100).fadeIn(100);
        var audio = new Audio("sounds/" + colors[rand] + ".mp3");
        audio.play();
        console.log(list);
    }, 500);
}


function playSound(x){
    var audio = new Audio("sounds/" + x + ".mp3");
    audio.play();
}

function animatePress(x){
    $('#' + x).addClass("pressed");
    setTimeout(function () {
        $('#' + x).removeClass("pressed");
    }, 100);
}