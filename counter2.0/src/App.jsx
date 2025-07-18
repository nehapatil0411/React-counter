import { useState } from "react";
import { isDisabled } from "@testing-library/user-event/dist/utils";
import "./style.css";
function App() {

  const [counter,setcounter]=useState(0)

   const PrimeorNotPrime = (num) => {
    let factor = 0;
    for (let i = 1; i <= num; i++) {
      if (num % i == 0) {
        factor++;
      }
    }


    if (factor === 2) {
      return true;
    } else {
      return false;
    }
  };
  return (
    <div className="container">
      <h1 className="heading">Welcome to Counter 2.0</h1>
      <div>
        <button className="decrementBtn" onClick={()=>setcounter(counter-1)}data-testid="minusonebtn">-1</button>
        <button className="incrementBtn" onClick={()=>setcounter(counter+1)} data-testid="plusonebtn">+1</button>
      <div>
        <button className="resetBtn" onClick={()=>setcounter(0)}data-testid="resetbtn">Reset Count</button>
      </div>
      </div>

      <span className="countValue" data-testid="counter">Count : {counter}</span>
      <div>
        <span className="evenOrOdd" data-testid="odd-or-even">{counter % 2==0 ? " This number is : Even" : " This number is : Odd"}</span>
        <span className="primeOrNot" data-testid="is-prime">{PrimeorNotPrime (counter) ? "Prime number : true" : "Prime number: false" }</span>
      </div>
      

    </div>
  );

}

export default App;

