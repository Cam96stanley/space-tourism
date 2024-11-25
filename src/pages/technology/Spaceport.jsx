import spaceportImg from "../../../public/technology/image-spaceport-portrait.jpg";

export default function Spaceport() {
  return (
    <div className="mt-[88px] flex flex-col items-center">
      <img
        src={spaceportImg}
        alt="launch vehicle"
        className="w-full h-[300px] object-fill"
      />
      <p className="font-bellefair text-[18px] text-white opacity-50 mt-14">
        THE TERMINOLOGY…
      </p>
      <p className="font-bellefair text-[24px] text-white mt-2">SPACEPORT</p>
      <p className="text-blue-300 px-24 text-center font-barlow leading-[180%] text-[15px] mt-4 mb-12">
        A spaceport or cosmodrome is a site for launching (or receiving)
        spacecraft, by analogy to the seaport for ships or airport for aircraft.
        Based in the famous Cape Canaveral, our spaceport is ideally situated to
        take advantage of the Earth’s rotation for launch.
      </p>
    </div>
  );
}
