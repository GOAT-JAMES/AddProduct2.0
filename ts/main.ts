
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

function addVideoGame(){
    console.log("add videogame");

    if(isAllDataValid()){
        let game = getVideoGame();
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

// ADD VALIDATION CODE************************
function isAllDataValid(){
    return true;
}