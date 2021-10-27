import Image from "next/image";

const Header = () => {
  return (
    <div>
      <div className="flex justify-between bg-red max-w-6xl">
        {/* Left */}
        <div className="relative hidden lg:inline-grid w-24 h-10 cursor-pointer">
          <Image src="/Logo.png" layout="fill" objectFit="contain" />
        </div>
        <div className="relative w-10 h-10 lg:hidden flex-shrink-0 cursor-pointer">
          <Image src="/C.png" layout="fill" objectFit="contain" />
        </div>
        {/* Middle */}

        {/* Right */}
      </div>
    </div>
  );
};

export default Header;
