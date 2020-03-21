
const $ = (elem) =>{
    return document.getElementById(elem);
}

let MorseCodeSet = new Map();

//Array that holds the vlaues of all Alpaha Characters in Morse code
const MorseCodeArray = [
    ".-","-...","-.-.",
		"-..",".","..-.","--.","....","..",".---","-.-",".-..",
		"--","-.","---",".--.","--.-",
		".-.","...","-","..-","...-",".--","-..-",
        "-.--","--.."
];

//Array that holds all values for Numbers 0-9 
const MorseCodeNumsArray = [
    "_ _ _ _ _",". _ _ _ _"," . . _ _ _",
    " . . . _ _"," . . . . _",". . . . .","_ . . . .",
    "_ _ . . ."," _ _ _ . .","_ _ _ _ ."
];

//Array for Punctuation values in MorseCode
const MorseCodePuncArray = [
    "_ _ . . _ _",". _ . _ . _",". . _ _ . .",
    "_ . _ . _ ."," _ _ _ . . .","_ . . _ .",
    "_ . . . . _",". _ _ _ _ .",". _ . . _ .",
    "_ . _ _ ."," _ . _ _ . _","_ . . . _",
    ". _ . _ .","_ . . _",". _ _ . _ ."

];

//Punctuation array
const punctValues = [
    ",",".","?",";",":","/","-","`","\"","(",")",
    "=","+","x","@"

];


//loop to load the Map with a key is->a Letter variable it gets converted to ASCII and gets pushed
//in the map with the Morse Code Value
let letters = 97;
for(let i = 0; i <= 25;i++){
    let k = String.fromCharCode(letters);
    MorseCodeSet.set(k,MorseCodeArray[i]);
    letters++;
}
//loop that loads all the numbers 0-9 with the Morse Code value
let numberChar = 48;
for(let i=0; i <= 9; i++){
    let k = String.fromCharCode(numberChar);
    MorseCodeSet.set(k,MorseCodeNumsArray[i]);
    numberChar++;
}
//loop tp load all the Punctuation values in the Map
for(let i=0; i < 15; i++){
    MorseCodeSet.set(punctValues[i],MorseCodePuncArray[i]);
}

let GenerateCode = $("generateCodeBtn");

//Event listener to handel use input
GenerateCode.addEventListener("click",()=>{
    let getTextVal = $('morseCodeValue').value;
    let getResult = $("resultSet");
    let bodyColor = $("body");
    let chnagecolorAfterResults = $('Container');
    let tmpString ='';
    if(getTextVal ==  ""){
        getResult.innerHTML =  `Please Provide a vlaid input\n`;
    }
    else{
    for(let i=0; i < getTextVal.length;i++){
        if(getTextVal[i] == ' '){
            continue;
        }
        tmpString += MorseCodeSet.get(getTextVal[i].toLowerCase()) + "    ";
    }
        getResult.style.fontStyle = "italic";
        getResult.innerHTML =  `Result of: [${getTextVal}] <br> is:    ${tmpString} `;
        bodyColor.style.backgroundImage =
         'url("https://images.squarespace-cdn.com/content/v1/52af8c2de4b0ae2d32360f12/1427958740245-7AOLAMJI3760CN0GX715/ke17ZwdGBToddI8pDm48kICUB-fW5MyMqNuUNx_gGygUqsxRUqqbr1mOJYKfIPR7LoDQ9mXPOjoJoqy81S2I8N_N4V1vUb5AoIIIbLZhVYxCRW4BPu10St3TBAUQYVKc1-in_hxrCjDz3Alzg7FlH7iSqNsmxtT24FaH6hXUWQllp4goDbbPfyC5NIKQjt_R/8qMbloom6im.png")';
        chnagecolorAfterResults.style.color = "#ffffff";
    }
});






