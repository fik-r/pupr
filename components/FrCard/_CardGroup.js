import FrCard from "./_Card";

const FrCardGroup = (props) => {
  const { captainName } = props;
  return (
    <FrCard className="w-[236px]" labelAction="Masuk Group" {...props}>
      <div className="flex flex-col">
        <div className="text-muted fr-text-caption font-medium">Ketua Group</div>
        <div className="text-black fr-text-body font-medium">{captainName}</div>
      </div>
    </FrCard>
  );
};
export default FrCardGroup;
