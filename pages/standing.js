import Head from "next/head";
import classnames from "classnames";
import { useRouter } from "next/router";
import { FrLayout2 } from "../components/FrLayout";
import useResponsive from "../utils/media-query";
import { useState, useEffect } from "react";
import { ToastError, ToastSuccess } from "../components/FrToast";
import { FrTextField } from "../components/FrField";
import { FrItemStanding } from "../components/FrItem";

const Standing = () => {
  const router = useRouter();
  const { isMobile } = useResponsive();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [success, setSuccess] = useState(false);
  const [detailModal, setDetailModal] = useState(true);

  function openDetail() {
    setDetailModal(true);
  }

  return (
    <FrLayout2 error={error} success={success}>
      <Head>
        <title>RunRide | Standing</title>
        <meta name="description" content="Run ride description" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className={`modal ${detailModal == true ? "modal-open" : ""}`}>
        <div className="modal-box flex-col w-[700px] mobile:w-[388px] px-auto mobile:h-screen rounded-[10px] mobile:mx-3">
          <label
            htmlFor="detail-modal"
            className="btn btn-sm btn-circle btn-accent text-white absolute right-2 top-2"
            onClick={() => {
              setDetailModal(false);
            }}
          >
            ✕
          </label>
          <div className="mobile:pt-[50px] flex mobile:justify-center justify-start items-center">
            <span className="mobile:uppercase fr-text-subhead-2 text-secondary font-bold mr-[10px]">
              Group unit 8921
            </span>
            <span className="mobile:uppercase fr-text-body font-bold bg-secondary rounded-full py-[6px] px-[10px] flex justify-center items-center text-white">
              #1
            </span>
          </div>
          <div className="grid grid-cols-2 gap-x-3 mt-[22px]">
            <div className="flex flex-col cursor-pointer justify-start  mt-[7px] bg-[#FCFCFC] bg-[##E3E3E3] rounded-[5px] border border-[#E3E3E3] p-[15px]">
              <span className="fr-text-subhead-1 text-secondary font-weight-bold">
                Total Tempuh
              </span>
              <span className="fr-text-caption text-muted font-weight-medium mt-[15px]">
                Distance
              </span>
              <span className="fr-text-body text-secondary font-weight-medium mt-[5px]">
                85Km
              </span>
              <span className="fr-text-caption text-muted font-weight-medium mt-[10px]">
                Elapsed Time
              </span>
              <span className="fr-text-body text-secondary font-weight-medium mt-[5px]">
                10 Jam : 17 Menit : 8 Detik
              </span>
            </div>
            <div className="flex flex-col cursor-pointer justify-start  mt-[7px] bg-[#FCFCFC] bg-[##E3E3E3] rounded-[5px] border border-[#E3E3E3] p-[15px]">
              <span className="fr-text-subhead-1 text-secondary font-weight-bold">
                Total Tempuh Kompetisi
              </span>
              <span className="fr-text-caption text-muted font-weight-medium mt-[15px]">
                Distance
              </span>
              <span className="fr-text-body text-secondary font-weight-medium mt-[5px]">
                85Km
              </span>
              <span className="fr-text-caption text-muted font-weight-medium mt-[10px]">
                Elapsed Time
              </span>
              <span className="fr-text-body text-secondary font-weight-medium mt-[5px]">
                10 Jam : 17 Menit : 8 Detik
              </span>
            </div>
          </div>
          <div className="flex flex-col">
            <span className="fr-text-body pt-[20px] pb-[10px">Ketua Group</span>
            <div className="flex cursor-pointer justify-between items-center mt-[7px] bg-[#FCFCFC] bg-[##E3E3E3] rounded-[5px] border border-[#E3E3E3] p-[15px]">
              <span className="fr-text-subhead-1 text-black font-weight-medium">
                Ridwan
              </span>
            </div>
          </div>
          <div className="flex flex-col">
            <span className="fr-text-body pt-[20px] pb-[10px">Anggota</span>
            <div className="flex cursor-pointer justify-between items-center mt-[7px] bg-[#FCFCFC] bg-[##E3E3E3] rounded-[5px] border border-[#E3E3E3] p-[15px]">
              <span className="fr-text-subhead-1 text-black font-weight-medium">
                Ridwan
              </span>
            </div>
          </div>
        </div>
      </div>
      <div
        className={classnames(
          "card w-[855px] mobile:w-[321px] bg-base-100 mobile:bg-transparent flex mx-auto",
          !isMobile
            ? "border border-lightgrey rounded-[20px] mt-[-50px]"
            : "mt-[-50px]"
        )}
      >
        <div className="flex mobile:flex-col justify-between px-[30px] py-[36px] items-center">
          {isMobile && (
            <span className="fr-text-headline-2 text-secondary">
              FUN RUN & RIDE
            </span>
          )}
          <span className="fr-text-headline-2 text-secondary mobile:mt-[26px] mobile:text-black mobile:fr-text-headline-1">
            Group Standing
          </span>
          <FrTextField
            placeholder="Masukkan nama group"
            icon="/icons/ic_search.svg"
            containerClass="w-[284px] mobile:w-[310px] mobile:mt-[27px]"
            onChange={(e) => {
              // const value = e.target.value;
              // setPage(1);
              // setQuery(value);
              // setData([]);
            }}
          />
        </div>
        {!isMobile && <div className="border-[0.5px] border-[#E3E3E3]"></div>}
        <div className="tabs grid-cols-3 grid pt-[20px]">
          <div className="flex flex-col justify-center">
            <a className="tab !fr-text-title-1 text-secondary font-bold mb-[15px]">
              RUN 01.A
            </a>
            <div className="border-b-4 border-secondary" />
          </div>
          <div className="flex flex-col justify-center">
            <a className="tab !fr-text-title-1 text-muted font-bold mb-[15px]">
              RUN 01.B
            </a>
            <div className="border-b-4 border-lightgrey" />
          </div>
          <div className="flex flex-col justify-center">
            <a className="tab !fr-text-title-1 text-muted font-bold mb-[15px]">
              RIDE
            </a>
            <div className="border-b-4 border-lightgrey" />
          </div>
        </div>

        <div className="grid grid-cols-1">
          <FrItemStanding
            rank={1}
            groupName="Group Unit 1923"
            poin="1232"
            ellapseTime="10 Jam : 21 Menit : 45 Detik"
            onClick={openDetail}
          />
          <FrItemStanding
            rank={2}
            groupName="Group Unit 1923"
            poin="1232"
            ellapseTime="10 Jam : 21 Menit : 45 Detik"
            onClick={openDetail}
          />
          <FrItemStanding
            rank={3}
            groupName="Group Unit 1923"
            poin="1232"
            ellapseTime="10 Jam : 21 Menit : 45 Detik"
            onClick={openDetail}
          />
          <FrItemStanding
            rank={4}
            groupName="Group Unit 1923"
            poin="1232"
            ellapseTime="10 Jam : 21 Menit : 45 Detik"
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
