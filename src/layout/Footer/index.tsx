"use client";
import { useEffect, useState } from "react";
import Link from "next/link";
import { IoLocation, IoChevronForwardOutline } from "react-icons/io5";
import { BiSolidPhoneCall } from "react-icons/bi";
import { MdMarkEmailRead } from "react-icons/md";

import { useSettings } from "../ProviderSettings";
import Images from "@/components/Images";
import { setStyleImageSettings } from "@/common/function";

const Footer = () => {
  const { data } = useSettings();
  const date = new Date();
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
    <footer className="bg-gray-800 pt-11 pb-3 px-4 flex justify-center">
      <div className="container">
        <div className="grid grid-cols-3 text-white items-end">
          <div>
            <div className="h-[45px] w-[216px] relative">
              <Images
                innerPropsImages={settingsImg}
                w={"100%"}
                h={"100%"}
                src={data?.logo?.src}
                alt={data?.company?.company_name}
              />
            </div>

            <h2 className="mt-5 text-xl font-medium">Thông tin công ty</h2>

            <div className="space-y-3 mt-4">
              <div className="flex items-center space-x-2">
                <IoLocation size={20} />
                <span className="text-sm">
                  <Link
                    rel="noreferrer"
                    target="_blank"
                    href={data?.company?.address?.link || ""}
                  >
                    {data?.company?.address?.text}
                  </Link>
                </span>
              </div>

              <div className="flex items-center space-x-2">
                <BiSolidPhoneCall size={20} />
                <span className="text-sm">
                  <a rel="nofollow" href={`tel:${data?.company?.phone}`}>
                    {data?.company?.phone}
                  </a>
                </span>
              </div>

              <div className="flex items-center space-x-2">
                <MdMarkEmailRead size={20} />
                <span className="text-sm">
                  <a rel="nofollow" href={`mailto:${data?.company?.email}`}>
                    {data?.company?.email}
                  </a>
                </span>
              </div>
            </div>
          </div>
          <div className="space-y-3">
            <div className="flex items-center space-x-2">
              <IoChevronForwardOutline size={20} />
              <span className="text-sm">
                <Link href={"/"}>Giới thiệu</Link>
              </span>
            </div>

            <div className="flex items-center space-x-2">
              <IoChevronForwardOutline size={20} />
              <span className="text-sm">
                <Link href={"/"}>Sản phẩm</Link>
              </span>
            </div>

            <div className="flex items-center space-x-2">
              <IoChevronForwardOutline size={20} />
              <span className="text-sm">
                <Link href={"/"}>Tin tức</Link>
              </span>
            </div>
          </div>
          <div className="flex items-center flex-col">
            {!!data?.company?.link_page?.is_show_page && (
              <iframe
                src={`https://www.facebook.com/plugins/page.php?href=${data?.company?.link_page?.url}&amp;tabs=timeline&amp;width=375&amp;height=130&amp;small_header=false&amp;adapt_container_width=true&amp;hide_cover=false&amp;show_facepile=true&amp;appId`}
                width="375"
                height="130"
                allowFullScreen={true}
                allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
              ></iframe>
            )}

            {data?.socials && data?.socials?.length > 0 && (
              <div className="mt-3">
                <h3 className="text-center text-base">Kết nối với chúng tôi</h3>
                <div className="[&>*]:w-8 [&>*]:h-8 flex items-center gap-2 justify-center flex-wrap mt-2">
                  {data?.socials?.map((social, index) => {
                    return (
                      <div
                        key={index}
                        className="overflow-hidden"
                        title={social?.name}
                      >
                        <a
                          rel="noreferrer"
                          href={social?.url ?? ""}
                          target="_blank"
                        >
                          <Images
                            w={32}
                            h={32}
                            src={social?.thumb ?? ""}
                            alt={social?.name}
                          />
                        </a>
                      </div>
                    );
                  })}
                </div>
              </div>
            )}
          </div>
        </div>
        <span className="block py-3 !pb-1 text-center border-t-[1px] border-white mt-8 text-sm text-white">
          Bản quyền © {date.getFullYear()} Bởi{" "}
          {data?.company?.company_name ?? "chuantt"}
        </span>
      </div>
    </footer>
  );
};

export default Footer;
