import axios from "axios"
import { tokensService } from "./tokens";

const api = axios.create({
    baseURL: `${process.env.REACT_APP_API_URL}products`
});
api.interceptors.request.use(
    (config) => {
        // Get token and add it to header "Authorization" from secure storgage
        const token = tokensService.getAccessToken();
        if (token) {
            config.headers.Authorization = `Bearer ${token}`;
        }
        return config;
    },
    (error) => Promise.reject(error)
);

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