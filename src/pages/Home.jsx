import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div className="flex flex-col justify-center items-center min-h-screen ">
      <p className="font-bellefair text-blue-300">SO YOU WANT TO TRAVEL TO</p>
      <p className="font-bellefair text-[80px]">SPACE</p>
      <p className="font-barlow text-[15px] text-blue-300  leading-[180%] px-20 text-center">
        Let’s face it; if you want to go to space, you might as well genuinely
        go to outer space and not hover kind of on the edge of it. Well sit
        back, and relax because we’ll give you a truly out of this world
        experience!
      </p>
      <Link className="flex items-center justify-center rounded-full bg-white text-black my-[120px] w-[114px] h-[114px] transition-all duration-700 ease-in-out hover:shadow-linkHover text-blue-900 font-bellefair text-[18px]">
        <span>EXPLORE</span>
      </Link>
    </div>
  );
}
