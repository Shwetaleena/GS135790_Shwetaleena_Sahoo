import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IStore } from "../utils/interface/Istore";

interface StoreState {
  stores: IStore[];
}

const initialState: StoreState = {
  stores: [
    { id: 1, store: "Walmart", city: "New York", state: "NY"},
    { id: 2, store: "Target", city: "Los Angeles", state: "CA"},
  ],
};

const storeSlice = createSlice({
  name: "stores",
  initialState,
  reducers: {
    addStore: (state, action: PayloadAction<IStore>) => {
      state.stores.push(action.payload);
    },
    deleteStore: (state, action: PayloadAction<number>) => {
      state.stores = state.stores.filter(
        (store) => store.id !== action.payload
      );
    },
    updateStore: (state, action: PayloadAction<Partial<IStore>>) => {
      console.log(action.payload);

      state.stores = state.stores.map((store) =>
        store.id === action.payload.id ? { ...store, ...action.payload } : store
      );
    },
  },
});

export const { addStore, deleteStore, updateStore } = storeSlice.actions;
export default storeSlice.reducer;
