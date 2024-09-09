import useScoreStore from "../store/scoreStore"


const Score = () => {
    const [score, maxScore] = useScoreStore(state => [state.score, state.maxScore]);

    return(
        <div className="w-80 m-auto flex justify-around py-12">

            <h2 className=" text-2xl">Puntuaje: {score}</h2>
            <h2 className=" text-2xl">Puntuaje más alto: {maxScore}</h2>
        </div>
    )
}

export default Score;