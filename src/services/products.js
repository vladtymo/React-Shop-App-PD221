import axios from "axios"

const api = axios.create({
    baseURL: `${process.env.REACT_APP_API_URL}products`
});

// ----- put service methods to one object
export const productsService = {
    getAll: function () {
        return api.get("all");
    },

    get: function (id) {
        return api.get(`${id}`);
    },

    getCategories: function () {
        return api.get("categories");
    },

    create: function (model) {
        const formData = new FormData();

        for (const key in model) {
            if (model[key] == null) continue;
            formData.append(key, model[key]);
        }

        return api.post("", formData);
    },

    edit: function (model) {
        return api.put("", model);
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