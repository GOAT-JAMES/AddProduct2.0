
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

}

// ADD VALIDATION CODE************************
function isAllDataValid(){
    return true;
}