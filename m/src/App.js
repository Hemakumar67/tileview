import React, { useState } from 'react'
import './App.css';
import Carddisplay from './cardView'
import Showpage from './showPage'
import arr from './data';
import Button from './button'

function App() {
  const [cardDetail, setCardDetail] = useState('')
  const [back1, setBack1] = useState(false)
  console.log(arr)
  const display = (data) => {
    setCardDetail(data)
    setBack1(true)

  }
  const backbtnClick = () => {
    setBack1(false)
  }
  return (
    <div className="App">
      <div className='container imgShow'>
        {back1 && <Button backClick={backbtnClick} />}
        <div className='row'>
          {!back1 &&
            arr.map((i) =>
              <Carddisplay i={i} click={display} />
            )
          }

        </div>
        {back1 && <Showpage data={cardDetail} />}

      </div>

    </div>
  );
}

export default App;
