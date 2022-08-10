import Head from "next/head";
import { useRouter } from "next/router";
import { FrLayout2 } from "../components/FrLayout";
import useResponsive from "../utils/media-query";
import FrText from "../components/FrText";
import FrButton from "../components/FrButton";
import { FrTextField } from "../components/FrField";
import { useState, useEffect } from "react";
import { ToastError, ToastSuccess } from "../components/FrToast";
import moment from "moment-timezone";
import "moment/locale/id";
import API from "../utils/api";
import {
  ATHLETE_ID,
  STORAGE_DRAFT_REGISTER,
  ACCESS_TOKEN,
} from "../utils/constants";

const Profile = () => {
  const router = useRouter();
  const { isMobile } = useResponsive();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [success, setSuccess] = useState(false);
  const [user, setUser] = useState({});
  const [member, setMember] = useState([]);
  const [activities, setActivites] = useState([]);
  const [group, setGroup] = useState({});
  const [athleteId, setAthleteId] = useState("");
  const [deleteModal, setDeleteModal] = useState(false);
  const [passwordModal, setPasswordModal] = useState(false);
  const [selectedMember, setSelectedMember] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [oldPassword, setOldPassword] = useState("");
  const [loadingPassword, setLoadingPassword] = useState(false);

  useEffect(() => {
    if (!localStorage.getItem(ACCESS_TOKEN)) {
      router.push("/");
    }
    setLoading(true);
    setAthleteId(localStorage.getItem(ATHLETE_ID));
    getProfile();
  }, []);

  function getProfile() {
    API.get("/api/profile")
      .then((res) => {
        const data = res.data.payload;
        setUser(data.user || {});
        setMember(data.member || {});
        setGroup(data.group || {});
        setActivites(data.activities || {});
        if (!data.group) {
          localStorage.setItem(
            STORAGE_DRAFT_REGISTER,
            JSON.stringify({
              dob: data.user.dob,
              gender: data.user.sex,
              unitOrganization: data.user.organization,
            })
          );
          router.push("/register/choose-category");
        }
      })
      .catch((err) => {
        setError(ToastError(err.response.data.message));
      })
      .finally(() => {
        setLoading(false);
      });
  }
  function handleUpdate() {
    setLoadingPassword(true);
    API.post("/api/update-password", {
      oldPassword: oldPassword,
      newPassword: newPassword,
    })
      .then((res) => {
        setSuccess(ToastSuccess("Berhasil merubah password"));
        setPasswordModal(false);
        setNewPassword("");
        setOldPassword("");
      })
      .catch((err) => {
        setError(ToastError(err.response.data.message));
      })
      .finally(() => {
        setLoadingPassword(false);
      });
  }

  function submitDelete() {
    setDeleteModal(false);
    setLoading(true);
    API.post("/api/delete-member", {
      userId: selectedMember,
    })
      .then((res) => {
        setSuccess(ToastSuccess("Berhasil menghapus anggota"));
        getProfile();
      })
      .catch((err) => {
        setError(ToastError(err.response.data.message));
      })
      .finally(() => {
        setLoading(false);
      });
  }
  return (
    <FrLayout2 error={error} success={success}>
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
            {user.full_name}
          </span>
          <div className="bg-primary rounded-[50px] py-[10px] px-[20px] text-center mt-[10px] fr-text-body text-secondary font-medium">
            Strava ID {athleteId}
          </div>
        </div>

        <div className={`modal ${deleteModal == true ? "modal-open" : ""}`}>
          <div className="modal-box">
            <h3 className="font-bold text-lg">Hapus Anggota</h3>
            <p className="py-4">Yakin ingin menghapus anggota ini?</p>
            <div className="modal-action">
              <label
                htmlFor="delete-modal"
                className="btn btn-accent text-white"
                onClick={() => setDeleteModal(false)}
              >
                Batal
              </label>
              <label
                htmlFor="delete-modal"
                className="btn btn-secondary text-white"
                onClick={submitDelete}
              >
                Ya!
              </label>
            </div>
          </div>
        </div>

        <div className={`modal ${passwordModal == true ? "modal-open" : ""}`}>
          <div className="modal-box w-[388px] px-auto rounded-[10px]">
            <label
              htmlFor="password-modal"
              className="btn btn-sm btn-circle btn-accent text-white absolute right-2 top-2"
              onClick={() => {
                setPasswordModal(false);
                setOldPassword("");
                setNewPassword("");
              }}
            >
              ✕
            </label>
            <div className="pt-[20px] flex flex-col items-center">
              <span className="fr-text-headline-1 mb-[25px]">
                Update Password
              </span>
              <FrTextField
                label="Password Lama"
                errorMessage="Password tidak boleh kosong"
                isError={oldPassword.length == 0}
                placeholder="Masukkan Password Lama"
                inputType="password"
                value={oldPassword}
                onChange={(event) => {
                  const value = event.target.value;
                  setOldPassword(value);
                }}
              />
              <FrTextField
                label="Password Baru"
                errorMessage="Password tidak boleh kosong"
                isError={newPassword.length == 0}
                placeholder="Masukkan Password Baru"
                inputType="password"
                value={newPassword}
                onChange={(event) => {
                  const value = event.target.value;
                  setNewPassword(value);
                }}
              />
            </div>
            <div className="flex justify-center pt-[35px] mb-[60px]">
              <FrButton
                className="w-[268px]"
                color="primary"
                label="Update Password"
                loading={loadingPassword}
                disabled={newPassword.length == 0 || oldPassword.length == 0}
                onClick={handleUpdate}
              />
            </div>
          </div>
        </div>

        <div className="card w-[699px] mobile:w-[321px] bg-base-100 border border-lightgrey rounded-[20px] py-[45px] mt-5 flex">
          <span className="px-[45px] mobile:px-[27px]">Data Diri</span>
          <div className="grid grid-cols-2 mobile:grid-cols-1 mt-[34px] px-[45px] mobile:px-[27px] mobile:gap-y-4">
            <div className="flex flex-col space-y-4">
              <FrText label="Nama Lengkap" value={user.full_name} />
              <FrText
                label="Tanggal Lahir"
                value={moment(user.dob)
                  .tz("Asia/Jakarta")
                  .format("DD MMMM YYYY")}
              />
              <FrText label="No Handphone" value={user.phone_number} />
              <div className="flex flex-col">
                <span className="text-muted fr-text-body font-weight-medium">
                  Keamanan
                </span>
                <div
                  className={`w-fit fr-text-caption text-white rounded-full py-[7px] px-[12px] mt-[7px] bg-secondary cursor-pointer`}
                  onClick={() => {
                    setPasswordModal(true);
                  }}
                >
                  Update Password
                </div>
              </div>
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
                    group.isReady ? "bg-secondary" : "bg-accent"
                  }`}
                >
                  {group.isReady ? "Sudah Lengkap" : "Belum Lengkap"}
                </div>
              </div>
              <FrText label="Nama Ketua" value={group.captain_name} />
              <div className="flex flex-col">
                <span className="text-muted fr-text-body font-weight-medium">
                  Anggota
                </span>
                {member
                  .filter((m) => m.full_name != group.captain_name)
                  .map((m, index) => {
                    return (
                      <div
                        key={index}
                        className="flex justify-between items-center  mt-[7px] bg-[#FCFCFC] rounded-[5px] border border-[#E3E3E3] p-[15px]"
                      >
                        <span
                          key={index}
                          className="fr-text-subhead-1 text-black font-weight-medium"
                        >
                          {m.full_name}
                        </span>
                        {group.user_id == user.id && (
                          <img
                            htmlFor="delete-modal"
                            className="w-[20px] h-[20px] cursor-pointer"
                            src="/icons/ic_delete.svg"
                            onClick={() => {
                              setSelectedMember(m.id);
                              setDeleteModal(!deleteModal);
                            }}
                          />
                        )}
                      </div>
                    );
                  })}
                {member.filter((m) => m.full_name != group.captain_name)
                  .length == 0 && <span>-</span>}
              </div>
            </div>
          </div>
          <div className="border-[0.5px] border-[#E3E3E3] mt-[32px] mb-[30px]"></div>
          <span className="px-[45px] mobile:px-[27px]">Aktivitas Saya</span>
          <div className="flex flex-col mt-[20px] px-[45px] mobile:px-[27px]">
            <div className="flex flex-col space-y-4">
              <div className="flex flex-col">
                {activities.map((activity, index) => {
                  return (
                    <div
                      key={index}
                      className="flex justify-between items-center  mt-[7px] bg-[#FCFCFC] rounded-[5px] border border-[#E3E3E3] p-[15px]"
                    >
                      <div className="flex flex-col">
                        <span className="self-start fr-text-subhead-1 text-secondary font-medium">
                          {activity.name}
                        </span>
                        <span className="text-muted fr-text-caption">
                          {moment(activity.start_date_local).format(
                            "dddd DD MMMM YYYY, hh:mm"
                          )}
                        </span>
                      </div>
                      <div className="flex flex-col mobile:space-x-2">
                        <span className="self-end fr-text-subhead-1 text-secondary font-medium uppercase">
                          {activity.type}
                        </span>
                        <span className="self-end fr-text-body text-black font-medium text-end">
                          {Math.round((activity.distance / 1000) * 100) / 100}{" "}
                          Kilometer
                        </span>
                      </div>
                    </div>
                  );
                })}
                {activities.length == 0 && <span>-</span>}
              </div>
            </div>
          </div>
        </div>
      </div>
    </FrLayout2>
  );
};

export default Profile;
