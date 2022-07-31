import FrCard from "./_Card";

const FrCardGroup = (props) => {
  const {
    captainName,
    maxMaleMember,
    maxFemaleMember,
    maleMemberCount,
    femaleMemberCount,
  } = props;
  return (
    <FrCard className="w-[236px]" labelAction="Masuk Group" {...props}>
      <div className="flex flex-col">
        <div className="text-muted fr-text-caption font-medium">
          Ketua Group
        </div>
        <div className="text-black fr-text-body font-medium">{captainName}</div>

        <div className="text-black fr-text-caption font-medium mt-[17px]">
          Komponen Tim
        </div>
        <div className="flex gap-x-3 mt-[5px]">
          <div
            className={`${
              maleMemberCount == maxMaleMember ? "text-secondary" : "text-muted"
            } fr-text-caption font-medium`}
          >
            Pria : {maleMemberCount}/{maxMaleMember}
          </div>
          <div
            className={`${
              femaleMemberCount == maxFemaleMember
                ? "text-secondary"
                : "text-muted"
            } fr-text-caption font-medium`}
          >
            Wanita : {femaleMemberCount}/{maxFemaleMember}
          </div>
        </div>
      </div>
    </FrCard>
  );
};
export default FrCardGroup;
