
import { create } from "zustand";


const useLocalStorage = create((set) =>({
    cartItems: JSON.parse(localStorage.getItem('cartItems')) ? JSON.parse(localStorage.getItem('cartItems')): {},
    setCartItem: (newCartItems) => { 
        localStorage.setItem('cartItems',JSON.stringify(newCartItems));
        set({ cartItems: newCartItems}) },
    
    getCartItem: () => {
        let newCartItems = localStorage.getItem('cartItems');
        if( newCartItems !== null ){
            set({ cartItems: JSON.parse(newCartItems)})
        }
        else{
            set({ cartItems: {}})
        }
        
    }
}));


const useTotalStorage = create((set) =>({
    total:0,
    setTotal: (totalAmount) =>{
        
        set({ total: totalAmount})
    }
}))
export { useLocalStorage, useTotalStorage }


