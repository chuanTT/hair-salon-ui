"use client";
import { Dispatch, SetStateAction, FC } from "react";
import useFethingOptionApi from "@/hook/useFetchingOptionApi";
import { getCategory, tableCategory } from "@/services/product";
import Select from "react-select";
import { optionType, typeFilterProduct } from "@/types";
import { convertViToEn } from "@/common/function";
import { useDebounce } from "rooks";
const customStyles = {
  control: (base: any, state: any) => ({
    ...base,
    backgroundColor: "rgb(249 250 251 / 1)",
    // Overwrittes the different states of border
    borderColor: "rgb(226 232 240 / 1)",
    textAlign: "left",

    // Removes weird border around container
    boxShadow: state.isFocused ? null : null,
    height: "38px",
    "&:hover": {
      // Overwrittes the different states of border
      borderColor: "rgb(226 232 240 / 1)",

      backgroundColor: "rgb(248 250 252 / 1)",
    },
    "&:focus": {
      // Overwrittes the different states of border
      color: "#495057",
      backgroundColor: "#fff",
      borderColor: "#80bdff",
      outline: 0,
      boxShadow: "0 0 0 0.2rem rgb(0 123 255 / 25%)",
    },
  }),
  container: (base: any) => ({
    ...base,
    width: "100%",
  }),
  IndicatorsContainer2: (base: any) => ({
    ...base,
    borderColor: "transparent",
  }),
  indicatorSeparator: (base: any) => ({
    ...base,
    width: 0,
  }),
  menuPortal: (provided: any) => ({ ...provided, zIndex: 9999 }),
  menu: (provided: any) => ({ ...provided, zIndex: 9999 }),
};

interface FilterProductProps {
  filter: typeFilterProduct;
  setFilter: Dispatch<SetStateAction<typeFilterProduct>>;
  setPage: Dispatch<SetStateAction<number>>;
}

const FilterProduct: FC<FilterProductProps> = ({
  filter,
  setFilter,
  setPage,
}) => {
  const setInputChangeDebounce = useDebounce(setFilter, 800);
  const { option: options, setSearch } = useFethingOptionApi({
    nameTable: tableCategory,
    CallAPi: getCategory,
    isSearching: true,
    keySearching: "name",
    isOptionAll: true,
  });

  const setSearchDebounce = useDebounce(setSearch, 800);

  const customFilter = (option: optionType, inputValue: string) => {
    const labelConvert = convertViToEn(option?.label || "");
    const inputValueConvert = convertViToEn(inputValue).replace(
      /^\s+|\s+$/gm,
      ""
    );

    const serching = labelConvert.includes(inputValueConvert);

    const searching = options?.filter((item) => {
      const label = convertViToEn(item?.label || "");
      const inputVl = convertViToEn(inputValue);

      return label.includes(inputVl.replace(/^\s+|\s+$/gm, ""));
    });

    if (searching && searching?.length <= 0) {
      setSearchDebounce(
        (inputValueConvert && inputValueConvert.replace(/^\s+|\s+$/gm, "")) ||
          ""
      );
    }
    return serching;
  };

  return (
    <div className="flex gap-3 flex-wrap [&>*]:w-72 max-sm:[&>*]:w-full max-sm:w-full">
      <div>
        <Select
          styles={customStyles}
          options={options}
          value={options.filter((otp) => otp.value === filter.cate_id)}
          placeholder="Vui lòng chọn danh mục"
          onChange={(selected) => {
            if (selected?.value) {
              setFilter((prev) => ({
                ...prev,
                cate_id: selected.value as number,
              }));
            }
          }}
          filterOption={customFilter}
        />
      </div>

      <input
        className="bg-gray-50 border outline-none border-gray-300 text-gray-900 text-sm rounded block p-2"
        type="text"
        placeholder="Tìm kiếm sản phẩm theo tên"
        onChange={(e) => {
          setInputChangeDebounce((prev) => ({ prev, name: e.target.value }));
          setPage(1);
        }}
      />
    </div>
  );
};

export default FilterProduct;
