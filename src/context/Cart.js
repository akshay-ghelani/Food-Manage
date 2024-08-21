
import { createContext, useState,useContext } from "react";

export const Cartcontext=createContext([]);

export const useCart = () => {
    const cart=useContext(Cartcontext);
    return cart;
}

export const CartProvider=(props) =>{
    const [items, setItems] = useState([]);
    return <Cartcontext.Provider value={{items, setItems}}>{props.children}
    </Cartcontext.Provider>
};

