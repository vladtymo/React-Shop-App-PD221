import { jwtDecode } from "jwt-decode";

const accessKey = process.env.REACT_APP_ACCESS_TOKEN_KEY;
const refreshKey = process.env.REACT_APP_REFRESH_TOKEN_KEY;

export const tokensService = {
    save: function (model) {
        localStorage.setItem(accessKey, model.accessToken);
        localStorage.setItem(refreshKey, model.refreshToken);
    },
    clear: function () {
        localStorage.removeItem(accessKey);
        localStorage.removeItem(refreshKey);
    },
    getAccessToken: function () {
        return localStorage.getItem(accessKey);
    },
    getRefreshToken: function () {
        return localStorage.getItem(refreshKey);
    },
    getAccessTokenPayload: function () {

        const token = this.getAccessToken();

        if (!token) return null;

        try {
            const payload = jwtDecode(token);

            return {
                email: payload['http://schemas.xmlsoap.org/ws/2005/05/identity/claims/emailaddress'],
                id: payload['http://schemas.xmlsoap.org/ws/2005/05/identity/claims/nameidentifier'],
                dateOfBirth: payload['http://schemas.xmlsoap.org/ws/2005/05/identity/claims/dateofbirth'],
                role: payload['http://schemas.microsoft.com/ws/2008/06/identity/claims/role']
            };

        } catch (Error) {
            return null;
        }
    }
}