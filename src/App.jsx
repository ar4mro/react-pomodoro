function Button({ children, className }) {
  return (
    <button
      className={`${className} px-6 py-2 border-none rounded shadow-sm text-sky-yellow-100 bg-sky-yellow hover:bg-yellow-100 transition duration-300 transform hover:-translate-y-0.5`}
    >
      {children}
    </button>
  );
}

function App() {
  return (
    <div className="flex flex-wrap content-center justify-center min-h-screen bg-green-200 font-major ">
      <div>
        <h2 className="text-base text-center text-gray-600 sm:text-3xl">
          Let the countdown begin!!!
        </h2>

        <div className="flex justify-center mt-6 text-gray-600 text-8xl sm:text-9xl">
          <span>00</span>
          <span>:</span>
          <span>00</span>
        </div>

        <div className="flex justify-center mt-10 font-sans text-lg">
          <Button className="mr-2">Start</Button>
          <Button className="mr-2">Stop</Button>
          <Button>Reset</Button>
        </div>
      </div>
    </div>
  );
}

export default App;
