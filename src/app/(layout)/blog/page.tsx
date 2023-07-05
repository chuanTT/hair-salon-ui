import BlogItem from "@/components/BlogItem";

const Blog = () => {
  return (
    <div className="grid grid-cols-3 gap-5">
      {[1, 2, 3, 4, 5, 6, 6, 6].map((c, index) => (
        <BlogItem
          key={index}
          desc="Hè này, Lẩu Wang update menu khai vị mới: Buffet gà Hàn Quốc. Team mê gà thì chắc chắn không thể bỏ qua Buffet gà 9 món gọi thả ga này của Lẩu Wang được đâu! Gà vừa tươi, vừa mềm mọng juicy thì sao mà chịu nổi đây. "
          title="CHÀO SÂN HÈ NÀY – LẨU WANG UPDATE KHAI VỊ MỚI: KHAY GÀ 1 MÉT "
          src="https://lauwang.vn/wp-content/uploads/2023/06/1-1-1-1024x640.jpg"
        />
      ))}
    </div>
  );
};

export default Blog;
