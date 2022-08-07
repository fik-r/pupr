import classnames from "classnames";
import useResponsive from "../../utils/media-query";
import { useState } from "react";

const FrItemOrganization = ({ ugName, totalMember, onClick }) => {
  return (
    <div
      className="flex cursor-pointer justify-between items-center mt-[7px] bg-[#FCFCFC] rounded-[5px] border border-[#E3E3E3] hover:border-secondary p-[15px]"
      onClick={onClick}
    >
      <span className="fr-text-subhead-1 text-black font-weight-medium">
        {ugName}
      </span>
      <div className="flex flex-col justify-end">
        <span className="text-muted fr-text-mini">Jumlah Peserta</span>
        <span className="text-secondary text-caption mobile:self-end">
          {totalMember} Orang
        </span>
      </div>
    </div>
  );
};

export default FrItemOrganization;
