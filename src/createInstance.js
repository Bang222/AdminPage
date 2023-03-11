import axios from "axios";
import jwt_decode from "jwt-decode"

export const refreshToken = async (user) => {
    try {
        let decodedRefreshToken = user?.refreshToken
        const res = await axios.post('http://localhost:3001/auth/refresh',{
            refreshToken: decodedRefreshToken
        })
        return res.data;
    } catch (err) {
        console.error(err)
    }
}
export const createAxios = (user, dispatch,stateSuccess) =>{
    const newInstance = axios.create()
    // interceptor để check lệnh chạy bên trong trước rôi mới call API nào đó
    newInstance.interceptors.request.use(
        async (config) => {
            let date = new Date();
            let decodedToken = jwt_decode(user?.accessToken)
            if (decodedToken.exp < date.getTime() / 1000) {
                const data = await refreshToken(user)
                const refreshUser = {
                    ...user,
                    accessToken: data
                };
                console.log(data);
                dispatch(stateSuccess(refreshUser))
                config.headers["Authorization"] = "Bearer " + data;
            }
            return config;
        },
        (err) => {
            return Promise.reject(err);
        }
    )
    return newInstance;
}