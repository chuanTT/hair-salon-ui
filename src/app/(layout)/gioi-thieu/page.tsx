import { use } from "react";
import Section from "@/components/Section";
import { BASE_URL } from "@/services/axiosClient";
import { getSection, tableSection } from "@/services/sectionApi";
import { apiDataSection } from "@/types";

const Introduce = () => {
  const SectionData = use(
    getSection(`${BASE_URL}/${tableSection}?is_show=1&append=content`)
  );

  return (
    <div>
      {SectionData?.data?.data &&
        SectionData?.data?.data?.map(
          (section: apiDataSection, index: number) => {
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
          }
        )}
    </div>
  );
};

export default Introduce;
