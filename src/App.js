import React, { useState } from 'react';
import './App.css';

function Calculator() {

  const [valueTip, getValueTip] = useState(0);
  const [totalBill, getTotalBill] = useState(0)

  function calcular(parameter1, parameter2) {
    parameter2 = parameter2 / 100;
    const tip = parameter1 * parameter2;
    //onst totalBill = parameter1 + tip;
    getValueTip(tip);
    getTotalBill(Number(parameter1) + Number(tip));

  }

  return (

    <div className='container_component'>

      <form onSubmit={ev => {
        ev.preventDefault();
        calcular(ev.target.purchase.value, ev.target.tip.value);

      }}>

        <div id='container' className='container'>
          <h2 className='titulo'>Tip Calculator</h2>

          <div className='container_total'>

            <label for="purchase">Purchase $</label>
            <input id='purchase' name='purchase' type={"text"}></input>
            <br></br>
            <label for="tip">Tip:</label>
            <input id='tip' name='tip' type={"text"} size="28"></input>

          </div>


          <hr></hr>

          <h3 className='titulo'>Results</h3>

          <div id='container_result' className='container_result'>

            <label for="tipAmount">Tip amount : { }</label>
            <input id='tipAmount' name='tipAmount' type={"text"} disabled="true" value={valueTip} size=""></input>

            <br></br>

            <label for="totalBill">Total bill with amount</label>
            <input id='totalBill' name='totalBill' type={"text"} disabled="true" value={totalBill} size="10"></input>

          </div>

        </div>

        <button type='submit'>Calcular</button>
      </form>



    </div>

  )
}

function App() {
  return (
    <div>
      <Calculator></Calculator>
    </div>
  )
}


export default App;
