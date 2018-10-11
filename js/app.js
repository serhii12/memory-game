/*
MVC

1. New Game
2. End Game = Exit game
* Show Result 
3. Reset Game -> New game
4. Exit Game


New Game:
* Init game
** Setup model
** Init user data
* Start game
** Start timer
** Show game

Setup ApplicationModel
* status
** intro => page
** game => page
** result => page

Setup GameModel

* Board size
* Board data
* Visual Item Data
** id
** img src 
** Item size
* Opened item 
** id
** position
* Count of the opened items
* timer
** max timer value
* user
** name

ApplicationController(Root)
** Intro (Intro page)
** New Game
** Reset Game -> New game
** Show Result 
** End Game = Exit game
** Exit Game
+ 
GameController
* Game
** Click on Item
** Timer -> End Game -> ApplicationController.EndGame

IntroView -> intro.html
GameView -> game.html
ResultView -> result.html

<div id="intro" class="page active">

</div>
<div id="game" class="page">
...
</div>
<div id="result" class="page">

</div>
----------------------------------

Board data
[
    [{id:1,opened:false},{id:2,opened:true},3,4],
    [1,2,3,4],
    [1,2,3,4],
    [1,2,3,4]
]

Visual Item Data
[
    {id:0,img:"img/back.png"},
    {id:1,img:"img/1.png"},
    {id:2,img:"img/2.png"},
    {id:3,img:"img/3.png"},
    {id:4,img:"img/4.png"}
]
Opened item 
{
    id:-1,
    position:[0,0]
}

Click on Item:
** detect item position and get item data => <div class="item" data-item-id="1" data-item-position="2,4" data-item-opened="false" onclick="itemClick(e)"/>
** check and set Count of the opened items => 0 -> 1 -> 1 -> 2 
* if Count of the opened items === board width  board height => End game


// Structure option 1
let value1, value2 = null;

handleClick(event) {
  
}

compareValues(val1, val2) {
  
}

shuffleCards() {
  
}

renderCards() {
   
}

initGame() {
   
}

$(document).ready(() => {
    
})


*/