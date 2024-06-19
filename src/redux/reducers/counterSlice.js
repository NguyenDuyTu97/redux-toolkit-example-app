import { createAsyncThunk, createSlice, createAction } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import { toast } from "react-toastify";

export interface CounterState {
  value: number;
  entities: AnyIfEmpty;
  loading: string;
}

const initialState: CounterState = {
  value: 0,
  entities: [],
  loading: "idle",
};

const resetValue = createAction('resetValue');

export const fetchUserById = createAsyncThunk(
  "users/fetchByIdStatus",
  async (userId, thunkAPI) => {
    console.log(thunkAPI, "thunkAPI of thunk 1");

    const isEvenNumber = Math.round(Math.random() * 6) % 2 === 0;
    if (isEvenNumber) {
      const response = await fetch(
        `https://jsonplaceholder.typicode.com/users/${userId}`
      );

      const res = await response.json();
      if (res) {
        toast.success("Get data successfully!", {
          position: "top-right",
        });

        return res;
      } else {
        toast.error("Failed to fetch data", {
          position: "top-left",
        });
      }
    } else {
      toast.error("Failed to fetch data", {
        position: "top-left",
      });
    }
  }
);

export const counterSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    increment: (state) => {
      state.value += 1;
    },
    decrement: (state) => {
      state.value -= 1;
    },
    incrementByAmount: (state, action: PayloadAction<number>) => {
      state.value += action.payload;
    },
  },
  extraReducers: (builder) => {
    // Add reducers for additional action types here, and handle loading state as needed
    builder.addCase(fetchUserById.fulfilled, (state, action) => {
      // Add user to the state array
      state.entities.push(action.payload);
    });
    builder.addCase(fetchUserById.rejected, (state, action) => {
      console.log(action, "action rejected");
    });
    builder.addCase(resetValue, (state, action) => {
      state.value = 0;
    });
  },
});

// Action creators are generated for each case reducer function
export const { increment, decrement, incrementByAmount } = counterSlice.actions;

export default counterSlice.reducer;
