import Images from "@/components/Images";
import ProductItem from "@/components/ProductItem";

const Details = () => {
  return (
    <>
      <div className="h-[500px] w-1/2">
        <Images
          w={"100%"}
          h={"100%"}
          alt={""}
          src={
            "https://theme.hstatic.net/200000695155/1001036967/14/slider_1.jpg?v=495"
          }
        />
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
