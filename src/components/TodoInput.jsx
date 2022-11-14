import React, { useState } from "react";
import { addTodo } from "../redux/actions";
import { useDispatch } from "react-redux";

function TodoInput() {
  const [name, setName] = useState();
  const [id, setId] = useState();
  // const [isActive, setIsActive] = useState();
  const dispatch = useDispatch();
  return (
    <div>
      <h1>What's the plan for today?</h1>
      <div className="">
        <input
          value={name}
          onChange={(e) => setName(e.target.value)}
          type="text"
          className=""
          placeholder="add your activity here..."
        />
        <button
          onClick={() => {
            dispatch(
              addTodo({
                id: id,
                name: name,
                // isActive: false
              })
            );
            setId();
            setName("");
            // setIsActive()
          }}
          className="">
          Add
        </button>
      </div>
    </div>
  );
}

export default TodoInput;
