import Head from "next/head";
import { FrLayout2 } from "../../components/FrLayout";
import FrButton from "../../components/FrButton";
import { useRouter } from "next/router";
import base from "daisyui/dist/base";
import { useEffect, useState } from "react";
import { ACCESS_TOKEN, STORAGE_TOAST_ERROR } from "../../utils/constants";
import { ToastError } from "../../components/FrToast";

const ConnectStrava = () => {
  const router = useRouter();
  const [error, setError] = useState("");
  const clientId = process.env.NEXT_PUBLIC_STRAVA_CLIENT_ID;
  const baseUrl = process.env.NEXT_PUBLIC_BASE_URL;
  const redirectUrl = baseUrl + "/redirect";
  const scope = "activity:read_all";

  useEffect(() => {
    const toastError = localStorage.getItem(STORAGE_TOAST_ERROR);
    if (toastError) {
      setError(ToastError(toastError));
      localStorage.removeItem(STORAGE_TOAST_ERROR);
    }
  }, []);
  function linkToStrava() {
    window.location = `http://www.strava.com/oauth/authorize?client_id=${clientId}&response_type=code&redirect_uri=${redirectUrl}/exchange-token&approval_prompt=force&scope=${scope}`;
  }

  return (
    <FrLayout2 error={error}>
      <Head>
        <title>Daftar | Hubungkan Akun</title>
        <meta name="description" content="Run ride description" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="flex justify-center flex-col">
        <img
          width="150px"
          height="150px"
          className="mobile:w-[132px] mobile:h-[132px] mx-auto mb-[61px] mobile:mt-[100px]"
          src="/icons/ic_done_secondary.svg"
        />
        <span className="fr-text-headline-1 mobile:fr-text-subhead-2 text-black self-center">
          Data Kamu Sudah Tersimpan
        </span>
        <span className="fr-text-subhead-1 mobile:fr-text-body text-muted self-center">
          Selesaikan registrasi dengan menghubungkan akun Strava
        </span>
        <FrButton
          className="w-[242px] h-[61px] self-center mt-[28px]"
          color="primary"
          onClick={linkToStrava}
          label="Hubungkan akun Strava"
        />
      </div>
    </FrLayout2>
  );
};

export default ConnectStrava;
