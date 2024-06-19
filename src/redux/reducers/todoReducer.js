import { createAction, createReducer } from "@reduxjs/toolkit";

const addItem = createAction("todo/addItem");
const changeProvince = createAction("todo/changeProvince");

const initialState = { list: [{ name: "NDT", address: { province: "PT" } }] };

const todoReducer = createReducer(initialState, (builder) => {
  builder.addCase(addItem, (state, action) => {
    console.log(action, "action");
  });
  builder.addCase(changeProvince, (state, action) => {
    state.list[0].address.province = "HN";
  });
});
export { todoReducer, addItem, changeProvince };
