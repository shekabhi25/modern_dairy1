import React, { useState } from 'react';

export default function Form(props) {


    const justborder={
        border: "2px solid black",
        borderRadius: "10px ",
    }
  const[ mstyle  ,setmstyle] = useState({
    backgroundColor: 'black',
    color: 'white',
  });
  const [text, setText] = useState('');
  const [color, setColor] = useState('white');
  const [modeText, setModeText] = useState('Dark Mode');

  function onChangeFun(event) {
    setText(event.target.value);
  }

  function upperBtn() {
    setText(text.toUpperCase());
  }

  function clearBtn() {

     if(window.confirm("want to clear"))
     {

    setText("");
     }
  }



  function lowerBtn() {
    setText(text.toLowerCase());
  }

  function changeMode() {
    if (color === 'white') {
      setModeText('Dark Mode');
      setColor('black');
      setmstyle(
{
        backgroundColor: 'black',
    color: 'white',
}

      )
            


    } else {
      setModeText('White Mode');
      setColor('white');

      setmstyle(
        {
            backgroundColor : "white",
            color : "black"
        }
      )
    }
  }

  return (
    <>
      <button className='btn btn-dark my-3 mx-4' onClick={changeMode}  style={justborder}>
        {modeText}
      </button>

      <br />
      <div className='mb-3  container my-3' style={{ ...mstyle , ...justborder}}>
        <label htmlFor='exampleFormControlTextarea1' className='form-label'>
          {props.tittle}
        </label>
        <textarea
          style={{ ...mstyle }}
          onChange={onChangeFun}
          className='form-control'
          value={text}
          placeholder='Enter Text'
          id='exampleFormControlTextarea1'
          rows='8'
        ></textarea>
        <button className='btn btn-primary my-3' onClick={upperBtn}>
          Upper Case
        </button>
        <button className='btn btn-success my-3 mx-4' onClick={lowerBtn}>
          Lower Case
        </button>
        <button className='btn btn-primary my-3 ' onClick={clearBtn}>
          Clear 
        </button>
      </div>

      <p>
        Words : {text ? text.split(' ').length : 0} , Character: {text.length}
      </p>
    </>
  );
}
