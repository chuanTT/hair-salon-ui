import StaticImages from "@/assets/img";
import Images from "@/components/Images";
import config from "@/config";
import Link from "next/link";

export default function NotFound() {
  return (
    <div className="container mx-auto !py-5">
      <div className="misc-wrapper">
        <h2 className="mb-2 mx-2">Không Tìm Thấy Trang :(</h2>
        <p className="mb-4 mx-2">
          Oops! 😖 Không tìm thấy URL được yêu cầu trên máy chủ này.
        </p>
        <Link
          className="font-bold py-2 px-4 border !rounded bg-orange-600 hover:bg-orange-500 text-white hover:text-white flex justify-center items-center"
          href={config.router.home}
        >
          Đi đến trang chủ
        </Link>

        <div className="mt-3">
          <Images
            src={StaticImages.pageMiscErrorLight}
            alt="page-misc-error-light"
            w={500}
            h={375}
            classNameImg="img-fluid"
          />
        </div>
      </div>
    </div>
  );
}
