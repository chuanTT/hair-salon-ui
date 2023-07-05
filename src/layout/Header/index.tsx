import Image from "next/image";
import Link from "next/link";

const Header = () => {
  return (
    <header className="sticky z-[999] bg-white shadow-lg h-[65px] top-0 left-0 w-full px-10 flex justify-center">
      <div className="container flex justify-between items-center h-full">
        <div>
          <Image
            width={134}
            height={45}
            src="https://theme.hstatic.net/200000695155/1001036967/14/logo.png?v=495"
            alt="logo"
          />
        </div>
        <div className="flex items-center [&>*]:px-5">
          <div>
            <Link href="/" className="font-medium">
              Home
            </Link>
          </div>
          <div>
            <Link href="/" className="font-medium">
              Giới thiệu
            </Link>
          </div>

          <div>
            <Link href="/" className="font-medium">
              Sản phẩm
            </Link>
          </div>

          <div>
            <Link href="/" className="font-medium">
              Tin tức
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
