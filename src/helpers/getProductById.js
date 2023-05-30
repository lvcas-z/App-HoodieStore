import { stock } from "../data/stock"

export const getProductById = async (id) => {
    const productById = stock.find(product => product.id === id)
    if (productById) {
        return productById
    } else {
        throw new Error(`The product with id : ${id} not exists `)
    }
}