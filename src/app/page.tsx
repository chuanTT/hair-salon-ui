import BlogItem from "@/components/BlogItem";
import Images from "@/components/Images";
import Section from "@/components/Section";
import SectionHeader from "@/components/SectionHeader";

export default function Home() {
  return (
    <div className="mb-40">
      <div className="banner h-[500px] bg-slate-500 relative">
        <Images
          w={"100%"}
          h={"100%"}
          alt={""}
          src={
            "https://theme.hstatic.net/200000695155/1001036967/14/slider_1.jpg?v=495"
          }
        />
      </div>

      <Section
        classSection="mt-16"
        title="Câu chuyện thương hiệu"
        desc="Tinh hoa ẩm thực Việt"
        descSection="Lẩu Wang – Vua Buffet Lẩu là hệ thống nhà hàng buffet lẩu tại Hà Nội, rất được khách hàng tin tưởng và đánh giá cao về chất lượng. Với giá buffet chỉ từ 139.000 đồng, khách hàng sẽ được thưởng thức tới gần 50 món ăn đa dạng từ ba chỉ bò Mỹ, hải sản tổng hợp, khai vị kích thích vị giác với gà chiên cay ngọt Hàn Quốc, đảo sườn cay Thái Lan, bò xào lúc lắc,… cùng vô vàn những món ăn, thức uống hấp dẫn khác."
      />

      <Section
        classSection="mt-16"
        title="Câu chuyện thương hiệu"
        desc="Tinh hoa ẩm thực Việt"
        isReverse
        descSection="Ẩm thực chính là tấm gương phản chiếu văn hóa của mỗi quốc gia. Hiểu được điều này, Lẩu Wang – Vua Buffet Lẩu luôn kế thừa và giữ gìn cốt lõi vị lẩu bản địa đồng thời điều chỉnh hương vị để phù hợp với người Việt. Lẩu Wang đã tạo ra 5 hương vị lẩu vô cùng độc đáo, trọn vị."
      />

      <div className="mt-16">
        <SectionHeader title="Tin tức" desc="Thông tin cập nhật" />

        <div className="mt-16 flex gap-5 [&>*]:w-1/3">
          <BlogItem
            desc="Hè này, Lẩu Wang update menu khai vị mới: Buffet gà Hàn Quốc. Team mê gà thì chắc chắn không thể bỏ qua Buffet gà 9 món gọi thả ga này của Lẩu Wang được đâu! Gà vừa tươi, vừa mềm mọng juicy thì sao mà chịu nổi đây. "
            title="CHÀO SÂN HÈ NÀY – LẨU WANG UPDATE KHAI VỊ MỚI: KHAY GÀ 1 MÉT "
            src="https://lauwang.vn/wp-content/uploads/2023/06/1-1-1-1024x640.jpg"
          />
          <BlogItem
            desc="Hè này, Lẩu Wang update menu khai vị mới: Buffet gà Hàn Quốc. Team mê gà thì chắc chắn không thể bỏ qua Buffet gà 9 món gọi thả ga này của Lẩu Wang được đâu! Gà vừa tươi, vừa mềm mọng juicy thì sao mà chịu nổi đây. "
            title="Tháng 5 rực rỡ Lẩu Wang ưu đãi hết cỡ – Tha hồ liên hoan!"
            src="https://lauwang.vn/wp-content/uploads/2023/05/4551c891c0011f5f4610.jpg"
          />
          <BlogItem
            desc="Hè này, Lẩu Wang update menu khai vị mới: Buffet gà Hàn Quốc. Team mê gà thì chắc chắn không thể bỏ qua Buffet gà 9 món gọi thả ga này của Lẩu Wang được đâu! Gà vừa tươi, vừa mềm mọng juicy thì sao mà chịu nổi đây. "
            title="CHÀO SÂN HÈ NÀY – LẨU WANG UPDATE KHAI VỊ MỚI: KHAY GÀ 1 MÉT "
            src="https://lauwang.vn/wp-content/uploads/2023/06/1-1-1-1024x640.jpg"
          />
        </div>
      </div>
    </div>
  );
}
