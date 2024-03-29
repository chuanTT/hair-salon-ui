"use client";
import Link from "next/link";
import { useEffect, useState } from "react";
import { CgMenuRight } from "react-icons/cg";

import { useSettings } from "../ProviderSettings";
import Images from "@/components/Images";
import { setStyleImageSettings } from "@/common/function";
import { LinkDefaultProps } from "@/types";
import { HeaderLink } from "@/config/configStatic";
import { usePathname } from "next/navigation";
import config from "@/config";
import Portal from "@/components/Portal";

const Header = () => {
  const { data } = useSettings();
  const [show, setShow] = useState(false);
  const [settingsImg, setSettingsImg] = useState({});
  const pathName = usePathname();

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
    resizeNav();
    window.addEventListener("resize", resizeNav);
    return () => {
      window.removeEventListener("resize", resizeNav);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [show]);

  return (
    <header className="sticky z-[99] bg-white shadow-lg h-[65px] max-sm:px-0 top-0 left-0 w-full px-10 flex justify-center">
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

        <CgMenuRight
          onClick={() => setShow(!show)}
          size={25}
          className="cursor-pointer lg:hidden"
        />
        <div className="flex items-center [&>*]:px-5 max-lg:hidden">
          {HeaderLink.map((header, index) => {
            const lengthPath = header.path.length;
            const path =
              pathName.length > lengthPath && config.router.home !== header.path
                ? pathName.substring(0, lengthPath)
                : pathName;

            return (
              <div key={index}>
                <Link
                  href={header.path}
                  className={`font-medium ${
                    path === header.path ? "active" : ""
                  }`}
                >
                  {header.title}
                </Link>
              </div>
            );
          })}
        </div>
      </div>

      <Portal>
        <div className="relative z-[100]">
          <div
            className={`fixed inset-0 bg-[#88888878] z-20 transition-all ${
              show ? "opacity-100 visible" : "opacity-0 invisible"
            }`}
            onClick={() => setShow(!show)}
          ></div>
          <div
            className={`fixed bottom-0 top-0 w-[35%] flex flex-col max-sm:w-[50%] max-375:w-[80%] bg-white shadow-lg z-40 p-5 transition-all duration-150 ${
              show ? "left-0" : "-left-full"
            }`}
          >
            <div className="flex justify-center">
              <Link href={"/"} onClick={() => setShow(!show)}>
                <Images
                  w={134}
                  h={45}
                  src={data?.logo?.src}
                  alt="logo"
                  innerPropsImages={settingsImg}
                />
              </Link>
            </div>

            <div className="overflow-y-auto overflow-x-hidden mt-5">
              <div className="flex space-y-5 flex-col">
                {HeaderLink.map((header: LinkDefaultProps, index: number) => {
                  const lengthPath = header.path.length;
                  const path =
                    pathName.length > lengthPath &&
                    config.router.home !== header.path
                      ? pathName.substring(0, lengthPath)
                      : pathName;

                  return (
                    <div className="flex items-start" key={index}>
                      <Link
                        href={header.path}
                        className={`font-medium ${
                          path === header.path ? "active" : ""
                        }`}
                        onClick={() => setShow(!show)}
                      >
                        {header.title}
                      </Link>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </Portal>
    </header>
  );
};

export default Header;
