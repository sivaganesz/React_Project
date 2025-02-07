import { useEffect, useState } from "react"
import { useQuiz } from "../../context/QuizContext"
import Confetti from "react-confetti";
import { useWindowSize } from "react-use";


export const Header = () => {
    return (
        <>
            <div className="flex justify-center text-white">
                <div className="text-center mt-10 ">
                    <h1 className="text-5xl font-serif">The React Quiz</h1>
                </div>
            </div>
        </>
    )
}

export const Loading = () => {
    return (
        <div className="flex relative items-center justify-center  text-white">
            <div className="flex flex-col top-50 absolute items-center justify-center">
                <div>
                    <svg className="w-10 h-10 text-gray-200 animate-spin dark:text-gray-400 mb-5 fill-blue-600" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="currentColor" />
                        <path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="currentFill" />
                    </svg>
                </div>
                <div className="">
                    <span className="text-2xl font-serif">Loading...</span>
                </div>
            </div>
        </div>
    )
}

export const Errors = () => {
    return (
        <div className="flex relative items-center justify-center text-white min-h-screen">
            <div className="flex flex-col top-50 absolute items-center justify-center">
                <div>
                    <svg className="w-10 h-10 text-gray-200 animate-spin dark:text-gray-400 mb-5 fill-red-600" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="currentColor" />
                        <path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="currentFill" />
                    </svg>
                </div>
                <div className="">
                    <span className="text-2xl font-serif">💥 There was an error fecthing questions.</span>
                </div>
            </div>
        </div>
    )
}

export const WelcomePage = () => {
    const { numberQuestion, dispatch } = useQuiz();
    return (
        <>
            <div className="flex justify-center text-white">
                <div className="">
                    <div className="text-center mt-10 ">
                        <h1 className="text-3xl font-mono mt-16">Welcome to The React Quiz!</h1>
                        <p className="text-3xl font-mono mt-5"><span className="text-amber-300">{numberQuestion}</span> questions to test your React mastery</p>
                    </div>

                    <div className="mt-18 hover:scale-105 transition-transform duration-300">
                        <button className="bg-yellow-400 hover:bg-yellow-500 font-bold text-black opacity-90 rounded px-4 py-2 flex mx-auto " onClick={() => dispatch({ type: "start" })}>Let Start</button>
                    </div>
                </div>
            </div>
        </>
    )
}

export const Progress = () => {
    const { state, numberQuestion, maxPossiblePoints } = useQuiz();
    return (
        <div className="flex justify-center items-center">
            <div className="mt-16 w-[600px]">
                <div className="">
                    <input type="range" max={numberQuestion} value={Number(state.index + 1)} className="w-[600px]" />
                </div>
                <div className="flex mt-3 justify-between text-white">
                    <p className="font-medium text-xl">Question : <strong className="text-yellow-400">{state.index + 1}</strong> / {numberQuestion}</p>
                    <p className="font-medium text-xl">Points : <strong className="text-green-400">{state.points}</strong> / {maxPossiblePoints}</p>
                </div>
            </div>
        </div>
    )
}

interface QuestionType {
    question: string,
    options: string[],
    correctOption: string,
    points: number
}

export const Question = () => {
    const { state } = useQuiz();
    const question = state.questions.at(state.index);

    return (
        <div className="flex justify-center items-center mt-10 text-2xl font-semibold font-serif w-full">
            <div className="w-[600px] text-justify">
                <h4 className="text-gray-300">{question.question}</h4>
                <QuestionOptions question={question} />
            </div>
        </div>
    );
}

interface QuestionOptionProps {
    question: QuestionType;
}

export const QuestionOptions = ({ question }: QuestionOptionProps) => {
    const { state, dispatch } = useQuiz();

    const hasAnswered = state.answer !== null;
    const result = state.questions[state.index]

    function handleClickAnswer(SelectedOption: number) {
        dispatch({ type: "newAnswer", payload: SelectedOption })
    }
    return (
        <div className="flex justify-center items-center mt-10 text-2xl font-semibold font-serif">
            <div className="flex flex-col">
                {
                    question.options.map((option, index) => (

                        <button key={index} disabled={hasAnswered} onClick={() => handleClickAnswer(index)}
                            className={`px-4 py-2 mx-2 bg-blue-300  text-gray-800 mt-2 w-[600px] hover:bg-blue-400 hover:text-white hover:scale-103 transition-transform hover:duration-500 ease-in-out
                         ${hasAnswered ? result.correctOption === index ? "bg-green-600 hover:bg-green-600 scale-95 duration-700" : "" : null}
                         ${hasAnswered ? result.correctOption !== index ? "bg-orange-400 hover:bg-orange-400 scale-95 duration-700" : "" : null}
                            rounded-lg`}>{option}</button>
                    ))
                }
            </div>
        </div>
    );
}

export const Timer = () => {
    const { state, dispatch } = useQuiz();

    const mins = Math.floor(state.secondsRemaining / 60)
    const seconds = state.secondsRemaining % 60;

    useEffect(() => {
        const id = setInterval(() => {
            dispatch({ type: "tick" });
        }, 1000);
        return () => clearInterval(id);
    }, [dispatch]);
    return (
        <div className="">
            <div className="">
                <button className="mt-10 bg-gray-400 py-1.5  px-5 rounded font-bold text-lg">
                    {mins < 10 && "0"}
                    {mins}:{seconds < 10 && "0"}
                    {seconds}
                </button>
            </div>
        </div>
    )
}

export const NextButton = () => {
    const { state, numberQuestion, dispatch } = useQuiz();

    const isLastQuestion = state.index === numberQuestion - 1;

    if (state.answer === null) return null

    return (
        <div>
            <button
                className={`rounded mt-10 text-white p-2 px-5 
          ${isLastQuestion ? "bg-green-900 hover:bg-green-950" : "bg-blue-500 hover:bg-blue-700"}`}
                onClick={() => dispatch({ type: isLastQuestion ? "finish" : "nextQuestion" })}
            >
                {isLastQuestion ? "Finished" : "Next"}
            </button>
        </div>
    );
}

export const FinishedScreen = () => {
    const { state, maxPossiblePoints, dispatch } = useQuiz();
    const { width, height } = useWindowSize();
    const [showConfetti, setShowConfetti] = useState(false);
    const percentage = (state.points / maxPossiblePoints) * 100;

    let emoji;
    if (percentage === 100) emoji = "🥇";
    if (percentage >= 80 && percentage < 100) emoji = "🎉";
    if (percentage >= 50 && percentage < 80) emoji = "🙃";
    if (percentage > 0 && percentage < 50) emoji = "🤨";
    if (percentage === 0) emoji = "🤷‍♂️";

    useEffect(() => {
        setShowConfetti(true);
        const timer = setTimeout(() => setShowConfetti(false), 6000);
        return () => clearTimeout(timer);
    }, []);



    return (
        <div className="flex justify-center items-center  mt-30">
            {showConfetti && <Confetti width={width} height={height} numberOfPieces={300} />}
            <div className=" bg-blue-200/50 hover:scale-105 w-[600px] h-[400px] py-10 rounded-lg relative transition-transform duration-800">
                <button className="absolute top-5 right-5 w-6 h-6 rounded-full bg-red-400 font-bold
                 hover:bg-red-600 hover:text-white flex justify-center items-center cursor-pointer"
                    onClick={() => { dispatch({ type: "restart" }) }}>X</button>
                <div className="mt-9 p-7">
                    <p className="text-4xl font-serif bg-blue-200 p-2 px-4 py-8 rounded-2xl">
                        <span>{emoji}</span> You Scored <strong>{state.points}</strong> Out of <strong>{maxPossiblePoints}</strong>
                    </p>
                    <button
                        className="flex mx-auto mt-10 bg-amber-300/80 px-5 py-2 rounded font-semibold
                        hover:bg-amber-300 hover:scale-110 transition-transform duration-300 ease-in-out"
                        onClick={() => dispatch({ type: "restart" })}>
                        Restart quiz
                    </button>
                </div>
            </div>
        </div>
    );
};
