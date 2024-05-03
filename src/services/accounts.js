import axios from "axios"
import { tokensService } from "./tokens";
import { message } from "antd";

const api = axios.create({
    baseURL: `${process.env.REACT_APP_API_URL}accounts`
});

api.interceptors.response.use((response) => response, {
}, (error) => {
    // whatever you want to do with the error
    message.error(error.response.data.message);
    // message.error(error.data);
    return Promise.reject(error.message);
});

// ----- put service methods to one object
export const accountsService = {
    login: function (model) {
        return api.post("login", model);
    },
    logout: async function () {

        const refreshToken = tokensService.getRefreshToken();
        tokensService.clear();

        if (refreshToken) {
            await api.post("logout", { refreshToken });
        }
    }
}
