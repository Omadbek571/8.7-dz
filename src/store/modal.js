import { create } from "zustand";

const modeal = create((set) => ({
    modalVal: false, 
    openModal: () => set({modalVal: true}),
    closeModal: () => set({modalVal: false})
}))

export default modeal