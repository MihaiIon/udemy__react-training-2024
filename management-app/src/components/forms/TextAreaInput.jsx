import Label from "./Label";

export default function TextInput({ id, label, value, onChange, className = "" }) {
  const generalInputClasses = "w-full text-xl px-4 py-2 rounded-md";
  const colorInputClasses = "border-b-4 border-stone-300 bg-stone-200 text-stone-700";
  const focusInputClasses = "focus:outline-none focus:ring-0 focus:border-stone-700 transition-colors duration-300 ease-in-out";
  const inputClassNames = `${generalInputClasses} ${colorInputClasses} ${focusInputClasses} ${className}`;

  return (
    <div className="mb-4 w-full">
      <Label forInputId={id}>{label}</Label>
      <textarea
        className={inputClassNames}
        type="text"
        id={id}
        value={value}
        onChange={onChange}
      />
    </div>
  );
}
