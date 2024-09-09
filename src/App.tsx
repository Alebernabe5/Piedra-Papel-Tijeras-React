import { useMemo } from "react"
import { STEPS } from "./constants/steps"
import PlayModule from "./modules/PlayModule"
import SelectionModule from "./modules/SelectionModule"
import useGameStore from "./store/GameStore"
import GameOverModule from "./modules/GameOverModule"
import Score from "./components/Score"

const renderModule = (step:STEPS) =>  {
  switch(step){
    case STEPS.SELECTION:
      return <SelectionModule />
    case STEPS.PLAY:
      return <PlayModule />
    case STEPS.GAME_OVER:
      return <GameOverModule/>
      default:
        return null;
    }

  }

function App() {
  const step = useGameStore(State =>State.step);
  const module = useMemo(()=> renderModule(step), [step]); 

  return (
    <>
    <h1 className=" bg-slate-200 text-center font-extrabold text-5xl pt-12">Piedra, Papel o Tijera </h1>
    <Score/>
    {module}
    </>
  )
}

export default App
