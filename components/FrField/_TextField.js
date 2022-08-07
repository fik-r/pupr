import { useState } from "react";

const FrTextField = ({
  label,
  placeholder,
  inputType,
  icon,
  containerClass,
  value,
  onChange,
  pattern,
  errorMessage,
  isError,
}) => {
  const [showIsError, setShowIsError] = useState(false);
  return (
    <div className={`form-control w-[268px] ${containerClass}`}>
      {label && (
        <label className="label">
          <span className="fr-text-caption text-black">{label}</span>
        </label>
      )}

      <div className="flex items-center relative">
        <input
          type={inputType}
          placeholder={placeholder}
          className="input input-bordered w-full fr-text-body placeholder-darkgret border-lightgrey rounded-[5px]"
          required
          value={value}
          pattern={pattern}
          onChange={(e) => {
            setShowIsError(true);
            onChange(e);
          }}
        />
        {icon && <img className="absolute mr-[1.1rem] right-0" src={icon} />}
      </div>
      {showIsError && isError && (
        <label className="label">
          <span className="fr-text-caption text-accent">{errorMessage}</span>
        </label>
      )}
    </div>
  );
};

export default FrTextField;
