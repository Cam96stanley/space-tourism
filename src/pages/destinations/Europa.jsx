import europaImg from "../../../public/destination/image-europa.png";

export default function Europa() {
  return (
    <div className="mt-12 flex flex-col items-center">
      <img src={europaImg} alt="europa" className="w-[150px]" />
      <p className="font-bellefair text-[56px] text-white mt-8">EUROPA</p>
      <p className="text-blue-300 px-24 text-center font-barlow leading-[180%] text-[15px] mt-4">
        The smallest of the four Galilean moons orbiting Jupiter, Europa is a
        winter lover’s dream. With an icy surface, it’s perfect for a bit of ice
        skating, curling, hockey, or simple relaxation in your snug wintery
        cabin.
      </p>
      <hr className="w-[75%] border-t-2 border-white my-8 opacity-25" />
      <p className="font-barlow text-[14px] tracking-[2px] text-blue-300">
        AVG. DISTANCE
      </p>
      <p className="font-bellefair text-[28px] text-white mt-3">628 MIL. KM</p>
      <p className="font-barlow text-[14px] tracking-[2px] text-blue-300 mt-6">
        EST. TRAVEL TIME
      </p>
      <p className="font-bellefair text-[28px] text-white mt-3 mb-6">3 YEARS</p>
    </div>
  );
}
