import { create } from "zustand";

const todoCard = create((set) => ({
    card: [],
    addCard: (NewCard) => set((state) => ({ card: [...state.card, NewCard] })),
    deleteCard: () => set({ card: [] })

}))

export default todoCard