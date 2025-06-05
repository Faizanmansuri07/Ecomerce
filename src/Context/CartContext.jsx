import { createContext, useContext, useState } from "react";

const CartContext = createContext();

export function CartContextProvider({ children }) {
  const [cart, setCart] = useState([]);

  function addToCart(product) {
    setCart((prevCart) => {
      const existingProduct = prevCart.find((item) => item.id === product.id);

      if (existingProduct) {
        // If already in cart, update quantity and totalPrice
        return prevCart.map((item) =>
          item.id === product.id
            ? {
                ...item,
                quantity: item.quantity + 1,
                totalPrice: (item.quantity + 1) * item.price,
              }
            : item
        );
      } else {
        // Else add new product with quantity 1
        return [
          ...prevCart,
          {
            ...product,
            quantity: 1,
            totalPrice: product.price,
          },
        ];
      }
    });
    console.log(cart);
  }

    function updateQuantity(id, change) {
        setCart((cart) => cart.map((c) => c.id === id ? {...c, quantity : change, totalPrice : change * c.price} : c))
    }

    function removeCart(id) {
        setCart((cart) => cart.filter((c) => c.id !== id))
    }

  return (
    <CartContext.Provider value={{ cart, addToCart, updateQuantity, removeCart}}>
      {children}
    </CartContext.Provider>
  );
}

export const useCart = () => useContext(CartContext);
