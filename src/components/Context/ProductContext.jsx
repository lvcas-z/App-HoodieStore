import React, { createContext, useState } from 'react'
import { getFirestore, getDocs, collection } from 'firebase/firestore'

export const ProductContext = createContext()

export const ProductProvider = ({ children }) => {

    const [products, setProducts] = useState()

    const getProducts = async () => {
        try {
            const queryDb = getFirestore();
            const queryDocs = collection(queryDb, 'products');
            const snapshot = await getDocs(queryDocs);
            const productsData = snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
            setProducts(productsData);
        } catch (error) {
            console.log(error);
        }
    };


    return (
        <ProductContext.Provider
            value={{
                products,
                setProducts,
                getProducts
            }}>
            {children}
        </ProductContext.Provider>
    )
}



export default ProductProvider