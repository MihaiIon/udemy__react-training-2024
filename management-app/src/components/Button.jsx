export default function Button({ variant = "default", children, onClick, className = ""}) {

  let buttonClasses = `transition px-4 py-2 text-lg font-base rounded-md ${className}`;

  if (variant === "default") {
    buttonClasses += " text-stone-800 bg-transparent hover:bg-stone-300";
  } else if (variant === "light") {
    buttonClasses += " text-stone-300 bg-stone-800 hover:bg-stone-900";
  } else if (variant === "dark") {
    buttonClasses += " text-stone-400 hover:text-stone-500 bg-stone-700 hover:bg-stone-800";
  }

  return (
    <button
      className={buttonClasses}
      onClick={onClick}
    >
      {children}
    </button>
  );
}