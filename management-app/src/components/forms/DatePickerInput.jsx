import Label from "./Label";
import InputGroup from "./InputGroup";

export default function DatePickerInput({ id, label, value, onChange, className = "" }) {
  const generalInputClasses = "w-full text-xl px-4 py-2 rounded-md";
  const colorInputClasses = "border-b-4 border-stone-300 bg-stone-200 text-stone-700";
  const focusInputClasses = "focus:outline-none focus:ring-0 focus:border-stone-700 transition-colors duration-300 ease-in-out";
  const inputClassNames = `${generalInputClasses} ${colorInputClasses} ${focusInputClasses} ${className}`;

  return (
    <InputGroup>
      <Label forInputId={id}>{label}</Label>
      <input
        type="date"
        id={id}
        value={value}
        onChange={onChange}
        className={inputClassNames}
      />
    </InputGroup>
  );
}