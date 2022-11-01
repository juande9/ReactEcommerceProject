import { createContext, useState, useEffect } from 'react';

export const CartContext = createContext()

export const CartProvider = ({ children }) => {
    const [cart, setCart] = useState([])
    const [totalPriceOrder, setTotalPriceOrder] = useState(0)

    useEffect(() => {
        getotalPriceOrder()
    }, [cart])

    const addItem = (productToAdd) => {
        if (!isInCart(productToAdd.id)) {
            setCart([...cart, productToAdd])
        } else {
            console.log("Ya esta agregado")
        }
    }

    const isInCart = (id) => {
        return cart.some(prod => prod.id === id)
    }

    const getotalPriceOrder = () => {
        let total = 0
        cart.forEach(prod => {
            total += prod.quantity * prod.price
        })
        setTotalPriceOrder(total);
    }

    const removeItem = (id) => {
        const products = cart.filter(prod => prod.id !== id)
        setCart(products)
    }

    const clearCart = () => {
        setCart([])
    }

    const getQuantity = () => {
        let accu = 0
        cart.forEach(prod =>
            accu += prod.quantity)
        return accu
    }

    return (
        <CartContext.Provider value={{ cart, addItem, removeItem, clearCart, getQuantity, totalPriceOrder }}>
            {children}
        </CartContext.Provider >
    )

}