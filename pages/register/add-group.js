import Head from "next/head";
import { useState } from "react";
import { useRouter } from "next/router";
import { FrLayout2 } from "../../components/FrLayout";
import { FrTextField } from "../../components/FrField";
import FrButton from "../../components/FrButton";
import { STORAGE_DRAFT_REGISTER } from "../../utils/constants";
import axios from "axios";
import { ToastError } from "../../components/FrToast";

const RegisterAddGroup = () => {
  const [groupName, setGroupName] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState();
  const router = useRouter();

  const groupNameValidation = groupName.length == 0;

  function handleNext() {
    if (groupNameValidation) return;
    setLoading(true);
    const draftRegister = JSON.parse(
      localStorage.getItem(STORAGE_DRAFT_REGISTER)
    );
    axios
      .post(process.env.NEXT_PUBLIC_BASE_URL + "/api/register", {
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
        localStorage.setItem(
          STORAGE_DRAFT_REGISTER,
          JSON.stringify({
            ...draftRegister,
            teamName: groupName,
            userId: res.data.payload.userId,
          })
        );
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
