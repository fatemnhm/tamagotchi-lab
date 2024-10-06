/*-------------------------------- Constants --------------------------------*/

const states = {bordem:0,hunger:0,sleepiness:0,}
const boredomStatEl = document.querySelector('#boredom-stat');
const hungerStatEl = document.querySelector('#hunger-stat');
const sleepinessStatEl = document.querySelector('#sleepiness-stat');

const playBtnEl =document.querySelector('#play');
const feedBtnEl =document.querySelector('#feed');
const sleepBtnEl =document.querySelector('#sleep');
const resetBtnEl=document.querySelector('#restart');

const gameMessageEl =document.querySelector('#message');

console.log(resetBtnEl);




/*---------------------------- Variables (state) ----------------------------*/
let timer;
let gameOver;


/*------------------------ Cached Element References ------------------------*/



/*-------------------------------- Functions --------------------------------*/



//boredomStatEl.innerText = states.bordem;
// hungerStatEl.innerText=states.hunger;
// sleepinessStatEl.innerText=states.sleepiness;


//resetBtnEl.classList.add('hidden');
//gameMessageEl.classList.add('hidden');

//messageEl.classList.remove('hidden');




function updateStates(){
    states.bordem=states.bordem+ Math.floor(Math.random() * 4);
     states.hunger=states.hunger+ Math.floor(Math.random() * 4);
    states.sleepiness=states.sleepiness+ Math.floor(Math.random() * 4);
     
     }



function render(){

    sleepinessStatEl.innerText = states.sleepiness;
    hungerStatEl.innerText = states.hunger;
    boredomStatEl.innerText = states.bordem;

if (gameOver==='true'){
  clearInterval(timer);
  resetBtnEl.classList.remove('hidden');
  gameMessageEl.classList.remove('hidden');
}

}


function checkGameOver(){

  if ( states.bordem === 10||states.hunger ===10||states.sleepiness === 10){

gameOver='true';
  }
  

}
function init(){

    resetBtnEl.classList.add('hidden');
    gameMessageEl.classList.add('hidden');


    states.bordem = 0;
    states.hunger = 0;
    states.sleepiness = 0;
    gameOver='false';
     timer = setInterval(runGame,2000);
   
    runGame();
    render();


 
}

init();

function runGame(){
   updateStates();
   checkGameOver();
   
   render();


}


//function render(){
    //let text = document.getElementById("divA").textContent;



    
//}



function playBtnClick(){

    states.bordem=0;
      render();
      
  }


  function sleepBtnClick(){

    states.sleepiness=0;
      render();
      
  }


  function feedBtnClick(){

    states.hunger=0;
      render();
      
  }

playBtnEl.addEventListener('click', (event) => {

   playBtnClick();
});

feedBtnEl.addEventListener('click', (event) => {

feedBtnClick();
 });

 sleepBtnEl.addEventListener('click', (event) => {

    sleepBtnClick();
 });
 


resetBtnEl.addEventListener('click',()=>{init()});




//function updateStates() {
    //states.forEach(element => {
        //states[element] += Math.floor(Math.random() * 3);
        //
       
      
   // });
//}




/*----------------------------- Event Listeners -----------------------------*/






// 1) Define the required variables used to track the state of the game.

// 2) Store cached element references.

// 3) Upon loading, the game state should be initialized, and a function should 
//    be called to render this game state.

// 4) The state of the game should be rendered to the user.

// 5) Handle the game over logic. 

// 6) Handle each instance of a player clicking a button with the use of a 
//    `handleClick()` function.

// 7) Create reset functionality.
