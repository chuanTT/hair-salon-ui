"use client";
import Link from "next/link";
import { useEffect, useState } from "react";
import { CgMenuRight } from "react-icons/cg";

import { useSettings } from "../ProviderSettings";
import Images from "@/components/Images";
import { setStyleImageSettings } from "@/common/function";
import { LinkDefaultProps } from "@/types";
import { HeaderLink } from "@/config/configStatic";

const Header = () => {
  const { data } = useSettings();
  const [show, setShow] = useState(false);
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

  useEffect(() => {
    const resizeNav = () => {
      let widthWindow = window.innerWidth;
      if (show && widthWindow >= 1024) {
        setShow(false);
      }
    };
    resizeNav()
    window.addEventListener("resize", resizeNav);
    return () => {
      window.removeEventListener("resize", resizeNav);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <header className="sticky z-[999] bg-white shadow-lg h-[65px] top-0 left-0 w-full px-10 flex justify-center">
      <div className="container flex justify-between items-center h-full">
        <Link href={"/"}>
          <Images
            w={134}
            h={45}
            src={data?.logo?.src}
            alt="logo"
            innerPropsImages={settingsImg}
          />
        </Link>

        <CgMenuRight onClick={() => setShow(!show)} size={25} className="cursor-pointer lg:hidden" />
        <div className="flex items-center [&>*]:px-5 max-lg:hidden">
          {HeaderLink.map((header, index) => {
            return (
              <div key={index}>
                <Link href={header.path} className="font-medium">
                  {header.title}
                </Link>
              </div>
            );
          })}
        </div>
      </div>

      <div
        className={`fixed inset-0 bg-[#88888878] z-20 transition-all ${
          show ? "opacity-100 visible" : "opacity-0 invisible"
        }`}
        onClick={() => setShow(!show)}
      ></div>
      <div
        className={`fixed bottom-0 top-0 w-[35%] bg-white shadow-lg z-40 p-5 transition-all duration-150 ${
          show ? "left-0" : "-left-full"
        }`}
      >
        <div className="flex justify-center">
          <Link href={"/"}>
            <Images
              w={134}
              h={45}
              src={data?.logo?.src}
              alt="logo"
              innerPropsImages={settingsImg}
            />
          </Link>
        </div>

        <div className="flex space-y-5 flex-col mt-5">
          {HeaderLink.map((config: LinkDefaultProps, index: number) => {
            return (
              <div className="flex items-start" key={index}>
                <Link href={config.path} className={`font-medium`}>
                  {config.title}
                </Link>
              </div>
            );
          })}
        </div>
      </div>
    </header>
  );
};

export default Header;
