export default function Label({ children, className = "", forInputId }) {
  return (
    <label for={forInputId} className={`block text-xl font-bold text-stone-700 mb-2 uppercase ${className}`}>
      {children}
    </label>
  );
}
