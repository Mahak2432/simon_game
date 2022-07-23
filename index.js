var arr = [];
var colour_arr = ["green", "red", "yellow", "blue"];
var cnt = 1;
var game_started = false;



$(".btn").click(function () {
    var colour = this.id;
    userPlayer(colour);
});

$(document).keypress(function (event) {

    if (game_started == false) {
        $("#level-title").text("Level " + cnt);
        game_started = true;
        nextLevel();
    }
    else if (game_started == true) {
        if (event.key === "w") {
            userPlayer("green");
        }
        else if (event.key === "a") {
            userPlayer("red");
        }
        else if (event.key === "s") {
            userPlayer("yellow");
        }
        else if (event.key === "d") {
            userPlayer("blue");
        }
    }

});





function nextLevel() {
    var num = Math.floor((Math.random() * 4));
    $("#" + colour_arr[num]).fadeIn(100).fadeOut(100).fadeIn(100);
    if (sound) {
        soundPlayer(colour_arr[num]);
    }
    arr.push(colour_arr[num]);
    globalThis.temp = 0;
}

function soundPlayer(colour_played) {
    let audio = new Audio("sounds/" + colour_played + ".mp3");
    audio.play();
}

function userPlayer(colour) {
    console.log(arr[temp]);
    console.log(colour);
    if (arr[temp] === colour) {
        if (sound) {
            var audio = new Audio("sounds/" + colour + ".mp3");
            audio.play();
        }

        $("#" + colour).addClass("pressed");
        setTimeout(function () {
            $("#" + colour).removeClass("pressed");
        }, 100);
        temp++;
        if (temp === arr.length) {
            cnt++;
            $("#level-title").text("Level " + cnt);
            setTimeout(() => {
                nextLevel()
            }, 1000);
        }
    }
    else {
        if (sound) {
            var audio = new Audio("sounds/wrong.mp3");
            audio.play();
        }

        gameOver();
    }




}

function gameOver() {


    arr = [];
    game_started = false;
    cnt = 1;
    $('body').toggleClass('game-over')
    setTimeout(() => {
        $('body').toggleClass('game-over');
    }, 500);
    $('#level-title').text('GAME OVER!');
    setTimeout(() => {
        $('#level-title').text('GAME OVER! Press Any Key to Start')
    }, 1000);

}

var sound = true;
function myFunction(x) {
    console.log("x");
    x.classList.toggle("fa-volume-mute");
    x.classList.toggle("fa-volume-up");
    if (sound === true) {
        sound = false;
    }
    else if (sound === false) {
        sound = true;
    }
}