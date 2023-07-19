import { Dispatch, FC, ReactNode, SetStateAction } from "react";
import WapperLayout from "../WapperLayout";
import { paginationType } from "@/types";
import Pagination from "../Pagination";

interface WapperPaginationProps {
  children?: ReactNode;
  isFetched?: boolean;
  pagination?: paginationType;
  setPage?: Dispatch<SetStateAction<number>>;
}

const WapperPagination: FC<WapperPaginationProps> = ({
  children,
  isFetched,
  pagination,
  setPage,
}) => {
  return (
    <>
      <WapperLayout>{children}</WapperLayout>

      {isFetched && pagination && (
        <div className="mt-16 flex justify-center">
          <Pagination
            perPages={pagination.page}
            limitPages={pagination.limit}
            totalPages={pagination.total}
            onPagesChanges={(pages: number) => {
              setPage && setPage(pages);
            }}
          />
        </div>
      )}
    </>
  );
};

export default WapperPagination;
