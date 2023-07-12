import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import { useSwiper } from "swiper/react";
const CustomNavigate = () => {
  const swiper = useSwiper();
  return (
    <>
      <div
        onClick={() => swiper.slidePrev()}
        className="absolute duration-150 select-none group-hover:opacity-100 group-hover:visible transition-all opacity-0 invisible left-2 top-1/2 -translate-y-1/2 z-10 !w-11 !h-11 bg-zinc-200 shadow-md hover:shadow-inner rounded-full flex justify-center items-center cursor-pointer"
      >
        <IoIosArrowBack size={22} />
      </div>

      <div
        onClick={() => swiper.slideNext()}
        className="absolute duration-150 select-none group-hover:opacity-100 group-hover:visible transition-all opacity-0 invisible right-2 top-1/2 -translate-y-1/2 z-10 !w-11 !h-11 bg-zinc-200 shadow-md hover:shadow-inner rounded-full flex justify-center items-center cursor-pointer"
      >
        <IoIosArrowForward size={22} />
      </div>
    </>
  );
};

export default CustomNavigate;
