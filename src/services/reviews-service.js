import { api } from "../api"

export const getAllProducts = async () => {
    const res = await api.get(`/products`)

    if (!res.data) {
        throw new Error("get all products no data!");
    }
    return res.data
}