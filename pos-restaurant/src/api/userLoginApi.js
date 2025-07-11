import apiClient from "../httpRequest";

export const validateLogin = async (payload) => {
    try {
        const response = await apiClient.post(`/api/posuser/login`, payload)
        return { data: response.data, error: null }
    } catch (error) {
        console.log('error=>', error)
        if (error.response) {
            return { data: null, error: error.response.data.message };
        } else if (error.request) {
            return { data: null, error: "Network error. Please try again." };
        } else {
            return { data: null, error: error.message };
        }
    }
}

export const sendToLogout = async (payload) => {
    try {
        const response = await apiClient.patch(`/api/posuser/logout`, payload)
        return { data: response.data, error: null }
    } catch (error) {
        if (error.response) {
            return { data: null, error: error.response.data.message };
        } else if (error.request) {
            return { data: null, error: "Network error. Please try again." };
        } else {
            return { data: null, error: error.message };
        }
    }
}

export const loginAuth = async (payload) => {
    try {
        const response = await apiClient.post(`/api/posuser/loginAuth`, payload)
        return { data: response.data, error: null }
    } catch (error) {
        if (error.response) {
            return { data: null, error: error.response.data.message };
        } else if (error.request) {
            return { data: null, error: "Network error. Please try again." };
        } else {
            return { data: null, error: error.message };
        }
    }
}
