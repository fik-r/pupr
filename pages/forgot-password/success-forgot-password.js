import Head from "next/head";
import { FrLayout2 } from "../../components/FrLayout";
import FrButton from "../../components/FrButton";
import { useRouter } from "next/router";

const SuccessForgotPassword = () => {
  const router = useRouter();

  function goToBeranda() {
    router.push("/");
  }

  return (
    <FrLayout2>
      <Head>
        <title>Daftar | Lupa Password</title>
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
          Password berhasil direset
        </span>
        <span className="fr-text-subhead-1 mobile:fr-text-body text-muted self-center">
          Silahkan login menggunakan nip kamu
        </span>
        <FrButton
          className="w-[242px] h-[61px] self-center mt-[28px]"
          color="primary"
          onClick={goToBeranda}
          label="Kembali ke beranda"
        />
      </div>
    </FrLayout2>
  );
};

export default SuccessForgotPassword;
