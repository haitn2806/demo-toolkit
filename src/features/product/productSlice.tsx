import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
import { addProduct, deleteProduct, getProduct, updateProduct } from '../../api/products';
import { RootState, AppThunk } from '../../app/store';

export interface Iproducts {
  value : any[]
}

const initialState: Iproducts = {
     value:[]
};

export const GET_PRODUCT = createAsyncThunk(
    "product/GET_PRODUCT",
   async () => {
    const {data} = await getProduct();
    return data
   }
)
export const DELETE_PRODUCT = createAsyncThunk(
    "product/DELETE_PRODUCT",
   async (id:number|string) => {
    // eslint-disable-next-line no-restricted-globals
    const cf = confirm("ban co muon xoa k ?")
    if(cf) {
      await deleteProduct(id);
      return id
    } 
     
   
   }
)
export const ADD_PRODUCT = createAsyncThunk(
    "product/ADD_PRODUCT",
   async (item:number|string) => {
   const {data} =  await addProduct(item)
    return data
   }
)
export const UPDATE_PRODUCT = createAsyncThunk(
    "product/UPDATE_PRODUCT",
   async (item:number|string) => {
   const {data} =  await updateProduct(item)
    return data
   }
)



export const productSlice = createSlice({
  name: 'product',
  initialState,
  // The `reducers` field lets us define reducers and generate associated actions
  reducers: {
   
  },
  extraReducers : builder =>{
    builder.addCase(GET_PRODUCT.fulfilled,(state,action)=>{
        state.value = action.payload
    })
    builder.addCase(DELETE_PRODUCT.fulfilled,(state,action)=>{
        state.value = state.value.filter(item => item.id !== action.payload) 
    })
    builder.addCase(ADD_PRODUCT.fulfilled,(state,action)=>{
        state.value.push(action.payload)
    })
    builder.addCase(UPDATE_PRODUCT.fulfilled,(state,action)=>{
        // state.value.push(action.payload)
    })
  }
});






export default productSlice.reducer;
