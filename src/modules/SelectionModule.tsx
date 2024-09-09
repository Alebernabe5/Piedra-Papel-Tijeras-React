import { Choice } from "../components/Choice";
import { ANSWERS } from "../constants/answers";
import { STEPS } from "../constants/steps";
import useGameStore from "../store/GameStore";
import { answer } from "../types/answer";

const SelectionModule = () => {
  const [setChoice, setStep] = useGameStore((state) => [
    state.setChoice,
    state.setStep,
  ]);

  const onClickChoise = (choice: answer) => {
    setChoice(choice);
    setStep(STEPS.PLAY);
  };

  return (
    <div className="flex-row justify-around">
      {ANSWERS.map((answer) => (
        <Choice choice={answer} onClick={onClickChoise} />
      ))}
    </div>
  );
};

export default SelectionModule;
