"use client";
import { Dispatch, SetStateAction, FC } from "react";
import { typeFilterBlog } from "@/types";
import { useDebounce } from "rooks";


interface FilterBlogProps {
  filter: typeFilterBlog;
  setFilter: Dispatch<SetStateAction<typeFilterBlog>>;
  setPage: Dispatch<SetStateAction<number>>;
}

const FilterBlog: FC<FilterBlogProps> = ({
  setFilter,
  setPage,
}) => {
  const setInputChangeDebounce = useDebounce(setFilter, 800);

  return (
    <div className="flex gap-3 flex-wrap [&>*]:w-72 max-sm:[&>*]:w-full max-sm:w-full">
      <input
        className="bg-gray-50 border outline-none border-gray-300 text-gray-900 text-sm rounded block p-2"
        type="text"
        placeholder="Tìm kiếm tin tức theo tiêu đề"
        onChange={(e) => {
          setInputChangeDebounce((prev) => ({ ...prev, title: e.target.value }));
          setPage(1);
        }}
      />
    </div>
  );
};

export default FilterBlog;
