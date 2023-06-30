import React, { createContext , useState} from 'react'
import {getFirestore,getDocs, collection} from 'firebase/firestore'

export const ProductContext = createContext()

export const ProductProvider = ({children})=> {

    const [products,setProducts] = useState()
    const[loading, setLoading] = useState(false);

    const getProducts = () => {
        setLoading(true)
        const queryDb = getFirestore()
        const queryDocs = collection(queryDb,'products')
        getDocs(queryDocs)
        .then((res)=>{
            setProducts(res.docs.map(product=>({id: product.id, ...product.data()})))
            })
            .catch((error)=>{
                console.log(error)}
            ).finally(() => {
                setLoading(false);
            });
    }

    return (
        <ProductContext.Provider
            value={{
                products,
                setProducts,
                loading,
                setLoading,
                getProducts
            }}>
            {children}
        </ProductContext.Provider>
    )
}



export default ProductProvider