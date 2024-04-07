const Alert = ({ variant, children, show, onClose }) => {
  let bgColor = '';
  let textColor = '';

  switch (variant) {
    case 'success':
      bgColor = 'bg-green-300';
      textColor = 'text-green-800';
      break;
    case 'error':
      bgColor = 'bg-red-300';
      textColor = 'text-red-800';
      break;
    case 'info':
      bgColor = 'bg-blue-300';
      textColor = 'text-blue-800';
      break;
    default:
      bgColor = 'bg-gray-300';
      textColor = 'text-gray-800';
      break;
  }

  const animationClasses = show ? 'opacity-100 translate-y-6' : 'opacity-0 -translate-y-6';

  return (
    <div className={`absolute top-0 right-0 left-0 transition p-4 ${bgColor} ${textColor} ${animationClasses} rounded-md`}>
      {children}

      <button className={`float-right ${textColor} hover:text-gray-800`} onClick={onClose}>
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill={textColor}>
          <path
            fillRule="evenodd"
            d="M10 8.586L16.95 1.636a1 1 0 011.414 1.414L11.414 10l6.95 6.95a1 1 0 01-1.414 1.414L10 11.414l-6.95 6.95a1 1 0 01-1.414-1.414L8.586 10 1.636 3.05A1 1 0 013.05 1.636L10 8.586z"
            clipRule="evenodd"
          />
        </svg>
      </button>
    </div>
  );
};

export default Alert;
