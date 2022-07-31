const FrText = ({ label, value }) => {
  return (
    <div className="flex flex-col">
      <span className="text-muted fr-text-body font-weight-medium">
        {label}
      </span>
      <span className="fr-text-subhead-1 text-black font-weight-medium mt-[7px]">
        {value}
      </span>
    </div>
  );
};

export default FrText;
