import launchImg from "../../../public/technology/image-launch-vehicle-portrait.jpg";

export default function LauchVehicle() {
  return (
    <div className="mt-[88px] flex flex-col items-center">
      <img src={launchImg} alt="launch vehicle" className="w-full h-[300px]" />
      <p className="font-bellefair text-[18px] text-white opacity-50 mt-14">
        THE TERMINOLOGY…
      </p>
      <p className="font-bellefair text-[24px] text-white mt-2">
        LAUNCH VEHICLE
      </p>
      <p className="text-blue-300 px-24 text-center font-barlow leading-[180%] text-[15px] mt-4 mb-12">
        A launch vehicle or carrier rocket is a rocket-propelled vehicle used to
        carry a payload from Earths surface to space, usually to Earth orbit or
        beyond. Our WEB-X carrier rocket is the most powerful in operation.
        Standing 150 metres tall, its quite an awe-inspiring sight on the launch
        pad!
      </p>
    </div>
  );
}
