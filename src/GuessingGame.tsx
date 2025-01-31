import './App.css'
import './Game.css'
import { useState, ChangeEvent } from 'react'
import React from 'react'

const GuessingGame: React.FC = () => {
  const Actual_Name = "NAVYA";
  
  // Define state types
  const [Name_arr, setArr] = useState<string>(""); // The guessed name (string)
  const [name, setName] = useState<string>(""); // The inputted name
  const [error, setError] = useState<number>(0); // Error state (number for simplicity)
  const [Number_of_guess, setGuess] = useState<number>(10); // Number of guesses left

  // Event handler for change in input
  function handlechange(event: ChangeEvent<HTMLInputElement>) {
    setError(0); // Reset error state
    const Alpabet = event.target.value[event.target.value.length - 1].toUpperCase(); // Get the last character entered and capitalize it
    setName(event.target.value); // Update name in state

    if (Actual_Name.indexOf(Alpabet) !== -1) { // Check if the character is in the actual name
      const arr = Name_arr + Alpabet;
      if (Actual_Name.indexOf(arr) === 0) { // Check if the partial guess matches the start of Actual_Name
        setArr(arr); // Update guessed name
      } else {
        setTimeout(() => {
          setName((prev) => prev.slice(0, prev.length - 1)); // Remove the last character from the input after delay
        }, 500);
        setError(2); // Error: character is correct but in the wrong position
      }
    } else {
      alert("You lost one move");
      setTimeout(() => {
        setName((prev) => prev.slice(0, prev.length - 1)); // Remove the last character from the input after delay
      }, 500);
      setError(1); // Error: character is not in the name
      setGuess((prev) => prev - 1); // Decrease the number of guesses left
    }
  }

  // Handler to restart the game
  function handleClick() {
    setGuess(10); // Reset guesses to 10
    setError(0); // Reset error state
    setArr(""); // Reset guessed name
    setName(""); // Reset input name
  }
 
  return (
    <>
      {Number_of_guess !== 0 && Name_arr.length !== 5 ? (
        <div className='outer-cont'>
          <div className="trials">
          {Array(Number_of_guess).fill("❤️").map((_, i) => (
           <span key={i} className="heart">❤️</span>
           ))}
           </div>
          <div className="output">
            {Array.from({ length: 5 }).map((ele, idx) => {
              return (
                <div className='output-box' key={idx}>
                  {Name_arr[idx] ? Name_arr[idx] : ""}
                </div>
              );
            })}
          </div>
          {error === 1 ? <div className="error1">Oops! wrong Guess</div> : null}
          {error === 2 ? <div className="error2">Element is present but not at this position!</div> : null}
          <div className="input">
            <input type="text" value={name} onChange={handlechange} />
          </div>
        </div>
      ) : null}
      {(!Number_of_guess || Name_arr.length === 5) && (
        <div className='restart'>
          {Name_arr.length === 5 && <h1>You Won!</h1>}
          <button onClick={handleClick}>Restart The Game</button>
        </div>
      )}
    </>
  );
}

export default GuessingGame;
