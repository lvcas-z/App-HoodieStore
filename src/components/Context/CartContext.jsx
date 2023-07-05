import React, { createContext, useState, useEffect } from 'react';

export const CartContext = createContext();

const CartContextProvider = ({ children }) => {
    const [cartItems, setCartItems] = useState([]);

    const addToCart = (product, quantity) => {
        const item = {
            id: product.id,
            name: product.name,
            price: product.price,
            quantity: quantity,
        };

        setCartItems((prevCartItems) => {
            const existingItem = prevCartItems.find((item) => item.id === product.id);

            if (existingItem) {
                return prevCartItems.map((item) =>
                    item.id === product.id
                        ? { ...item, quantity: item.quantity + quantity }
                        : item
                );
            } else {
                return [...prevCartItems, item];
            }
        });
    };

    const removeFromCart = (productId) => {
        setCartItems((prevCartItems) =>
            prevCartItems.filter((item) => item.id !== productId)
        );
    };

    const getTotalPrice = () => {
        return cartItems.reduce(
            (total, item) => total + item.price * item.quantity, 0
        );
    };

    // Guardar carrito en el almacenamiento local al actualizar
    useEffect(() => {
        localStorage.setItem('cart', JSON.stringify(cartItems));
    }, [cartItems]);

    // Cargar carrito desde el almacenamiento local al iniciar
    useEffect(() => {
        const savedCart = JSON.parse(localStorage.getItem('cart'));
        if (savedCart) {
            setCartItems(savedCart);
        }
    }, []);

    return (
        <CartContext.Provider
            value={{
                cartItems,
                addToCart,
                removeFromCart,
                getTotalPrice,
            }}
        >
            {children}
        </CartContext.Provider>
    );
};

export default CartContextProvider;
