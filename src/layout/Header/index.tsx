"use client";
import Link from "next/link";
import { useEffect, useState } from "react";
import { useSettings } from "../ProviderSettings";
import Images from "@/components/Images";
import { setStyleImageSettings } from "@/common/function";

const Header = () => {
  const { data } = useSettings();
  const [settingsImg, setSettingsImg] = useState({});

  useEffect(() => {
    if (data?.logo) {
      const settingsStyle = setStyleImageSettings({
        logo: data?.logo,
      });
      setSettingsImg(settingsStyle);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [data?.logo]);

  return (
    <header className="sticky z-[999] bg-white shadow-lg h-[65px] top-0 left-0 w-full px-10 flex justify-center">
      <div className="container flex justify-between items-center h-full">
        <Images
          w={134}
          h={45}
          src={data?.logo?.src}
          alt="logo"
          innerPropsImages={settingsImg}
        />
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
