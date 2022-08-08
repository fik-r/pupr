import classnames from "classnames";
import useResponsive from "../../utils/media-query";
import { useState } from "react";

const FrItemStanding = ({ groupName, ellapseTime, poin, rank, onClick }) => {
  const { isMobile } = useResponsive();
  return (
    <>
      <div
        onClick={onClick}
        className={classnames(
          "cursor-pointer grid grid-cols-2 mobile:flex mobile:flex-row justify-between px-[30px] py-[20px]",
          rank > 3 ? "bg-white" : "",
          rank == 1 ? "bg-primary" : "",
          rank == 2 ? "bg-secondary" : "",
          rank == 3 ? "bg-accent" : ""
        )}
      >
        <div className="grid grid-cols-1">
          <div
            className={classnames(
              "fr-text-subhead-2 font-bold",
              rank == 1 || rank > 3 ? "text-secondary" : "",
              rank == 2 || rank == 3 ? "text-white" : ""
            )}
          >
            {groupName}
          </div>
          <div
            className={classnames(
              "fr-text-body mobile:fr-text-caption",
              rank == 1 || rank > 3 ? "text-secondary" : "",
              rank == 2 || rank == 3 ? "text-white" : ""
            )}
          >
            {ellapseTime}
          </div>
        </div>
        <div className="flex justify-end items-center">
          <div
            className={classnames(
              "font-bold italic fr-text-display-1",
              rank == 1 || rank > 3 ? "text-secondary" : "",
              rank == 2 || rank == 3 ? "text-white" : ""
            )}
          >
            {"#"}
            {rank}
          </div>
        </div>
      </div>
      {rank > 3 && <div className="border-[0.5px] border-[#E3E3E3]"></div>}
    </>
  );
};

export default FrItemStanding;
