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
    }
}