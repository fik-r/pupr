import Head from "next/head";
import classnames from "classnames";
import { useRouter } from "next/router";
import { FrLayout2 } from "../components/FrLayout";
import useResponsive from "../utils/media-query";
import { useState, useEffect } from "react";
import { ToastError, ToastSuccess } from "../components/FrToast";
import { FrTextField } from "../components/FrField";
import { FrItemOrganization, FrItemStanding } from "../components/FrItem";

const Standing = () => {
  const router = useRouter();
  const { isMobile } = useResponsive();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [success, setSuccess] = useState(false);
  const [detailModal, setDetailModal] = useState(false);

  function openDetail() {
    setDetailModal(true);
  }
  return (
    <FrLayout2 error={error} success={success}>
      <Head>
        <title>RunRide | Unit Organisasi</title>
        <meta name="description" content="Run ride description" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className={`modal ${detailModal == true ? "modal-open" : ""}`}>
        <div className="modal-box flex-col w-[507px] mobile:w-[388px] px-auto mobile:h-screen rounded-[10px] mobile:mx-3">
          <label
            htmlFor="detail-modal"
            className="btn btn-sm btn-circle btn-accent text-white absolute right-2 top-2"
            onClick={() => {
              setDetailModal(false);
            }}
          >
            ✕
          </label>
          <div className="mobile:pt-[50px] flex mobile:justify-center justify-start">
            <span className="mobile:uppercase fr-text-subhead-2 text-secondary font-bold">
              Unit Organisasi A
            </span>
          </div>
          <div className="pt-[30px] mobile:pt-[40px]">
            <span className="text-body text-muted">Anggota</span>
            <div className="grid grid-cols-1">
              <div className="flex cursor-pointer justify-between items-center mt-[7px] bg-[#FCFCFC] bg-[##E3E3E3] rounded-[5px] border border-[#E3E3E3] p-[15px]">
                <span className="fr-text-subhead-1 text-black font-weight-medium">
                  Ridwan
                </span>
              </div>
              <div className="flex cursor-pointer justify-between items-center mt-[7px] bg-[#FCFCFC] bg-[##E3E3E3] rounded-[5px] border border-[#E3E3E3] p-[15px]">
                <span className="fr-text-subhead-1 text-black font-weight-medium">
                  Gio
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div
        className={classnames(
          "card w-[855px] mobile:w-[321px] border-none rounded-none flex mx-auto",
          !isMobile
            ? "border border-lightgrey rounded-[20px] mt-[-50px]"
            : "mt-[-50px]"
        )}
      >
        <div className="flex mobile:flex-col justify-center px-[30px] py-[36px] items-center">
          <span className="fr-text-headline-2 text-black mobile:text-secondary mobile:mt-[26px] mobile:fr-text-headline-1 mobile:uppercase">
            Unit Organisasi
          </span>
        </div>

        <div className="grid grid-cols-1">
          <FrItemOrganization
            ugName="Unit Organisasi A"
            totalMember={5}
            onClick={openDetail}
          />
          <FrItemOrganization
            ugName="Unit Organisasi B"
            totalMember={5}
            onClick={openDetail}
          />
          <FrItemOrganization
            ugName="Unit Organisasi C"
            totalMember={5}
            onClick={openDetail}
          />
          <FrItemOrganization
            ugName="Unit Organisasi D"
            totalMember={5}
            onClick={openDetail}
          />
        </div>
        <div className="flex justify-between px-[30px] py-[42px] items-center mobile:justify-center">
          {!isMobile && (
            <div className="text-black font-medium font-body">12/30 Group</div>
          )}
          <div className="btn-group gap-x-1">
            <button className="cursor-pointer rounded-none  border border-lightgrey hover:border-secondary w-[37px] h-[37px]">
              {"<"}
            </button>
            <button className="cursor-pointer rounded-none  border border-lightgrey hover:border-secondary w-[37px] h-[37px]">
              1
            </button>
            <button className="cursor-pointer rounded-none bg-secondary w-[37px] h-[37px] text-white">
              2
            </button>
            <button className="cursor-pointer rounded-none  border border-lightgrey hover:border-secondary w-[37px] h-[37px]">
              3
            </button>
            <button className="cursor-pointer rounded-none  border border-lightgrey hover:border-secondary w-[37px] h-[37px]">
              4
            </button>
            <button className="cursor-pointer rounded-none  border border-lightgrey hover:border-secondary w-[37px] h-[37px]">
              {">"}
            </button>
          </div>
        </div>
      </div>
    </FrLayout2>
  );
};

export default Standing;
