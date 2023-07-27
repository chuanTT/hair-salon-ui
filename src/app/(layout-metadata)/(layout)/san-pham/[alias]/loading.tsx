import LoadingProduct from "@/components/LoadingProduct";
import Shimmer from "@/components/Shimmer";

const Loading = () => {
  return (
    <>
      <div className="flex gap-8 lg:[&>*]:w-1/2 max-lg:flex-col">
        <div className="h-[600px] relative overflow-hidden">
          <Shimmer />
        </div>

        <div>
          <span className="text-sm text-grayText-300 min-h-[20px] relative w-[20%] overflow-hidden block">
            <Shimmer />
          </span>
          <h1 className="text-3xl text-grayText mt-2 min-h-[36px] relative overflow-hidden">
            <Shimmer />
          </h1>
          <span className="text-lg block mt-5"></span>
          <span className="block mt-4 relative overflow-hidden">
            Tình trạng: <span className="text-blue-600"></span>
            <Shimmer />
          </span>
          <div className="mt-3">
            <h6 className="relative overflow-hidden w-fit">
              Mô tả ngắn
              <Shimmer />
            </h6>
            <div className="relative overflow-hidden h-[100px] mt-3">
              <Shimmer />
            </div>
          </div>
        </div>
      </div>
      <div className="mt-14">
        <div className="border border-b-0 w-fit">
          <span className="block px-5 py-2 text-base font-medium text-white bg-gray-800">
            Mô tả chi tiết
          </span>
        </div>

        <div className="border p-4 content_wapper relative overflow-hidden h-[150px]">
          <Shimmer />
        </div>
      </div>

      <div className="mt-14">
        <h4 className="text-xl font-medium">Sản phẩm liên quan</h4>

        <LoadingProduct count={6} />
      </div>
    </>
  );
};

export default Loading;
