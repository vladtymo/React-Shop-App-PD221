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

        model.image = model.image.originFileObj;

        const formData = new FormData();

        for (const key in model) {
            const value = model[key];
            formData.append(key, value);
        }

        for (const [k, v] of formData.entries()) {
            console.log(k);
            console.log(v);
        }

        return api.post("", formData);
    }
}

// ----- create separate service funcs
// export function getAllProducts() {
// }
// export function createProduct(model) {
// }