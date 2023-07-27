import LatestNewsItem from "@/components/LatestNewsItem";
import LoadingBlog from "@/components/LoadingBlog";
import Shimmer from "@/components/Shimmer";

const Loading = () => {
  return (
    <>
      <div className="flex gap-5 max-lg:flex-col max-lg:[&>*]:!w-full max-lg:!gap-10">
        <div className="w-3/4">
          <h1 className="text-2xl relative overflow-hidden h-[32px]">
            <Shimmer />
          </h1>

          <span className="mt-2 block text-sm relative overflow-hidden h-[20px] w-[20]">
            <Shimmer />
          </span>

          <p className="mt-3 relative overflow-hidden h-[100px]">
            <Shimmer />
          </p>

          <div className="mt-3 h-[500px] relative overflow-hidden">
            <Shimmer />
          </div>

          <div className="mt-4 content_wapper relative overflow-hidden h-[400px]">
            <Shimmer />
          </div>
        </div>
        <div className="w-3/12">
          <div>
            <h4 className="text-xl block mb-3">Tin mới nhất</h4>
            <div className="border p-4 space-y-4">
              {Array(5)
                .fill("")
                ?.map((_, index: number) => {
                  return <LatestNewsItem key={index} isShimmer={false} />;
                })}
            </div>
          </div>
        </div>
      </div>

      <div className="mt-32">
        <h6 className="text-xl text-grayText mb-5">Tin tức liên quan</h6>
        <LoadingBlog count={6} />
      </div>
    </>
  );
};

export default Loading;
