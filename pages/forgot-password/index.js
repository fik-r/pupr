import Head from "next/head";
import { useState } from "react";
import { FrLayout2 } from "../../components/FrLayout";
import { FrTextField } from "../../components/FrField";
import { useRouter } from "next/router";
import FrButton from "../../components/FrButton";
import useResponsive from "../../utils/media-query";
import { ToastSuccess, ToastError } from "../../components/FrToast";
import API from "../../utils/api";

const ForgotPassword = () => {
  const router = useRouter();

  const { isMobile } = useResponsive();
  const [email, setEmail] = useState("");
  const [dob, setDob] = useState("");
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const [loading, setLoading] = useState(false);

  const emailValidation = email.length == 0;
  const dobValidation = dob.length == 0;

  function submitForgotPassword() {
    setLoading(true);
    API.post("/api/forgot-password", {
      email: email || "",
      dob: dob || "",
    })
      .then((res) => {
        router.push("/forgot-password/success-forgot-password");
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
        <title>RunRide | Lupa Password</title>
        <meta name="description" content="Run ride description" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="space-y-2 mobile:space-y-0">
        <div className="flex justify-center mb-[34px]">
          <span className="fr-text-headline-1 text-black self-center pt-[50px] ">
            Lupa Password
          </span>
        </div>
        <div className="grid  items-center justify-center gap-x-3 mobile:gap-y-2 mobile:pb-2">
          <FrTextField
            label="Email"
            errorMessage="Email tidak boleh kosong"
            placeholder="Masukkan Email"
            inputType="text"
            onChange={(event) => {
              const value = event.target.value;
              setEmail(value);
            }}
            value={email}
          />
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
        </div>
        <div className="flex justify-center pt-[34px]">
          <FrButton
            className="w-[268px]"
            color="primary"
            disabled={emailValidation || dobValidation}
            label="Kirim"
            loading={loading}
            onClick={submitForgotPassword}
          />
        </div>
      </div>
    </FrLayout2>
  );
};

export default ForgotPassword;
