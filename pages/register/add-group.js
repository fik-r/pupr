import Head from "next/head";
import { useState } from "react";
import { useRouter } from "next/router";
import { FrLayout2 } from "../../components/FrLayout";
import { FrTextField } from "../../components/FrField";
import FrButton from "../../components/FrButton";
import {
  STORAGE_DRAFT_REGISTER,
  ACCESS_TOKEN,
  REFRESH_TOKEN,
} from "../../utils/constants";
import { ToastError } from "../../components/FrToast";
import API from "../../utils/api";

const RegisterAddGroup = () => {
  const [groupName, setGroupName] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState();
  const router = useRouter();

  const groupNameValidation = groupName.length == 0;

  function handleNext() {
    if (groupNameValidation) return;
    setLoading(true);
    const draftRegister =
      JSON.parse(localStorage.getItem(STORAGE_DRAFT_REGISTER)) || {};
    API
      .post("/api/register", {
        email: draftRegister.email,
        password: draftRegister.password,
        fullName: draftRegister.fullName,
        nip: draftRegister.nip,
        dob: draftRegister.dob,
        gender: draftRegister.gender,
        phoneNumber: draftRegister.phoneNumber,
        teamName: groupName,
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

  return (
    <FrLayout2 error={error}>
      <Head>
        <title>Daftar | Pilih Grup</title>
        <meta name="description" content="Run ride description" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="flex justify-center mb-[30px] pt-[120px] mobile:mb-[20px]">
        <span className="fr-text-headline-1 text-black self-center">
          Buat Group Baru
        </span>
      </div>
      <FrTextField
        containerClass="!w-[492px] mobile:w-[325px] mx-auto"
        label="Nama Group"
        errorMessage="Nama group tidak boleh kosong"
        isError={groupNameValidation}
        placeholder="Masukkan Nama Group"
        inputType="text"
        onChange={(event) => {
          const value = event.target.value;
          setGroupName(value);
        }}
        value={groupName}
      />
      <div className="flex justify-center pt-[25px] mobile:pt-[25px]">
        <FrButton
          className="w-[176px] mobile:w-[167px]"
          color="secondary"
          label="Selanjutnya"
          disabled={groupNameValidation}
          onClick={handleNext}
          loading={loading}
        />
      </div>
    </FrLayout2>
  );
};

export default RegisterAddGroup;
