import { useRef, useState } from "react";

import Button from "./components/Button";
import formatTime from "./utils/helpers/time.helper";

function App() {
  const [title, setTitle] = useState("Let the countdown begin!!!");
  const [timeLeft, setTimeLeft] = useState(25 * 60);
  const [isRunning, setIsRunning] = useState(false);
  const intervalRef = useRef(null);

  function startTimer() {
    if (intervalRef.current !== null) return;

    setTitle("You're doing great");
    setIsRunning(true);

    intervalRef.current = setInterval(() => {
      setTimeLeft((timeLeft) => {
        if (timeLeft >= 1) return timeLeft - 1;

        resetTimer();
        return 0;
      });
    }, 1000);
  }

  function stopTimer() {
    if (intervalRef.current === null) return;

    clearInterval(intervalRef.current);
    intervalRef.current = null;
    setTitle("Keep it up!");
    setIsRunning(false);
  }

  function resetTimer() {
    clearInterval(intervalRef.current);
    intervalRef.current = null;
    setTitle("Ready to go another round?");
    setTimeLeft(25 * 60);
    setIsRunning(false);
  }

  const minutes = formatTime(Math.floor(timeLeft / 60));
  const seconds = formatTime(timeLeft - minutes * 60);

  return (
    <div className="flex flex-wrap content-center justify-center min-h-screen bg-green-200 font-major ">
      <div>
        <h2 className="text-base text-center text-gray-600 sm:text-3xl">
          {title}
        </h2>

        <div className="flex justify-center mt-6 text-gray-600 text-8xl sm:text-9xl">
          <span>{minutes}</span>
          <span>:</span>
          <span>{seconds}</span>
        </div>

        <div className="flex justify-center mt-10 font-sans text-lg">
          {!isRunning && (
            <Button className="mr-2" onClick={startTimer}>
              Start
            </Button>
          )}
          {isRunning && (
            <Button className="mr-2" onClick={stopTimer}>
              Stop
            </Button>
          )}
          <Button onClick={resetTimer}>Reset</Button>
        </div>
      </div>
    </div>
  );
}

export default App;
