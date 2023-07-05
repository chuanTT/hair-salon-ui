import ProductItem from "@/components/ProductItem";

const Products = () => {
  return (
    <>
      <div className="flex justify-between mb-10">
        <h2 className="text-xl font-medium">Tất cả sản phẩm</h2>

        <div>
          <input
            className="form-input"
            type="text"
            placeholder="Tìm kiếm sản phẩm theo tên"
          />
        </div>
      </div>
      <div className="grid grid-cols-3 gap-5">
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
    </>
  );
};

export default Products;
