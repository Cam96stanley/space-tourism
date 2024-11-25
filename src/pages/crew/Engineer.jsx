import engineerImg from "../../assets/crew/image-mark-shuttleworth.png";

export default function Engineer() {
  return (
    <div className="mt-12 flex flex-col items-center">
      <p className="font-bellefair text-[18px] text-white opacity-50 mt-8">
        FLIGHT ENGINEER
      </p>
      <p className="font-bellefair text-[24px] text-white mt-[8px]">
        ANOUSHEH ANSARI
      </p>
      <p className="text-blue-300 px-24 text-center font-barlow leading-[180%] text-[15px] mt-[24px]">
        Anousheh Ansari is an Iranian American engineer and co-founder of Prodea
        Systems. Ansari was the fourth self-funded space tourist, the first
        self-funded woman to fly to the ISS, and the first Iranian in space.
      </p>
      <img
        src={engineerImg}
        alt="douglas hurley"
        className="w-[270px] h-[340px] mt-12"
      />
    </div>
  );
}
