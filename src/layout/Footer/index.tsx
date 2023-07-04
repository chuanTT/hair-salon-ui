import Image from "next/legacy/image";
import { IoLocation, IoChevronForwardOutline } from "react-icons/io5";

const Footer = () => {
  return (
    <footer className="bg-gray-800 pt-11 pb-3 px-4 flex justify-center">
      <div className="container">
        <div className="grid grid-cols-3 text-white items-end">
          <div>
            <div className="h-[45px] w-[216px] relative">
              <Image
                src="https://theme.hstatic.net/200000695155/1001036967/14/logo-footer.png?v=495"
                alt=""
                width={200}
                height={45}
              />
            </div>

            <h2 className="mt-5 text-xl font-medium">Thông tin công ty</h2>

            <div className="space-y-3 mt-4">
              <div className="flex items-center space-x-2">
                <IoLocation size={20} />
                <span className="text-sm">
                  Đông bích đông thọ yên phong bắc ninh
                </span>
              </div>

              <div className="flex items-center space-x-2">
                <IoLocation size={20} />
                <span className="text-sm"> 0984 972 165</span>
              </div>

              <div className="flex items-center space-x-2">
                <IoLocation size={20} />
                <span className="text-sm"> chuantt@gmail.com</span>
              </div>
            </div>
          </div>
          <div className="space-y-3">
            <div className="flex items-center space-x-2">
              <IoChevronForwardOutline size={20} />
              <span className="text-sm"> chuantt@gmail.com</span>
            </div>

            <div className="flex items-center space-x-2">
              <IoChevronForwardOutline size={20} />
              <span className="text-sm"> chuantt@gmail.com</span>
            </div>

            <div className="flex items-center space-x-2">
              <IoChevronForwardOutline size={20} />
              <span className="text-sm"> chuantt@gmail.com</span>
            </div>
          </div>
          <div>
            <iframe
              src="https://www.facebook.com/plugins/page.php?href=https://www.facebook.com/chuandinhcn&amp;tabs=timeline&amp;width=375&amp;height=130&amp;small_header=false&amp;adapt_container_width=true&amp;hide_cover=false&amp;show_facepile=true&amp;appId"
              width="375"
              height="130"
              scrolling="no"
              frameBorder={0}
              allowFullScreen={true}
              allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
            ></iframe>

            <div className="mt-3">
              <h3 className="text-center text-base">Kết nối với chúng tôi</h3>
              <div className="[&>*]:w-8 [&>*]:h-8 flex items-center gap-2 justify-center mt-2">
                <div className="bg-gray-200"></div>
                <div className="bg-gray-200"></div>
                <div className="bg-gray-200"></div>
                <div className="bg-gray-200"></div>
              </div>
            </div>
          </div>
        </div>
        <span className="block py-3 !pb-1 text-center border-t-[1px] border-white mt-8 text-sm text-white">
          Bản quyền © 2023 Bởi Chuantt
        </span>
      </div>
    </footer>
  );
};

export default Footer;
