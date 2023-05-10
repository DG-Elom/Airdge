const Button = ({ label, type, onClick }) => {
  return (
    <button
      type={type}
      onClick={onClick}
      className="bg-blue-500 text-white rounded-md p-2 disabled:opacity-50 disabled:cursor-not-allowed"
    >
      {label}
    </button>
  );
};

export default Button;
