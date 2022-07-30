export default function FrLayout1({ children }) {
  return (
    <div className="absolute -z-10 min-h-screen w-full bg-hero pb-[100px]">
      <img
        className="fixed top-0 right-0 -z-10 mobile:w-[123px] mobile:h-[130px]"
        src="/images/bg_1.svg"
      ></img>
      <img
        className="fixed bottom-0 left-0 -z-10 mobile:w-[123px] mobile:h-[130px]"
        src="/images/bg_2.svg"
      ></img>
      <img
        className="absolute top-0 mobile:mx-auto mobile:right-0 mobile:left-0 mt-10 ml-14 -z-10"
        src="/icons/fr_icon.svg"
      ></img>
      <div className="container mt-44 bg-transparent mx-auto pb-44">
        {children}
      </div>
    </div>
  );
}
