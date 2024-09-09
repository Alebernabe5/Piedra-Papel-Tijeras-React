import { answer } from "../types/answer";


interface ChoiceProps{
     choice: answer | null;
     onClick?: (answer: answer) => void;
}

export const Choice = ({choice, onClick }: ChoiceProps) =>{
        const onClickChoice = () => (onClick && choice) && onClick (choice);

        return (
            <div className="flex justify-center items-center p-1">
                <div className="rounded-full text-8xl space-x-4 inline-flex items-center">
                    <button className="bg-gray-400 hover:bg-gray-600 rounded-full shadow-lg h-48 w-48 flex justify-center items-center drop-shadow-2xl" onClick={onClickChoice}>
                        {choice ?? "😨"}
                    </button>
                </div>
            </div>
        );
        

};