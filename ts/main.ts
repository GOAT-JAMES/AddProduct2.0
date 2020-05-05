
class VideoGame{
    title: string;
    price: number;
    rating: string;
    isDigitalOnly: boolean;
}

// test code
/*
let myGame = new VideoGame();
myGame.title = "Mario";
myGame.rating = "E";
myGame.isDigitalOnly = true;
*/

window.onload = function(){
    let addBtn = <HTMLElement>document.querySelector("input[type = button]");
    addBtn.onclick = addVideoGame;
}

/**
 * Clears all errors in the validation summary 
 */

function clearAllErrors(){
    let errSummary = getById("validation-summary");
    errSummary.innerText = "";
}

function addVideoGame(){
    console.log("add videogame");
    clearAllErrors();


    if(isAllDataValid()){
        let game:VideoGame = getVideoGame();
        displayGame(game);
    }
}

function getById(id:string){
    return document.getElementById(id);
}

/**
 * Gets all game data from the form and returns it in a 
 * VideoGame Object
 */

function getVideoGame():VideoGame{
    let game = new VideoGame;
    // TODO: Create game and populate with data from the form
    // Return game
    let titleInput = <HTMLInputElement>getById("title");
    game.title = titleInput.value;

    let priceInput = <HTMLInputElement>getById("price");
    game.price = parseFloat(priceInput.value);

    let ratingInput = <HTMLSelectElement>getById("rating");
    game.rating = ratingInput.value;

    let digitalOnly = <HTMLInputElement>getById("online");
    game.isDigitalOnly = digitalOnly.checked;
    
    /*
    if(digitalOnly.checked){
        game.isDigitalOnly = true;
    }

    else{
        game.isDigitalOnly = false;
    }
    */
    
    return game;
    
}

function displayGame(myGame:VideoGame):void{
    //TODO: Display videogame below the form
    let displayDiv = getById("display");

    // Create <h2> with game title
    let gameHeading = document.createElement("h2");
    gameHeading.innerText = myGame.title;
    
    // Add <h2> in the <div id ="display">
    displayDiv.appendChild(gameHeading);
    // Add <p> game info
    let gameInfo = document.createElement("p");
    displayDiv.appendChild(gameInfo);

    // Create paragraph with game details
    
    let gameMediumDisplay = "";
    
    if(myGame.isDigitalOnly){
        gameMediumDisplay = "This is a digital only game.";
    }
    else{
        gameMediumDisplay = "You can come buy a physical copy!";
    }

    gameInfo.innerText = `${myGame.title} has a rating of ${myGame.rating}. It cost $${myGame.price.toFixed(2)}. ${gameMediumDisplay}`;

}

function getInputById(id:string):HTMLInputElement{
    return <HTMLInputElement>document.getElementById(id);
}

// ADD VALIDATION CODE************************
function isAllDataValid(){
    let isValid = true;

    let title = getInputById("title").value;
    if(title == ""){
        isValid = false;
        addErrorMessage("Title is required");
    }

    let rating = (<HTMLOptionElement>getById("rating")).value;
    if(rating == ""){
        isValid = false;
        addErrorMessage("You must choose a rating");
    }

    let price = getInputById("price").value;
    let priceValue = parseFloat(price);
    if(price == "" || isNaN(priceValue)){
        isValid = false;

        addErrorMessage("Price is required");
    }

    return isValid;
}

function addErrorMessage(errMsg:string) {
    let errSummary = getById("validation-summary");
    let errItem = document.createElement("li");
    errItem.innerText = errMsg;
    errSummary.appendChild(errItem);
}
