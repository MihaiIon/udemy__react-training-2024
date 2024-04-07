export default function Title({ variant = "light", children }) {

  let titleClasses = "text-2xl mb-4 font-bold";
  
  if (variant === "light") {
    titleClasses += " text-stone-700";
  } else if (variant === "dark") {
    titleClasses += " text-stone-300";
  }

  return (
    <h1 className={titleClasses}>
      {children}
    </h1>
  );
}
