import Head from "next/head";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { FrLayout2 } from "../../components/FrLayout";
import { FrCardCategory } from "../../components/FrCard";
import FrButton from "../../components/FrButton";
import {
  ACCESS_TOKEN,
  LIST_CATEGORY,
  STORAGE_DRAFT_REGISTER,
} from "../../utils/constants";
import moment from "moment";

const RegisterChooseCategory = () => {
  const router = useRouter();
  const [listCategory, setListCategory] = useState(
    LIST_CATEGORY.map((category) => {
      return {
        ...category,
        selected: false,
      };
    })
  );
  const [age, setAge] = useState(0);

  useEffect(() => {
    const draftRegister =
      JSON.parse(localStorage.getItem(STORAGE_DRAFT_REGISTER)) || {};

    if (!draftRegister.email && !localStorage.getItem(ACCESS_TOKEN)) {
      router.push("/");
    } else {
      setAge(moment().diff(draftRegister.dob, "years"));
    }
  }, []);

  const isNextBtnDisabled =
    listCategory.find((c) => c.selected == true) == null;

  function handleNext() {
    if (isNextBtnDisabled) return;
    const draftRegister =
      JSON.parse(localStorage.getItem(STORAGE_DRAFT_REGISTER)) || {};
    localStorage.setItem(
      STORAGE_DRAFT_REGISTER,
      JSON.stringify({
        ...draftRegister,
        categoryId: listCategory.find((c) => c.selected == true).title,
      })
    );
    router.push("choose-group");
  }

  return (
    <FrLayout2>
      <Head>
        <title>Daftar | Pilih Kategori</title>
        <meta name="description" content="Run ride description" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="space-y-2">
        <div className="flex justify-center mb-[35px] mobile:mb-[30px]">
          <span className="fr-text-headline-1 text-black self-center ">
            Pilih Kategori
          </span>
        </div>

        <div className="grid grid-cols-3 w-[748px] mobile:w-[236px] mobile:flex mobile:flex-col mobile:items-center mx-auto justify-center gap-x-3 mobile:gap-y-2">
          {listCategory.map((category, index) => {
            const isDisabled =
              category.title == "02"
                ? false
                : category.title == "01.A"
                ? age > 40
                : age <= 40;
            return (
              <FrCardCategory
                key={index}
                title={category.title}
                category={category.category}
                rules={category.rules}
                selected={category.selected}
                disabled={isDisabled}
                onClickAction={() => {
                  setListCategory(
                    listCategory.map((_category) => {
                      if (category.title == _category.title) {
                        return {
                          ..._category,
                          selected: !_category.selected,
                        };
                      } else {
                        return {
                          ..._category,
                          selected: false,
                        };
                      }
                    })
                  );
                }}
              />
            );
          })}
        </div>
        <div className="flex justify-center pt-[35px]">
          <FrButton
            className="w-[268px] mobile:w-[236px]"
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

export default RegisterChooseCategory;
