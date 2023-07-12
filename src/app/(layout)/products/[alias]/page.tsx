import Images from "@/components/Images";
import PreviewProducts from "@/components/PreviewProducts";
import ProductItem from "@/components/ProductItem";
import { BASE_URL } from "@/services/axiosClient";
import { apiDataProduct } from "@/types";
import { use } from "react";

const getProductAlias = async (alias: string) => {
  const res = await fetch(`${BASE_URL}/product/${alias}`, {
    next: {
      revalidate: 60,
    },
  });

  if (res?.ok) {
    return res.json();
  }
};

const Details = ({ params }: { params: { alias: string } }) => {
  const data: apiDataProduct = use(getProductAlias(params?.alias))

  return (
    <>
      <div className="flex gap-8">
        <div className="h-[600px] w-1/2">
          <PreviewProducts />
        </div>

        <div>
          <span className="text-sm text-grayText-300">Danh mục 1</span>
          <h3 className="text-3xl text-grayText mt-2">Áo bra tập gym yoga</h3>
          <span className="text-lg block mt-5">Thỏa thuận</span>
          <span className="block mt-4">
            Tình trạng: <span className="text-blue-600">Còn hàng</span>
          </span>
          <div className="mt-3">
            <h6>Mô tả ngắn</h6>
            <p>shshshashaywywywywywgwwggggggggggggggggggjjsssssss</p>
          </div>
        </div>
      </div>

      <div className="mt-14">
        <div className="border border-b-0 w-fit">
          <span className="block px-5 py-2 text-base font-medium text-white bg-gray-800">
            Mô tả chi tiết
          </span>
        </div>

        <div className="border p-4">
          sshahshsyaywyywwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwdggggggggggggggggggggggggg
        </div>
      </div>

      <div className="mt-14">
        <h4 className="text-xl font-medium">Sản phẩm liên quan</h4>

        <div className="grid grid-cols-3 gap-5 mt-5">
          <ProductItem
            desc="Hè này, Lẩu Wang update menu khai vị mới: Buffet gà Hàn Quốc. Team mê gà thì chắc chắn không thể bỏ qua Buffet gà 9 món gọi thả ga này của Lẩu Wang được đâu! Gà vừa tươi, vừa mềm mọng juicy thì sao mà chịu nổi đây. "
            title="CHÀO SÂN HÈ NÀY – LẨU WANG UPDATE KHAI VỊ MỚI: KHAY GÀ 1 MÉT "
            src="https://lauwang.vn/wp-content/uploads/2023/06/1-1-1-1024x640.jpg"
          />
          <ProductItem
            desc="Hè này, Lẩu Wang update menu khai vị mới: Buffet gà Hàn Quốc. Team mê gà thì chắc chắn không thể bỏ qua Buffet gà 9 món gọi thả ga này của Lẩu Wang được đâu! Gà vừa tươi, vừa mềm mọng juicy thì sao mà chịu nổi đây. "
            title="CHÀO SÂN HÈ NÀY – LẨU WANG UPDATE KHAI VỊ MỚI: KHAY GÀ 1 MÉT "
            src="https://lauwang.vn/wp-content/uploads/2023/06/1-1-1-1024x640.jpg"
          />

          <ProductItem
            desc="Hè này, Lẩu Wang update menu khai vị mới: Buffet gà Hàn Quốc. Team mê gà thì chắc chắn không thể bỏ qua Buffet gà 9 món gọi thả ga này của Lẩu Wang được đâu! Gà vừa tươi, vừa mềm mọng juicy thì sao mà chịu nổi đây. "
            title="CHÀO SÂN HÈ NÀY – LẨU WANG UPDATE KHAI VỊ MỚI: KHAY GÀ 1 MÉT "
            src="https://lauwang.vn/wp-content/uploads/2023/06/1-1-1-1024x640.jpg"
          />

          <ProductItem
            desc="Hè này, Lẩu Wang update menu khai vị mới: Buffet gà Hàn Quốc. Team mê gà thì chắc chắn không thể bỏ qua Buffet gà 9 món gọi thả ga này của Lẩu Wang được đâu! Gà vừa tươi, vừa mềm mọng juicy thì sao mà chịu nổi đây. "
            title="CHÀO SÂN HÈ NÀY – LẨU WANG UPDATE KHAI VỊ MỚI: KHAY GÀ 1 MÉT "
            src="https://lauwang.vn/wp-content/uploads/2023/06/1-1-1-1024x640.jpg"
          />

          <ProductItem
            desc="Hè này, Lẩu Wang update menu khai vị mới: Buffet gà Hàn Quốc. Team mê gà thì chắc chắn không thể bỏ qua Buffet gà 9 món gọi thả ga này của Lẩu Wang được đâu! Gà vừa tươi, vừa mềm mọng juicy thì sao mà chịu nổi đây. "
            title="CHÀO SÂN HÈ NÀY – LẨU WANG UPDATE KHAI VỊ MỚI: KHAY GÀ 1 MÉT "
            src="https://lauwang.vn/wp-content/uploads/2023/06/1-1-1-1024x640.jpg"
          />

          <ProductItem
            desc="Hè này, Lẩu Wang update menu khai vị mới: Buffet gà Hàn Quốc. Team mê gà thì chắc chắn không thể bỏ qua Buffet gà 9 món gọi thả ga này của Lẩu Wang được đâu! Gà vừa tươi, vừa mềm mọng juicy thì sao mà chịu nổi đây. "
            title="CHÀO SÂN HÈ NÀY – LẨU WANG UPDATE KHAI VỊ MỚI: KHAY GÀ 1 MÉT "
            src="https://lauwang.vn/wp-content/uploads/2023/06/1-1-1-1024x640.jpg"
          />
        </div>
      </div>
    </>
  );
};

export default Details;
