import { FC } from "react";
import WapperLayout from "../WapperLayout";
import ProductItem from "../ProductItem";

interface LoadingProductProps {
  count?: number;
}

const LoadingProduct: FC<LoadingProductProps> = ({ count = 30 }) => {
  return (
    <WapperLayout>
      {Array(count)
        .fill("")
        .map((_, index) => {
          return <ProductItem key={index} isShimmer />;
        })}
    </WapperLayout>
  );
};

export default LoadingProduct;
