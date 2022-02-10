import {createSlice , configureStore} from "@reduxjs/toolkit"

const initialState = {
    items: [] ,
}
export  const basketSlice = createSlice({
    name: "basket",
    initialState,
    reducers:{
     addToBasket : (state , action) => {
         state.items = [...state.items , action.payload]
     } ,
     removeFromBasket: (state , action) => {
       // to find id we want to remove findIndex better than filter 
       const index = state.items.findIndex(basketItem => basketItem.id === action.payload.id)
       let newBasket = [...state.items] ;
       if (index >= 0 ){
         // to cut off the product that we want to remove from the array
        newBasket.splice(index , 1)
       } else {
         console.warn("cant remove product")
       }
       state.items = newBasket ;    
      }
    }

})



  export const { addToBasket, removeFromBasket } = basketSlice.actions;

  // Selectors - This is how we pull information from the Global store slice
 export const selectItems = (state) => state.basket.items;
  export const selectTotal = (state) => state.basket.items.reduce((total , item) => total + item.price , 0) 
 const store = configureStore({
    reducer: {
      basket: basketSlice.reducer,
    },
  });
  export default store ;