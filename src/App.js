import "./styles.css";
import { useState } from "react";

export default function App() {
  const [arr, setArr] = useState(["A", "B", "C"]);
  return (
    <div className="App">
      {arr.map((val, id) => {
        return (
          <div>
            <List val={val} arr={arr} setArr={setArr} />
          </div>
        );
      })}
    </div>
  );
}

function List(props) {
  const [check, setCheck] = useState(false);

  function handleChange(e) {
    console.log(e.target.value);
    setCheck(!check);
  }
  function handleDelete() {
    const newArr = props.arr.filter((val) => {
      return val !== props.val;
    });

    props.setArr(newArr);
  }
  return (
    <div>
      <input type="checkbox" onChange={handleChange} />
      {props.val}
      {check && <button onClick={handleDelete}>Delete</button>}
    </div>
  );
}
