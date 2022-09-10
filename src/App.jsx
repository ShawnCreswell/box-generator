
import './lux.css';
import React, { useState } from 'react';

import MessageForm from './components/NewBoxForm';
import Color from './components/BoxDisplay';
import styles from './components/box.css'



function App() {
  const [boxes, setBoxes] = useState([]);
  const [newColor, setNewColor] = useState(""); //BoxForm
  const [newSize, setNewSize] = useState(100); //BoxForm

  const handleNewBox = (event) => {
    event.preventDefault();

    if (newColor.length === 0) {
      return;
    }

    const boxItem = {
      color: newColor,
      size: newSize
    }

    setBoxes([...boxes, boxItem])
    setNewColor("")
    setNewSize(100)
  }

  return (
    <div className="container d-flex justify-content-center align-items-center">
      <div className="row">
        <div className="col">
          <div className='card d-flex'>
            <div className="card-header">
              <h1>Create Box</h1>
            </div>
            <div className="card-body d-flex  ">
              <form onSubmit={(event) => { handleNewBox(event); }}>
                <div>
                  <label>Color: </label>
                  <input
                  className='form-control'
                    onChange={(event) => { setNewColor(event.target.value) }}
                    type="color"
                    value={newColor}
                  />
                </div>
                <div>
                  <label>Size in Pixels: </label>
                  <input
                  className='form-control'
                    onChange={(event) => { setNewSize(event.target.value) }}
                    type="number"
                    min="100"
                    value={newSize}
                  />
                </div>
                <div className='d-flex justify-content-center align-items-center'>
                  <button className='btn btn-primary mt-4'>Add</button>
                </div>
              </form>
            </div>

            <div className='d-flex' >
            {/* {styles.container} */}
              {
                boxes.map((box, index) => {

                  return (
                    <Color
                      key={index}
                      box={box}
                    />
                  )
                }
                )
              }
            </div>
          </div>
        </div>
      </div>
    </div>


  );
}

export default App;
