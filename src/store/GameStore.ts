import { create} from 'zustand';
import { answer } from '../types/answer';



type GameStoreState = {
    step: number;
    choice: answer | null;
    setStep: (step: number) => void; 
    setChoice: (step: answer) => void; 
}

const useGameStore = create<GameStoreState>((set) => ({
    step: 0,
    choice: null,
    setStep: (step: number) => set({ step }),
    setChoice: (choice:answer) => set({ choice }),
}));

export default useGameStore;