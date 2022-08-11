let colors = [
    "Tomato",
    "Orange",
    "DodgerBlue",
    "MediumSeaGreen",
    "Gray",
    "SlateBlue",
    "Violet",
    "LightGray",
    "Green"
]

var findColor = colors[Math.floor(Math.random() * colors.length)]
// console.log(findColor)
document.getElementById("fc").innerHTML = findColor
for (var i = 0; i < 34; i++) {
    var bln = document.getElementById(`bln-${i}`);
    bln.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)]
}

function findBalloon(balloon) {
    console.log("color")
    var scr = 0
    if (scr === findBalloon) {
        
    }
    var bln = document.getElementById(balloon);
    console.log("color", bln.style.backgroundColor)
    if (findColor.toLowerCase() === bln.style.backgroundColor) {
        console.log("correct")
        
    }

}

// var scr = document.getElementById(score-count);
// for (var i = 0; i < 34; i++){
   
// }