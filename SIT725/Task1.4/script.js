function changeText() {
    let textArray = ['text1', 'text2', 'text3', 'text4', 'text5'];
    let randomIndex = getRandomNumber();
    let randomText = textArray[randomIndex];
    document.getElementById("Button").innerHTML = randomText;
}

function getRandomNumber() {
    var randomNum = Math.floor(Math.random() * 5);
    return randomNum;
}
