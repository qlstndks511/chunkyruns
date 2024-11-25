var character = document.getElementById("character");
var block = document.getElementById("block");
function jump(){
    if(character.classList != "animate"){
        character.classList.add("animate");
    }
    setTimeout(function(){
        character.classList.remove("animate");
    },900);
}

var checkDead = setInterval(function(){
    var characterTop = parseInt(window.getComputedStyle(character).getPropertyValue("top"));
    var blockLeft = parseInt(window.getComputedStyle(block).getPropertyValue("left"));
    if(blockLeft<40 && blockLeft>0 && characterTop>=160){
        block.style.animation = "none";
        block.style.display = "none";
        alert("Chunky has become a good source of protein. Please refresh the browser to restart.");
    }
},10);

var speedIncreaseInterval = setInterval(function() {
    gameSpeed -= 5; // Decrease the interval time to increase speed
    if (gameSpeed < 20) gameSpeed = 20; // Set a minimum speed
}, 100); // Decrease every 10 seconds, adjust this timing as necessary
