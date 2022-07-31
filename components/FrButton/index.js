import classnames from "classnames";
import { useEffect } from "react";

const FrButton = (props) => {
  const {
    onClick,
    label,
    icon,
    color,
    block,
    className,
    disabled,
    selected,
    loading,
  } = props;

  return (
    <button
      className={classnames(
        `btn`,
        `normal-case`,
        `font-normal`,
        `${
          color == "primary" && !selected ? "btn-primary text-secondary" : ""
        }`,
        `${
          color == "secondary" && !selected ? "btn-secondary text-white" : ""
        }`,
        `${color == "accent" && !selected ? "btn-accent text-white" : ""}`,
        `${
          color == "light" && !selected
            ? "bg-white border-white text-black"
            : ""
        }`,
        `${selected ? "btn-accent text-white" : ""}`,
        `rounded-[5px]`,
        `${block ? "btn-block" : ""}`,
        `${disabled ? "btn-disabled" : ""}`,
        `${loading ? "loading" : ""}`,
        className
      )}
      onClick={onClick}
    >
      <div className="flex gap-x-2 items-center">
        {icon && !selected && !loading && <img src={icon} />}
        {!selected && !loading && label}
        {selected && !loading && (
          <img src={"/icons/ic_circle_done_white.svg"} />
        )}
      </div>
    </button>
  );
};

export default FrButton;
