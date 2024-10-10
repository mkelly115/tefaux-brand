import { createContext, useState } from "react";

const addCartItem = (cartItems, productToAdd) => {

    const existingCartItem = cartItems.find(
        (cartItem) => cartItem.id === productToAdd.id
    );

    if (existingCartItem) {
        return cartItems.map((cartItem) => 
            cartItem.id === productToAdd.id 
        ? { ...cartItem, quantity: cartItem.quantity + 1 }
            : cartItem
        );
    }

    return [...cartItems, { ...productToAdd, quantity: 1 }]
};

export const CartContext = createContext({
    isCartopen: false,
    setIsCartOpen: () => { },
    cartItems: [],
    addItemToCart: () => { },
})

export const CartProvider = ({ children }) => {
    const [isCartopen, setIsCartOpen] = useState(false);
    const [cartItems, setCartItems] = useState([])

    const addItemToCart = (productToAdd) => {
        setCartItems(addCartItem(cartItems, productToAdd))
    }

    const value = { isCartopen, setIsCartOpen, addItemToCart, cartItems };

    return <CartContext.Provider value={value}>{children}</CartContext.Provider>

}