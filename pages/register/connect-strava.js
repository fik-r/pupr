import Head from "next/head";
import { FrLayout2 } from "../../components/FrLayout";
import FrButton from "../../components/FrButton";
import { useRouter } from "next/router";
import base from "daisyui/dist/base";

const ConnectStrava = () => {
  const router = useRouter();
  const clientId = process.env.NEXT_PUBLIC_STRAVA_CLIENT_ID;
  const baseUrl = process.env.NEXT_PUBLIC_BASE_URL;
  const redirectUrl = baseUrl + "/redirect";
  const scope = "read";

  function linkToStrava() {
    window.location = `http://www.strava.com/oauth/authorize?client_id=${clientId}&response_type=code&redirect_uri=${redirectUrl}/exchange-token&approval_prompt=force&scope=${scope}`;
  }

  return (
    <FrLayout2>
      <Head>
        <title>Daftar | Hubungkan Akun</title>
        <meta name="description" content="Run ride description" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="flex justify-center flex-col">
        <img
          width="150px"
          height="150px"
          className="mx-auto mb-[61px]"
          src="/icons/ic_done_secondary.svg"
        />
        <span className="fr-text-headline-1 text-black self-center">
          Pendaftaran Peserta Berhasil
        </span>
        <span className="fr-text-subhead-1 text-muted self-center">
          Silahkan masuk untuk melanjutkan
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
