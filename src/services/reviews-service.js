import { api } from "../api"

export const getAllProducts = async () => {
    const res = await api.get(`/products?select=comment,title,rating,date,reviewName,reviewEmail,thumbnail`)

    if (!res.data) {
        throw new Error("get all products no data!");
    }
    return res.data
}