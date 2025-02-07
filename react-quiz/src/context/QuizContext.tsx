import { createContext, useReducer, ReactNode, useEffect, useContext } from "react";

const QuizContext = createContext<any>(null);

const QUESTION_TIME = 30;
interface Question {
  id: number;
  question: string;
  options: string[];
  correctOption: number; // Index of the correct answer
  points: number;
}

const initialState: {
  status: string;
  questions: Question[]; // Now TypeScript knows the shape of questions
  index: number;
  answer: number | string | null;
  points: number;
  highScore: number;
  secondsRemaining: number;
} = {
  status: "loading",
  questions: [],
  index: 0,
  answer: null,
  points: 0,
  highScore: 0,
  secondsRemaining: 0,
};


function reducer(state: typeof initialState, action: any) {
  switch (action.type) {
    case "dataReceived":
      return {
        ...state,
        status: "ready",
        questions: action.payload,
      };

    case "dataFailed":
      return {
        ...state,
        status: "error",
      };

    case "start":
      return {
        ...state,
        status: "active",
        secondsRemaining: state.questions.length * QUESTION_TIME,
      };

    case "newAnswer":
      const question = state.questions[state.index];
      return {
        ...state,
        answer: action.payload,
        points:
          action.payload === question.correctOption ? state.points + question.points : state.points,
      };

    case "nextQuestion":
      return {
        ...state,
        index: state.index + 1,
        answer: null,
      };

    case "finish":
      return {
        ...state,
        status: "finished",
        highScore: Math.max(state.points, state.highScore),
      };

    case "restart":
      return {
        ...initialState,
        questions: state.questions,
        status: "ready",
      };

    case "tick":
      const newTime = state.secondsRemaining - 1;
      return {
        ...state,
        secondsRemaining: newTime,
        status: newTime === 0 ? "finished" : state.status,
      };

    default:
      throw new Error(`Unknown action type: ${action.type}`);
  }
}

function QuizProvider({ children }: { children: ReactNode }) {
  const [state, dispatch] = useReducer(reducer, initialState);

  const numberQuestion = state.questions.length;
  const maxPossiblePoints = state.questions.reduce(
    (prev: any, cur: { points: any; }) => prev + cur.points,
    0
  );

  useEffect(() => {
    const fetchQuestions = async () => {
      try {
        const res = await fetch("http://localhost:8000/questions")

        if (!res.ok) throw new Error(`HTTP error! Status: ${res.status}`);

        const data = await res.json(); // Read the response body only once

        dispatch({ type: "dataReceived", payload: data });
      } catch (err) {
        console.error("Fetch error:", err);
        dispatch({ type: "dataFailed" });
      }
    };

    fetchQuestions();
  }, []);


  return (
    <QuizContext.Provider value={{ state, numberQuestion, maxPossiblePoints, dispatch }}>
      {children}
    </QuizContext.Provider>
  );
}

function useQuiz() {
  const context = useContext(QuizContext);
  if (!context) throw new Error("useQuiz must be used within a QuizProvider");
  return context;
}

export { QuizProvider, useQuiz };
