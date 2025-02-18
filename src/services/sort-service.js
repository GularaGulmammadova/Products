import { api } from "../api"

export const getAllProducts = async ( sortBy, order) => {
    const res = await api.get(`/products?sortBy=${sortBy}&order=${order}`)

    if (!res.data) {
        throw new Error("get all products no data!");
    }

    return res.data
}