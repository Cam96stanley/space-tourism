import specialistImg from "../../assets/crew/image-victor-glover.png";

export default function MissionSpecialist() {
  return (
    <div className="mt-12 flex flex-col items-center">
      <p className="font-bellefair text-[18px] text-white opacity-50 mt-8">
        MISSION SPECIALIST
      </p>
      <p className="font-bellefair text-[24px] text-white mt-[8px]">
        MARK SHUTTLEWORTH
      </p>
      <p className="text-blue-300 px-24 text-center font-barlow leading-[180%] text-[15px] mt-[24px]">
        Mark Richard Shuttleworth is the founder and CEO of Canonical, the
        company behind the Linux-based Ubuntu operating system. Shuttleworth
        became the first South African to travel to space as a space tourist.
      </p>
      <img
        src={specialistImg}
        alt="douglas hurley"
        className="w-[270px] h-[340px] mt-12"
      />
    </div>
  );
}
