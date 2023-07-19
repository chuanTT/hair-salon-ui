import { FC, HTMLAttributes } from "react";
import SectionHeader, { SectionHeaderProps } from "../SectionHeader";
import Images from "../Images";

interface SectionProps extends SectionHeaderProps {
  classSection?: HTMLAttributes<HTMLDivElement>["className"];
  descSection?: string;
  isReverse?: boolean;
  thumb?: string;
}

const Section: FC<SectionProps> = ({
  title,
  desc,
  classSection,
  descSection,
  isReverse = false,
  thumb,
}) => {
  return (
    <div className={classSection}>
      <SectionHeader title={title} desc={desc} />

      <div
        className={`flex ${
          isReverse
            ? "sm:flex-row-reverse max-sm:flex-col-reverse"
            : "max-sm:flex-col"
        } mt-20 gap-5 max-sm:mt-10`}
      >
        <div
          className="w-1/2 max-sm:w-full content_wapper"
          dangerouslySetInnerHTML={{ __html: descSection ?? "" }}
        />
        <div className="w-1/2 max-sm:w-full">
          <Images w={"100%"} h={"500px"} alt={title ?? ""} src={thumb} />
        </div>
      </div>
    </div>
  );
};

export default Section;
