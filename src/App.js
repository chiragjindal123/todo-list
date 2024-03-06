import React, { useState } from 'react';
import './App.css';
import Todo from './todo';

function App() {
  const [inputList, setInputList] = useState("");
  const [items, setItems] = useState([]);

  const itemEvent = (event) => {
    setInputList(event.target.value);
  };

  const listofitems = () => {
    setItems((oldItems) => {
      return [...oldItems, inputList];
    });
    setInputList("");
  };

  const deleteitem = (id) => {
    setItems((oldItems) => {
      return oldItems.filter((arrEle, index) => {
        return index !== id;
      });
    });
  };

  const handleKeyPress = (event) => {
    if (event.key === "Enter") {
      listofitems();
    }
  };

  return (
    <>
      <div className="main_div">
        <div className="center_div">
          <br />
          <h1>ToDo List</h1>
          <br />
          <input
            type="text"
            placeholder="Add a Items"
            value={inputList}
            onChange={itemEvent}
            onKeyPress={handleKeyPress}
          />
          <button onClick={listofitems}>+</button>
          <ol>
            {items.map((itemval, index) => {
              return (
                <Todo key={index} id={index} text={itemval} onSelect={deleteitem} />
              );
            })}
          </ol>
        </div>
      </div>
    </>
  );
}

export default App;
