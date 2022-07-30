import { FrToast } from "../FrToast";

export default function FrLayout2({ children, error, success }) {
  return (
    <div className="absolute -z-10 min-h-screen w-full bg-white">
      <img
        className="w-[252px] h-[265px] mobile:w-[123px] mobile:h-[130px] fixed top-0 right-0 -z-10 "
        src="/images/bg_1.svg"
      ></img>
      <img
        className="w-[252px] h-[265px] mobile:w-[123px] mobile:h-[130px] fixed bottom-0 left-0 -z-10"
        src="/images/bg_2.svg"
      ></img>
      <img
        className="absolute top-0 mobile:mx-auto mobile:right-0 mobile:left-0 left-0 mt-10 ml-14 -z-10"
        src="/icons/fr_icon.svg"
      ></img>
      <div className="container bg-transparent pt-40 mobile:pt-[130px] mx-auto pb-[100px]">
        {children}
      </div>
      <FrToast error={error} success={success} />
    </div>
  );
}
