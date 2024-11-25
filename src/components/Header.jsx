import { Link } from "react-router-dom";

export default function Header() {
  return (
    <div className="flex justify-between items-center p-6">
      <Link to="/">
        <img src="../../public/shared/logo.svg" />
      </Link>
      <button>
        <img src="../../public/shared/icon-hamburger.svg" />
      </button>
    </div>
  );
}
