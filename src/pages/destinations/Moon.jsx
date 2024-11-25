import moonImg from "../../assets/destination/image-moon.png";

export default function Moon() {
  return (
    <div className="mt-12 flex flex-col items-center">
      <img src={moonImg} alt="moon" className="w-[150px]" />
      <p className="font-bellefair text-[56px] text-white mt-8">MOON</p>
      <p className="text-blue-300 px-24 text-center font-barlow leading-[180%] text-[15px] mt-4">
        See our planet as you’ve never seen it before. A perfect relaxing trip
        away to help regain perspective and come back refreshed. While you’re
        there, take in some history by visiting the Luna 2 and Apollo 11 landing
        sites.
      </p>
      <hr className="w-[75%] border-t-2 border-white my-8 opacity-25" />
      <p className="font-barlow text-[14px] tracking-[2px] text-blue-300">
        AVG. DISTANCE
      </p>
      <p className="font-bellefair text-[28px] text-white mt-3">384,400 KM</p>
      <p className="font-barlow text-[14px] tracking-[2px] text-blue-300 mt-6">
        EST. TRAVEL TIME
      </p>
      <p className="font-bellefair text-[28px] text-white mt-3 mb-6">3 DAYS</p>
    </div>
  );
}
