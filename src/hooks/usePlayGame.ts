import { useCallback, useState } from "react"
import { answer } from "../types/answer";
import { Status } from "../types/status";
import { ANSWERS } from "../constants/answers";
import { STATUS } from "../constants/status";


const usePlayGame = () => {
    const [status, setStatus] = useState<Status | null>(null);
    const [cpuAnswer, setCpuAnswer] = useState<answer | null>(null);

    const generateCpuChoice = useCallback((choice: answer)=>{
        const randomIndex = Math.floor(Math.random() * ANSWERS.length);
        const cpuChoice = ANSWERS[randomIndex];

        setCpuAnswer(cpuChoice);

        if(choice === cpuChoice){
            setStatus(STATUS.DRAW);
            
            return;
        }

        if(choice === ANSWERS[2] && cpuChoice === ANSWERS[0]){ //TIJERA CONTRA PAPEL
            setStatus(STATUS.WIN);
            
            return;
        }
        if(choice === ANSWERS[1] && cpuChoice === ANSWERS[2]){ //PIEDRA CONTRA TIJERA
            setStatus(STATUS.WIN);
            
            return;
        }
        if(choice === ANSWERS[0] && cpuChoice === ANSWERS[1]){ // PAPEL CONTRA PIEDRA
            setStatus(STATUS.WIN);
            
            return;
        }

        setStatus(STATUS.LOSE);
    }, []);

    return {status, cpuAnswer , generateCpuChoice};
    };
    
     export default usePlayGame;
 