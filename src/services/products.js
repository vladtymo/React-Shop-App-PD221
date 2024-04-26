import axios from "axios"

const api = axios.create({
    baseURL: `https://shop-api-pv221.azurewebsites.net/api/products/`
});

// ----- put service methods to one object
export const productsService = {
    get: function () {
        return api.get("all");
    },

    create: function (model) {
        const formData = new FormData();

        for (const key in model) {
            formData.append(key, model[key]);
        }

        return api.post("", formData);
    },

    delete: function (id) {
        return api.delete(`${id}`);
    },
}

// ----- create separate service funcs
// export function getAllProducts() {
// }
// export function createProduct(model) {
// }