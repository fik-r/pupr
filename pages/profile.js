import Head from "next/head";
import { useRouter } from "next/router";
import { FrLayout2 } from "../components/FrLayout";
import useResponsive from "../utils/media-query";
import FrText from "../components/FrText";
import FrButton from "../components/FrButton";
import { useState, useEffect } from "react";
import { ToastError } from "../components/FrToast";
import moment from "moment";
import API from "../utils/api";
import { ATHLETE_ID } from "../utils/constants";

const Profile = () => {
  const router = useRouter();
  const { isMobile } = useResponsive();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [user, setUser] = useState({});
  const [member, setMember] = useState([]);
  const [group, setGroup] = useState({});
  const [athleteId, setAthleteId] = useState("");

  useEffect(() => {
    setLoading(true);
    setAthleteId(localStorage.getItem(ATHLETE_ID));
    API.get("/api/profile")
      .then((res) => {
        const data = res.data.payload;
        setUser(data.user || {});
        console.log(moment.unix(data.user.dob).format("YYYY MMMM DD"));
        setMember(data.member || {});
        setGroup(data.group || {});
      })
      .catch((err) => {
        setError(ToastError(err.response.data.message));
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);
  return (
    <FrLayout2 error={error}>
      <Head>
        <title>RunRide | Profile</title>
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
      <FrButton
        className="w-[124px] !max-h-[37px] self-center mt-5 absolute top-0 right-0 mr-5"
        color="light"
        icon="/icons/ic_logout.svg"
        onClick={() => {
          localStorage.clear();
          router.push("/");
        }}
        label="Logout"
      />

      <div className="flex-row flex mobile:flex-col mobile:items-center justify-center gap-x-10 px-12 mobile:px-0">
        <div className="card w-[321px] h-fit bg-base-100 border border-lightgrey rounded-[20px] p-[30px] mt-5 flex items-center">
          <div className="avatar mt-[20px] mb-[30px]">
            <div className="w-24 rounded-full">
              <img src={user.profile} />
            </div>
          </div>
          <span className="fr-text-subhead-2 text-secondary font-medium">
            Lorem Ipsum
          </span>
          <div className="bg-primary rounded-[50px] py-[10px] px-[20px] text-center mt-[10px] fr-text-body text-secondary font-medium">
            Strava ID {athleteId}
          </div>
        </div>

        <div className="card w-[699px] mobile:w-[321px] bg-base-100 border border-lightgrey rounded-[20px] py-[45px] mt-5 flex">
          <span className="px-[45px] mobile:px-[27px]">Data Diri</span>
          <div className="grid grid-cols-2 mobile:grid-cols-1 mt-[34px] px-[45px] mobile:px-[27px] mobile:gap-y-4">
            <div className="flex flex-col space-y-4">
              <FrText label="Nama Lengkap" value={user.full_name} />
              <FrText
                label="Tanggal Lahir"
                value={moment(user.dob).format("DD MMMM YYYY")}
              />
              <FrText label="No Handphone" value={user.phone_number} />
            </div>

            <div className="flex flex-col space-y-4">
              <FrText label="NIP/NRP" value={user.nip} />
              <FrText
                label="Jenis Kelamin"
                value={user.sex == "M" ? "Laki - Laki" : "Perempuan"}
              />
              <FrText label="Unit Organisasi" value={user.organization} />
            </div>
          </div>
          <div className="border-[0.5px] border-[#E3E3E3] mt-[32px] mb-[30px]"></div>
          <span className="px-[45px] mobile:px-[27px]">Data Group</span>
          <div className="flex flex-col mt-[30px] px-[45px] mobile:px-[27px]">
            <div className="flex flex-col space-y-4">
              <FrText label="Nama Group" value={group.name} />
              <div className="flex flex-col">
                <span className="text-muted fr-text-body font-weight-medium">
                  Status Group
                </span>
                <div
                  className={`w-fit fr-text-caption text-white rounded-full py-[7px] px-[12px] mt-[7px] ${
                    group.qualified == 0 ? "bg-accent" : "bg-secondary"
                  }`}
                >
                  {group.qualified == 0 ? "Belum Siap" : "Sudah Siap"}
                </div>
              </div>
              <FrText label="Nama Ketua" value={group.captain_name} />
              <div className="flex flex-col">
                <span className="text-muted fr-text-body font-weight-medium">
                  Anggota
                </span>
                {member.map((m, index) => {
                  return (
                    <span
                      key={index}
                      className="fr-text-subhead-1 text-black font-weight-medium mt-[7px]"
                    >
                      {m.full_name}
                    </span>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </FrLayout2>
  );
};

export default Profile;
