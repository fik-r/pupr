import classnames from "classnames";
import FrButton from "../FrButton";

const FrCard = (props) => {
  const {
    onClickAction,
    className,
    title,
    category,
    labelAction,
    children,
    selected,
    disabled
  } = props;
  return (
    <div
      className={classnames(
        "card w-96 bg-base-100 border border-lightgrey rounded-[5px] divide-y divide-lightgrey mt-5",
        className
      )}
    >
      <div className="flex justify-between m-[15px]">
        <span className="text-muted font-semibold fr-text-body">{title}</span>
        <span className="text-accent fr-text-body font-semibold">
          {category}
        </span>
      </div>
      <div>
        <div className="px-[18px] py-[15px] mb-[70px]">{children}</div>
        <div className="px-[18px] py-[15px] absolute bottom-0 w-full">
          <FrButton
            block
            color="secondary"
            selected={selected}
            disabled={disabled}
            onClick={() => {
              onClickAction();
            }}
            label={labelAction}
          />
        </div>
      </div>
    </div>
  );
};

export default FrCard;
