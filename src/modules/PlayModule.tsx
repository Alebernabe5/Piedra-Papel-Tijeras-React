import { useEffect, useState } from "react";
import { Choice } from "../components/Choice";
import usePlayGame from "../hooks/usePlayGame";
import useGameStore from "../store/GameStore"
import { Result } from "../components/Result";
import Button from "../components/Button";

const PlayModule = () => {
    const choice= useGameStore(state => state.choice);
    const {status, cpuAnswer, generateCpuChoice} = usePlayGame();
    const [countdown, setCountdown] = useState(3);
    
    useEffect(() =>{
        if(choice){
            generateCpuChoice(choice);
        }
    }, [choice, generateCpuChoice])

    useEffect(() =>{
        if(countdown > 0){
            setTimeout(() => setCountdown(countdown - 1),1000)
                
            }
        
    },[countdown])

    if(countdown > 0){
        return <span className="h-48 text-5xl text-center block">{countdown}</span>
    }

    return(
        <>
        <Result status={status}/>
        <div className=" flex justify-around">
            <div className="flex flex-col align-center drop-shadow-2xl">
                <span className="text-3xl text-center pb-5">Jugador</span>
                <Choice choice={choice}/>
            </div>
            <div className="flex flex-col align-center drop-shadow-2xl">
                <span className="text-3xl text-center pb-5">CPU</span>
                <Choice choice={cpuAnswer}/>
            </div>
        </div>
        <Button status={status}/>
        </>
    )
}

export default PlayModule;