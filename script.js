window.onload = (function() {
    // var audio = new Audio('http://66.90.93.122/ost/super-mario-bros/afzsjmpl/02%20-%20Invincibility%20Star.mp3');
    var colors = ["red", "green", "blue", "yellow", "orange", "purple"];
    var flash = document.getElementsByClassName('flash');
    // audio.play();
    // audio.loop = true;
    // audio.playbackRate = 1;
    setInterval(() => {
        for (var i of flash) {
            i.style.color = colors[Math.floor(Math.random() * colors.length)];
        }
    }, 1000);
})();