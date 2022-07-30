import FrCard from "./_Card";

const FrCardCategory = (props) => {
  const { rules } = props;
  return (
    <FrCard className="w-[236px]" labelAction="Pilih Kategori" {...props}>
      <ul className="px-[18px] list-disc list-outside">
        {rules.map((rule, index) => {
          return (
            <li className="fr-text-caption text-black" key={index}>
              {rule}
            </li>
          );
        })}
      </ul>
    </FrCard>
  );
};
export default FrCardCategory;
