import { STEPS } from "../constants/steps";
import useGameStore from "../store/GameStore";
import useScoreStore from "../store/scoreStore";


const GameOverModule = () =>{
    const setStep = useGameStore (state => state.setStep);
    const resetScore= useScoreStore(state => state.resetScore);

    const onClickPlayAgain = () => {
        setStep(STEPS.SELECTION);
        resetScore();
    }

    return(
        <button className="bg-gray-400 hover:bg-gray-600 rounded-lg w-40 py-3 text-xl m-auto text-white block drop-shadow-2xl" onClick={onClickPlayAgain}>Jugar de nuevo</button>
    )
}

export default GameOverModule;