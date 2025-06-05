import { createContext, useContext, useEffect, useState } from "react";

const ProductContext = createContext()

export function ProductCoontextProvider({children}) {
    const [products, setProducts] = useState([])

    useEffect(() => {
        fetch('https://fakestoreapi.com/products')
        .then((response) => response.json())
        .then((data) => {
            console.log(data);
            let completeData = data.map((d) => {
                return {...d, quantity : 0, isLiked : false}
            })
            setProducts(completeData)
            console.log(completeData);
            
        })
    }, [])

    return(
        <ProductContext.Provider value={{products}}> 
                {children}
        </ ProductContext.Provider>
    )
}

export const useProduct = () => useContext(ProductContext)