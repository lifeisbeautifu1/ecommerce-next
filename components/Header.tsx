import Image from "next/image";
import Link from "next/link";

const Header = () => {
  return (
    <header className="py-2 fixed top-0 w-full bg-white z-50 shadow">
      <div className="flex items-center justify-between max-w-7xl mx-auto px-8 xl:px-0">
        <Link href="/">
          <Image
            src={"https://i.ibb.co/McdzmYG/logo/removebg-preview-new.png"}
            width={70}
            height={70}
            alt="Logo"
          />
        </Link>
        <div className="flex items-center space-x-2.5 text-sm">
          <button className="button bg-blue-600 text-white border-transparent hover:border-blue-600 hover:bg-transparent hover:text-black">
            Log in
          </button>
          <button className="button bg-transparent border-blue-600 hover:bg-blue-600 hover:text-white hover:border-transparent">
            Sign up
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
