import { Errors, Header, Loading, Progress, WelcomePage, Question, NextButton, Timer, FinishedScreen } from "./components/SupporterFile/SupportFile";
import { useQuiz } from "./context/QuizContext"
import { motion } from "framer-motion";

const App = () => {
  const { state } = useQuiz();
  return (
    <div className="bg-blue-950 min-h-screen">
      <motion.div
        initial={{ opacity: 0, y: 50 }} 
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.5, ease: "easeOut" }} 
        className="text-center"
      >
        <Header />
        {state.status === "loading" && <Loading />}
        {state.status === "error" && <Errors />}
        {state.status === "ready" && <WelcomePage />}
        {state.status === "active" && (
          <>
            <Progress />
            <Question />
            <footer className="flex justify-center items-center ">
              <div className="w-[600px] flex justify-between">
                <Timer />
                <NextButton />
              </div>
            </footer>
          </>
        )}
        {state.status === "finished" && <FinishedScreen />}
      </motion.div>
    </div>
  )
}

export default App

