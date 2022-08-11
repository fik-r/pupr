import React, { useEffect, useState } from "react";

const FrPagination = (props) => {
  let [allPages, setAllPages] = useState([]);

  useEffect(() => {
    let tempArr = [];
    for (let i = 0; i < props.totalPages; i++) {
      tempArr.push(i + 1);
    }
    setAllPages(tempArr);
  }, [props.totalPages]);

  const isTruncated = function (pageIndex) {
    var total = props.totalPages;
    var current = props.currentPage;
    var page = pageIndex + 1;

    var distanceToCurrent = Math.abs(page - current);
    var isEdgePage = page === total || page === 1;

    if (!isEdgePage && distanceToCurrent > (props.isMobile ? 1 : 2)) {
      return true;
    }

    return false;
  };

  const renderPage = () => {
    let rightTruncatedCount = 0;
    let leftTruncatedCount = 0;

    return allPages.map((each, i) => {
      if (isTruncated(i)) {
        if (props.currentPage > i + 1) {
          if (rightTruncatedCount < (props.isMobile ? 1 : 2)) {
            rightTruncatedCount++;
            return <div>...</div>;
          } else {
            return <></>;
          }
        } else {
          if (leftTruncatedCount < (props.isMobile ? 1 : 2)) {
            leftTruncatedCount++;
            return <div>...</div>;
          } else {
            return <></>;
          }
        }
      } else if (!isTruncated(i)) {
        console.log(props.currentPage);
        console.log(props.currentPage.toString() == each.toString());
        return (
          <button
            key={i}
            className={`cursor-pointer rounded-none be w-[37px] h-[37px] ${
              props.currentPage.toString() == each.toString()
                ? "bg-secondary text-white"
                : "bg-white border hover:border-secondary border-lightgrey text-black"
            }`}
            onClick={() => props.goToSpecificPage(each)}
          >
            {each}
          </button>
        );
      }
    });
  };

  return (
    <div className="btn-group gap-x-1">
      <button
        className="cursor-pointer rounded-none  border border-lightgrey hover:border-secondary w-[37px] h-[37px]"
        onClick={() => props.prevPage()}
      >
        {"<"}
      </button>
      {renderPage()}
      <button
        className="cursor-pointer rounded-none  border border-lightgrey hover:border-secondary w-[37px] h-[37px]"
        onClick={() => props.nextPage()}
      >
        {">"}
      </button>
    </div>
  );
};

export default FrPagination;
