import React, { useState, useEffect } from "react";
import Axios from "axios";
import "./App.css";

function App() {
  const [foodName, setFoodName] = useState("");
  const [days, setDays] = useState(0);

  const [foodList, setFoodList] = useState([]);

  useEffect(() => {
    Axios.get("http://localhost:3000/read").then((response) => {
      setFoodList(response.data);
    });
  }, []);

  const addToList = () => {
    Axios.post("http://localhost:3000/insert", {
      foodName: foodName,
      days: days,
    });
  };

  return (
    <div className="App">
      <h1>CRUD App with MERN</h1>
      <label htmlFor="">Food Name </label>
      <input
        type="text"
        onChange={(e) => {
          setFoodName(e.target.value);
        }}
      />
      <label htmlFor=""> Days Since Ate to You </label>
      <input
        type="number"
        onChange={(e) => {
          setDays(e.target.value);
        }}
      />
      <button onClick={addToList}>Add to List</button>

      <h1>Food List</h1>

      {foodList.map((val, key) => {
        return (
          <div key={key} className="food">
            <h1>{val.foodName}</h1>
            <h1>{val.daysSinceAt}</h1>
            <button>Delete</button>
          </div>
        );
      })}
    </div>
  );
}

export default App;
