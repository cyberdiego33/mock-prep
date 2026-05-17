import Image from "next/image";

const Navbar = function () {
  return (
    <nav className="border-y border-y-border px-4 py-6 flex justify-between items-center">
      <div>
        <Image src="/njfp-logo.png" alt="njfp-image" width={100} height={36} />
      </div>

      <div>
        <div className="font-bold py-1 px-2 border border-border">
          <span>IO</span>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
