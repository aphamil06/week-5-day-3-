function favoriteColor() {
    let color;
    color = prompt("What is your favorite color?");
    myBlueHeader.innerHTML = `${color} is my favorite color`;
    myBlueParagraph.innerHTML = `I really love the color ${color}!`;
    myBlueHeader.style.color = color;
    myBlueParagraph.style.color = color;


}
myBlueButton.onclick = favoriteColor;

function tipCalculator() {
    let tip;
    let bill;
    let percentage;
    
    bill = prompt ("How much is your bill?");
    percentage = prompt ("What percent would you like to tip?(Use Decimals)");
    let billNumber = Number(bill);
    let percentageNumber = Number(percentage);
    tip = billNumber * percentageNumber;
    tipCalculatorHeader.innerHTML = `Here's your tip`;
    tipCalculatorParagraph.innerHTML = `The amount you should tip is $${tip}`;
}

tipCalculatorButton.onclick = tipCalculator;