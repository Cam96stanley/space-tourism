import marsImg from "../../assets/destination/image-mars.png";

export default function Mars() {
  return (
    <div className="mt-12 flex flex-col items-center">
      <img src={marsImg} alt="mars" className="w-[150px]" />
      <p className="font-bellefair text-[56px] text-white mt-8">MARS</p>
      <p className="text-blue-300 px-24 text-center font-barlow leading-[180%] text-[15px] mt-4">
        Don’t forget to pack your hiking boots. You’ll need them to tackle
        Olympus Mons, the tallest planetary mountain in our solar system. It’s
        two and a half times the size of Everest!
      </p>
      <hr className="w-[75%] border-t-2 border-white my-8 opacity-25" />
      <p className="font-barlow text-[14px] tracking-[2px] text-blue-300">
        AVG. DISTANCE
      </p>
      <p className="font-bellefair text-[28px] text-white mt-3">225 MIL. KM</p>
      <p className="font-barlow text-[14px] tracking-[2px] text-blue-300 mt-6">
        EST. TRAVEL TIME
      </p>
      <p className="font-bellefair text-[28px] text-white mt-3 mb-6">
        9 MONTHS
      </p>
    </div>
  );
}
