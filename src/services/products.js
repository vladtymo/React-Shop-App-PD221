import axios from "axios"

const api = axios.create({
    baseURL: `https://shop-api-pv221.azurewebsites.net/api/`
});

// ----- put service methods to one object
export const productsService = {
    get: function () {
        return api.get("products/all");
    },

    create: function (model) {

    }
}

// ----- create separate service funcs
// export function getAllProducts() {
// }
// export function createProduct(model) {
// }