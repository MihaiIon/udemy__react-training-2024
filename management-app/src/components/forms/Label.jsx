export default function Label({ children, className = "", htmlFor }) {
  return (
    <label htmlFor={htmlFor} className={`block text-xl font-bold text-stone-700 mb-2 uppercase ${className}`}>
      {children}
    </label>
  );
}
