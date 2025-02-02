import { create } from "zustand";

const useLoginMal = create((set) => ({
    login: [],
    loginpush: (loginCard) =>
        set((state) => {
            const userExists = state.login.some(user => user.name === loginCard.name);

            if (userExists) {
                return { message: "Siz allaqachon login qilgansiz!" };
            } else {
                return { login: [...state.login, loginCard], message: "Login boldingiz!" };
            }
        }),
    message: "" 
}));

export default useLoginMal;
