/* import { useState } from 'react'; */
import { useEffect, useState } from "react";

/* 
Add the sum to the total every time you roll                    [x]
Show total sum on screen                                        [x]
Do a "bust" function                                            [x]      
reset game                                                      [x]
Make a "stop" button under "roll button"                        [x]
Fix CSS so they show in column                                  [x]
Make stop and roll only show when reset dont                    []
Slutade när jag gjort stop button och inte förstod varför den loggade stop varje gång jag klickade på roll

*/

  
  const Container = () => {
    // The total nr INT
    const [TotalNr, setTotalNr] = useState(0);
    /* console.log(TotalNr); */
    
  /* The two INTs that show on the "dices" */
    const [RandomNrOne, setRandomNrOne] = useState(0);
    const [RandomNrTwo, setRandomNrTwo] = useState(0);
    // Bool that checks player is not bust
    const [bust, setBust] = useState(false);

    // Reset button, only show when bust
    let resetButton = null;
    if(bust) {
      resetButton = <button onClick={() => resetGame()}>Reset</button>
    }

    // Stop button
    const stopButton = (
        <button onClick={console.log("Stop")}>Stop</button>
      )
    

    // Sets 2 new die numbers and adds to total
    function rollDice() {
        
        const nrOne = NrGenerator();
        const nrTwo = NrGenerator();
        setRandomNrOne(nrOne);
        setRandomNrTwo(nrTwo);

        const controllNr = TotalNr + nrOne + nrTwo;

        if(controllNr >= 21) {
          console.log("Busted!")
          setBust(true);
        }

        setTotalNr(TotalNr + nrOne + nrTwo);
        console.log(TotalNr);
    }
    
    function resetGame() {
        console.log("Reset game")
        setBust(false);
        setRandomNrOne(0);
        setRandomNrTwo(0);
        setTotalNr(0);
    }


    return (
      <div className={bust ? 'color-red container' : 'color-green container'}>
        <div className="total-container">
          <h3>Total: {TotalNr}</h3>
        </div>
        <div className='nr-container'>
          <h2>{RandomNrOne}</h2>
          <h2>{RandomNrTwo}</h2>
          
        </div>
        <div className='button-container'>
          {
            bust ?  resetButton : <button onClick={() => rollDice()}>Roll</button>
          }
          {stopButton}
        </div>
  
      </div>
      
      
    )
  }

  const NrGenerator = () => {
    let nr = Math.floor(Math.random() * 6) + 1;
    return (nr)
  }

  

  export default Container;