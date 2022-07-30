import Head from "next/head";
import { useRouter } from "next/router";
import { FrLayout2 } from "../../components/FrLayout";
import { FrCardGroup } from "../../components/FrCard";
import { FrTextField } from "../../components/FrField";
import FrButton from "../../components/FrButton";

const RegisterChooseGroup = () => {
  const router = useRouter();
  return (
    <FrLayout2>
      <Head>
        <title>Daftar | Pilih Grup</title>
        <meta name="description" content="Run ride description" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="space-y-2">
        <div className="flex justify-center mb-[35px] mobile:mb-[30px]">
          <span className="fr-text-headline-1 text-black self-center">
            Pilih Group
          </span>
        </div>
        <div className="w-[733px] mobile:w-full flex mobile:flex-col mobile:items-center justify-between mx-auto">
          <FrTextField
            label="Cari Group"
            placeholder="Masukkan nama group"
            icon="/icons/ic_search.svg"
            containerClass="w-[284px] mobile:w-[236px]"
          />
          <FrButton
            label="Buat Group +"
            color="secondary"
            className="mobile:w-[236px] w-[167px] self-end mobile:self-auto mobile:mt-[17px]"
            onClick={() => {
              router.push("add-group");
            }}
          />
        </div>
        <div className="text-center pt-10">Group tidak ada.</div>
        {/* <div className="flex mobile:flex-col mobile:items-center justify-center gap-x-3 mobile:space-y-4">
          <FrCardGroup
            title={"4/5"}
            category={"Group Unit AFS"}
            captainName={"Fikr Lazuardi Islah"}
            onClickAction={() => {
              console.log("Click Card Group");
            }}
          />
          <FrCardGroup
            title={"5/5"}
            category={"Group Unit 16"}
            captainName={"Fikr Lazuardi Islah"}
            onClickAction={() => {
              console.log("Click Card Group");
            }}
          />
          <FrCardGroup
            title={"4/5"}
            category={"Group Unit AFS"}
            captainName={"Fikr Lazuardi Islah"}
            onClickAction={() => {
              console.log("Click Card Group");
            }}
          />
        </div> */}
        <div className="flex justify-center pt-[35px] mobile:pt-[30px]">
          <FrButton
            className="w-[268px] mobile:w-[236px]"
            color="primary"
            label="Selanjutnya"
            disabled={true}
            onClick={() => {
              router.push("connect-strava");
            }}
          />
        </div>
      </div>
    </FrLayout2>
  );
};

export default RegisterChooseGroup;
