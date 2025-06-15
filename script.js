console.log("Processing correctly...");
let status  = JSON.parse(localStorage.getItem('Status')) ||  {
          wins : 0,
          losses : 0,
          ties : 0
};

// let status = {
//           wins : 0,
//           losses : 0,
//           ties : 0
// }
console.log(status);
let autoPlayToggle = false;
let intervalID;
function autoPlay() {
          if(autoPlayToggle) {
                    document.querySelector('.auto-play-button').innerHTML = (`Auto Play`)
                    console.log('running');
                    clearInterval(intervalID);
                    autoPlayToggle = false;
          } else {
                    document.querySelector('.auto-play-button').innerHTML = (`STOP`)
                    intervalID = setInterval(function() {
                              // let computerMove = Move();
                              let cMove =Move();
                              let uMove=Move();
                              playGame(cMove, uMove);
                              autoPlayToggle = true;
                              console.log(autoPlayToggle)
                              // console.log(cMove);
                              // console.log(uMove)
                    }, 1000)
          }
}

function playGame(computerMove, userMove){
          if(computerMove === userMove){
                    console.log("Tie");
                    status.ties += 1;
                    console.log(status);
                    document.querySelector('article').innerHTML =`Computer Move : <span class="js-img">${computerMove}</span>, Player Move : <span class="js-img">${userMove}</span>.<br>
                              RESULT => TIE.!!<br>
                              WINS : ${status.wins}, LOSSES : ${status.losses}, TIES : ${status.ties}`;
          }

          else if(userMove  === '✊'){
                    if(computerMove ===  '🤚'){
                              console.log('You Lose.');
                              status.losses += 1;
                              document.querySelector('article').innerHTML =`Computer Move : <span class="js-img">${computerMove}</span>, Player Move : <span class="js-img">${userMove}</span>.<br>
                                        RESULT => YOU LOST.!!<br>
                                        WINS : ${status.wins}, LOSSES : ${status.losses}, TIES : ${status.ties}`;
                    }
                    else if(computerMove === '✌️'){
                              console.log('You Win.');
                              status.wins += 1;
                              document.querySelector('article').innerHTML =`Computer Move : <span class="js-img">${computerMove}</span>, Player Move : <span class="js-img">${userMove}</span>.<br>
                                        RESULT => YOU WON.!!<br>
                                        WINS : ${status.wins}, LOSSES : ${status.losses}, TIES : ${status.ties}`;
                    }
          }

          else if(userMove  ===  '🤚'){
                    if(computerMove === '✌️'){
                              console.log('You lose.');
                              status.losses += 1;
                              document.querySelector('article').innerHTML =`Computer Move : <span class="js-img">${computerMove}</span>, Player Move : <span class="js-img">${userMove}</span>.<br>
                                        RESULT => YOU LOST..!!<br>
                                        WINS : ${status.wins}, LOSSES : ${status.losses}, TIES : ${status.ties}`;
                    }
                    else if(computerMove === '✊'){
                              console.log('You Win.');
                              status.wins += 1;
                              document.querySelector('article').innerHTML =`Computer Move : <span class="js-img">${computerMove}</span>, Player Move : <span class="js-img">${userMove}</span>.<br>
                                        RESULT => YOU WON.!!<br>
                                        WINS : ${status.wins}, LOSSES : ${status.losses}, TIES : ${status.ties}`;
                    }
          }

          if(userMove  === '✌️'){
                    if(computerMove === '✊'){
                              console.log('You lose.');
                              status.losses += 1;
                              document.querySelector('article').innerHTML =`Computer Move : <span class="js-img">${computerMove}</span>, Player Move : <span class="js-img">${userMove}</span>.<br>
                                        RESULT => YOU LOST..!!<br>
                                        WINS : ${status.wins}, LOSSES : ${status.losses}, TIES : ${status.ties}`;
                    }
                    else if(computerMove ===  '🤚'){
                              console.log('You Win.');
                              status.wins += 1;
                              document.querySelector('article').innerHTML =`Computer Move : <span class="js-img">${computerMove}</span>, Player Move : <span class="js-img">${userMove}</span>.<br>
                                        RESULT => YOU WON.!!<br>
                                        WINS : ${status.wins}, LOSSES : ${status.losses}, TIES : ${status.ties} `;
                    }
          }
          localStorage.setItem('Status',  JSON.stringify(status));
}

function Move(){
          let random = Math.random();

          if(random < 1/3){
                    // console.log('✊')
                    return '✊';
          }
          else if(random  >= 1/3 && random < 2/3) {
                    // console.log( '🤚')
                    return '🤚';
          }
          else{
                    // console.log('✌️')
                    return '✌️';
          }
}

function printStatus () {
          document.querySelector();
}