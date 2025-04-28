import { api } from "./apiService";

export const authService = {
  register: (payload: any) => {
    return api.post("/api/auth/register", payload);
  },

  login: (payload: any) => {
    return api.post("/api/auth/login", payload);
  },

  verifyCreate: (payload: any) => {
    return api.post("/api/auth/verify-create", payload);
  },

  verifyOtp: (payload: any) => {
    return api.post("/api/auth/verify-otp", payload);
  },

  getAll: (master: string, params: string | null = null) => {
    return api.get(
      `/api/auth/${master}${params ? `?${params}` : ""}`
    );
  },
};
