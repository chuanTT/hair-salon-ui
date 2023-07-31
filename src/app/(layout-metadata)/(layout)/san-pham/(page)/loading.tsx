import LoadingProduct from "@/components/LoadingProduct";

const Loading = () => {
  return (
    <>
      <div className="flex justify-between gap-5 flex-wrap">
        <h2 className="text-xl font-medium">Tất cả sản phẩm</h2>
      </div>
      <LoadingProduct />
    </>
  );
};

export default Loading;
