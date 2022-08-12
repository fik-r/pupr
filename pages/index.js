import Head from "next/head";
import classnames from "classnames";
import { useRouter } from "next/router";
import { FrLayout1 } from "../components/FrLayout";
import useResponsive from "../utils/media-query";
import { useState, useEffect } from "react";
import { ToastError, ToastSuccess } from "../components/FrToast";
import { FrTextField } from "../components/FrField";
import { FrItemStanding } from "../components/FrItem";
import API from "../utils/api";
import FrPagination from "../components/FrPagination";
import FrButton from "../components/FrButton";

const Standing = () => {
  const router = useRouter();
  const { isMobile } = useResponsive();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [success, setSuccess] = useState(false);
  const [list, setList] = useState([]);
  const [total, setTotal] = useState(0);
  const [totalPages, setTotalPages] = useState(0);
  const [drawer, setDrawer] = useState(false);
  const [detail, setDetail] = useState({
    captain: {},
    member: [],
  });
  const [page, setPage] = useState(router.query.page || 1);
  const [query, setQuery] = useState(router.query.query || "");
  const [category, setCategory] = useState(router.query.category || "01.A");
  const [detailModal, setDetailModal] = useState(false);

  useEffect(() => {
    // router.push("/standing?page=1&query=&page=1&category=01.A", undefined, { shallow: true });
  }, []);

  useEffect(() => {
    getStandings(page);
  }, [query, category, page]);

  function openDetail(detail) {
    setDetail(detail);
    setDetailModal(true);
  }

  function secondsToHms(d) {
    d = Number(d);
    var h = Math.floor(d / 3600);
    var m = Math.floor((d % 3600) / 60);
    var s = Math.floor((d % 3600) % 60);

    var hDisplay = h > 0 ? (h < 10 ? "0" : "") + h + ":" : "00:";
    var mDisplay = m > 0 ? (m < 10 ? "0" : "") + m + ":" : "00:";
    var sDisplay = s > 0 ? (s < 10 ? "0" : "") + s : "00";
    return hDisplay + mDisplay + sDisplay;
  }

  const prevPage = () => {
    if (page !== 1) {
      setPage(page - 1);
    }
  };

  const goToSpecificPage = (targetPage) => {
    setPage(targetPage);
  };

  const nextPage = () => {
    let lastpage = totalPages;

    if (page !== lastpage) {
      setPage(page + 1);
    }
  };

  function getStandings(page) {
    setLoading(true);
    API.get("/api/standing", {
      params: {
        q: query,
        page: page,
        limit: 10,
        category: category,
      },
    })
      .then((res) => {
        setTotal(res.data.payload.total);
        setList(res.data.payload.leaderboards);
        if (res.data.payload.total > 0) {
          let totalPage_temp = Math.ceil(res.data.payload.total / 10);

          setTotalPages(totalPage_temp);
        }
        setPage(page);
      })
      .catch((err) => {
        setError(ToastError(err.response.data.message));
      })
      .finally(() => {
        setLoading(false);
      });
  }
  return (
    <FrLayout1 error={error} success={success}>
      <Head>
        <title>RunRide | Standing</title>
        <meta name="description" content="Run ride description" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      {loading && (
        <div className="absolute w-screen h-full bg-muted/25 flex justify-center top-0 right-0 z-50">
          <div
            className="radial-progress bg-primary text-primary-content border-4 border-primary mt-[350px] animate-spin"
            style={{ "--value": 70 }}
          ></div>
        </div>
      )}
      {!isMobile && (
        <div className="flex-row flex mt-5 absolute top-0 right-0 mr-5 space-x-3">
          <FrButton
            shadow
            className="w-[103px] !max-h-[37px] self-center "
            color="light"
            icon="/icons/ic_lock.svg"
            onClick={() => {
              router.push("/login");
            }}
            label="Login"
          />
          <FrButton
            shadow
            className="w-[166px] !max-h-[37px] self-center "
            color="light"
            icon="/icons/ic_org.svg"
            onClick={() => {
              router.push("/unit-organization");
            }}
            label="Unit Organisasi"
          />
        </div>
      )}

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
          <div className="mobile:pt-[50px] flex justify-start items-center">
            <span className="mobile:uppercase fr-text-subhead-2 text-secondary font-bold mr-[10px]">
              {detail.full_name}
            </span>
            <span className="mobile:uppercase fr-text-body font-bold bg-secondary rounded-full py-[6px] px-[10px] flex justify-center items-center text-white">
              #{detail.current_rank_position}
            </span>
          </div>
          <div className="grid grid-cols-2 mobile:grid-cols-1 gap-x-3 mt-[22px]">
            <div className="flex flex-col cursor-pointer justify-start  mt-[7px] bg-[#FCFCFC] bg-[##E3E3E3] rounded-[5px] border border-[#E3E3E3] p-[15px]">
              <span className="fr-text-subhead-1 text-secondary font-weight-bold">
                Total Tempuh
              </span>
              <span className="fr-text-caption text-muted font-weight-medium mt-[15px]">
                Distance
              </span>
              <span className="fr-text-body text-secondary font-weight-medium mt-[5px]">
                {Math.round((detail.sum_distance / 1000) * 100) / 100}Km
              </span>
              <span className="fr-text-caption text-muted font-weight-medium mt-[10px]">
                Elapsed Time
              </span>
              <span className="fr-text-body text-secondary font-weight-medium mt-[5px]">
                {secondsToHms(detail.sum_elapsed_time)}
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
                {Math.round((detail.target_sum_distance / 1000) * 100) / 100}Km
              </span>
              <span className="fr-text-caption text-muted font-weight-medium mt-[10px]">
                Elapsed Time
              </span>
              <span className="fr-text-body text-secondary font-weight-medium mt-[5px]">
                {secondsToHms(detail.target_total_elapsed_time)}
              </span>
            </div>
          </div>
          <div className="flex flex-col">
            <span className="fr-text-body pt-[20px] pb-[10px">Ketua Group</span>
            {!detail.captain && "-"}
            {detail.captain && (
              <div className="grid grid-cols-3 mobile:grid-cols-2 mobile:space-x-3 cursor-pointer justify-between items-center mt-[7px] bg-[#FCFCFC] bg-[##E3E3E3] rounded-[5px] border border-[#E3E3E3] p-[15px]">
                <span className="fr-text-subhead-1 text-black font-weight-medium">
                  {detail.captain.full_name}
                </span>
                {!isMobile && (
                  <div className="flex flex-col">
                    <span className="self-center fr-text-caption text-muted">
                      Distance
                    </span>
                    <span className="self-center fr-text-caption text-secondary">
                      {Math.round((detail.captain.sum_distance / 1000) * 100) /
                        100}
                      Km
                    </span>
                  </div>
                )}

                <div className="flex flex-col">
                  {isMobile && (
                    <>
                      <span className="self-start fr-text-caption text-muted">
                        Distance
                      </span>
                      <span className="self-start fr-text-caption text-secondary">
                        {Math.round(
                          (detail.captain.sum_distance / 1000) * 100
                        ) / 100}
                        Km
                      </span>
                    </>
                  )}

                  <span className="self-end mobile:self-start fr-text-caption text-muted mobile:mt-[10px]">
                    Elapsed Time
                  </span>
                  <span className="self-end mobile:self-start fr-text-caption text-secondary">
                    {secondsToHms(detail.captain.sum_elapsed_time)}
                  </span>
                </div>
              </div>
            )}
          </div>
          <div className="flex flex-col">
            <span className="fr-text-body pt-[20px] pb-[10px">Anggota</span>
            {detail.member.length == 0 && "-"}
            {detail.member.map((m, index) => {
              return (
                <div
                  key={index}
                  className="grid-cols-3 mobile:grid-cols-2 mobile:space-x-3 grid cursor-pointer justify-center items-center mt-[7px] bg-[#FCFCFC] bg-[##E3E3E3] rounded-[5px] border border-[#E3E3E3] p-[15px]"
                >
                  <span className="fr-text-subhead-1 text-black font-weight-medium">
                    {m.full_name}
                  </span>
                  {!isMobile && (
                    <div className="flex flex-col">
                      <span className="self-center fr-text-caption text-muted">
                        Distance
                      </span>
                      <span className="self-center fr-text-caption text-secondary">
                        {Math.round((m.sum_distance / 1000) * 100) / 100}Km
                      </span>
                    </div>
                  )}

                  <div className="flex flex-col">
                    {isMobile && (
                      <>
                        <span className="self-start fr-text-caption text-muted">
                          Distance
                        </span>
                        <span className="self-start fr-text-caption text-secondary">
                          {Math.round((m.sum_distance / 1000) * 100) / 100}Km
                        </span>
                      </>
                    )}

                    <span className="self-end mobile:self-start fr-text-caption text-muted mobile:mt-[10px]">
                      Elapsed Time
                    </span>
                    <span className="self-end mobile:self-start fr-text-caption text-secondary">
                      {secondsToHms(m.sum_elapsed_time)}
                    </span>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
      {!isMobile && (
        <div className="flex justify-center flex-col mt-[200px] mb-[100px]">
          <span className="fr-text-display-3 mobile:fr-text-display-2 mobile:px-[62px] text-center text-secondary self-center font-poppins font-extrabold">
            PUPR {isMobile && <br />}
            FUN RUN & RIDE
          </span>
          <span className="fr-text-title-1 self-center font-poppins mobile:mt-[7px] mobile:px-[48px] text-center">
            Dalam memperingati{" "}
            <span className="text-black font-bold">HUT RI 77</span>
          </span>
        </div>
      )}

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
              const value = e.target.value;
              setPage(1);
              setQuery(value);
            }}
          />
        </div>
        {!isMobile && <div className="border-[0.5px] border-[#E3E3E3]"></div>}
        <div className="tabs grid-cols-3 grid pt-[20px]">
          <div
            className="flex flex-col justify-center"
            onClick={() => {
              setPage(1);
              setCategory("01.A");
            }}
          >
            <a
              className={`tab !fr-text-title-1 ${
                category == "01.A" ? "text-secondary" : "text-muted"
              } font-bold mb-[15px]`}
            >
              RUN 01.A
            </a>
            <div
              className={`border-b-4 ${
                category == "01.A" ? "border-secondary" : "border-lightgrey"
              }`}
            />
          </div>
          <div
            className="flex flex-col justify-center"
            onClick={() => {
              setPage(1);
              setCategory("01.B");
            }}
          >
            <a
              className={`tab !fr-text-title-1 ${
                category == "01.B" ? "text-secondary" : "text-muted"
              } font-bold mb-[15px]`}
            >
              RUN 01.B
            </a>
            <div
              className={`border-b-4 ${
                category == "01.B" ? "border-secondary" : "border-lightgrey"
              }`}
            />
          </div>
          <div
            className="flex flex-col justify-center"
            onClick={() => {
              setPage(1);
              setCategory("02");
            }}
          >
            <a
              className={`tab !fr-text-title-1 ${
                category == "run" ? "text-secondary" : "text-muted"
              } font-bold mb-[15px]`}
            >
              RIDE
            </a>
            <div
              className={`border-b-4 ${
                category == "run" ? "border-secondary" : "border-lightgrey"
              }`}
            />
          </div>
        </div>

        <div className="grid grid-cols-1">
          {list.map((item, index) => {
            return (
              <FrItemStanding
                key={index}
                rank={item.current_rank_position}
                groupName={item.full_name}
                ellapseTime={secondsToHms(item.sum_elapsed_time)}
                totalDistance={Math.round((item.target_sum_distance / 1000) * 100) / 100}
                onClick={() => {
                  openDetail(item);
                }}
              />
            );
          })}
        </div>
        <div className="flex justify-between px-[30px] py-[42px] items-center mobile:justify-center">
          {!isMobile && (
            <div className="text-black font-medium font-body">
              {list.length}/{total} Group
            </div>
          )}
          <FrPagination
            prevPage={() => prevPage()}
            nextPage={() => nextPage()}
            isMobile={isMobile}
            totalPages={totalPages}
            goToSpecificPage={(val) => goToSpecificPage(val)}
            currentPage={page}
          />
        </div>
      </div>
      {isMobile && (
        <>
          <img
            className={`${
              drawer ? "fixed" : "absolute"
            } top-0 right-0 z-10 mx-5 mt-7 cursor-pointer`}
            onClick={() => {
              setDrawer(!drawer);
            }}
            src="/icons/ic_burger.svg"
          />
          {drawer && (
            <div className="fixed top-0 right-0 h-full bg-secondary w-[256px] z-5">
              <ul className="px-[30px] pt-[102px]">
                <li
                  className="cursor-pointer"
                  onClick={() => {
                    router.push("/login");
                  }}
                >
                  <a className="fr-text-subhead-1 text-white font-bold">
                    Login
                  </a>
                </li>
                <li
                  className="cursor-pointer mt-[17px]"
                  onClick={() => {
                    router.push("/unit-organization");
                  }}
                >
                  <a className="fr-text-subhead-1 text-white font-bold">
                    Unit Organisasi
                  </a>
                </li>
              </ul>
            </div>
          )}
        </>
      )}
    </FrLayout1>
  );
};

export default Standing;
