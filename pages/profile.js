import Head from "next/head";
import { useRouter } from "next/router";
import { FrLayout1 } from "../components/FrLayout";
import FrButton from "../components/FrButton";
import useResponsive from "../utils/media-query";

const Profile = () => {
  const router = useRouter();
  const { isMobile } = useResponsive();
  return (
    <FrLayout1>
      <Head>
        <title>RunRide | Profile</title>
        <meta name="description" content="Run ride description" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="flex justify-center flex-col mt-[250px]">
        <span className="fr-text-display-3 mobile:fr-text-display-2 mobile:px-[62px] text-center text-secondary self-center font-poppins font-extrabold">
          PUPR{" "}
          {isMobile && <br />}
          FUN RUN & RIDE
        </span>
        <span className="fr-text-title-1 self-center font-poppins mobile:mt-[7px] mobile:px-[48px] text-center">
          Dalam memperingati{" "}
          <span className="text-black font-bold">HUT RI 77</span>
        </span>
        <FrButton
          className="w-[242px] h-[61px] self-center mt-[49px] mobile:mt-[40px]"
          color="primary"
          onClick={() => {
            router.push("register/personal-information");
          }}
          label="Daftar Sekarang"
        />
      </div>
    </FrLayout1>
  );
};

export default Profile;
