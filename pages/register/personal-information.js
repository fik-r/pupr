import Head from "next/head";
import { useEffect, useState } from "react";
import { FrLayout2 } from "../../components/FrLayout";
import { FrTextField, FrDropdownField } from "../../components/FrField";
import { useRouter } from "next/router";
import FrButton from "../../components/FrButton";
import useResponsive from "../../utils/media-query";
import {
  LIST_UNIT_ORGANIZATION,
  STORAGE_DRAFT_REGISTER,
} from "../../utils/constants";
import { ToastSuccess, ToastError } from "../../components/FrToast";
import moment from "moment";

const RegisterPersonalInformation = () => {
  const router = useRouter();

  const { isMobile } = useResponsive();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [fullName, setFullName] = useState("");
  const [nip, setNip] = useState("");
  const [dob, setDob] = useState("");
  const [gender, setGender] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [unitOrganization, setUnitOrganization] = useState("");
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  const emailValidation = email.length == 0;
  const passwordValidation = password.length == 0;
  const nameValidation = fullName.length == 0;
  const nipValidation = nip.length == 0;
  const dobValidation = dob.length == 0;
  const genderValidation = gender.length == 0;
  const phoneValidation =
    phoneNumber.length == 0 ||
    !phoneNumber.startsWith("08") ||
    phoneNumber.length <= 10 ||
    phoneNumber.length > 14;
  const unitOrganizationValidation = unitOrganization.length == 0;

  const isNextBtnDisabled =
    emailValidation ||
    passwordValidation ||
    nameValidation ||
    nipValidation ||
    dobValidation ||
    genderValidation ||
    phoneValidation ||
    unitOrganizationValidation;

  function handleNext() {
    if (isNextBtnDisabled) return;
    localStorage.setItem(
      STORAGE_DRAFT_REGISTER,
      JSON.stringify({
        email: email,
        password: password,
        fullName: fullName,
        nip: nip,
        dob: moment(dob).utc().valueOf(),
        gender: gender,
        phoneNumber: phoneNumber,
        unitOrganization: unitOrganization,
      })
    );
    router.push("choose-category");
  }
  return (
    <FrLayout2 error={error} success={success}>
      <Head>
        <title>Daftar | Data Diri</title>
        <meta name="description" content="Run ride description" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="space-y-2 mobile:space-y-0">
        <div className="flex justify-center mb-[34px]">
          <span className="fr-text-headline-1 text-black self-center ">
            Pendaftaran Peserta
          </span>
        </div>
        <div className="flex mobile:flex-col mobile:items-center justify-center gap-x-3 mobile:gap-y-2 mobile:pb-2">
          <FrTextField
            label="Email"
            errorMessage="Email tidak boleh kosong"
            isError={emailValidation}
            placeholder="Masukkan Email"
            inputType="text"
            onChange={(event) => {
              const value = event.target.value;
              setEmail(value);
            }}
            value={email}
          />
          <FrTextField
            label="Password"
            errorMessage="Password tidak boleh kosong"
            isError={passwordValidation}
            placeholder="Masukkan Password"
            inputType="password"
            value={password}
            onChange={(event) => {
              const value = event.target.value;
              setPassword(value);
            }}
          />
        </div>
        <div className="flex mobile:flex-col mobile:items-center justify-center gap-x-3 mobile:gap-y-2 mobile:pb-2">
          <FrTextField
            label="Nama Lengkap"
            errorMessage="Nama lengkap tidak boleh kosong"
            isError={nameValidation}
            placeholder="Masukkan Nama Lengkap"
            inputType="text"
            onChange={(event) => {
              const value = event.target.value;
              setFullName(value);
            }}
            value={fullName}
          />
          <FrTextField
            label="NIP/NRP"
            errorMessage="Nip tidak boleh kosong"
            isError={nipValidation}
            placeholder="Masukkan NIP/NRP"
            inputType="text"
            value={nip}
            pattern="[0-9]*"
            onChange={(event) => {
              const value = event.target.value;
              const isValid = event.target.validity.valid;
              setNip(isValid || value == "" ? value : nip);
            }}
          />
        </div>
        <div className="flex mobile:flex-col mobile:items-center justify-center gap-x-3 mobile:gap-y-2 mobile:pb-2">
          <FrTextField
            label="Tanggal Lahir"
            errorMessage="Tanggal lahir tidak boleh kosong"
            isError={dobValidation}
            placeholder="Masukkan Tanggal Lahir"
            inputType="date"
            icon="/icons/ic_calendar.svg"
            value={dob}
            onChange={(event) => {
              const value = event.target.value;
              setDob(value);
            }}
          />
          <FrDropdownField
            label="Jenis Kelamin"
            errorMessage="Jenis kelamin tidak boleh kosong"
            isError={genderValidation}
            placeholder="Pilih Jenis Kelamin"
            onChange={(event) => {
              const value = event.target.value;
              setGender(value);
            }}
            items={[
              {
                value: "M",
                label: "Laki-Laki",
              },
              {
                value: "F",
                label: "Perempuan",
              },
            ]}
          />
        </div>
        <div className="flex mobile:flex-col mobile:items-center justify-center gap-x-3 mobile:gap-y-2 mobile:pb-2">
          <FrTextField
            label="No Handphone"
            errorMessage="Format no handphone tidak valid"
            isError={phoneValidation}
            placeholder="(08)"
            inputType="tel"
            value={phoneNumber}
            pattern="[0-9]*"
            onChange={(event) => {
              const value = event.target.value;
              const isValid = event.target.validity.valid;
              setPhoneNumber(isValid || value == "" ? value : phoneNumber);
            }}
          />
          <FrDropdownField
            label="Unit Organisasi"
            placeholder="Pilih Unit Organisasi"
            errorMessage="Unit organisasi tidak boleh kosong"
            isError={unitOrganizationValidation}
            onChange={(event) => {
              const value = event.target.value;
              setUnitOrganization(value);
            }}
            items={LIST_UNIT_ORGANIZATION.sort().map((item) => {
              return {
                value: item,
                label: item,
              };
            })}
          />
        </div>
        {!isMobile && (
          <div className="flex w-[552px] rounded-[5px] p-[17px] border border-lightgrey mx-auto">
            <img src="/icons/ic_red_dot.svg" className="mr-[15px]" />
            <span className="fr-text-caption ">
              Saya menyetujui{" "}
              <span className="text-accent">syarat dan ketentuan</span>
            </span>
          </div>
        )}
        <div className="flex justify-center pt-[34px]">
          <FrButton
            className="w-[268px]"
            color="primary"
            label="Selanjutnya"
            disabled={isNextBtnDisabled}
            onClick={handleNext}
          />
        </div>
      </div>
    </FrLayout2>
  );
};

export default RegisterPersonalInformation;