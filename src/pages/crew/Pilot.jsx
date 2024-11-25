import pilotImg from "../../../public/crew/image-victor-glover.png";

export default function Pilot() {
  return (
    <div className="mt-12 flex flex-col items-center">
      <p className="font-bellefair text-[18px] text-white opacity-50 mt-8">
        PILOT
      </p>
      <p className="font-bellefair text-[24px] text-white mt-[8px]">
        VICTOR GLOVER
      </p>
      <p className="text-blue-300 px-24 text-center font-barlow leading-[180%] text-[15px] mt-[24px]">
        Pilot on the first operational flight of the SpaceX Crew Dragon to the
        International Space Station. Glover is a commander in the U.S. Navy
        where he pilots an F/A-18.He was a crew member of Expedition 64, and
        served as a station systems flight engineer.
      </p>
      <img
        src={pilotImg}
        alt="douglas hurley"
        className="w-[270px] h-[340px] mt-12"
      />
    </div>
  );
}
