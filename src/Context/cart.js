import { useState, useEffect, useContext, createContext } from "react";

const CartContext = createContext();

export const CartProvider = ({ children }) => {
    const [cart, setCart] = useState([]);

    useEffect(() => {
        let existingCartItem = localStorage.getItem("cart")
        if (existingCartItem) setCart(JSON.parse(existingCartItem));
    }, [])


    return (
        <CartContext.Provider value={[cart, setCart]}>
            {children}
        </CartContext.Provider>
    )
}

// custom hook
export const useCart = () => useContext(CartContext)