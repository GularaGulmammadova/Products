import { api } from "../api"

export const getAllProducts = async (limit, skip) => {
    const res = await api.get(`/products?limit=${limit}&skip=${skip}&select=title,price,category,description,thumbnail`)

    if (!res.data) {
        throw new Error("get all products no data!");
    }

    return res.data
}