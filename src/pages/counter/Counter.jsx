import React from "react";
import type { RootState } from "../../redux/store";
import { useSelector, useDispatch } from "react-redux";
import {
  decrement,
  fetchUserById,
  increment,
} from "../../redux/reducers/counterSlice";
import { changeProvince } from "../../redux/reducers/todoReducer";

export function Counter() {
  const count = useSelector((state: RootState) => state.counter.value);
  const users = useSelector((state: RootState) => state.counter.entities);
  const list = useSelector((state: RootState) => state.todo.list);
  const dispatch = useDispatch();

  return (
    <div style={{ marginTop: 20 }}>
      <button
        aria-label="Increment value"
        onClick={() => dispatch(increment())}
      >
        Increment
      </button>
      <span style={{ padding: "0 10px" }}>{count}</span>
      <button
        aria-label="Decrement value"
        onClick={() => dispatch(decrement())}
      >
        Decrement
      </button>
      <div>
        <button
          aria-label="Increment value"
          onClick={() => dispatch(fetchUserById(1))}
        >
          Call api
        </button>
      </div>

      <div>Number users: {users.length}</div>

      <button
        aria-label="Decrement value"
        onClick={() => dispatch(changeProvince())}
      >
        Change province
      </button>

      <div>{list[0].address.province}</div>
    </div>
  );
}
