const exitButton = document.getElementById("exit-button");

exitButton.addEventListener("click",function (event){
    window.location.href = "../home/tapspeed_home.html";
});

const creditsButton = document.getElementById("credits-button");

creditsButton.addEventListener("click",function (event){
    window.location.href = "../credits/credits_page.html";
});

const tapButtonsContainer = document.getElementById("game-container");
const tapButtons = document.querySelectorAll(".tap-buttons");
const scoreBoard = document.getElementById("score");

alert("Get ready! The game will last for 20 seconds. Tap the buttons as they appear to score points. Click OK to start!");
//RANDOMIZER for tap buttons
setInterval(tapButtonsRandomizer, 250);
function tapButtonsRandomizer() {
    let counter = Math.floor(Math.random() * 16);
    let add = 0;
    for(let eachClass of tapButtons){
    add++;
    if(add == counter){
        eachClass.classList.add("show-tap-button");
    } else{
        eachClass.classList.add("hide-tap-button");
    }
    }
}

let score = 0;
//ACTION WHEN TAP BUTTON IS CLICKED
tapButtonsContainer.addEventListener('click', function(event) {
    if (event.target.closest('.tap-buttons')) {
        score++;
        console.log("1 point added");
        scoreBoard.innerText = `Score: ${score}`;
        event.target.closest('.tap-buttons').classList.remove("show-tap-button");
        event.target.closest('.tap-buttons').classList.add("hide-tap-button");
    }
});

setTimeout(gameEnded,20000);

function gameEnded() {
    alert(`Game Over! Your final score is: ${score}`);
    window.location.href = "../credits/credits_page.html";
}