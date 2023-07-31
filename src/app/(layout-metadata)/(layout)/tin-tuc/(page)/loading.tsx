import LoadingBlog from "@/components/LoadingBlog";

const Loading = () => {
  return (
    <>
      <div className="flex justify-between gap-5 flex-wrap">
        <h2 className="text-xl font-medium">Tất cả tin tức</h2>
      </div>
      <LoadingBlog />
    </>
  );
};

export default Loading;
