import commanderImg from "../../../public/crew/image-douglas-hurley.png";

export default function Commander() {
  return (
    <div className="mt-12 flex flex-col items-center">
      <p className="font-bellefair text-[18px] text-white opacity-50 mt-8">
        COMMANDER
      </p>
      <p className="font-bellefair text-[24px] text-white mt-[8px]">
        DOUGLAS HURLEY
      </p>
      <p className="text-blue-300 px-24 text-center font-barlow leading-[180%] text-[15px] mt-[24px]">
        Douglas Gerald Hurley is an American engineer, former Marine Corps pilot
        and former NASA astronaut. He launched into space for the third time as
        commander of Crew Dragon Demo-2.
      </p>
      <img
        src={commanderImg}
        alt="douglas hurley"
        className="w-[270px] h-[340px] mt-12"
      />
    </div>
  );
}
