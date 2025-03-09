
import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { ISKU } from "../utils/interface/Isku"

interface SKUState {
  SKU: ISKU[];
}

const initialState: SKUState = {
  SKU: [
    { id: 1, sku: "Cotton Polo Shirt", price: "$ 34.99", cost: "$ 18.00" },
    { id: 2, sku: "Denim Jeans", price: "$ 49.99", cost: "$ 25.00" },
    { id: 3, sku: "Leather Jacket", price: "$ 99.99", cost: "$ 50.00" },
    { id: 4, sku: "Graphic TShirt", price: "$ 24.99", cost: "$ 12.50" },
  ],
};

const skuSlice = createSlice({
  name: "skus",
  initialState,
  reducers: {
    addSku: (state, action: PayloadAction<ISKU>) => {
      state.SKU.push(action.payload);
    },
    deleteSku: (state, action: PayloadAction<number>) => {
      state.SKU = state.SKU.filter(
        (sku) => sku.id !== action.payload
      );
    },
    updateSku: (state, action: PayloadAction<Partial<ISKU>>) => {
      console.log(action.payload);

      state.SKU = state.SKU.map((sku) =>
        sku.id === action.payload.id ? { ...sku, ...action.payload } : sku
      );
    },
  },
});

export const { addSku, deleteSku, updateSku } = skuSlice.actions;
export default skuSlice.reducer;
