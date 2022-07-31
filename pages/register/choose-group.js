import Head from "next/head";
import { useRouter } from "next/router";
import { useState, useEffect } from "react";
import { FrLayout2 } from "../../components/FrLayout";
import { FrCardGroup } from "../../components/FrCard";
import { FrTextField } from "../../components/FrField";
import FrButton from "../../components/FrButton";
import API from "../../utils/api";
import { ToastSuccess, ToastError } from "../../components/FrToast";
import {
  STORAGE_DRAFT_REGISTER,
  ACCESS_TOKEN,
  REFRESH_TOKEN,
} from "../../utils/constants";
import InfiniteScroll from "react-infinite-scroll-component";

const RegisterChooseGroup = () => {
  const router = useRouter();
  const [query, setQuery] = useState("");
  const [page, setPage] = useState(1);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [noData, setNoData] = useState(false);

  const isNextBtnDisabled = data.find((c) => c.selected == true) == null;

  useEffect(() => {
    const draftRegister =
      JSON.parse(localStorage.getItem(STORAGE_DRAFT_REGISTER)) || {};
    if (!draftRegister.categoryId && !localStorage.getItem(accessToken)) {
      router.push("/");
    } else {
      getGroup();
    }
  }, []);

  useEffect(() => {
    getGroup();
  }, [query]);

  function handleNext() {
    if (isNextBtnDisabled) return;
    setLoading(true);
    const draftRegister =
      JSON.parse(localStorage.getItem(STORAGE_DRAFT_REGISTER)) || {};
    const accessToken = localStorage.getItem(ACCESS_TOKEN) || "";

    if (!draftRegister.categoryId && accessToken == "") {
      router.push("/");
    }

    if (accessToken) {
      API.post("/api/join-group", {
        teamId: data.find((d) => d.selected == true).id,
        categoryId: draftRegister.categoryId,
      })
        .then((res) => {
          localStorage.removeItem(STORAGE_DRAFT_REGISTER);
          router.push("/profile");
        })
        .catch((err) => {
          setError(ToastError(err.response.data.message));
        })
        .finally(() => {
          setLoading(false);
        });
    } else {
      API.post("/api/register", {
        email: draftRegister.email,
        password: draftRegister.password,
        fullName: draftRegister.fullName,
        nip: draftRegister.nip,
        dob: draftRegister.dob,
        gender: draftRegister.gender,
        phoneNumber: draftRegister.phoneNumber,
        teamId: data.find((d) => d.selected == true).id,
        categoryId: draftRegister.categoryId,
        organization: draftRegister.unitOrganization,
      })
        .then((res) => {
          localStorage.removeItem(STORAGE_DRAFT_REGISTER);
          localStorage.setItem(ACCESS_TOKEN, res.data.payload.accessToken);
          localStorage.setItem(REFRESH_TOKEN, res.data.payload.refreshToken);
          router.push(`connect-strava`);
        })
        .catch((err) => {
          setError(ToastError(err.response.data.message));
        })
        .finally(() => {
          setLoading(false);
        });
    }
  }

  function getGroup() {
    const draftRegister =
      JSON.parse(localStorage.getItem(STORAGE_DRAFT_REGISTER)) || {};
    API.get("/api/group", {
      params: {
        q: query,
        unit_organization: draftRegister.unitOrganization,
        category: draftRegister.categoryId,
        page: page,
        limit: 10,
      },
    })
      .then((res) => {
        const _data = res.data.payload.data;
        _data.map((d) => {
          return {
            ...d,
            selected: false,
          };
        });
        setData(data.concat(_data));
        setPage(res.data.payload.nextPage);
        setNoData(_data.length == 0);
      })
      .catch((err) => {
        setError(ToastError(err.response.data.message));
      });
  }
  return (
    <FrLayout2 error={error}>
      <Head>
        <title>Daftar | Pilih Grup</title>
        <meta name="description" content="Run ride description" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="space-y-2">
        <div className="flex justify-center mb-[35px] mobile:mb-[30px]">
          <span className="fr-text-headline-1 text-black self-center">
            Pilih Group
          </span>
        </div>
        <div className="w-[733px] mobile:w-full flex mobile:flex-col mobile:items-center justify-between mx-auto">
          <FrTextField
            label="Cari Group"
            placeholder="Masukkan nama group"
            icon="/icons/ic_search.svg"
            containerClass="w-[284px] mobile:w-[236px]"
            onChange={(e) => {
              const value = e.target.value;
              setPage(1);
              setQuery(value);
              setData([]);
            }}
          />
          <FrButton
            label="Buat Group +"
            color="secondary"
            className="mobile:w-[236px] w-[167px] self-end mobile:self-auto mobile:mt-[17px]"
            onClick={() => {
              router.push("add-group");
            }}
          />
        </div>
        {data.length > 0 && (
          <InfiniteScroll
            dataLength={data.length} //This is important field to render the next data
            next={getGroup}
            hasMore={!noData}
            loader={
              <div className="pt-10">
                <div
                  className="w-[20px] h-[20px] animate-spin radial-progress bg-primary text-primary-content border-2 border-primary m-auto flex"
                  style={{ "--value": "70" }}
                ></div>
              </div>
            }
          >
            <div className="grid grid-cols-3 w-[733px] mobile:w-[236px]  mx-auto mobile:flex mobile:flex-col mobile:items-center justify-center gap-x-3 mobile:space-y-4">
              {data.map((d, index) => {
                const draftRegister =
                  JSON.parse(localStorage.getItem(STORAGE_DRAFT_REGISTER)) ||
                  {};
                const memberCount = d.members.length;
                const maleMember = d.members.filter(
                  (member) => member.sex == "M"
                );
                const femaleMember = d.members.filter(
                  (member) => member.sex == "F"
                );
                const maleMemberCount = maleMember ? maleMember.length : 0;
                const femaleMemberCount = femaleMember
                  ? femaleMember.length
                  : 0;
                const maxMember =
                  draftRegister.categoryId == "01.A" ||
                  draftRegister.categoryId == "01.B"
                    ? 5
                    : 2;

                const categoryType1Validation =
                  ((draftRegister.categoryId == "01.A" ||
                    draftRegister.categoryId == "01.B") &&
                    draftRegister.gender == "M" &&
                    maleMemberCount >= 3) ||
                  (draftRegister.gender == "F" &&
                    femaleMemberCount >= 2 &&
                    memberCount > maxMember);

                const categoryType2Validation =
                  (draftRegister.categoryId == "02" &&
                    draftRegister.gender == "M" &&
                    maleMemberCount >= 1) ||
                  (draftRegister.gender == "F" &&
                    femaleMemberCount >= 1 &&
                    memberCount > maxMember);
                let isDisabled =
                  categoryType1Validation || categoryType2Validation;

                return (
                  <FrCardGroup
                    key={index}
                    title={`${memberCount}/${maxMember}`}
                    category={d.name}
                    captainName={d.user_name}
                    selected={d.selected}
                    disabled={isDisabled}
                    onClickAction={() => {
                      setData(
                        data.map((_data) => {
                          if (d.id == _data.id) {
                            return {
                              ..._data,
                              selected: !_data.selected,
                            };
                          } else {
                            return {
                              ..._data,
                              selected: false,
                            };
                          }
                        })
                      );
                    }}
                  />
                );
              })}
            </div>
          </InfiniteScroll>
        )}
        {data.length == 0 && (
          <div className="text-center pt-10">Group tidak ada.</div>
        )}
        <div className="flex justify-center pt-[35px] mobile:pt-[30px]">
          <FrButton
            className="w-[268px] mobile:w-[236px]"
            color="primary"
            label="Selanjutnya"
            loading={loading}
            disabled={isNextBtnDisabled}
            onClick={handleNext}
          />
        </div>
      </div>
    </FrLayout2>
  );
};

export default RegisterChooseGroup;
