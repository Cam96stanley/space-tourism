import capsuleImg from "../../assets/technology/image-space-capsule-portrait.jpg";

export default function SpaceCapsule() {
  return (
    <div className="mt-[88px] flex flex-col items-center">
      <img src={capsuleImg} alt="launch vehicle" className="w-full h-[300px]" />
      <p className="font-bellefair text-[18px] text-white opacity-50 mt-14">
        THE TERMINOLOGY…
      </p>
      <p className="font-bellefair text-[24px] text-white mt-2">
        SPACE CAPSULE
      </p>
      <p className="text-blue-300 px-24 text-center font-barlow leading-[180%] text-[15px] mt-4 mb-12">
        A space capsule is an often-crewed spacecraft that uses a blunt-body
        reentry capsule to reenter the Earths atmosphere without wings. Our
        capsule is where youll spend your time during the flight. It includes a
        space gym, cinema, and plenty of other activities to keep you
        entertained.
      </p>
    </div>
  );
}
