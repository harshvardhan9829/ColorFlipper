const colors = ["green", "red", "white", "black", "PeachPuff", "MintCream", "SlateBlue",
    "Khaki", "OliveDrab", "BurlyWood", "LightSalmon", "Coral",
    "HotPink", "LemonChiffon", "AliceBlue", "LightGrey",
    "MediumTurquoise", "DarkSeaGreen", "Peru", "Tomato", "RoyalBlue", "IndianRed", "PaleGreen",
    "Orchid", "PapayaWhip"
];
const btn = document.getElementById('btn');
const color = document.querySelector(".color");


btn.addEventListener("click", function() {
    const randomNumber = getRandomNumber();
    document.body.style.backgroundColor = colors[randomNumber];
    color.textContent = colors[randomNumber];
    console.log(randomNumber);
});


function getRandomNumber() {
    return Math.floor(Math.random() * colors.length);

}