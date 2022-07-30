const FrDropdownField = ({ label, placeholder, items, onChange }) => {
  return (
    <div className="form-control w-[268px] max-w-xs">
      <label className="label">
        <span className="fr-text-caption text-black">{label}</span>
      </label>
      <div className="flex items-center relative">
        <select
          defaultValue=""
          onChange={onChange}
          required
          className="select select-bordered w-full max-w-xs fr-text-body placeholder-darkgrey border-lightgrey rounded-[5px] font-medium"
        >
          <option value="" disabled>
            {placeholder}
          </option>
          {items.map((item, index) => {
            return (
              <option key={index} value={item.value}>
                {item.label}
              </option>
            );
          })}
        </select>
      </div>
    </div>
  );
};

export default FrDropdownField;
