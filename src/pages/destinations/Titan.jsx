import titanImg from "../../assets/destination/image-titan.png";

export default function Titan() {
  return (
    <div className="mt-12 flex flex-col items-center">
      <img src={titanImg} alt="titan" className="w-[150px]" />
      <p className="font-bellefair text-[56px] text-white mt-8">Titan</p>
      <p className="text-blue-300 px-24 text-center font-barlow leading-[180%] text-[15px] mt-4">
        The only moon known to have a dense atmosphere other than Earth, Titan
        is a home away from home (just a few hundred degrees colder!). As a
        bonus, you get striking views of the Rings of Saturn.
      </p>
      <hr className="w-[75%] border-t-2 border-white my-8 opacity-25" />
      <p className="font-barlow text-[14px] tracking-[2px] text-blue-300">
        AVG. DISTANCE
      </p>
      <p className="font-bellefair text-[28px] text-white mt-3">1.6 BIL. KM</p>
      <p className="font-barlow text-[14px] tracking-[2px] text-blue-300 mt-6">
        EST. TRAVEL TIME
      </p>
      <p className="font-bellefair text-[28px] text-white mt-3 mb-6">7 YEARS</p>
    </div>
  );
}
