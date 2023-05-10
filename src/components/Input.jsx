const Input = ({
  label,
  type,
  name,
  autocomplete,
  required,
  className,
  onChange,
  value,
}) => {
  return (
    <label className={className || "flex flex-col gap-1"}>
      {label}
      <input
        type={type}
        name={name}
        onChange={(e) => onChange(e)}
        value={value || ""}
        autoComplete={autocomplete || ""}
        required={!!required}
        className="border border-gray-300 dark:bg-gray-50 rounded-md p-2 disabled:cursor-not-allowed"
      />
    </label>
  );
};

export default Input;
