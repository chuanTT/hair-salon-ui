import { use } from "react";
import Section from "@/components/Section";
import { FetchSection } from "@/services/sectionApi";
import { apiDataSection } from "@/types";
import StaticImages from "@/assets/img";
import Images from "@/components/Images";

const Introduce = () => {
  const SectionData = use(FetchSection());

  console.log(SectionData?.data);

  return (
    <div>
      {SectionData?.data &&
        SectionData?.data?.map((section: apiDataSection, index: number) => {
          return (
            <Section
              key={index}
              isReverse={!(index % 2 === 0)}
              classSection="mt-16"
              title={section?.title}
              desc={section?.sub_title}
              descSection={section?.content}
              thumb={section?.thumb}
            />
          );
        })}

      {(!SectionData?.data ||
        (SectionData?.data && SectionData?.data?.length <= 0)) && (
        <div className="text-center h-[400px]">
          <div className="flex justify-center mb-3">
            <Images w={300} h={250} src={StaticImages.noResult} />
          </div>

          <span className="text-base font-medium text-grayText">
            Không tìm thấy dữ liệu...
          </span>
        </div>
      )}
    </div>
  );
};

export default Introduce;
