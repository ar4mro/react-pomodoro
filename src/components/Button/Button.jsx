function Button({ children, className, onClick }) {
  return (
    <button
      onClick={onClick}
      className={`${className} px-6 py-2 border-none rounded shadow-sm text-sky-yellow-100 bg-sky-yellow hover:bg-yellow-100 transition duration-300 transform hover:-translate-y-0.5`}
    >
      {children}
    </button>
  );
}

export default Button;
