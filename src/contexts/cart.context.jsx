import { createContext, useState } from "react";

export const CartContext = createContext({
    isCartopen: false,
    setIsCartOpen: () => {}
})

export const CartProvider = ({children}) => {
    const [isCartopen, setIsCartOpen] = useState(false);
    const value = {isCartopen, setIsCartOpen};

    return <CartContext.Provider value={value}>{children}</CartContext.Provider>

}